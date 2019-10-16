<?php

namespace App\Http\Controllers\ViewControllers;

use Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\View;
use App\Library\CommonTools;
use Storage;

class UserDataController extends Controller
{
    /**
     * View[個人資料修改]頁
     */
    public function personalUserModify(){
        $ud_r = new \App\Repositories\UserDataRepository;
        try {
            // 檢查是否有使用者ID
            if(!\App\Services\AuthService::userId()){
                return redirect()->back()->withInput()->withErrors(['error' => '抓取不到您的資料，請稍後再試！']);
            }
            if(!$userdata = $ud_r->getDataById(\App\Services\AuthService::userId())){
                return redirect()->back()->withInput()->withErrors(['error' => '抓取不到您的資料，請稍後再試！']);
            }
            $userdata = $userdata[0];

            return view('user.personaldetail',compact('userdata'));

        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return view('errors.503');
        }
    }

    /**
     * View[使用者列表]頁
     * @param  Request $request [包含搜尋資料]
     */
    public function adminUserList(Request $request){
        $ud_r = new \App\Repositories\UserDataRepository;
        $searchdata = Request::all();
        try {
            //頁數
            if(!CommonTools::checkArrayValue($searchdata, "page")){
                $searchdata['page'] = 1;
            }
            // 如果沒傳入帳號欄位
            if(!isset($searchdata['ud_account']) || $searchdata['ud_account'] == ""){
                $searchdata['ud_account'] = null;
            }
            if(!$userdata = $ud_r->getAllData($searchdata)){
                return redirect()->back()->withInput()->withErrors(['error' => '暫無任何使用者，請先新增使用者！']);
            }
            return view('user.adminuserlist',compact('userdata','searchdata'));
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return view('errors.503');
        }
    }

    /**
     * View[新增使用者]頁
     */
    public function adminUserCreate(){
        try {
            return view('user.adminusercreate');
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return view('errors.503');
        }
    }

    /**
     * View[修改使用者]頁
     * @param  Request $request [description]
     * @return [type]           [description]
     */
    public function adminUserModify(Request $request){
        $ud_r = new \App\Repositories\UserDataRepository;
        $searchdata = Request::all();
        try {
            if(!CommonTools::checkArrayValue($searchdata,'ud_id')){
                return redirect()->back()->withInput()->withErrors(['error' => '尚未傳入使用者編號！']);
            }
            if(!$userdata = $ud_r->getDataById($searchdata['ud_id'])){
                return redirect()->back()->withInput()->withErrors(['error' => '尚未查到相符的使用者！']);
            }
            $userdata = $userdata[0];

            return view('user.adminuserdetail',compact('userdata'));

        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return view('errors.503');
        }
    }

    /**
     * Action[修改個人資料]
     * @param  Request $request [使用者資料]
     */
    public function actionPersonalUserModify(Request $request){
        $searchdata = Request::all();
        $ud_r = new \App\Repositories\UserDataRepository;
        try {
            if(!CommonTools::checkArrayValue($searchdata,'ud_id')){
                return redirect()->back()->withInput()->withErrors(['error' => '尚未傳入使用者編號！']);
            }
            // 檢查新密碼是否傳入，檢查新密碼是否跟確認密碼相同
            if(CommonTools::checkArrayValue($searchdata,'ud_password')){
                if(!$userdata = $ud_r->getDataByIdPwd($searchdata['ud_id'],$searchdata['ud_password'])){
                    return redirect()->back()->withInput()->withErrors(['error' => '密碼輸入錯誤！']);
                }
                if(count($userdata) == 0){
                    return redirect()->back()->withInput()->withErrors(['error' => '密碼輸入錯誤！']);
                }
                if(!CommonTools::checkArrayValue($searchdata,'ud_new_password')){
                    return redirect()->back()->withInput()->withErrors(['error' => '沒有傳入新密碼！']);
                }
                if(!CommonTools::checkArrayValue($searchdata,'ud_new_password_confirm')){
                    return redirect()->back()->withInput()->withErrors(['error' => '沒有傳入確認新密碼！']);
                }
                if($searchdata['ud_new_password_confirm'] != $searchdata['ud_new_password']){
                    return redirect()->back()->withInput()->withErrors(['error' => '新密碼與確認密碼不相符！']);
                }
            }
            // 將新密碼取代原本密碼的欄位
            $searchdata['ud_password'] = $searchdata['ud_new_password'];
            if(!$ud_r->update($searchdata)){
                return redirect()->back()->withInput()->withErrors(['error' => '修改失敗！']);
            }
            return redirect('/personal-user-modify')->withInput()->withErrors(['error' => '修改成功！']);
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return redirect()->back()->withInput()->withErrors(['error' => '未知錯誤，修改失敗！']);
        }
    }

    /**
     * Action[新增使用者]
     * @param  Request $request [使用者資料]
     */
    public function actionAdminUserCreate(Request $request){
        $searchdata = Request::all();
        $ud_r = new \App\Repositories\UserDataRepository;
        try {
            if(!$ud_r->create($searchdata)){
                return redirect()->back()->withInput()->withErrors(['error' => '新增失敗！']);
            }
            return redirect('/admin-user-list')->withInput()->withErrors(['error' => '新增成功！']);
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return redirect()->back()->withInput()->withErrors(['error' => '未知錯誤，修改失敗！']);
        }
    }

    /**
     * Action[修改使用者]
     * @param  Request $request [使用者資料]
     */
    public function actionAdminUserModify(Request $request){
        $searchdata = Request::all();
        $ud_r = new \App\Repositories\UserDataRepository;
        try {
            if(!CommonTools::checkArrayValue($searchdata,'ud_id')){
                return redirect()->back()->withInput()->withErrors(['error' => '尚未傳入使用者編號！']);
            }
            if(!$ud_r->update($searchdata)){
                return redirect()->back()->withInput()->withErrors(['error' => '修改失敗！']);
            }
            return redirect('/admin-user-list')->withInput()->withErrors(['error' => '修改成功！']);
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return redirect()->back()->withInput()->withErrors(['error' => '未知錯誤，修改失敗！']);
        }
    }

    /**
     * Action[刪除使用者]
     * @param  Request $request [包含ud_id]
     */
    public function actionAdminUserDelete(Request $request){
        $searchdata = Request::all();
        $ud_r = new \App\Repositories\UserDataRepository;
        try {
            if(!CommonTools::checkArrayValue($searchdata,'ud_id')){
                return redirect()->back()->withInput()->withErrors(['error' => '尚未傳入使用者編號！']);
            }
            if(!$ud_r->delete($searchdata['ud_id'])){
                return redirect()->back()->withInput()->withErrors(['error' => '刪除失敗！']);
            }
            return redirect('/admin-user-list')->withInput()->withErrors(['error' => '刪除成功！']);
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return redirect()->back()->withInput()->withErrors(['error' => '未知錯誤，失敗失敗！']);
        }
    }

    /**
     * 將異動資訊記錄起來
     * @param  [array] $arraydata [異動資訊]
     */
    public function modify_record($arraydata){
        try {
            $tr_r = new \App\Repositories\TransactionRecordRepository;
            // 異動使用者名稱
            if(\App\Services\AuthService::userData()->ud_account){
                $arraydata['tr_user'] = \App\Services\AuthService::userData()->ud_account;
            }else{
                $arraydata['tr_user'] = '無法辨識的使用者';
            }


            return $tr_r->create($arraydata);
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
    }
}
