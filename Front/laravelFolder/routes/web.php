<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/text',function(){return View::make('welcome');});
Route::resource('projects','ProjectsController');

Route::get('projects', 'ProjectsController@getData');

Route::get('/', function () {
    return view('index');
});

Route::get('itemDetail/{id}', function () {
    $id = Route::current()->id;
    return view('itemDetail', compact('id'));
});

Route::get('liveDemo/{id}', function () {
    $id = Route::current()->id;
    return view('liveDemo', compact('id'));
});

Route::get('projects/getmodel/{pd_id}', 'ProjectsController@getItemModel');


Route::get('/images/{num}/{type}', 'ProjectsController@rwdGetImageUrl');