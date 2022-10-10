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
Route::get('/surveys', 'App\Http\Controllers\SurveyController@list');
Route::post('/answers', 'App\Http\Controllers\AnswerController@post');


// Auth Routes
// --------------------------------------------------------------------------------------------------------------

Route::post('/login', 'App\Http\Controllers\Api\Auth\AuthController@login')->name('auth.login');
Route::post('/logout', 'App\Http\Controllers\Api\Auth\AuthController@logout')->middleware('auth:sanctum')->name('auth.logout');
Route::get('/user', 'App\Http\Controllers\Api\Auth\AuthController@getAuthenticatedUser')->middleware('auth:sanctum')->name('auth.user');

// Admin Routes
// --------------------------------------------------------------------------------------------------------------

Route::group(['middleware' => ['auth:sanctum']], function () {
	Route::get('/answers', 'App\Http\Controllers\AnswerController@list');
	Route::get('/answers/stats', 'App\Http\Controllers\AnswerController@stats');
});
