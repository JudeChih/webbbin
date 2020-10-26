<?php
Route::get('/login', 'Auth\LoginController@loginview');
Route::post('/login', 'Auth\LoginController@login');
Route::get('/logout', [
    'as' => 'logout',
    'uses' => 'Auth\LoginController@logout'
]);
//////////////////////////////////////////////////////////////////////////////////////////////////
// Route::get('/', 'Auth\LoginController@loginview');

// 檔案總管的route
Route::get('/laravel-filemanager', '\UniSharp\LaravelFilemanager\Controllers\LfmController@show');
Route::post('/laravel-filemanager/upload', '\UniSharp\LaravelFilemanager\Controllers\UploadController@upload');


/////////////////////////////////////////////Sunwai///////////////////////////////////////////////
Route::group(['middleware' => 'userdata'], function () {
    ////////////////////////////////////////////////////////////////////////////////////////////////
    // 一頁全包
    Route::get('/', function () {
        return View::make('pages.allinone');
    });
    Route::get('/all-data', 'ViewControllers\AllInOneController@getAllData');

    ////////////////////////////////////////////////////////////////////////////////////////////////
    // index頁為統計頁
    Route::get('/index',function(){
        return View::make('pages.index');
    });
    Route::get('/index-all-data', 'ViewControllers\IndexController@getAllData');

    /////////// 版型管理 ///////////
    // 版型列表
    Route::get('/project-list', function () {
        return View::make('pages.project');
    });
    Route::get('/project-all-data', 'ViewControllers\ProjectDataController@getAllData');
    Route::get('/projects', 'ViewControllers\ProjectDataController@getProjects');
    Route::get('/project', 'ViewControllers\ProjectDataController@getProject');
    Route::get('/project-three-data/{type}', 'ViewControllers\ProjectDataController@getThreeData');
    
    // 新增修改刪除等功能
    Route::post('/project-create', 'ViewControllers\ProjectDataController@actionCreate');
    Route::post('/project-modify', 'ViewControllers\ProjectDataController@actionModify');
    Route::post('/project-delete', 'ViewControllers\ProjectDataController@actionDelete');
    /////////// END ///////////

    /////////// 合作夥伴管理 ///////////
    // 合作夥伴列表
    Route::get('/logo-list', function () {
        return View::make('pages.logo');
    });
    Route::get('/logo-all-data', 'ViewControllers\LogoDataController@getAllData');
    Route::get('/logos', 'ViewControllers\LogoDataController@getLogos');
    Route::get('/logo', 'ViewControllers\LogoDataController@getLogo');
    // 新增修改刪除等功能
    Route::post('/logo-create', 'ViewControllers\LogoDataController@actionCreate');
    Route::post('/logo-modify', 'ViewControllers\LogoDataController@actionModify');
    Route::post('/logosort-modify', 'ViewControllers\LogoDataController@actionSortModify');
    Route::post('/logo-delete', 'ViewControllers\LogoDataController@actionDelete');
    /////////// END ///////////

    /////////// 其他管理 ///////////
    // 異動紀錄
    Route::get('/transaction-list', function () {
        return View::make('pages.transaction');
    });
    Route::get('/transaction-all-data', 'ViewControllers\TransactionRecordController@getAllData');
    /////////// END ///////////

    /////////// 後台使用者管理 ///////////
    //使用者
    Route::get('/user-list', function () {
        return View::make('pages.user');
    });
    Route::get('/user-all-data', 'ViewControllers\UserDataController@getAllData');
    Route::get('/users', 'ViewControllers\UserDataController@getUsers');
    Route::get('/user', 'ViewControllers\UserDataController@getUser');
    // 個人
    Route::post('/user-modify-personal', 'ViewControllers\UserDataController@actionModifyPersonal');
    // 管理員
    Route::post('/user-create', 'ViewControllers\UserDataController@actionCreate');
    Route::post('/user-modify', 'ViewControllers\UserDataController@actionModify');
    Route::post('/user-delete', 'ViewControllers\UserDataController@actionDelete');
    /////////// END ///////////

});
