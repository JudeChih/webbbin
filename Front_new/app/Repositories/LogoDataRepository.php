<?php

namespace App\Repositories;

use App\Models\LogoData;
use App\Services\CommonTools;
use DB;

class LogoDataRepository {

    /**
     * 根據傳入值抓取符合的資料
     */
    public function getAllDataNew(){
        return LogoData::where('isflag',1)->where('ld_name','!=','bbin')->orderBy('create_date','DESC')->get();
    }

    /**
     * 根據傳入值抓取符合的資料
     */
    public function getBbinData(){
        return LogoData::where('isflag',1)->where('ld_name','bbin')->get();
    }

}