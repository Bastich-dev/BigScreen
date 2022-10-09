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




// Public Routes
// --------------------------------------------------------------------------------------------------------------
Route::get('/ping', function () {
	return [
		"api_on" => true,
		'message' => "API working !"
	];
});

Route::get('/currencies', 'App\Http\Controllers\CurrencyController@index');
Route::post('/convert', 'App\Http\Controllers\CurrencyController@convert');


// Currencies CRUD
// --------------------------------------------------------------------------------------------------------------

Route::group(['middleware' => ['auth:sanctum']], function () {
	Route::post('/currencies', 'App\Http\Controllers\CurrencyController@store');
	Route::put('/currencies/{id}', 'App\Http\Controllers\CurrencyController@update');
	Route::delete('/currencies/{id}', 'App\Http\Controllers\CurrencyController@destroy');
});

// Auth Routes
// --------------------------------------------------------------------------------------------------------------

Route::prefix('auth')->group(function () {
	Route::post('/login', 'App\Http\Controllers\Api\Auth\AuthController@login')->name('auth.login');
	Route::post('/logout', 'App\Http\Controllers\Api\Auth\AuthController@logout')->middleware('auth:sanctum')->name('auth.logout');
	Route::get('/user', 'App\Http\Controllers\Api\Auth\AuthController@getAuthenticatedUser')->middleware('auth:sanctum')->name('auth.user');

	// Unused routes from https://github.com/PrijalBista/laravel-api-auth-sanctum-boilerplate
	// Route::post('signup', 'App\Http\Controllers\Api\Auth\AuthController@signup')->name('auth.signup');
	// Route::post('/password/email', 'App\Http\Controllers\Api\Auth\AuthController@sendPasswordResetLinkEmail')->middleware('throttle:5,1')->name('password.email');
	// Route::post('/password/reset', 'App\Http\Controllers\Api\Auth\AuthController@resetPassword')->name('password.reset');
});
