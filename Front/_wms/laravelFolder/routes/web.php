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

Route::resource('projects','ProjectsController');

Route::get('projects', 'ProjectsController@getData');

Route::get('/viewRWD/itemAdd', 'ProjectsController@create'); //創建頁面
Route::post('/viewRWD/itemAdd', 'ProjectsController@store'); //儲存

Route::get('/viewAdaptive/itemAdd', 'ProjectsController@create'); //創建頁面
Route::post('/viewAdaptive/itemAdd', 'ProjectsController@store'); //儲存

Route::get('itemEdit/{id}', function () {
    $id = Route::current()->id;
    return view('itemEdit', compact('id'));
})->middleware('auth');

Auth::routes();

Route::get('/', function () {
    return view('welcome');
})->middleware('auth');

Route::get('/viewRWD', function () {
    return view('viewRWD');
})->middleware('auth');

Route::get('/viewAdaptive', function () {
    return view('viewAdaptive');
})->middleware('auth');

Route::get('/', 'HomeController@index');