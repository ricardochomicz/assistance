<?php

namespace App\Observers;

use App\Models\Category;
use Illuminate\Support\Str;

class CategoryObserver
{
    /**
     * Handle the Category "creating" event.
     *
     * @param  \App\Models\Category  $company
     * @return void
     */
    
    public function creating(Category $category)
    {
        $category->slug = Str::kebab($category->name);
    }

    /**
     * Handle the Category "updating" event.
     *
     * @param  \App\Models\Category  $company
     * @return void
     */

    public function updating(Category $category)
    {
        $category->slug = Str::kebab($category->name);
    }
}
