<?php

namespace App\Http\Controllers\Web;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\CommonTools;
use DB;

class LogosController extends Controller
{
    public function getData(){
        $ls_r = new \App\Repositories\LogoSortRepository;
        $data = $ls_r->getAllData();
        $array = array();
        for($i = 0;$i < count($data);$i++){
            $boolean = true;
            if($data[$i]['ld_casino'] == 0 && $data[$i]['ld_sports'] == 0 && $data[$i]['ld_card'] == 0 && $data[$i]['ld_live'] == 0 && $data[$i]['ld_lottery'] == 0 && $data[$i]['ld_fishing'] == 0 && $data[$i]['ld_mahjong'] == 0){
                $boolean = false;
            }
            if($boolean){
                array_push($array,$data[$i]);
            }

        }
        return response()->json($array);
    }

    public function getBbinData(){
        $ld_r = new \App\Repositories\LogoDataRepository;
        $data = $ld_r->getBbinData();
        return response()->json($data);
    }
}