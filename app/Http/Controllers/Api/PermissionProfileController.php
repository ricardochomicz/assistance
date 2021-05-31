<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Permission;
use App\Models\Profile;
use Illuminate\Http\Request;

class PermissionProfileController extends Controller
{
    protected $permission, $profile;

    public function __construct(Permission $permission, Profile $profile) {
        $this->permission = $permission;
        $this->profile = $profile;
    }

    public function permissions($idProfile)
    {
        if (!$profile = $this->profile->find($idProfile)) {
            return redirect()->back();
        }
        $permissions = $profile->permissions()->paginate();

        return response()->json($permissions);
    }

    public function profiles($idPermission)
    {
        if(!$permission = $this->permission->find($idPermission))
        {
            return redirect()->back();
        }
        $profiles = $permission->profiles()->paginate();

        return response()->json($profiles);
    }


    public function permissionsAvailable(Request $request, $idProfile)
    {
        if (!$profile = $this->profile->find($idProfile)) {
            return redirect()->back();
        }       

        $permissions = $profile->permissionsAvailable();
        return response()->json($permissions);
    }

    public function attachPermissionsProfile(Request $request, $idProfile)
    {
        if (!$profile = $this->profile->find($idProfile)) {
            return redirect()->back();
        }

        $profile->permissions()->attach($request->all());

        return response()->json($profile->id);
    }

    public function detachPermissionProfile($idProfile, $idPermission)
    {
        $profile = $this->profile->find($idProfile);
        $permission = $this->permission->find($idPermission);
        if (!$profile || !$permission) {
            return redirect()->back();
        }

        $profile->permissions()->detach($permission);

        return response()->json($profile->id);
    }


}
