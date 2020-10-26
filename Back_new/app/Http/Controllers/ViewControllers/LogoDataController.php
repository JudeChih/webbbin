<?php

namespace App\Http\Controllers\ViewControllers;

use Request;
use App\Http\Controllers\Controller;
use App\Services\CommonTools;
use App\Services\AuthService;
use DB;

// 錯誤代碼 #030000
class LogoDataController extends Controller
{
	/**
	 * 取得合作夥伴頁面全部資料
	 */
	public function getAllData(){
		$searchdata = Request::all();
		$ld_r = new \App\Repositories\LogoDataRepository;
		try {
			$data['userdata'] = AuthService::userData();
			//列表資料的呈現方式
			
			//合作夥伴名稱
			if(!isset($searchdata['ld_name']) || $searchdata['ld_name'] == ""){
                $data['ld_name'] = '';
            }else{
				$data['ld_name'] = $searchdata['ld_name'];
			}
			//合作夥伴查詢條件
			if(!$data['logos'] = $ld_r->getAllData($data)){
				return CommonTools::returnData('資料獲取失敗');
			}
			return response()->json($data);
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return CommonTools::returnData('#030101');
		}
	}

	/**
	 * 取得全部合作夥伴資料
	 * @param string $ld_name [合作夥伴名稱]
	 */
	public function getLogos()
	{
		$searchdata = Request::all();
		$ls_r = new \App\Repositories\LogoSortRepository;
		try {
			if (!isset($searchdata['ld_name']) || $searchdata['ld_name'] == "") {
				$data['ld_name'] = '';
			} else {
				$data['ld_name'] = $searchdata['ld_name'];
			}
			// 取得合作夥伴資料
			if (!$data['logos'] = $ls_r->getAllData($data['ld_name'])) {
				return CommonTools::returnData('資料獲取失敗');
			}
			return response()->json($data);
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return CommonTools::returnData('#030102');
		}
	}

	/**
	 * 取得合作夥伴資料
	 * @param string $ld_id [合作夥伴編號]
	 */
	public function getLogo()
	{
		$searchdata = Request::all();
		$ld_r = new \App\Repositories\LogoDataRepository;
		try {
			if (!CommonTools::checkArrayValue($searchdata, 'ld_id')) {
				return CommonTools::returnData('尚未傳入合作夥伴編號！');
			}
			// 取得固定網版資料
			if (!$data = $ld_r->getDataById($searchdata)) {
				return CommonTools::returnData('資料獲取失敗');
			}
			$data = $data[0];
			return response()->json($data);
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return CommonTools::returnData('#030103');
		}
	}

	/**
	 * Action[刪除合作夥伴]
	 */
	public function actionDelete(){
		$searchdata = Request::all();
		$ld_r = new \App\Repositories\LogoDataRepository;
		$ls_r = new \App\Repositories\LogoSortRepository;
		try {
			if (!CommonTools::checkArrayValue($searchdata, 'ld_id')) {
				return CommonTools::returnData('尚未傳入合作夥伴編號，無法刪除！');
			}
			DB::beginTransaction();
			if(!$ld_r->delete($searchdata['ld_id'])){
				DB::rollBack();
				return CommonTools::returnData('刪除失敗');
			}
			// $logosort = $ls_r->getDataByLdId($searchdata['ld_id']);
			if(!$ls_r->delete($searchdata['ld_id'])){
				DB::rollBack();
				return CommonTools::returnData('刪除失敗');
			}

			// 新增異動紀錄
			$arraydata['tr_action'] = 3; // 刪除
			$arraydata['ld_id'] = $searchdata['ld_id'];
			if (!CommonTools::createTransactionRecord($arraydata)) {
				DB::rollBack();
				return CommonTools::returnData('刪除成功，但異動紀錄新增失敗！');
			}

			// 導頁
			DB::commit();
			return CommonTools::returnData('ok');
		} catch (\Exception $e) {
			DB::rollBack();
			CommonTools::writeErrorLogByException($e);
			return CommonTools::returnData('#030401');
		}
	}

	/**
	 * Action[新增合作夥伴]
	 */
	public function actionCreate(Request $request){
		$ld_r = new \App\Repositories\LogoDataRepository;
		$ls_r = new \App\Repositories\LogoSortRepository;
		$searchdata = Request::all();
		try {
			// 先檢查合作夥伴名稱是否重覆
			if(!CommonTools::checkArrayValue($searchdata,'ld_name')){
				return CommonTools::returnData('尚未傳入合作夥伴名稱，新增失敗！');
			}
			if($ld_r->getDataByName($searchdata['ld_name']) > 0){
				return CommonTools::returnData('合作夥伴名稱已被使用，新增失敗！');
			}
			DB::beginTransaction();
			// 先新增合作夥伴資料並回傳ld_id
			if (!$ld_id = $ld_r->createGetId($searchdata)) {
				DB::rollBack();
				return CommonTools::returnData('新增失敗！');
			}
			$sort = $ls_r->getLastOne();
			$arraydata['ld_id'] = $ld_id;
			$arraydata['ls_sort'] = $sort['ls_sort'] + 1;
			if (!$ls_r->create($arraydata)) {
				DB::rollBack();
				return CommonTools::returnData('新增失敗！');
			}

			// 新增異動紀錄
			$arraydata['tr_action'] = 1; // 新增
			$arraydata['ld_id'] = $ld_id;
			if (!CommonTools::createTransactionRecord($arraydata)) {
				DB::rollBack();
				return CommonTools::returnData('新增成功，但異動紀錄新增失敗！');
			}

			// 導頁
			DB::commit();
			return CommonTools::returnData('ok');
		} catch (\Exception $e) {
			DB::rollBack();
			CommonTools::writeErrorLogByException($e);
			return CommonTools::returnData('#030201');
		}
	}

	/**
	 * Action[修改合作夥伴]
	 */
	public function actionModify(Request $request){
		$ld_r = new \App\Repositories\LogoDataRepository;
		// 抓取傳入值
		$searchdata = Request::all();
		try {
			// 先檢查傳入的合作夥伴名稱是否已經被該合作夥伴以外的合作夥伴使用了
			if (CommonTools::checkArrayValue($searchdata, "ld_name") && count($ld_r->getDataByIdName($searchdata['ld_id'], $searchdata['ld_name']))) {
				return CommonTools::returnData('合作夥伴名稱已被使用，修改失敗！');
			}
			
			DB::beginTransaction();
            // 修改合作夥伴資料
			if(!$ld_r->update($searchdata)){
				DB::rollBack();
				return CommonTools::returnData('修改失敗！');
			}

			// 新增異動紀錄
			$arraydata['tr_action'] = 2; // 修改
			$arraydata['ld_id'] = $searchdata['ld_id'];
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
			return CommonTools::returnData('#030301');
		}
	}

	/**
	 * Action[修改合作夥伴排序]
	 */
	public function actionSortModify()
	{
		$ls_r = new \App\Repositories\LogoSortRepository;
		// 抓取傳入值
		$searchdata = Request::all();
		try {
			DB::beginTransaction();
			$ls_r->reset();
			// 修改合作夥伴資料
			for ($i=0; $i < count($searchdata); $i++) { 
				$dd = array();
				$dd['ld_id'] = $searchdata[$i]['ld_id'];
				$dd['ls_sort'] = $i +1;
				if (!$ls_r->create($dd)) {
					DB::rollBack();
					return CommonTools::returnData('修改失敗！');
				}
			}

			// 導頁
			DB::commit();
			return CommonTools::returnData('ok');
		} catch (\Exception $e) {
			DB::rollBack();
			CommonTools::writeErrorLogByException($e);
			return CommonTools::returnData('#030302');
		}
	}	
}