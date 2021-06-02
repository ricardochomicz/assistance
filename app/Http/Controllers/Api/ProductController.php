<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    protected $repository;

    public function __construct(Product $product)
    {
        $this->repository = $product;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = $this->repository->with('category')->orderBy('active', 'desc')->orderBy('name', 'asc')->paginate();
        return ProductResource::collection($products);
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProductRequest $request)
    {
        $data = $request->all();
        $data['price'] = str_replace(',','.', str_replace('.','', $request->price));
        $company = auth()->user()->company;
        if ($request->hasFile('image') && $request->image->isValid()) {
            $data['image'] = $request->image->store("products/{$company->uuid}/images", "public");
        }
        $product = $this->repository->create($data);
        return new ProductResource($product);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        return new ProductResource($product);
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ProductRequest $request, $id)
    {
        if (!$product = $this->repository->find($id)) {
            return redirect()->back();
        }
        $data = $request->all();

        $company = auth()->user()->company;
        if ($request->hasFile('image') && $request->image->isValid()) {
            if (Storage::exists($product->image)) {
                Storage::delete($product->image);
            }

            $data['image'] = $request->image->store("products/{$company->uuid}/images", "public");
        }
        $product->update($data);
        return new ProductResource($product);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = $this->repository->find($id);
        $product->delete();
        return response()->json([], 204);
    }

    public function search(Request $request)
    {
        $key = $request->get('q');
        $product = Product::where('name', 'LIKE', "%{$key}%")
            ->get();

        return response()->json($product);
    }
}
