<?php
/*Test Route for Gentelella Laravel 5 integration*/
// Route::get('/test', function(){
// 	return view('welcome');
// });

////////////////////////////////////////////////////////////////////////////////////////////////
// Route::get('/login', function () {
//   	return \Illuminate\Support\Facades\View::make('login/login');
// });
Route::get('/login', 'Auth\LoginController@loginview');
Route::post('/login', 'Auth\LoginController@login');
Route::get('/logout', [
    'as' => 'logout',
    'uses' => 'Auth\LoginController@logout'
]);
//////////////////////////////////////////////////////////////////////////////////////////////////
Route::get('/', 'Auth\LoginController@loginview');

// 檔案總管的route
Route::get('/laravel-filemanager', '\Unisharp\Laravelfilemanager\controllers\LfmController@show');
Route::post('/laravel-filemanager/upload', '\Unisharp\Laravelfilemanager\controllers\UploadController@upload');

/////////////////////////////////////////////Sunwai///////////////////////////////////////////////
Route::group(['middleware' => 'userdata'],function(){
		////////////////////////////////////////////////////////////////////////////////////////////////
		// index頁為統計頁
		Route::get('/index','ViewControllers\IndexController@index');

		/////////// 版型管理 ///////////
		// 固定版型
		Route::get('/adaptive-list','ViewControllers\TemplateController@adaptiveList');
		// RWD版型
		Route::get('/rwd-list','ViewControllers\TemplateController@rwdList');
		// // 版型專案上傳
		// Route::get('/template-upload','ViewControllers\TemplateController@templateUpload');
		// Route::post('/template-upload','ViewControllers\TemplateController@actionUpload');
		// 通用導頁
		Route::get('/template-create','ViewControllers\TemplateController@templateCreate');
		Route::get('/template-modify','ViewControllers\TemplateController@templateModify');
		// 新增修改刪除等功能
		Route::post('/template-create','ViewControllers\TemplateController@actionCreate');
		Route::post('/template-modify','ViewControllers\TemplateController@actionModify');
		Route::post('/template-delete','ViewControllers\TemplateController@actionDelete');
		// 單一項目修改
		Route::get('/template-edit/{type}/{id}','ViewControllers\TemplateController@templateEdit');
		/////////// END ///////////

		/////////// 其他管理 ///////////
		// 熱門排行
		// adaptive
		// Route::get('/ishot-adaptive-list','ViewControllers\FeaturesController@isHotAdaptiveList');
		// Route::post('/ishot-adaptive-modify','ViewControllers\FeaturesController@actionHotAdaptiveModify');
		// Route::get('/ishot-adaptive-top10','ViewControllers\FeaturesController@isHotAdaptiveTop10');
		// Route::post('/ishot-adaptive-top10','ViewControllers\FeaturesController@actionHotAdaptiveTop10');
		// rwd
		// Route::get('/ishot-rwd-list','ViewControllers\FeaturesController@isHotRwdList');
		// Route::post('/ishot-rwd-modify','ViewControllers\FeaturesController@actionHotRwdModify');
		// Route::get('/ishot-rwd-top10','ViewControllers\FeaturesController@isHotRwdTop10');
		// Route::post('/ishot-rwd-top10','ViewControllers\FeaturesController@actionHotRwdTop10');

		// Route::get('/ishot-create','ViewControllers\FeaturesController@isHotCreate');
		// Route::post('/ishot-create','ViewControllers\FeaturesController@actionHotCreate');
		// Route::post('/ishot-delete','ViewControllers\FeaturesController@actionHotDelete');
		// 版型紀錄(停用中)
		// Route::get('/ismodel-list','ViewControllers\FeaturesController@isModelList');
		// Route::get('/ismodel-create','ViewControllers\FeaturesController@isModelCreate');
		// Route::get('/ismodel-modify','ViewControllers\FeaturesController@isModelModify');
		// Route::post('/ismodel-delete','ViewControllers\FeaturesController@actionModelDelete');
		// Route::post('/ismodel-create','ViewControllers\FeaturesController@actionModelCreate');
		// Route::post('/ismodel-modify','ViewControllers\FeaturesController@actionModelModify');
		// 異動紀錄
		Route::get('/istransaction-list','ViewControllers\FeaturesController@isTransactionlList');
		/////////// END ///////////

		/////////// 後台使用者管理 ///////////
		// 個人 UserDataController
		Route::get('/personal-user-modify','ViewControllers\UserDataController@personalUserModify');
		Route::post('/personal-user-modify','ViewControllers\UserDataController@actionPersonalUserModify');
		// 管理員 AdminUserDataController
		Route::get('/admin-user-list','ViewControllers\UserDataController@adminUserList');
		Route::get('/admin-user-create','ViewControllers\UserDataController@adminUserCreate');
		Route::get('/admin-user-modify','ViewControllers\UserDataController@adminUserModify');
		Route::post('/admin-user-create','ViewControllers\UserDataController@actionAdminUserCreate');
		Route::post('/admin-user-modify','ViewControllers\UserDataController@actionAdminUserModify');
		Route::post('/admin-user-delete','ViewControllers\UserDataController@actionAdminUserDelete');
		/////////// END ///////////

});