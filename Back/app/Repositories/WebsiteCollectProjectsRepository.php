<?php

namespace App\Repositories;

use App\Models\WebsiteCollectProjects;
use App\Library\CommonTools;
use DB;

class WebsiteCollectProjectsRepository {

    // /**
    //  * 抓取全部的資料但是排除一樣的pd_id
    //  * @param  [string] $pd_rwd [是否為RWD版型]
    //  */
    // public function getDataWithoutTheSamePdId($pd_rwd){
    //     return WebsiteCollectProjects::leftjoin('mcd_wms.wms_projectdata as db2','projects.pd_id','db2.pd_id')
    //                          ->where('db2.pd_rwd',$pd_rwd)
    //                          ->select(DB::raw('db2.pd_id,count(*) as count'))
    //                          ->groupBy('db2.pd_id')
    //                          ->orderBy('count','DESC')
    //                          ->paginate(10);
    // }
}