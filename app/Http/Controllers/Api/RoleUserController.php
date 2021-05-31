<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;

class RoleUserController extends Controller
{
    protected $user, $role;

    public function __construct(User $user, Role $role) {
        $this->user = $user;
        $this->role = $role;
    }
    public function roles($idUser)
    {
        if(!$user = $this->user->find($idUser))
        {
            return redirect()->back();
        }

        $roles = $user->roles()->paginate();

        return response()->json($roles);
    }

    public function users($idRole)
    {
        if (!$role = $this->role->find($idRole)) {
            return redirect()->back();
        }
        $users = $role->users()->paginate();

        return response()->json($users);
    }

    

    public function rolesAvailable(Request $request, $idUser)
    {
        if (!$user = $this->user->find($idUser)) {
            return redirect()->back();
        }

        $filters = $request->except('_token');
       

        $roles = $user->rolesAvailable();
        return response()->json($roles);
    }

    public function attachRolesUser(Request $request, $idUser)
    {
        if (!$user = $this->user->find($idUser)) {
            return redirect()->back();
        }

        $user->roles()->attach($request->all());

        return response()->json($user);
    }

    public function detachRoleUser($idUser, $idRole)
    {
        $user = $this->user->find($idUser);
        $role = $this->role->find($idRole);

        $role->users()->detach($user);

        return response()->json($user->id);
        
    }

}
