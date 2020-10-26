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
// Route::get('/text',function(){return View::make('welcome');});
// Route::resource('projects','ProjectsController');

Route::get('/projects', 'Web\ProjectsController@getData');
Route::get('/project/{id}', 'Web\ProjectsController@getProject');
Route::get('/prev_project/{id}', 'Web\ProjectsController@getPrevProject');
Route::get('/next_project/{id}', 'Web\ProjectsController@getNextProject');

Route::get('/logos', 'Web\LogosController@getData');
Route::get('/bbinlogo', 'Web\LogosController@getBbinData');




Route::get('/', function () {
    return View::make('pages.index');
});
Route::get('/index',function(){
    return View::make('pages.index');
});
Route::get('/detail/{id}',function(){
    return View::make('pages.detail');
});
Route::get('/demo/{id}',function(){
    return View::make('pages.demo');
});

Route::get('itemDetail/{id}', function () {
    $id = Route::current()->id;
    return view('itemDetail', compact('id'));
});

Route::get('liveDemo/{id}', function () {
    $id = Route::current()->id;
    return view('liveDemo', compact('id'));
});

// Route::get('projects/getmodel/{pd_id}', 'ProjectsController@getItemModel');


// Route::get('/images/{num}/{type}', 'ProjectsController@rwdGetImageUrl');