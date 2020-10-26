<?php

namespace App\Http\Controllers\ViewControllers;

use Request;
use App\Http\Controllers\Controller;
use App\Services\CommonTools;
use App\Services\AuthService;

// 錯誤代碼 #050000
class TransactionRecordController extends Controller
{
	/**
	 * 取得紀錄列表頁所需全部資料
	 */
	public function getAllData(){
		$searchdata = Request::all();
		$tr_r = new \App\Repositories\TransactionRecordRepository;
		$ud_r = new \App\Repositories\UserDataRepository;
		try {
			$data['userdata'] = AuthService::userData();
            //抓取異動紀錄資料
			if(!$data['transactions'] = $tr_r->getAllData($searchdata)){
				return CommonTools::returnData('資料獲取失敗');
			}
			//抓取使用者登入紀錄
			if(!$data['userlogins'] = $ud_r->getAllUserLastLogin($searchdata)){
				return CommonTools::returnData('資料獲取失敗');
			}

			return response()->json($data);
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return CommonTools::returnData('#050101');
		}
	}
}