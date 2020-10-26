<?php

namespace App\Repositories;

use App\Models\LogoSort;
use App\Services\CommonTools;
use DB;

class LogoSortRepository {

	/**
	 * 抓取全部資料
	 */
	public function getAllData($ld_name){
        try {
            return LogoSort::leftjoin('wms_logodata', 'wms_logodata.ld_id','wms_logosort.ld_id')->orderBy('wms_logosort.ls_sort','ASC')->where('wms_logodata.isflag', 1)->where('wms_logosort.isflag',1)->where('wms_logodata.ld_name','like', '%'.$ld_name.'%')->get();
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
		
    }

    public function getDataByLdId($ld_id){
        try {
            return LogoSort::where('isflag',1)->where('ld_id',$ld_id)->first();
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
    }

    /**
     * 重置排序資料表，並且ls_id從1開始
     */
    public function reset(){
        try {
            LogoSort::where('isflag',1)->delete();
            DB::statement("ALTER TABLE wms_logosort AUTO_INCREMENT =  1");
            return true;
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
        
    }

    /** 
     * 取得排序最後一位的資料
     */
    public function getLastOne(){
        try {
            return LogoSort::where('isflag',1)->orderBy('ls_sort','DESC')->first();
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }        
    }

    /**
     * 刪除合作夥伴排序
     * @param  string $ld_id [版型編號]
     */
	public function delete($ld_id){
    	try {
            $savedata['last_update_user'] = \App\Services\AuthService::userData()->ud_account;
    		$savedata['isflag'] = 0;
    		LogoSort::where('ld_id',$ld_id)->update($savedata);
    		return true;
    	} catch (\Exception $e) {
    		CommonTools::writeErrorLogByException($e);
    		return false;
    	}
    }

    /**
     * 新增網版資料，並且回傳ld_id
     * @param  array  $arraydata [合作夥伴資料]
     * @return string $ld_id     [合作夥伴編號]
     */
    public function createGetId($arraydata){
        try {
            // 檢查必填欄位是否傳入
            if(!CommonTools::checkArrayValue($arraydata, "ld_id") ||
               !CommonTools::checkArrayValue($arraydata, "ls_sort")
            ){
                return false;
            }
            // 填入必填欄位
            $savedata['ld_id'] = $arraydata['ld_id'];
            $savedata['ls_sort'] = $arraydata['ls_sort'];

            // 填入非必填欄位
            if(CommonTools::checkArrayValue($arraydata, "isflag")){
                $savedata['isflag'] = $arraydata['isflag'];
            }else{
                $savedata['isflag'] = 1;
            }
            if(\App\Services\AuthService::userData()->ud_account){
                $savedata['create_user'] = \App\Services\AuthService::userData()->ud_account;
            }else{
                $savedata['create_user'] = 'bbin';
            }
            if(\App\Services\AuthService::userData()->ud_account){
                $savedata['last_update_user'] = \App\Services\AuthService::userData()->ud_account;
            }else{
                $savedata['last_update_user'] = 'bbin';
            }
            if(CommonTools::checkArrayValue($arraydata, "create_date")){
                $savedata['create_date'] = $arraydata['create_date'];
            }else{
                $savedata['create_date'] = \Carbon\Carbon::now();
            }
            if(CommonTools::checkArrayValue($arraydata, "last_update_date")){
                $savedata['last_update_date'] = $arraydata['last_update_date'];
            }else{
                $savedata['last_update_date'] = \Carbon\Carbon::now();
            }
            return LogoSort::insertGetId($savedata);
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
    }

    /**
     * 新增合作夥伴資料
     * @param  array $arraydata [合作夥伴資料]
     */
    public function create($arraydata){
    	try {
            // 檢查必填欄位是否傳入
            if (
                !CommonTools::checkArrayValue($arraydata, "ld_id") ||
                !CommonTools::checkArrayValue($arraydata, "ls_sort")
            ) {
                return false;
            }
            // 填入必填欄位
            $savedata['ld_id'] = $arraydata['ld_id'];
            $savedata['ls_sort'] = $arraydata['ls_sort'];

            // 填入非必填欄位
            if(CommonTools::checkArrayValue($arraydata, "isflag")){
                $savedata['isflag'] = $arraydata['isflag'];
            }else{
                $savedata['isflag'] = 1;
            }
            if(\App\Services\AuthService::userData()->ud_account){
                $savedata['create_user'] = \App\Services\AuthService::userData()->ud_account;
            }else{
                $savedata['create_user'] = 'bbin';
            }
            if(\App\Services\AuthService::userData()->ud_account){
                $savedata['last_update_user'] = \App\Services\AuthService::userData()->ud_account;
            }else{
                $savedata['last_update_user'] = 'bbin';
            }
            if(CommonTools::checkArrayValue($arraydata, "create_date")){
                $savedata['create_date'] = $arraydata['create_date'];
            }else{
                $savedata['create_date'] = \Carbon\Carbon::now();
            }
            if(CommonTools::checkArrayValue($arraydata, "last_update_date")){
                $savedata['last_update_date'] = $arraydata['last_update_date'];
            }else{
                $savedata['last_update_date'] = \Carbon\Carbon::now();
            }

    		LogoSort::insert($savedata);

    		return true;
    	} catch (\Exception $e) {
    		CommonTools::writeErrorLogByException($e);
    		return false;
    	}
    }

    /**
     * 更新合作夥伴資料
     * @param  array $arraydata [合作夥伴資料]
     */
    public function update($arraydata)
    {
        try {
            if (!CommonTools::checkArrayValue($arraydata, "ls_id")) {
                return false;
            }
            if (CommonTools::checkArrayValue($arraydata, "ld_id")) {
                $savedata['ld_id'] = $arraydata['ld_id'];
            }
            
            if (\App\Services\AuthService::userAccount()) {
                $savedata['last_update_user'] = \App\Services\AuthService::userAccount();
            } else {
                $savedata['last_update_user'] = 'bbin';
            }
            if (CommonTools::checkArrayValue($arraydata, "last_update_date")) {
                $savedata['last_update_date'] = $arraydata['last_update_date'];
            } else {
                $savedata['last_update_date'] = \Carbon\Carbon::now();
            }

            LogoSort::where('ls_id', $arraydata['ls_id'])->update($savedata);

            return true;
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
    }    
}