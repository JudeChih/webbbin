<?php

namespace App\Repositories;

use App\Models\LogoSort;
use App\Services\CommonTools;

class LogoSortRepository {

	/**
	 * 抓取全部資料
	 */
	public function getAllData(){
        try {
            return LogoSort::leftjoin('wms_logodata', 'wms_logodata.ld_id','wms_logosort.ld_id')->orderBy('wms_logosort.ls_sort','ASC')->where('wms_logodata.isflag', 1)->where('wms_logosort.isflag',1)->get();
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
		
    }
}