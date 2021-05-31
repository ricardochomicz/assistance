<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description'];

     /**
     *  Get Permissions
     */
    public function permissions()
    {
        return $this->belongsToMany(Permission::class);
    }

    /**
     * Permission not linked with this profile
     */

    public function permissionsAvailable()
    {
        $permissions = Permission::whereNotIn('id', function ($query) {
            $query->select('permission_id');
            $query->from('permission_profile');
            $query->whereRaw("permission_profile.profile_id={$this->id}");
        })
        
            ->paginate();

        return $permissions;
    }

    public function setNameAttribute($value)
    {
        return $this->attributes['name'] = mb_strtoupper($value);
    }


}
