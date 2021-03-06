<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'price' => $this->price,
            'description' => $this->description,
            'image' => $this->image,
            'slug' => $this->slug,
            'active' => $this->active,
            'category' => new CategoryResource($this->category),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
