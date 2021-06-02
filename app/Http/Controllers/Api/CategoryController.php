<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryRequest;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{

    protected $repository;

    public function __construct(Category $category)
    {
        $this->repository = $category;
        $this->middleware('can:Categorias');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = $this->repository->with('products')->orderBy('name', 'asc')->paginate();
        return response()->json($categories);
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CategoryRequest $request)
    {
        $category = $this->repository->create($request->all());
        return new CategoryResource($category);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        if (!$category = $this->repository->find($id)) {
            return redirect()->back();
        }
        return new CategoryResource($category);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(CategoryRequest $request, $id)
    {
        if (!$category = $this->repository->find($id)) {
            return redirect()->back();
        }
        $category->update($request->all());
        return new CategoryResource($category);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if (!$category = $this->repository->find($id)) {
            return redirect()->back();
        }
        $category->delete();
        return response()->json([], 204);
    }

    public function search(Request $request)
    {
        $key = $request->get('q');
        $user = $this->repository->where('name', 'LIKE', "%{$key}%")
            ->get();

        return response()->json($user);
    }

    public function getCategoriesFromSelect2()
    {
        $category = Category::select('id', 'name as text')->get();
        return response()->json($category);
    }

}
