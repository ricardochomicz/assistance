<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'cnpj' => ['required', 'max:14', 'unique:companies'],
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'string', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:6', 'confirmed']
        ]);

        $company = Company::create([
            'cnpj' => $request->cnpj,
            'name' => $request->company,
            'email' => $request->email,
            'subscription' => now(),
            'expires_at' => now()->addDays(7)
        ]);

        $user = $company->users()->create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);

        $token = $user->createToken($request->email)->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response()->json($response, 201);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $user = User::where('email', $request->email)->first();

        if(!$user || !Hash::check($request->password, $user->password)){
            throw \Illuminate\Validation\ValidationException::withMessages([
                'email' => ['As credenciais fornecidas estão incorretas']
            ]);
        }

        $token = $user->createToken($request->email)->plainTextToken;

        $response = ['user' => $user, 'token' => $token];

        return response()->json($response, 200);
    }

    public function me()
    {
        $user = auth()->user();
        return response()->json($user, 200);
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();
        return response()->json([], 204);
    }
}
