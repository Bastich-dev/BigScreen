<?php

namespace App\Http\Controllers\Api\Auth;

use Illuminate\Validation\ValidationException;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\Models\User;

class AuthController extends Controller
{

	/*
	 * Generate sanctum token on successful login
	*/
	public function login(Request $request)
	{
		$request->validate([
			'email' => 'required|email',
			'password' => 'required',
		]);

		$user = User::where('email', $request->email)->first();

		if (!$user || !Hash::check($request->password, $user->password)) {
			throw ValidationException::withMessages([
				'email' => ['The provided credentials are incorrect.'],
			]);
		}

		return response()->json([
			'user' => $user,
			'access_token' => $user->createToken($request->email)->plainTextToken
		], 200);
	}


	/*
	 * Revoke token; only remove token that is used to perform logout (i.e. will not revoke all tokens)
	*/
	public function logout(Request $request)
	{

		// Revoke the token that was used to authenticate the current request
		$request->user()->currentAccessToken()->delete();
		//$request->user->tokens()->delete(); // use this to revoke all tokens (logout from all devices)
		return response()->json(null, 200);
	}


	/*
	 * Get authenticated user details
	*/
	public function getAuthenticatedUser(Request $request)
	{
		return $request->user();
	}


	/*
	 * Register new user
	*/
	public function signup(Request $request)
	{
		$validatedData = $request->validate([
			'name' => 'required|string|max:255',
			'email' => 'required|email|unique:users,email',
			'password' => 'required|min:6|confirmed',
		]);

		$validatedData['password'] = Hash::make($validatedData['password']);

		if (User::create($validatedData)) {
			return response()->json(null, 201);
		}

		return response()->json(null, 404);
	}
}
