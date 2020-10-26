<?php

namespace App\Repositories;

use App\Models\ProjectData;
use App\Services\CommonTools;
use App\Services\AuthService;
use DB;

class ProjectDataRepository {

    /**
     * 根據傳入值抓取符合的資料
     * @param array $arraydata [搜尋條件]
     */
    public function getAllData($arraydata){
        try {
            $string = ProjectData::where('pd_rwd',0)->where('isflag',1);
            if(CommonTools::checkArrayValue($arraydata, "pd_num")){
                $string->where('pd_num','like', '%'.$arraydata['pd_num'].'%');
            }
            return $string->orderBy($arraydata['orderBy'],'DESC')->get();
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
    }

    /**
     * 透過網版編號取得相符的資料
     * @param  string $pd_id [網版編號]
     */
    public function getDataById($pd_id){
        try {
            return ProjectData::where("pd_id",$pd_id)->where('isflag',1)->get();
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
    }

    /**
     * 透過網版名稱取得相符的資料
     * @param  string $pd_num [網版名稱]
     */
    public function getDataByNum($pd_num){
        try {
            return ProjectData::where("pd_num",$pd_num)->where('isflag',1)->get();
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
    }

    /**
     * 透過線上Demo取得相符的資料
     * @param  string $pd_live [是否有線上Demo]
     */
    public function getDataByLive($pd_live){
        try {
            return ProjectData::where("pd_live",$pd_live)->where('isflag',1)->get();
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
    }

    /**
     * 透過熱門版型取得相符的RWD資料
     */
    public function getDataByHotIsRwd(){
        try {
            return ProjectData::where("pd_hot",1)->where('pd_rwd',1)->where('isflag',1)->get();
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
    }

    /**
     * 透過熱門版型取得相符的資料
     */
    public function getDataByHotIsAdaptive(){
        try {
            return ProjectData::where("pd_hot",1)->where('pd_rwd',0)->where('isflag',1)->get();
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
    }

    /**
     * 選取不熱門的版型
     */
    public function getDataByNotHot($pd_rwd){
        try {
            return ProjectData::where('pd_rwd',$pd_rwd)->where('pd_hot',0)->where('isflag',1)->get();
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
    }

    /**
     * 透過傳入的id以及num抓取符合的網版資料
     * @param  string $pd_id  [網版編號]
     * @param  string $pd_num [網版名稱]
     */
    public function getDataByIdNum($pd_id,$pd_num){
        try {
            return ProjectData::where("pd_id","!=",$pd_id)->where('pd_num',$pd_num)->where('isflag',1)->get();
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
    }

    /**
     * 抓取全部網版的pd_id和pd_num
     */
    public function getIdNum(){
        try {
            return ProjectData::where("isflag",1)->select('pd_id','pd_num','pd_rwd')->get();
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
    }

    /**
     * 取得固定網版的資料，取得總數
     */
    public function getAdaptiveCount(){
        try {
            return ProjectData::where('pd_rwd',0)->where("isflag",1)->count();
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
    }

    /**
     * 取得RWD網版的資料，取得總數
     */
    public function getRwdCount(){
        try {
            return ProjectData::where('pd_rwd',1)->where("isflag",1)->count();
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
    }

    /**
     * 抓取上周新增的固定網版總數
     */
    public function getAdaptiveBetweenLastWeek(){
        try {
            return ProjectData::where('pd_rwd',0)->where('isflag',1)->whereBetween('create_date', array(\Carbon\Carbon::parse('last saturday')->subDays(6)->toDateTimeString(),\Carbon\Carbon::parse('last saturday')->toDateTimeString()))->count();
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
    }

    /**
     * 抓取固定網版某個網版布局的總數
     * @param  string $pd_layout [網版布局]
     */
    public function getAdaptiveLayoutCount($pd_layout){
        try {
            return ProjectData::where('pd_rwd',0)->where('pd_layout',$pd_layout)->where("isflag",1)->count();
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
    }

    /**
     * 抓取固定網版某個網版風格的總數
     * @param  string $pd_style [網版風格]
     */
    public function getAdaptiveStyleCount($pd_style){
        try {
            return ProjectData::where('pd_rwd',0)->where('pd_style',$pd_style)->where("isflag",1)->count();
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
    }

    /**
     * 抓取固定網版某個網版色系的總數
     * @param  string $pd_colors [網版色系]
     */
    public function getAdaptiveColorCount($pd_colors){
        try {
            return ProjectData::where('pd_rwd',0)->where('pd_colors','like',"%".$pd_colors."%")->where("isflag",1)->count();
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
    }

    /**
     * 抓取上周新增的RWD網版總數
     */
    public function getRwdBetweenLastWeek(){
        try {
            return ProjectData::where('pd_rwd',1)->where('isflag',1)->whereBetween('create_date', array(\Carbon\Carbon::parse('last saturday')->subDays(6)->toDateTimeString(),\Carbon\Carbon::parse('last saturday')->toDateTimeString()))->count();
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
    }

    /**
     * 取得最近新增的三筆固定網版資料
     */
    public function getThreeLatestAdaptiveData($arraydata){
        try {
            return ProjectData::where('pd_rwd',0)->where('isflag',1)->orderBy($arraydata['orderBy'],'DESC')->take(3)->get();
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
    }

    /**
     * 取得最近新增的三筆RWD網版資料
     */
    public function getThreeLatestRwdData(){
        try {
            return ProjectData::where('pd_rwd',1)->where('isflag',1)->orderBy('create_date','DESC')->take(3)->get();
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
    }

    /**
     * 取得最近新增的五筆固定網版資料
     */
    public function getFiveLatestAdaptiveData(){
        try {
            return ProjectData::where('pd_rwd',0)->where('isflag',1)->orderBy('create_date','DESC')->select('pd_id','pd_num')->take(5)->get();
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
    }

    /**
     * 取得最近新增的五筆RWD網版資料
     */
    public function getFiveLatestRwdData(){
        try {
            return ProjectData::where('pd_rwd',1)->where('isflag',1)->orderBy('create_date','DESC')->take(5)->get();
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
    }

    /**
     * 取得熱門排行推薦
     */
    public function getAdaptiveDataByTop10(){
        try {
            return ProjectData::where('isflag',1)->where('pd_rwd',0)->where('pd_hot',1)->where('pd_hot_top',1)->get();
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
    }

    /**
     * 取得不是熱門排行推薦的熱門排行
     */
    public function getAdaptiveDataByNotTop10(){
        try {
            return ProjectData::where('isflag',1)->where('pd_rwd',0)->where('pd_hot',1)->where('pd_hot_top',0)->get();
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
    }

    /**
     * 取得熱門排行屬於固定版型的資料
     */
    public function getAllAdaptiveData(){
        try {
            return ProjectData::where('isflag',1)->where('pd_rwd',0)->where('pd_hot',1)->get();
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
    }

    /**
     * 取得熱門排行推薦
     */
    public function getRwdDataByTop10(){
        try {
            return ProjectData::where('isflag',1)->where('pd_rwd',1)->where('pd_hot',1)->where('pd_hot_top',1)->get();
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
    }

    /**
     * 取得不是熱門排行推薦的熱門排行
     */
    public function getRwdDataByNotTop10(){
        try {
            return ProjectData::where('isflag',1)->where('pd_rwd',1)->where('pd_hot',1)->where('pd_hot_top',0)->get();
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
    }

    /**
     * 取得熱門排行屬於固定版型的資料
     */
    public function getAllRwdData(){
        try {
            return ProjectData::where('isflag',1)->where('pd_rwd',1)->where('pd_hot',1)->get();
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
    }

    /**
     * 抓取全部的資料但是排除一樣的pd_id
     * @param  string $pd_rwd [是否為RWD版型]
     */
    public function getDataWithoutTheSamePdId($pd_rwd){
        try {
            return ProjectData::leftjoin('websitecollect.projects as db2','wms_projectdata.pd_id','db2.pd_id')
                             ->where('wms_projectdata.pd_rwd',$pd_rwd)
                             ->where('wms_projectdata.isflag',1)
                             ->select(DB::raw('wms_projectdata.pd_id,count(db2.pd_id) as count'))
                             ->groupBy('wms_projectdata.pd_id')
                             ->orderBy('count','DESC')
                             ->paginate(10);
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
    }

    /**
     * 重置熱門排行推薦
     * @return string [description]
     */
    public function updateAllTop10ToHot($pd_rwd){
        try {
            $savedata['pd_hot_top'] = 0;
            return ProjectData::where('isflag',1)->where('pd_rwd',$pd_rwd)->where('pd_hot',1)->where('pd_hot_top',1)->update($savedata);
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
    }

    /**
     * 刪除版型
     * @param  string $pd_id [版型編號]
     */
	public function delete($pd_id){
    	try {
            $savedata['last_update_user'] = AuthService::userData()->ud_account;
    		$savedata['isflag'] = 0;
    		ProjectData::where('pd_id',$pd_id)->update($savedata);
    		return true;
    	} catch (\Exception $e) {
    		CommonTools::writeErrorLogByException($e);
    		return false;
    	}
    }

    /**
     * 新增網版資料，並且回傳pd_id
     * @param  array  $arraydata [網版資料]
     * @return string $pd_id     [網版編號]
     */
    public function createGetId($arraydata){
        try {
            // 檢查必填欄位是否傳入
            if(!CommonTools::checkArrayValue($arraydata, "pd_num") ||
               !CommonTools::checkArrayValue($arraydata, "pd_date") ||
               !CommonTools::checkArrayValue($arraydata, "pd_show") ||
               !CommonTools::checkArrayValue($arraydata, "pd_new") ||
               !CommonTools::checkArrayValue($arraydata, "pd_hot") ||
               !CommonTools::checkArrayValue($arraydata, "pd_live") ||
               !CommonTools::checkArrayValue($arraydata, "pd_layout") ||
               !CommonTools::checkArrayValue($arraydata, "pd_style") ||
               !CommonTools::checkArrayValue($arraydata, "pd_colors") ||
               !CommonTools::checkArrayValue($arraydata, "pd_view_img") ||
               !CommonTools::checkArrayValue($arraydata, "pd_banner_img")
            ){
                return false;
            }
            // 填入必填欄位
            $savedata['pd_date'] = $arraydata['pd_date'];
            $savedata['pd_num'] = $arraydata['pd_num'];
            $savedata['pd_show'] = $arraydata['pd_show'];
            $savedata['pd_new'] = $arraydata['pd_new'];
            $savedata['pd_hot'] = $arraydata['pd_hot'];
            $savedata['pd_live'] = $arraydata['pd_live'];
            $savedata['pd_rwd'] = 0;
            if($savedata['pd_rwd'] == 0){
                $savedata['pd_desktop_check'] = 1;
                $savedata['pd_tablet_check'] = 0;
                $savedata['pd_mobile_check'] = 0;
            }elseif($savedata['pd_rwd'] == 1){
                $savedata['pd_desktop_check'] = 1;
                $savedata['pd_tablet_check'] = 1;
                $savedata['pd_mobile_check'] = 1;
            }
            $savedata['pd_layout'] = $arraydata['pd_layout'];
            $savedata['pd_style'] = $arraydata['pd_style'];
            $savedata['pd_colors'] = $arraydata['pd_colors'];
            $savedata['pd_view_img'] = $arraydata['pd_view_img'];
            $savedata['pd_banner_img'] = $arraydata['pd_banner_img'];
            // 填入非必填欄位
            if(CommonTools::checkArrayValue($arraydata, "pd_type")){
                $savedata['pd_type'] = $arraydata['pd_type'];
            }elseif($arraydata['pd_type'] == 0){
                $savedata['pd_type'] = $arraydata['pd_type'];
            }
            if(CommonTools::checkArrayValue($arraydata, "pd_live_url")){
                $savedata['pd_live_url'] = $arraydata['pd_live_url'];
            }
            if(CommonTools::checkArrayValue($arraydata, "pd_template_img")){
                $savedata['pd_template_img'] = $arraydata['pd_template_img'];
            }
            if(CommonTools::checkArrayValue($arraydata, "pd_model_img")){
                $savedata['pd_model_img'] = $arraydata['pd_model_img'];
            }
            if(CommonTools::checkArrayValue($arraydata, "pd_hot_top")){
                $savedata['pd_hot_top'] = $arraydata['pd_hot_top'];
            }
            if(CommonTools::checkArrayValue($arraydata, "pd_notices")){
                $savedata['pd_notices'] = $arraydata['pd_notices'];
            }
            if(CommonTools::checkArrayValue($arraydata, "isflag")){
                $savedata['isflag'] = $arraydata['isflag'];
            }else{
                $savedata['isflag'] = 1;
            }
            if(AuthService::userData()->ud_account){
                $savedata['create_user'] = AuthService::userData()->ud_account;
            }else{
                $savedata['create_user'] = 'bbin';
            }
            if(AuthService::userData()->ud_account){
                $savedata['last_update_user'] = AuthService::userData()->ud_account;
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
            return ProjectData::insertGetId($savedata);
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
    }

    /**
     * 新增網版資料
     * @param  array $arraydata [網版資料]
     */
    public function create($arraydata){
    	try {
    		// 檢查必填欄位是否傳入
    		if(!CommonTools::checkArrayValue($arraydata, "pd_num") ||
               !CommonTools::checkArrayValue($arraydata, "pd_date") ||
    		   !CommonTools::checkArrayValue($arraydata, "pd_show") ||
    		   !CommonTools::checkArrayValue($arraydata, "pd_new") ||
    		   !CommonTools::checkArrayValue($arraydata, "pd_hot") ||
    		   !CommonTools::checkArrayValue($arraydata, "pd_live") ||
    		   !CommonTools::checkArrayValue($arraydata, "pd_rwd") ||
    		   !CommonTools::checkArrayValue($arraydata, "pd_layout") ||
               !CommonTools::checkArrayValue($arraydata, "pd_type") ||
    		   !CommonTools::checkArrayValue($arraydata, "pd_colors") ||
    		   !CommonTools::checkArrayValue($arraydata, "pd_view_img") ||
    		   !CommonTools::checkArrayValue($arraydata, "pd_banner_img")
    		){
    			return false;
    		}
    		// 填入必填欄位
            $savedata['pd_date'] = $arraydata['pd_date'];
    		$savedata['pd_num'] = $arraydata['pd_num'];
    		$savedata['pd_show'] = $arraydata['pd_show'];
    		$savedata['pd_new'] = $arraydata['pd_new'];
    		$savedata['pd_hot'] = $arraydata['pd_hot'];
    		$savedata['pd_live'] = $arraydata['pd_live'];
    		$savedata['pd_rwd'] = $arraydata['pd_rwd'];
    		if($arraydata['pd_rwd'] == 0){
                $savedata['pd_desktop_check'] = 1;
                $savedata['pd_tablet_check'] = 0;
                $savedata['pd_mobile_check'] = 0;
            }elseif($arraydata['pd_rwd'] == 1){
                $savedata['pd_desktop_check'] = 1;
                $savedata['pd_tablet_check'] = 1;
                $savedata['pd_mobile_check'] = 1;
            }
    		$savedata['pd_layout'] = $arraydata['pd_layout'];
            $savedata['pd_style'] = $arraydata['pd_style'];
    		$savedata['pd_colors'] = $arraydata['pd_colors'];
    		$savedata['pd_view_img'] = $arraydata['pd_view_img'];
    		$savedata['pd_banner_img'] = $arraydata['pd_banner_img'];
            // 填入非必填欄位
            if(CommonTools::checkArrayValue($arraydata, "pd_type")){
                $savedata['pd_type'] = $arraydata['pd_type'];
            }elseif($arraydata['pd_type'] == 0){
                $savedata['pd_type'] = $arraydata['pd_type'];
            }
            if(CommonTools::checkArrayValue($arraydata, "pd_live_url")){
                $savedata['pd_live_url'] = $arraydata['pd_live_url'];
            }
            if(CommonTools::checkArrayValue($arraydata, "pd_template_img")){
                $savedata['pd_template_img'] = $arraydata['pd_template_img'];
            }
            if(CommonTools::checkArrayValue($arraydata, "pd_model_img")){
                $savedata['pd_model_img'] = $arraydata['pd_model_img'];
            }
            if(CommonTools::checkArrayValue($arraydata, "pd_hot_top")){
                $savedata['pd_hot_top'] = $arraydata['pd_hot_top'];
            }
    		if(CommonTools::checkArrayValue($arraydata, "pd_notices")){
    			$savedata['pd_notices'] = $arraydata['pd_notices'];
    		}
    		if(CommonTools::checkArrayValue($arraydata, "isflag")){
    			$savedata['isflag'] = $arraydata['isflag'];
    		}else{
    			$savedata['isflag'] = 1;
    		}
    		if(AuthService::userData()->ud_account){
    			$savedata['create_user'] = AuthService::userData()->ud_account;
    		}else{
    			$savedata['create_user'] = 'bbin';
    		}
    		if(AuthService::userData()->ud_account){
    			$savedata['last_update_user'] = AuthService::userData()->ud_account;
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

    		ProjectData::insert($savedata);

    		return true;
    	} catch (\Exception $e) {
    		CommonTools::writeErrorLogByException($e);
    		return false;
    	}
    }

    /**
     * 更新網版資料
     * @param  array $arraydata [網版資料]
     */
    public function update($arraydata){
    	try {
    		if(!CommonTools::checkArrayValue($arraydata, "pd_id")){
    			return false;
    		}
            if(CommonTools::checkArrayValue($arraydata, "pd_date")){
                $savedata['pd_date'] = $arraydata['pd_date'];
            }
			if(CommonTools::checkArrayValue($arraydata, "pd_num")){
    			$savedata['pd_num'] = $arraydata['pd_num'];
    		}
    		if(CommonTools::checkArrayValue($arraydata, "pd_show")){
    			$savedata['pd_show'] = $arraydata['pd_show'];
    		}
    		if(CommonTools::checkArrayValue($arraydata, "pd_new")){
    			$savedata['pd_new'] = $arraydata['pd_new'];
    		}
    		if(CommonTools::checkArrayValue($arraydata, "pd_hot")){
    			$savedata['pd_hot'] = $arraydata['pd_hot'];
    		}
            if(CommonTools::checkArrayValue($arraydata, "pd_hot_top")){
                $savedata['pd_hot_top'] = $arraydata['pd_hot_top'];
            }
    		if(CommonTools::checkArrayValue($arraydata, "pd_live")){
    			$savedata['pd_live'] = $arraydata['pd_live'];
    		}
            if(CommonTools::checkArrayValue($arraydata, "pd_live_url")){
                $savedata['pd_live_url'] = $arraydata['pd_live_url'];
            }
    		if(CommonTools::checkArrayValue($arraydata, "pd_rwd")){
    			$savedata['pd_rwd'] = $arraydata['pd_rwd'];
                if($arraydata['pd_rwd'] == 0){
                    $savedata['pd_desktop_check'] = 1;
                    $savedata['pd_tablet_check'] = 0;
                    $savedata['pd_mobile_check'] = 0;
                }elseif($arraydata['pd_rwd'] == 1){
                    $savedata['pd_desktop_check'] = 1;
                    $savedata['pd_tablet_check'] = 1;
                    $savedata['pd_mobile_check'] = 1;
                }
    		}
    		if(CommonTools::checkArrayValue($arraydata, "pd_layout")){
    			$savedata['pd_layout'] = $arraydata['pd_layout'];
    		}
    		if(CommonTools::checkArrayValue($arraydata, "pd_style")){
    			$savedata['pd_style'] = $arraydata['pd_style'];
            }
            if(CommonTools::checkArrayValue($arraydata, "pd_type") && $arraydata['pd_type'] == 0){
    			$savedata['pd_type'] = $arraydata['pd_type'];
    		}elseif(CommonTools::checkArrayValue($arraydata, "pd_type")){
                $savedata['pd_type'] = $arraydata['pd_type'];
            }
    		if(CommonTools::checkArrayValue($arraydata, "pd_colors")){
    			$savedata['pd_colors'] = $arraydata['pd_colors'];
    		}
    		if(CommonTools::checkArrayValue($arraydata, "pd_view_img")){
    			$savedata['pd_view_img'] = $arraydata['pd_view_img'];
    		}
    		if(CommonTools::checkArrayValue($arraydata, "pd_banner_img")){
    			$savedata['pd_banner_img'] = $arraydata['pd_banner_img'];
    		}
            if(CommonTools::checkArrayValue($arraydata, "pd_template_img")){
                $savedata['pd_template_img'] = $arraydata['pd_template_img'];
            }
            if(CommonTools::checkArrayValue($arraydata, "pd_model_img")){
                $savedata['pd_model_img'] = $arraydata['pd_model_img'];
            }
    		if(CommonTools::checkArrayValue($arraydata, "pd_notices")){
    			$savedata['pd_notices'] = $arraydata['pd_notices'];
    		}else{
                $savedata['pd_notices'] = '';
            }
			if(AuthService::userAccount()){
    			$savedata['last_update_user'] = AuthService::userAccount();
    		}else{
    			$savedata['last_update_user'] = 'bbin';
    		}
    		if(CommonTools::checkArrayValue($arraydata, "last_update_date")){
    			$savedata['last_update_date'] = $arraydata['last_update_date'];
    		}else{
    			$savedata['last_update_date'] = \Carbon\Carbon::now();
    		}

    		ProjectData::where('pd_id',$arraydata['pd_id'])->update($savedata);

    		return true;
    	} catch (\Exception $e) {
    		CommonTools::writeErrorLogByException($e);
    		return false;
    	}
    }
}