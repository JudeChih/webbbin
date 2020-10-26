<?php

namespace App\Http\Controllers\ViewControllers;

use Request;
use App\Http\Controllers\Controller;
use App\Services\CommonTools;
use App\Services\AuthService;
use DB;

// 錯誤代碼 #060000
class UserDataController extends Controller
{
    /**
     * 取得使用者列表全部資料
     */
    public function getAllData()
    {
        $ud_r = new \App\Repositories\UserDataRepository;
        $searchdata = Request::all();
        try {
            //使用者資料
            $data['userdata'] = AuthService::userData();
            //使用者名稱
            if (!isset($searchdata['ud_name']) || $searchdata['ud_name'] == "") {
                $data['ud_name'] = '';
            } else {
                $data['ud_name'] = $searchdata['ud_name'];
            }
            if (!$data['users'] = $ud_r->getAllData($data)) {
                return CommonTools::returnData('資料獲取失敗');
            }
            return response()->json($data);
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return CommonTools::returnData('#060101');
        }
    }

    /**
     * 取得使用者資料
     * @param string $ud_name [使用者名稱]
     */
    public function getUsers()
    {
        $searchdata = Request::all();
        $ud_r = new \App\Repositories\UserDataRepository;
        try {
            $data['ud_name'] = $searchdata['ud_name'];
            // 取得使用者資料
            if (!$data['users'] = $ud_r->getAllData($data)) {
                return CommonTools::returnData('資料獲取失敗');
            }
            return response()->json($data);
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return CommonTools::returnData('#060102');
        }
    }

    /**
     * 取得使用者資料
     * @param string $ud_id[使用者編號]
     */
    public function getUser()
    {
        $searchdata = Request::all();
        $ud_r = new \App\Repositories\UserDataRepository;
        try {
            if (!CommonTools::checkArrayValue($searchdata, 'ud_id')) {
                return CommonTools::returnData('尚未傳入使用者編號！');
            }
            // 取得使用者資料
            if (!$data = $ud_r->getDataById($searchdata)) {
                return CommonTools::returnData('資料獲取失敗');
            }
            $data = $data[0];
            return response()->json($data);
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return CommonTools::returnData('#060103');
        }
    }

    /**
     * Action[新增使用者]
     * @param  Request $request [使用者資料]
     */
    public function actionCreate(Request $request){
        $searchdata = Request::all();
        $ud_r = new \App\Repositories\UserDataRepository;
        try {
            // 先檢查使用者帳號是否重覆
            if (!CommonTools::checkArrayValue($searchdata, 'ud_account')) {
                return CommonTools::returnData('尚未傳入使用者帳號，新增失敗！');
            }
            if (count($ud_r->getDataByAccount($searchdata['ud_account'])) > 0) {
                return CommonTools::returnData('該使用者帳號已被使用，新增失敗！');
            }
            DB::beginTransaction();
            if(!$ud_id = $ud_r->createGetId($searchdata)){
                DB::rollBack();
                return CommonTools::returnData('新增失敗！');
            }
            // 新增異動紀錄
			$arraydata['tr_action'] = 1; // 新增
			$arraydata['ud_id'] = $ud_id;
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
            return CommonTools::returnData('#060201');
        }
    }

    /**
     * Action[修改個人資料]
     * @param  Request $request [使用者資料]
     */
    public function actionModifyPersonal()
    {
        $searchdata = Request::all();
        $ud_r = new \App\Repositories\UserDataRepository;
        try {
            CommonTools::writeErrorLogByMessage(json_encode($searchdata));
            if (!CommonTools::checkArrayValue($searchdata, 'ud_id')) {
                return CommonTools::returnData('尚未傳入使用者編號！');
            }
            // 檢查新密碼是否傳入，檢查新密碼是否跟確認密碼相同
            if (CommonTools::checkArrayValue($searchdata, 'ud_password')) {

                if (!$userdata = $ud_r->getDataByIdPwd($searchdata['ud_id'], $searchdata['ud_password'])) {
                    return CommonTools::returnData('舊密碼輸入錯誤！');
                }
                if (count($userdata) == 0) {
                    return CommonTools::returnData('舊密碼輸入錯誤！');
                }
                if (!CommonTools::checkArrayValue($searchdata, 'ud_new_password')) {
                    return CommonTools::returnData('請輸入新密碼！');
                }
                if (!CommonTools::checkArrayValue($searchdata, 'ud_new_password_confirm')) {
                    return CommonTools::returnData('請輸入確認密碼！');
                }
                if ($searchdata['ud_new_password_confirm'] != $searchdata['ud_new_password']) {
                    return CommonTools::returnData('新密碼和確認密碼不一致！');
                }else{
                    $searchdata['ud_password'] = $searchdata['ud_new_password'];
                }
            }
            // 將新密碼取代原本密碼的欄位
            
            DB::beginTransaction();
            if (!$ud_r->update($searchdata)) {
                DB::rollBack();
                return CommonTools::returnData('修改失敗！');
            }
            // 新增異動紀錄
            $arraydata['tr_action'] = 2; // 修改
            $arraydata['ud_id'] = $searchdata['ud_id'];
            if (!CommonTools::createTransactionRecord($arraydata)) {
                DB::rollBack();
                return CommonTools::returnData('修改成功，但異動紀錄新增失敗！');
            }

            // 導頁
            DB::commit();
            return CommonTools::returnData('ok');
        } catch (\Exception $e) {
            DB::rollBack();
            CommonTools::writeErrorLogByException($e);
            return CommonTools::returnData('#060301');
        }
    }

    /**
     * Action[修改使用者]
     * @param  Request $request [使用者資料]
     */
    public function actionModify(){
        $searchdata = Request::all();
        $ud_r = new \App\Repositories\UserDataRepository;
        try {
            if(!CommonTools::checkArrayValue($searchdata,'ud_id')){
                return CommonTools::returnData('尚未傳入使用者編號！');
            }
            DB::beginTransaction();
            if(!$ud_r->update($searchdata)){
                DB::rollBack();
                return CommonTools::returnData('修改失敗！');
            }
            // 新增異動紀錄
			$arraydata['tr_action'] = 2; // 修改
			$arraydata['ud_id'] = $searchdata['ud_id'];
            if (!CommonTools::createTransactionRecord($arraydata)) {
                DB::rollBack();
                return CommonTools::returnData('修改成功，但異動紀錄新增失敗！');
            }

            // 導頁
            DB::commit();
            return CommonTools::returnData('ok');
        } catch (\Exception $e) {
            DB::rollBack();
            CommonTools::writeErrorLogByException($e);
            return CommonTools::returnData('#060302');
        }
    }

    /**
     * Action[刪除使用者]
     * @param  Request $request [包含ud_id]
     */
    public function actionDelete(Request $request){
        $searchdata = Request::all();
        $ud_r = new \App\Repositories\UserDataRepository;
        try {
            if(!CommonTools::checkArrayValue($searchdata,'ud_id')){
                return CommonTools::returnData('尚未傳入使用者編號！');
            }
            DB::beginTransaction();
            if(!$ud_r->delete($searchdata['ud_id'])){
                DB::rollBack();
                return CommonTools::returnData('刪除失敗');
            }
            // 新增異動紀錄
			$arraydata['tr_action'] = 3; // 刪除
			$arraydata['ud_id'] = $searchdata['ud_id'];
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
            return CommonTools::returnData('#060401');
        }
    }
}
