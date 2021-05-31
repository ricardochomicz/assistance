<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'slug', 'price', 'description', 'image', 'active'];

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    public function setNameAttribute($value)
    {
        return $this->attributes['name'] = mb_strtoupper($value);
    }


}
