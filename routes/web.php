<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\langController;
use App\Http\Controllers\PdfController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
// socialety login and register
Auth::routes();
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get("login/google",[LoginController::class,'redirectGoogle'])->name('login.google');
Route::get("login/google/callback",[LoginController::class,'redirectGoogleCallback']);
Route::get("login/facebook",[LoginController::class,'redirectFacebook'])->name('login.facebook');
Route::get("login/facebook/callback",[LoginController::class,'redirectFacebookCallback']);

// pdf controller routes
Route::controller(PdfController::class)->group(function(){

    Route::get('upload','UpLoad');
    Route::post('uploadeFile','store');
    Route::middleware(is_login::class)->group(function(){

        Route::get('speech','speech');
        Route::get('textedit','textedit');
        Route::get('allfiels','allfiels');
        Route::get('views/{id}','views');
        Route::delete("delete/{id}","delete");

    });
});




Route::controller(langController::class)->group(function(){
    Route::get('translation','index');
    Route::post('translation/change','change');
});


Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
});

Auth::routes();
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
