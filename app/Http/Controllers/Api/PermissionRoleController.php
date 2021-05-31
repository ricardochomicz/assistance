<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Permission;
use App\Models\Role;
use Illuminate\Http\Request;

class PermissionRoleController extends Controller
{
    protected $permission, $role;

    public function __construct(Permission $permission, Role $role) {
        $this->permission = $permission;
        $this->role = $role;
    }
    public function permissions($idRole)
    {
        if (!$role = $this->role->find($idRole)) {
            return redirect()->back();
        }
        $permissions = $role->permissions()->paginate();

        return response()->json($permissions);
    }

    public function roles($idPermission)
    {
        if(!$permission = $this->permission->find($idPermission))
        {
            return redirect()->back();
        }
        $roles = $permission->roles()->paginate();

        return response()->json($roles);
    }

    public function permissionsAvailable(Request $request, $idRole)
    {
        if (!$role = $this->role->find($idRole)) {
            return redirect()->back();
        }

        $filters = $request->except('_token');
       

        $permissions = $role->permissionsAvailable();
        return response()->json($permissions);
    }

    public function attachPermissionsRole(Request $request, $idRole)
    {
        if (!$role = $this->role->find($idRole)) {
            return redirect()->back();
        }

        $role->permissions()->attach($request->all());

        return response()->json($role->id);
    }

    public function detachPermissionRole($idRole, $idPermission)
    {
        $role = $this->role->find($idRole);
        $permission = $this->permission->find($idPermission);
        if (!$role || !$permission) {
            return redirect()->back();
        }

        $role->permissions()->detach($permission);

        return response()->json($role->id);
    }

}
