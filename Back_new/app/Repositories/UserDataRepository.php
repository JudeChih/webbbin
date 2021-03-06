<?php

namespace App\Repositories;

use App\Models\UserData;
use App\Services\CommonTools;
use App\Services\AuthService;

class UserDataRepository {

	/**
	 * 根據傳入值抓取符合的資料
	 * @param  array $arraydata [description]
	 */
	public function getAllData($arraydata){
		try {
			$string = UserData::where('isflag',1);
			if(CommonTools::checkArrayValue($arraydata, "ud_name")){
				$string->where(function ($string) use ($arraydata) {
					$string->where('ud_account', 'like', '%' . $arraydata['ud_name'] . '%')->orWhere('ud_name', 'like', '%' . $arraydata['ud_name'] . '%');
				});
			}
			return $string->orderBy('create_date','DESC')->get();
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return false;
		}
	}

	/**
	 * 取得全部的使用者，取得總數
	 */
	public function getAllDataCount(){
		try {
			return UserData::where('isflag',1)->count();
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return false;
		}
	}

	/**
	 * 取得所有登入過的使用者
	 */
	public function getAllUserLastLogin($arraydata){
		try {
			return UserData::where('isflag',1)->where('ud_last_login',"!=",null)->orderBy('ud_last_login','DESC')->get();
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return false;
		}
	}

	/**
	 * 透過帳號密碼取得符合的使用者資料
	 * @param  string $ud_account  [使用者帳號]
	 * @param  string $ud_password [使用者密碼]
	 */
	public function getDataByAccountPwd($ud_account,$ud_password){
		try {
			return UserData::where("ud_account","=",$ud_account)->where("ud_password","=",$ud_password)->where('ud_status','=',1)->get();
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return false;
		}
	}

	/**
	 * 檢查是否該帳號已被使用
	 * @param  string $ud_account  [使用者帳號]
	 */
	public function getDataByAccount($ud_account){
		try {
			return UserData::where("ud_account", "=", $ud_account)->where('isflag',1)->get();
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return false;
		}
	}

	/**
	 * 透過id抓取相符的使用者資料
	 * @param  string $ud_id [使用者編號]
	 */
	public function getDataById($ud_id){
		try {
			return UserData::where('ud_id',$ud_id)->where('isflag',1)->get();
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return false;
		}
	}

	/**
	 * 透過id跟password抓取相符的使用者資料
	 * @param  string $ud_id       [使用者編號]
	 * @param  string $ud_password [使用者密碼]
	 */
	public function getDataByIdPwd($ud_id,$ud_password){
		try {
			return UserData::where('ud_id',$ud_id)->where('ud_password',$ud_password)->where('isflag',1)->select('ud_id','ud_account','ud_name')->get();
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return false;
		}
	}

	/**
	 * 抓取上周新增的使用者資料
	 */
	public function getDataBetweenLastWeek(){
		try {
			return UserData::where('isflag',1)->whereBetween('create_date', array(\Carbon\Carbon::parse('last saturday')->subDays(6)->toDateTimeString(),\Carbon\Carbon::parse('last saturday')->toDateTimeString()))->count();
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return false;
		}
	}

    /**
     * 刪除使用者
     * @param  string $ud_id [使用者編號]
     */
	public function delete($ud_id){
    	try {
            $savedata['last_update_user'] = AuthService::userData()->ud_account;
    		$savedata['isflag'] = 0;
    		UserData::where('ud_id',$ud_id)->update($savedata);
    		return true;
    	} catch (\Exception $e) {
    		CommonTools::writeErrorLogByException($e);
    		return false;
    	}
    }

	/**
	 * 新增使用者
	 * @param  array $arraydata [使用者資訊]
	 */
	public function createGetId($arraydata){
		try {
			// 檢查必傳欄位
			if(!CommonTools::checkArrayValue($arraydata,'ud_name') ||
			   !CommonTools::checkArrayValue($arraydata,'ud_account') ||
			   !CommonTools::checkArrayValue($arraydata,'ud_password')){
				return false;
			}
			// 填入必傳欄位
			$savedata['ud_name'] = $arraydata['ud_name'];
			$savedata['ud_account'] = $arraydata['ud_account'];
			$savedata['ud_password'] = $arraydata['ud_password'];

			// 檢查非必傳欄位並填入
			if(CommonTools::checkArrayValue($arraydata,'ud_status')){
				$savedata['ud_status'] = $arraydata['ud_status'];
			}
			if(CommonTools::checkArrayValue($arraydata,'ud_admin')){
				$savedata['ud_admin'] = $arraydata['ud_admin'];
			}
			if(CommonTools::checkArrayValue($arraydata,'isflag')){
				$savedata['isflag'] = $arraydata['isflag'];
			}else{
				$savedata['isflag'] = 1;
			}
			if(CommonTools::checkArrayValue($arraydata,'create_user')){
				$savedata['create_user'] = $arraydata['create_user'];
			}
			if(CommonTools::checkArrayValue($arraydata,'create_date')){
				$savedata['create_date'] = $arraydata['create_date'];
			}else{
				$savedata['create_date'] = \Carbon\Carbon::now();
			}

			// 新增使用者
			return UserData::insertGetId($savedata);
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return false;
		}
	}

	/**
	 * 更新使用者
	 * @param  array $arraydata [使用者資訊]
	 */
	public function update($arraydata){
		try {
			// 檢查必傳欄位
			if(!CommonTools::checkArrayValue($arraydata,'ud_id')){
				return false;
			}
			// 檢查所有欄位是否有傳入值，有的話新增，沒有的話跳過
			if(CommonTools::checkArrayValue($arraydata,'ud_name')){
				$savedata['ud_name'] = $arraydata['ud_name'];
			}
			if(CommonTools::checkArrayValue($arraydata,'ud_password')){
				$savedata['ud_password'] = $arraydata['ud_password'];
			}
			if(CommonTools::checkArrayValue($arraydata,'ud_status')){
				$savedata['ud_status'] = $arraydata['ud_status'];
			}
			if(CommonTools::checkArrayValue($arraydata,'ud_admin')){
				$savedata['ud_admin'] = $arraydata['ud_admin'];
			}
			if(CommonTools::checkArrayValue($arraydata,'ud_last_login')){
				$savedata['ud_last_login'] = $arraydata['ud_last_login'];
			}
			if(CommonTools::checkArrayValue($arraydata,'isflag')){
				$savedata['isflag'] = $arraydata['isflag'];
			}
			if(CommonTools::checkArrayValue($arraydata,'last_update_user')){
				$savedata['last_update_user'] = $arraydata['last_update_user'];
			}else{
				$savedata['last_update_user'] = 'bbin';
			}
			if(CommonTools::checkArrayValue($arraydata,'last_update_date')){
				$savedata['last_update_date'] = $arraydata['last_update_date'];
			}else{
				$savedata['last_update_date'] = \Carbon\Carbon::now();
			}
			// 更新使用者
			UserData::where("ud_id","=",$arraydata['ud_id'])->update($savedata);

			return true;
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return false;
		}
	}
}