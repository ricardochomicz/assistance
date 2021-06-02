<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::group(['namespace' => 'App\Http\Controllers\Api', 'as' => 'api.'], function () {
    Route::name('register')->post('register', 'AuthController@register');
    Route::name('login')->post('login', 'AuthController@login');      
    Route::middleware('auth:sanctum')->group(function(){
        Route::name('me')->get('me', 'AuthController@me');
        Route::name('logout')->post('logout', 'AuthController@logout');
        Route::name('users-search')->get('users/search', 'UserController@search');
        Route::resource('users', 'UserController', ['except' => ['create', 'edit']]);    
        Route::resource('companies', 'CompanyController', ['except' => ['create', 'edit']]);
        Route::name('profiles-search')->get('profiles/search', 'ProfileController@search');
        Route::resource('profiles', 'ProfileController', ['except' => ['create', 'edit']]);
        Route::name('permissions-search')->get('permissions/search', 'PermissionController@search');
        Route::resource('permissions', 'PermissionController', ['except' => ['create', 'edit']]);
        Route::name('roles-search')->get('roles/search', 'RoleController@search');
        Route::resource('roles', 'RoleController', ['except' => ['create', 'edit']]);
        Route::name('categories-search')->get('categories/search', 'CategoryController@search');
        Route::get('categories/getCategories', 'CategoryController@getCategoriesFromSelect2');
        Route::resource('categories', 'CategoryController', ['except' => ['create', 'edit']]);
        Route::name('products-search')->get('products/search', 'ProductController@search');
        Route::resource('products', 'ProductController', ['except' => ['create', 'edit']]);
        Route::name('clients-search')->get('clients/search', 'ClientController@search');
        Route::resource('clients', 'ClientController', ['except' => ['create', 'edit']]);    

        /**
         * Route Permission x Role
         */
        Route::name('roles.permission.detach')->get('roles/{id}/permissions/{idPermission}/detach', 'PermissionRoleController@detachPermissionRole');
        Route::name('roles.permissions.attach')->post('roles/{id}/permissions', 'PermissionRoleController@attachPermissionsRole');
        Route::name('roles.permissions.available')->any('roles/{id}/permissions/available', 'PermissionRoleController@permissionsAvailable');
        Route::name('roles.permissions')->get('roles/{id}/permissions', 'PermissionRoleController@permissions');
        Route::name('permissions.roles')->get('permissions/{id}/roles', 'PermissionRoleController@roles');

        /**
         * Route Role x User
         */

        Route::name('users.roles.detach')->get('users/{id}/roles/{idRole}/detach', 'RoleUserController@detachRoleUser');
        Route::name('users.roles.attach')->post('users/{id}/roles', 'RoleUserController@attachRolesUser');
        Route::name('users.roles.availabe')->any('users/{id}/roles/available', 'RoleUserController@rolesAvailable');
        Route::name('users.roles')->get('users/{id}/roles', 'RoleUserController@roles');
        Route::name('roles.users')->get('roles/{id}/users', 'RoleUserController@users');

        /**
         * Route Permission x Profile
         */
        Route::name('profiles-permission-detach')->get('profiles/{id}/permissions/{idPermission}/detach', 'PermissionProfileController@detachPermissionProfile');
        Route::name('profiles-permissions-attach')->post('profiles/{id}/permissions', 'PermissionProfileController@attachPermissionsProfile');
        Route::name('profiles-permissions-available')->any('profiles/{id}/permissions/available', 'PermissionProfileController@permissionsAvailable');
        Route::name('profiles-permissions')->get('profiles/{id}/permissions', 'PermissionProfileController@permissions');
        Route::name('permissions-profiles')->get('permissions/{id}/profiles', 'PermissionProfileController@profiles');
     
    });   
});


