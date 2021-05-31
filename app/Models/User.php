<?php

namespace App\Models;

use App\Models\Traits\UserACLTrait;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, UserACLTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'phone',
        'active',
        'company_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * User x Company
     */
    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function setNameAttribute($value)
    {
        return $this->attributes['name'] = mb_convert_case($value, MB_CASE_TITLE, 'UTF-8');
    }

    public function setEmailAttribute($value)
    {
        return $this->attributes['email'] = mb_strtolower($value);
    }

    public function setPhoneAttribute($value)
    {
        return $this->attributes['phone'] = preg_replace("/[^0-9]/", "", $value);
    }

    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }

    public function rolesAvailable()
    {
        $users = Role::whereNotIn('roles.id', function ($query) {
            $query->select('role_user.role_id');
            $query->from('role_user');
            $query->whereRaw("role_user.user_id={$this->id}");
        })
            ->paginate();

        return $users;
    }
}
