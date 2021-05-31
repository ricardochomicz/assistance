<?php

namespace App\Observers;

use App\Models\Product;
use Illuminate\Support\Str;

class ProductObserver
{
    /**
     * Handle the Product "creating" event.
     *
     * @param  \App\Models\Product  $product
     * @return void
     */
    
    public function creating(Product $product)
    {
        $product->slug = Str::kebab($product->name);
    }

    /**
     * Handle the Product "updating" event.
     *
     * @param  \App\Models\Product  $product
     * @return void
     */

    public function updating(Product $product)
    {
        $product->slug = Str::kebab($product->name);
    }
}
