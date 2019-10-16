<?php

namespace App\Repositories;

use App\Models\ModelRecord;
use App\Library\CommonTools;
use DB;

class ModelRecordRepository {

    /**
     * 根據傳入值抓取符合的資料
     * @param  [array] $arraydata [搜尋條件]
     */
    public function getAllData($arraydata){
    	$string = ModelRecord::leftjoin('wms_projectdata','wms_modelrecord.pd_id','wms_projectdata.pd_id');
    	if(CommonTools::checkArrayValue($arraydata, "mr_name")){
    		$string->where('wms_modelrecord.mr_name','like', '%'.$arraydata['mr_name'].'%');
    	}
    	$string->select('wms_projectdata.pd_id','wms_projectdata.pd_num','wms_projectdata.pd_rwd','wms_projectdata.pd_view_img','wms_modelrecord.*');
    	return $string->where('wms_projectdata.isflag',1)->where('wms_modelrecord.isflag',1)->orderBy('create_date','DESC')->paginate(12);
    }

    /**
     * 取得全部的版型紀錄，取得總數
     */
    public function getAllDataCount(){
        return ModelRecord::where('isflag',1)->count();
    }

    /**
     * 透過租網名稱抓取相符的版型紀錄
     * @param  [string] $mr_name [業主、租網名稱]
     */
    public function getDataByName($mr_name){
    	return ModelRecord::where("mr_name",$mr_name)->where('isflag',1)->get();
    }

    /**
     * 透過TPL抓取相符的版型紀錄
     * @param  [string] $mr_tpl [唯一性代號]
     */
    public function getDataByTPL($mr_tpl){
    	return ModelRecord::where("mr_tpl",$mr_tpl)->where('isflag',1)->get();
    }

    /**
     * 透過ID抓取相符的版型紀錄
     * @param  [string] $mr_id [版型紀錄編號]
     */
    public function getDataById($mr_id){
    	return ModelRecord::where("mr_id",$mr_id)->where('isflag',1)->get();
    }

    /**
     * 透過傳入的id以及tpl抓取符合的網版資料
     * @param  [string] $mr_id  [網版編號]
     * @param  [string] $mr_tpl [唯一性編號]
     */
    public function getDataByIdTPL($mr_id,$mr_tpl){
        return ModelRecord::where("mr_id","!=",$mr_id)->where('mr_tpl',$mr_tpl)->where('isflag',1)->get();
    }

    /**
     * 透過傳入的id以及name抓取符合的網版資料
     * @param  [string] $mr_id   [網版編號]
     * @param  [string] $mr_name [業主、租網名稱]
     */
    public function getDataByIdName($mr_id,$mr_name){
        return ModelRecord::where("mr_id","!=",$mr_id)->where('mr_name',$mr_name)->where('isflag',1)->get();
    }

    /**
     * 抓取上周新增的版型紀錄總數
     */
    public function getDataBetweenLastWeek(){
        return ModelRecord::where('isflag',1)->whereBetween('create_date', array(\Carbon\Carbon::parse('last saturday')->subDays(6)->toDateTimeString(),\Carbon\Carbon::parse('last saturday')->toDateTimeString()))->count();
    }

    /**
     * 取得最近新增的三筆版型紀錄資料
     */
    public function getThreeLatestData(){
        return ModelRecord::where('isflag',1)->orderBy('create_date','DESC')->take(3)->get();
    }

    /**
     * 刪除版型紀錄
     * @param  [array] $mr_id [版型紀錄id]
     */
    public function delete($mr_id){
    	try {
            if(\App\Services\AuthService::userData()->ud_account){
                $savedata['last_update_user'] = \App\Services\AuthService::userData()->ud_account;
            }else{
                $savedata['last_update_user'] = 'bbin';
            }
    		$savedata['isflag'] = 0;
    		ModelRecord::where('mr_id',$mr_id)->update($savedata);
    		return true;
    	} catch (\Exception $e) {
    		CommonTools::writeErrorLogByException($e);
    		return false;
    	}
    }

    /**
     * 新增版型紀錄，並回傳版型紀錄編號
     * @param  [array] $arraydata [版型資料]
     */
    public function createGetId($arraydata){
    	try {
    		// 檢查必填欄位是否傳入
            if(!CommonTools::checkArrayValue($arraydata, "pd_id") ||
               !CommonTools::checkArrayValue($arraydata, "mr_name") ||
               !CommonTools::checkArrayValue($arraydata, "mr_designer") ||
               !CommonTools::checkArrayValue($arraydata, "mr_tpl") ||
               !CommonTools::checkArrayValue($arraydata, "mr_filepath") ||
               !CommonTools::checkArrayValue($arraydata, "mr_date") ||
               !CommonTools::checkArrayValue($arraydata, "mr_view_img")
            ){
                return false;
        	}

        	// 填入必填欄位
            $savedata['pd_id'] = $arraydata['pd_id'];
            $savedata['mr_name'] = $arraydata['mr_name'];
            $savedata['mr_designer'] = $arraydata['mr_designer'];
            $savedata['mr_tpl'] = $arraydata['mr_tpl'];
            $savedata['mr_filepath'] = $arraydata['mr_filepath'];
            $savedata['mr_date'] = $arraydata['mr_date'];
            $savedata['mr_view_img'] = $arraydata['mr_view_img'];

            // 填入非必填欄位
            if(CommonTools::checkArrayValue($arraydata, "mr_url")){
                $savedata['mr_url'] = $arraydata['mr_url'];
            }
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

            return ModelRecord::insertGetId($savedata);

    	} catch (\Exception $e) {
    		CommonTools::writeErrorLogByException($e);
    		return false;
    	}
    }

    /**
     * 新增版型紀錄
     * @param  [array] $arraydata [版型資料]
     */
    public function create($arraydata){
    	try {
    		// 檢查必填欄位是否傳入
            if(!CommonTools::checkArrayValue($arraydata, "pd_id") ||
               !CommonTools::checkArrayValue($arraydata, "mr_name") ||
               !CommonTools::checkArrayValue($arraydata, "mr_designer") ||
               !CommonTools::checkArrayValue($arraydata, "mr_tpl") ||
               !CommonTools::checkArrayValue($arraydata, "mr_filepath") ||
               !CommonTools::checkArrayValue($arraydata, "mr_date") ||
               !CommonTools::checkArrayValue($arraydata, "mr_view_img")
            ){
                return false;
        	}

        	// 填入必填欄位
            $savedata['pd_id'] = $arraydata['pd_id'];
            $savedata['mr_name'] = $arraydata['mr_name'];
            $savedata['mr_designer'] = $arraydata['mr_designer'];
            $savedata['mr_tpl'] = $arraydata['mr_tpl'];
            $savedata['mr_filepath'] = $arraydata['mr_filepath'];
            $savedata['mr_date'] = $arraydata['mr_date'];
            $savedata['mr_view_img'] = $arraydata['mr_view_img'];

            // 填入非必填欄位
            if(CommonTools::checkArrayValue($arraydata, "mr_url")){
                $savedata['mr_url'] = $arraydata['mr_url'];
            }
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

            ModelRecord::insert($savedata);

            return true;

    	} catch (\Exception $e) {
    		CommonTools::writeErrorLogByException($e);
    		return false;
    	}
    }

    /**
     * 更新版型紀錄
     * @param  [array] $arraydata [版型資料]
     */
    public function update($arraydata){
    	try {
    		if(!CommonTools::checkArrayValue($arraydata, "mr_id")){
    			return false;
    		}

    		if(CommonTools::checkArrayValue($arraydata, "pd_id")){
                $savedata['pd_id'] = $arraydata['pd_id'];
            }
    		if(CommonTools::checkArrayValue($arraydata, "mr_name")){
    			$savedata['mr_name'] = $arraydata['mr_name'];
    		}
    		if(CommonTools::checkArrayValue($arraydata, "mr_designer")){
                $savedata['mr_designer'] = $arraydata['mr_designer'];
            }
    		if(CommonTools::checkArrayValue($arraydata, "mr_tpl")){
    			$savedata['mr_tpl'] = $arraydata['mr_tpl'];
    		}
    		if(CommonTools::checkArrayValue($arraydata, "mr_filepath")){
                $savedata['mr_filepath'] = $arraydata['mr_filepath'];
            }
    		if(CommonTools::checkArrayValue($arraydata, "mr_date")){
    			$savedata['mr_date'] = $arraydata['mr_date'];
    		}
    		if(CommonTools::checkArrayValue($arraydata, "mr_view_img")){
    			$savedata['mr_view_img'] = $arraydata['mr_view_img'];
    		}
    		if(CommonTools::checkArrayValue($arraydata, "mr_url")){
                $savedata['mr_url'] = $arraydata['mr_url'];
            }
    		if(\App\Services\AuthService::userData()->ud_account){
    			$savedata['last_update_user'] = \App\Services\AuthService::userData()->ud_account;
    		}else{
    			$savedata['last_update_user'] = 'bbin';
    		}
    		if(CommonTools::checkArrayValue($arraydata, "last_update_date")){
    			$savedata['last_update_date'] = $arraydata['last_update_date'];
    		}else{
    			$savedata['last_update_date'] = \Carbon\Carbon::now();
    		}

    		ModelRecord::where('mr_id',$arraydata['mr_id'])->update($savedata);

    		return true;

    	} catch (\Exception $e) {
    		CommonTools::writeErrorLogByException($e);
    		return false;
    	}
    }
}