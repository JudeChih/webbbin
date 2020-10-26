<?php

namespace App\Http\Controllers\ViewControllers;

use Request;
use App\Http\Controllers\Controller;
use App\Services\CommonTools;
use App\Services\AuthService;
use DB;

// 錯誤代碼 #040000
class ProjectDataController extends Controller
{
	/**
	 * 取得版型列表全部資料
	 */
	public function getAllData(){
		$searchdata = Request::all();
		$pd_r = new \App\Repositories\ProjectDataRepository;
		try {
			//使用者資料
			$data['userdata'] = AuthService::userData();
			//資料的排列依據
			if (!CommonTools::checkArrayValue($searchdata, "orderBy")) {
				$data['orderBy'] = 'pd_date';
			} else {
				$data['orderBy'] = $searchdata['orderBy'];
			}
			//版型名稱
			if (!isset($searchdata['pd_num']) || $searchdata['pd_num'] == "") {
				$data['pd_num'] = '';
			} else {
				$data['pd_num'] = $searchdata['pd_num'];
			}
			
			if (!$data['projects'] = $pd_r->getAllData($data)) {
				return CommonTools::returnData('資料獲取失敗');
			}
			return response()->json($data);
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return CommonTools::returnData('#040101');
		}
	}

	/**
	 * 取得三筆的固定網版資料
	 * @param string $type [排序方式]
	 */
	public function getThreeData($type){
		$pd_r = new \App\Repositories\ProjectDataRepository;
		try {
			$data['orderBy'] = $type;
			// 取得最新三筆的固定網版資料
			if (!$data = $pd_r->getThreeLatestAdaptiveData($data)) {
				return false;
			}
			return response()->json($data);
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return CommonTools::returnData('#040102');
		}
	}

	/**
	 * 取得固定網版資料
	 * @param string $type [排序方式]
	 * @param string $pd_num [版型編號]
	 */
	public function getProjects(){
		$searchdata = Request::all();
		$pd_r = new \App\Repositories\ProjectDataRepository;
		try {
			$data['orderBy'] = $searchdata['orderBy'];
			$data['pd_num'] = $searchdata['pd_num'];
			// 取得固定網版資料
			if (!$data['projects'] = $pd_r->getAllData($data)) {
				return CommonTools::returnData('資料獲取失敗');
			}
			return response()->json($data);
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return CommonTools::returnData('#040103');
		}
	}

	/**
	 * 取得固定網版資料
	 * @param string $pd_id [版型編號]
	 */
	public function getProject(){
		$searchdata = Request::all();
		$pd_r = new \App\Repositories\ProjectDataRepository;
		try {
			if (!CommonTools::checkArrayValue($searchdata, 'pd_id')) {
				return CommonTools::returnData('尚未傳入版型編號！');
			}
			// 取得固定網版資料
			if (!$data = $pd_r->getDataById($searchdata)) {
				return CommonTools::returnData('資料獲取失敗');
			}
			$data = $data[0];
			return response()->json($data);
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return CommonTools::returnData('#040104');
		}
	}

	/**
	 * Action[刪除網版]
	 */
	public function actionDelete()
	{
		$searchdata = Request::all();
		$pd_r = new \App\Repositories\ProjectDataRepository;
		try {
			if (!CommonTools::checkArrayValue($searchdata, 'pd_id')) {
				return CommonTools::returnData('尚未傳入版型編號，無法刪除！');
			}
			DB::beginTransaction();
			if (!$pd_r->delete($searchdata['pd_id'])) {
				DB::rollBack();
				return CommonTools::returnData('刪除失敗');
			}

			// 新增異動紀錄
			$arraydata['tr_action'] = 3; // 刪除
			$arraydata['pd_id'] = $searchdata['pd_id'];
			if(!CommonTools::createTransactionRecord($arraydata)){
				DB::rollBack();
				return CommonTools::returnData('刪除成功，但異動紀錄新增失敗！');
			}

			// 導頁
			DB::commit();
			return CommonTools::returnData('ok');
		} catch (\Exception $e) {
			DB::rollBack();
			CommonTools::writeErrorLogByException($e);
			return CommonTools::returnData('#040401');
		}
	}

	/**
	 * Action[新增網版]
	 */
	public function actionCreate()
	{
		$pd_r = new \App\Repositories\ProjectDataRepository;
		$searchdata = Request::all();
		try {
			// 先檢查網版名稱是否重覆
			if (!CommonTools::checkArrayValue($searchdata, 'pd_num')) {
				return CommonTools::returnData('尚未傳入網版名稱，新增失敗！');
			}
			if (count($pd_r->getDataByNum($searchdata['pd_num'])) > 0) {
				return CommonTools::returnData('網版名稱已被使用，新增失敗！');
			}
			DB::beginTransaction();
			// 先新增網版資料並回傳pd_id
			if (!$pd_id = $pd_r->createGetId($searchdata)) {
				DB::rollBack();
				return CommonTools::returnData('新增失敗！');
			}
			// 新增異動紀錄
			$arraydata['tr_action'] = 1; // 新增
			$arraydata['pd_id'] = $pd_id;
			if(!CommonTools::createTransactionRecord($arraydata)){
				DB::rollBack();
				return CommonTools::returnData('新增成功，但異動紀錄新增失敗！');
			}

			// 導頁
			DB::commit();
			return CommonTools::returnData('ok');
		} catch (\Exception $e) {
			DB::rollBack();
			CommonTools::writeErrorLogByException($e);
			return CommonTools::returnData('#040201');
		}
	}

	/**
	 * Action[修改網版]
	 */
	public function actionModify()
	{
		$pd_r = new \App\Repositories\ProjectDataRepository;
		// 抓取傳入值
		$searchdata = Request::all();
		try {
			// 先檢查傳入的網版名稱是否已經被該網版以外的網版使用了
			if (CommonTools::checkArrayValue($searchdata, "pd_num") && count($pd_r->getDataByIdNum($searchdata['pd_id'], $searchdata['pd_num']))) {
				return CommonTools::returnData('網版名稱已被使用，修改失敗！');
			}
			DB::beginTransaction();
			// 修改網版資料
			if (!$pd_r->update($searchdata)) {
				DB::rollBack();
				return CommonTools::returnData('修改失敗！');
			}

			// 新增異動紀錄
			$arraydata['tr_action'] = 2; // 修改版型
			$arraydata['pd_id'] = $searchdata['pd_id'];
			if(!CommonTools::createTransactionRecord($arraydata)){
				DB::rollBack();
				return CommonTools::returnData('修改成功，但異動紀錄新增失敗！');
			}

			// 導頁
			DB::commit();
			return CommonTools::returnData('ok');
		} catch (\Exception $e) {
			DB::rollBack();
			CommonTools::writeErrorLogByException($e);
			return CommonTools::returnData('#040301');
		}
	}
}
