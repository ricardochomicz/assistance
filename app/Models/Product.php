<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'slug', 'price', 'description', 'image', 'active', 'category_id'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function setNameAttribute($value)
    {
        return $this->attributes['name'] = mb_strtoupper($value);
    }

    // public function setPriceAttribute($value)
    // {
    //     return $this->attributes['price'] = str_replace(',', '.', str_replace('.', '', $value));
    // }


}
