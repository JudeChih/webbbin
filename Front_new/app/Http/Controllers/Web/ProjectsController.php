<?php

namespace App\Http\Controllers\Web;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\CommonTools;
use DB;

class ProjectsController extends Controller
{
    /**
     * 取得所有切版資訊
     */
    public function getData(){
        $pd_r = new \App\Repositories\ProjectDataRepository;
        try {
            if(!$data = $pd_r->getAllDataNew()){
				return CommonTools::returnData('資料獲取失敗');
			}
            return response()->json($data);
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return CommonTools::returnData('#010101');
        }
    }

    /**
     * 取得某版型資訊
     */
    public function getProject($id){
        $pd_r = new \App\Repositories\ProjectDataRepository;
        try {
            if(!$data = $pd_r->getDataById($id)){
				return CommonTools::returnData('資料獲取失敗');
			}
            return response()->json($data);
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return CommonTools::returnData('#010102');
        }
    }

    /**
     * 取得前一個切版資訊
     */
    public function getPrevProject($id){
        try {
            $pd_r = new \App\Repositories\ProjectDataRepository;
            $data = $pd_r->getDataById($id);
            if(!$data = $pd_r->getPrevDataByDate($data['pd_date'])){
                $data = $pd_r->getLastData();
            }
            return response()->json($data);
        } catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return CommonTools::returnData('#010103');
		}
    }

    /**
     * 取得下一個切版資訊
     */
    public function getNextProject($id){
        try {
            $pd_r = new \App\Repositories\ProjectDataRepository;
            $data = $pd_r->getDataById($id);
            if(!$data = $pd_r->getNextDataByDate($data['pd_date'])){
                $data = $pd_r->getFirstData();
            }
            return response()->json($data);
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return CommonTools::returnData('#010104');
        }
    }
}