<?php

namespace App\Repositories;

use App\Models\SystemParameter;
use App\Services\CommonTools;
use App\Services\AuthService;

class SystemParameterRepository {

	/**
	 * 透過sp_parameterkey抓取相符的系統參數
	 * @param  string $sp_parameterkey [參數名稱]
	 */
	public function getDataByKey($sp_parameterkey){
		try {
			return SystemParameter::where('sp_parameterkey',$sp_parameterkey)->where('isflag',1)->get();
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return false;
		}
	}

	public function update($arraydata){
		try {
			if(CommonTools::checkArrayValue($arraydata, "sp_parameterkeyc")){
    			$savedata['sp_parameterkeyc'] = $arraydata['sp_parameterkeyc'];
    		}
    		if(CommonTools::checkArrayValue($arraydata, "sp_parametervalue")){
    			$savedata['sp_parametervalue'] = $arraydata['sp_parametervalue'];
    		}
    		if(CommonTools::checkArrayValue($arraydata, "sp_paramatertype")){
    			$savedata['sp_paramatertype'] = $arraydata['sp_paramatertype'];
    		}
    		if(CommonTools::checkArrayValue($arraydata, "sp_paramaterdescribe")){
    			$savedata['sp_paramaterdescribe'] = $arraydata['sp_paramaterdescribe'];
    		}
			if(AuthService::userData()->ud_account){
    			$savedata['last_update_user'] = AuthService::userData()->ud_account;
    		}else{
    			$savedata['last_update_user'] = 'bbin';
    		}
    		if(CommonTools::checkArrayValue($arraydata, "last_update_date")){
    			$savedata['last_update_date'] = $arraydata['last_update_date'];
    		}else{
    			$savedata['last_update_date'] = \Carbon\Carbon::now();
    		}

    		SystemParameter::where('sp_id',$arraydata['sp_id'])->update($savedata);

    		return true;
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
    		return false;
		}
	}

}