<?php

namespace App\Repositories;

use App\Models\LogoData;
use App\Services\CommonTools;

class LogoDataRepository {

	/**
	 * 根據傳入值抓取符合的資料，然後分頁一次n筆
	 * @param  array $arraydata [description]
	 */
	public function getAllData($arraydata){
        try {
            $string = LogoData::where('isflag',1);
            if(CommonTools::checkArrayValue($arraydata, "ld_name")){
                $string->where('ld_name','like', '%'.$arraydata['ld_name'].'%');
            }
            return $string->get();
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
    }
    
    /**
     * 取得合作夥伴的資料，取得總數
     */
    public function getLogoCount(){
        return LogoData::where("isflag",1)->count();
    }

    /**
     * 透過合作夥伴編號取得相符的資料
     * @param  string $ld_id [合作夥伴編號]
     */
    public function getDataById($ld_id){
        try {
            return LogoData::where("ld_id",$ld_id)->where('isflag',1)->get();
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
    }

    /**
     * 透過合作夥伴名稱取得相符的資料
     * @param  string $ld_name [合作夥伴名稱]
     */
    public function getDataByName($ld_name){
        try {
            return LogoData::where("ld_name",$ld_name)->where('isflag',1)->count();
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
    }

    /**
     * 查看該名稱是否被其他合作夥伴使用中
     * @param  string $ld_id   [合作夥伴編號]
     * @param  string $ld_name [合作夥伴名稱]
     */
    public function getDataByIDName($ld_id,$ld_name){
        try {
            return LogoData::where("ld_id","!=",$ld_id)->where("ld_name",$ld_name)->where('isflag',1)->get();
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
    }

    /**
     * 刪除合作夥伴
     * @param  string $ld_id [版型編號]
     */
	public function delete($ld_id){
    	try {
            $savedata['last_update_user'] = \App\Services\AuthService::userData()->ud_account;
    		$savedata['isflag'] = 0;
    		LogoData::where('ld_id',$ld_id)->update($savedata);
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
            if(!CommonTools::checkArrayValue($arraydata, "ld_name") ||
               !CommonTools::checkArrayValue($arraydata, "ld_img")
            ){
                return false;
            }
            // 填入必填欄位
            $savedata['ld_name'] = $arraydata['ld_name'];
            $savedata['ld_img'] = $arraydata['ld_img'];

            // 填入非必填欄位
            if(CommonTools::checkArrayValue($arraydata, "ld_casino")){
                $savedata['ld_casino'] = $arraydata['ld_casino'];
            }elseif($arraydata['ld_casino'] == 0){
                $savedata['ld_casino'] = 0;
            }
            if(CommonTools::checkArrayValue($arraydata, "ld_sports")){
                $savedata['ld_sports'] = $arraydata['ld_sports'];
            }elseif($arraydata['ld_sports'] == 0){
                $savedata['ld_sports'] = 0;
            }
            if(CommonTools::checkArrayValue($arraydata, "ld_card")){
                $savedata['ld_card'] = $arraydata['ld_card'];
            }elseif($arraydata['ld_card'] == 0){
                $savedata['ld_card'] = 0;
            }
            if(CommonTools::checkArrayValue($arraydata, "ld_live")){
                $savedata['ld_live'] = $arraydata['ld_live'];
            }elseif($arraydata['ld_live'] == 0){
                $savedata['ld_live'] = 0;
            }
            if(CommonTools::checkArrayValue($arraydata, "ld_lottery")){
                $savedata['ld_lottery'] = $arraydata['ld_lottery'];
            }elseif($arraydata['ld_lottery'] == 0){
                $savedata['ld_lottery'] = 0;
            }
            if(CommonTools::checkArrayValue($arraydata, "ld_fishing")){
                $savedata['ld_fishing'] = $arraydata['ld_fishing'];
            }elseif($arraydata['ld_fishing'] == 0){
                $savedata['ld_fishing'] = 0;
            }
            if(CommonTools::checkArrayValue($arraydata, "ld_mahjong")){
                $savedata['ld_mahjong'] = $arraydata['ld_mahjong'];
            }elseif($arraydata['ld_mahjong'] == 0){
                $savedata['ld_mahjong'] = 0;
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
            return LogoData::insertGetId($savedata);
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
            if(!CommonTools::checkArrayValue($arraydata, "ld_name") ||
               !CommonTools::checkArrayValue($arraydata, "ld_img")
            ){
                return false;
            }
            // 填入必填欄位
            $savedata['ld_name'] = $arraydata['ld_name'];
            $savedata['ld_img'] = $arraydata['ld_img'];

            // 填入非必填欄位
            if(CommonTools::checkArrayValue($arraydata, "ld_casino")){
                $savedata['ld_casino'] = $arraydata['ld_casino'];
            }elseif($arraydata['ld_casino'] == 0){
                $savedata['ld_casino'] = 0;
            }
            if(CommonTools::checkArrayValue($arraydata, "ld_sports")){
                $savedata['ld_sports'] = $arraydata['ld_sports'];
            }elseif($arraydata['ld_sports'] == 0){
                $savedata['ld_sports'] = 0;
            }
            if(CommonTools::checkArrayValue($arraydata, "ld_card")){
                $savedata['ld_card'] = $arraydata['ld_card'];
            }elseif($arraydata['ld_card'] == 0){
                $savedata['ld_card'] = 0;
            }
            if(CommonTools::checkArrayValue($arraydata, "ld_live")){
                $savedata['ld_live'] = $arraydata['ld_live'];
            }elseif($arraydata['ld_live'] == 0){
                $savedata['ld_live'] = 0;
            }
            if(CommonTools::checkArrayValue($arraydata, "ld_lottery")){
                $savedata['ld_lottery'] = $arraydata['ld_lottery'];
            }elseif($arraydata['ld_lottery'] == 0){
                $savedata['ld_lottery'] = 0;
            }
            if(CommonTools::checkArrayValue($arraydata, "ld_fishing")){
                $savedata['ld_fishing'] = $arraydata['ld_fishing'];
            }elseif($arraydata['ld_fishing'] == 0){
                $savedata['ld_fishing'] = 0;
            }
            if(CommonTools::checkArrayValue($arraydata, "ld_mahjong")){
                $savedata['ld_mahjong'] = $arraydata['ld_mahjong'];
            }elseif($arraydata['ld_mahjong'] == 0){
                $savedata['ld_mahjong'] = 0;
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

    		LogoData::insert($savedata);

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
    public function update($arraydata){
    	try {
    		if(!CommonTools::checkArrayValue($arraydata, "ld_id")){
    			return false;
    		}
            if(CommonTools::checkArrayValue($arraydata, "ld_name")){
                $savedata['ld_name'] = $arraydata['ld_name'];
            }
            if(CommonTools::checkArrayValue($arraydata, "ld_img")){
                $savedata['ld_img'] = $arraydata['ld_img'];
            }
			if(CommonTools::checkArrayValue($arraydata, "ld_casino")){
                $savedata['ld_casino'] = $arraydata['ld_casino'];
            }
            if(CommonTools::checkArrayValue($arraydata, "ld_sports")){
                $savedata['ld_sports'] = $arraydata['ld_sports'];
            }
            if(CommonTools::checkArrayValue($arraydata, "ld_card")){
                $savedata['ld_card'] = $arraydata['ld_card'];
            }
            if(CommonTools::checkArrayValue($arraydata, "ld_live")){
                $savedata['ld_live'] = $arraydata['ld_live'];
            }
            if(CommonTools::checkArrayValue($arraydata, "ld_lottery")){
                $savedata['ld_lottery'] = $arraydata['ld_lottery'];
            }
            if(CommonTools::checkArrayValue($arraydata, "ld_fishing")){
                $savedata['ld_fishing'] = $arraydata['ld_fishing'];
            }
            if(CommonTools::checkArrayValue($arraydata, "ld_mahjong")){
                $savedata['ld_mahjong'] = $arraydata['ld_mahjong'];
            }
			if(\App\Services\AuthService::userAccount()){
    			$savedata['last_update_user'] = \App\Services\AuthService::userAccount();
    		}else{
    			$savedata['last_update_user'] = 'bbin';
    		}
    		if(CommonTools::checkArrayValue($arraydata, "last_update_date")){
    			$savedata['last_update_date'] = $arraydata['last_update_date'];
    		}else{
    			$savedata['last_update_date'] = \Carbon\Carbon::now();
    		}

    		LogoData::where('ld_id',$arraydata['ld_id'])->update($savedata);

    		return true;
    	} catch (\Exception $e) {
    		CommonTools::writeErrorLogByException($e);
    		return false;
    	}
    }
}