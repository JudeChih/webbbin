<?php

namespace App\Http\Controllers\ViewControllers;

use Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\View;
use App\Library\CommonTools;
use Illuminate\Support\Facades\Cookie;
use Storage;
use DB;

class FeaturesController extends Controller
{
	/**
	 * View[紀錄列表]頁
	 */
	public function isTransactionlList(Request $request){
		$searchdata = Request::all();
		$tr_r = new \App\Repositories\TransactionRecordRepository;
		$ud_r = new \App\Repositories\UserDataRepository;
		try {
			//頁數
			if(!CommonTools::checkArrayValue($searchdata, "page")){
				$searchdata['page'] = 1;
			}
			//當頁搜尋筆數
            if(!isset($searchdata['limit']) || $searchdata['limit'] == ""){
            	$searchdata['limit'] = 10;
            }
            //抓取異動紀錄資料
			if(!$transactiondata = $tr_r->getAllData($searchdata)){
				return view('feature.transactionrecordlist');
			}
			//抓取使用者登入紀錄
			if(!$userlogindata = $ud_r->getAllUserLastLogin($searchdata)){
				return view('feature.transactionrecordlist');
			}
			return view('feature.transactionrecordlist',compact('transactiondata','userlogindata','searchdata'));
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return view('errors.503');
		}
	}

	/**
	 * View[熱門排行列表]固定版型頁
	 */
	public function isHotAdaptiveList(){
		$sp_r = new \App\Repositories\SystemParameterRepository;
		$pd_r = new \App\Repositories\ProjectDataRepository;
		$mr_r = new \App\Repositories\ModelRecordRepository;
		$wcp_r = new \App\Repositories\WebsiteCollectProjectsRepository;
		$pd_rwd = 0;
		try {
			if(!$systemdata = $sp_r->getDataByKey('熱門排行-固定版型')){
				return redirect()->back()->withInput()->withErrors(['error' => '查無熱門排行-固定版型的系統參數！']);
			}
			$systemdata = $systemdata[0];

			if($systemdata['sp_parametervalue'] == 1){ // 自動排行
				if(!$hotdata = $pd_r->getDataWithoutTheSamePdId($pd_rwd)){
					return redirect()->back()->withInput()->withErrors(['error' => '抓取資料出錯！']);
				}
				foreach ($hotdata as $key => $val) {
					$templatedata = $pd_r->getDataById($val['pd_id']);
					if(count($templatedata) > 0){
						$templatedata = $templatedata[0];
						$hotdata[$key]['pd_num'] = $templatedata['pd_num'];
						$hotdata[$key]['pd_view_img'] = $templatedata['pd_view_img'];
					}
				}
			}elseif($systemdata['sp_parametervalue'] == 2){ // 手動排行
				if(!$hotdata = $pd_r->getDataByHotIsAdaptive()){
					return redirect()->back()->withInput()->withErrors(['error' => '抓取資料出錯！']);
				}
			}

			return view('feature.ishotadaptivelist',compact('hotdata','systemdata'));
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return view('errors.503');
		}
	}

	/**
	 * View[熱門排行列表]RWD頁
	 */
	public function isHotRwdList(){
		$sp_r = new \App\Repositories\SystemParameterRepository;
		$pd_r = new \App\Repositories\ProjectDataRepository;
		$mr_r = new \App\Repositories\ModelRecordRepository;
		$wcp_r = new \App\Repositories\WebsiteCollectProjectsRepository;
		$pd_rwd = 1;
		try {
			if(!$systemdata = $sp_r->getDataByKey('熱門排行-RWD')){
				return redirect()->back()->withInput()->withErrors(['error' => '查無熱門排行-RWD的系統參數！']);
			}
			$systemdata = $systemdata[0];

			if($systemdata['sp_parametervalue'] == 1){ // 自動排行
				if(!$hotdata = $pd_r->getDataWithoutTheSamePdId($pd_rwd)){
					return redirect()->back()->withInput()->withErrors(['error' => '抓取資料出錯！']);
				}
				foreach ($hotdata as $key => $val) {
					$templatedata = $pd_r->getDataById($val['pd_id']);
					if(count($templatedata) > 0){
						$templatedata = $templatedata[0];
						$hotdata[$key]['pd_num'] = $templatedata['pd_num'];
						$hotdata[$key]['pd_view_img'] = $templatedata['pd_view_img'];
					}
				}
			}elseif($systemdata['sp_parametervalue'] == 2){ // 手動排行
				if(!$hotdata = $pd_r->getDataByHotIsRwd()){
					return redirect()->back()->withInput()->withErrors(['error' => '抓取資料出錯！']);
				}
			}

			return view('feature.ishotrwdlist',compact('hotdata','systemdata'));
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return view('errors.503');
		}
	}

	/**
	 * View[新增熱門版型]頁
	 */
	public function isHotCreate(){
		$searchdata = Request::all();
		$pd_r = new \App\Repositories\ProjectDataRepository;
		try {
			if($searchdata['template'] == 'rwd'){
				$pd_rwd = 1;
			}elseif($searchdata['template'] == 'adaptive'){
				$pd_rwd = 0;
			}
			if(!$templatedata = $pd_r->getDataByNotHot($pd_rwd)){
				return redirect()->back()->withInput()->withErrors(['error' => '暫無任何網版，請先新增網版！']);
			}
			return view('feature.ishotcreate',compact('templatedata','searchdata'));
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return view('errors.503');
		}
	}

	/**
	 * View[版型紀錄列表]頁
	 */
	public function isModelList(Request $request){
		$searchdata = Request::all();
		$mr_r = new \App\Repositories\ModelRecordRepository;
		try {
			//版型編號
			if(!isset($searchdata['mr_name']) || $searchdata['mr_name'] == ""){
                $searchdata['mr_name'] = null;
            }

            if(!$modeldata = $mr_r->getAllData($searchdata)){
            	return view('feature.ismodellist',compact('searchdata'));
            }
			return view('feature.ismodellist',compact('modeldata','searchdata'));
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return view('errors.503');
		}
	}

	/**
	 * View[新增版型紀錄]頁
	 */
	public function isModelCreate(){
		$pd_r = new \App\Repositories\ProjectDataRepository;
		$wcp_r = new \App\Repositories\WebsiteCollectProjectsRepository;
		try {
			if(!$templatedata = $pd_r->getIdNum()){
				return redirect()->back()->withInput()->withErrors(['error' => '暫無任何網版，請先新增網版！']);
			}
			if(!$websitedata = $wcp_r->getName()){
				return redirect()->back()->withInput()->withErrors(['error' => '暫無任何租網，請先新增租網！']);
			}
			return view('feature.ismodelcreate',compact('templatedata','websitedata'));
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return view('errors.503');
		}
	}

	/**
	 * View[修改版型紀錄]頁
	 */
	public function isModelModify(Request $request){
		$searchdata = Request::all();
		$mr_r = new \App\Repositories\ModelRecordRepository;
		$pd_r = new \App\Repositories\ProjectDataRepository;
		try {
			if(!CommonTools::checkArrayValue($searchdata,'mr_id')){
				return redirect()->back()->withInput()->withErrors(['error' => '尚未傳入版型紀錄編號！']);
			}
			if(!$modeldata = $mr_r->getDataById($searchdata['mr_id'])){
				return redirect()->back()->withInput()->withErrors(['error' => '查無相符的版型紀錄資料！']);
			}
			$modeldata = $modeldata[0];
			if(!$templatedata = $pd_r->getIdNum()){
				return redirect()->back()->withInput()->withErrors(['error' => '暫無任何網版，請先新增網版！']);
			}
			return view('feature.ismodeldetail',compact('modeldata','templatedata'));
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return view('errors.503');
		}
	}

	/**
	 * View[熱門排行推薦]固定版型頁
	 * @return boolean [description]
	 */
	public function isHotAdaptiveTop10(){
		$pd_r = new \App\Repositories\ProjectDataRepository;
		try {

			if(!$top10data = $pd_r->getAdaptiveDataByTop10()){
				return redirect()->back()->withInput()->withErrors(['error' => '熱門排行推薦資料抓取異常！']);
			}

			if(!$templatedata = $pd_r->getAllAdaptiveData()){
				return redirect()->back()->withInput()->withErrors(['error' => '版型資料抓取異常！']);
			}

			return view('feature.ishotadaptivetop10',compact('templatedata','top10data'));
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return view('errors.503');
		}
	}

	/**
	 * View[熱門排行推薦]RWD頁
	 * @return boolean [description]
	 */
	public function isHotRwdTop10(){
		$pd_r = new \App\Repositories\ProjectDataRepository;
		try {

			if(!$top10data = $pd_r->getRwdDataByTop10()){
				return redirect()->back()->withInput()->withErrors(['error' => '熱門排行推薦資料抓取異常！']);
			}

			if(!$templatedata = $pd_r->getAllRwdData()){
				return redirect()->back()->withInput()->withErrors(['error' => '版型資料抓取異常！']);
			}

			return view('feature.ishotrwdtop10',compact('templatedata','top10data'));
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return view('errors.503');
		}
	}

	/**
	 * Action[從熱門排行裡面抓10個以內設定為熱門排行推薦]
	 * @param  Request $request [description]
	 */
	public function actionHotRwdTop10(Request $request){
		$searchdata = Request::all();
		$pd_r = new \App\Repositories\ProjectDataRepository;
		try {
			DB::beginTransaction();
			$pd_r->updateAllTop10ToHot(1);
			if($searchdata['pd_id'] != ''){
				$pd_id_array = explode(",",$searchdata['pd_id']);
				if(count($pd_id_array) > 0 && count($pd_id_array) < 11){
					foreach ($pd_id_array as $pd_id) {
						$arraydata['pd_id'] = $pd_id;
						$arraydata['pd_hot'] = 1;
						$arraydata['pd_hot_top'] = 1;
						if(!$pd_r->update($arraydata)){
							DB::rollback();
							return redirect()->back()->withInput()->withErrors(['error' => '修改失敗！']);
						}
					}
				}else{
					DB::rollback();
					return redirect()->back()->withInput()->withErrors(['error' => '只能設定10個熱門排行推薦！']);
				}
			}
			DB::commit();
			return redirect('/ishot-rwd-list')->withInput()->withErrors(['error' => '修改成功！']);
		} catch (\Exception $e) {
			DB::rollback();
			CommonTools::writeErrorLogByException($e);
			return redirect()->back()->withInput()->withErrors(['error' => '未知錯誤，刪除失敗！']);
		}
	}

	/**
	 * Action[從熱門排行裡面抓10個以內設定為熱門排行推薦]
	 * @param  Request $request [description]
	 */
	public function actionHotAdaptiveTop10(Request $request){
		$searchdata = Request::all();
		$pd_r = new \App\Repositories\ProjectDataRepository;
		try {
			DB::beginTransaction();
			$pd_r->updateAllTop10ToHot(0);
			if($searchdata['pd_id'] != ''){
				$pd_id_array = explode(",",$searchdata['pd_id']);
				if(count($pd_id_array) > 0 && count($pd_id_array) < 11){
					foreach ($pd_id_array as $pd_id) {
						$arraydata['pd_id'] = $pd_id;
						$arraydata['pd_hot'] = 1;
						$arraydata['pd_hot_top'] = 1;
						if(!$pd_r->update($arraydata)){
							DB::rollback();
							return redirect()->back()->withInput()->withErrors(['error' => '修改失敗！']);
						}
					}
				}else{
					DB::rollback();
					return redirect()->back()->withInput()->withErrors(['error' => '只能設定10個熱門排行推薦！']);
				}
			}
			DB::commit();
			return redirect('/ishot-adaptive-list')->withInput()->withErrors(['error' => '修改成功！']);
		} catch (\Exception $e) {
			DB::rollback();
			CommonTools::writeErrorLogByException($e);
			return redirect()->back()->withInput()->withErrors(['error' => '未知錯誤，刪除失敗！']);
		}
	}

	/**
	 * Action[手動模式下移除版型的熱門版型設定]
	 * @param  Request $request [裡面包含pd_id(版型編號)]
	 */
	public function actionHotDelete(Request $request){
		$searchdata = Request::all();
		$pd_r = new \App\Repositories\ProjectDataRepository;
		try {
			if(!CommonTools::checkArrayValue($searchdata,'pd_id')){
				return redirect()->back()->withInput()->withErrors(['error' => '尚未傳入版型編號！']);
			}
			$arraydata['pd_id'] = $searchdata['pd_id'];
			$arraydata['pd_hot'] = 0;
			$arraydata['pd_hot_top'] = 0;
			if(!$pd_r->update($arraydata)){
				return redirect()->back()->withInput()->withErrors(['error' => '刪除失敗！']);
			}

			// 新增異動紀錄
			$arraydata['tr_action'] = 2; // 修改版型
			$arraydata['pd_id'] = $searchdata['pd_id'];

			// 導頁
			if(!$this->modify_record($arraydata)){
				if($searchdata['pd_rwd'] == 0){
					return redirect('/ishot-adaptive-list')->withInput()->withErrors(['error' => '新增成功，但異動紀錄新增失敗！']);
				}else{
					return redirect('/ishot-rwd-list')->withInput()->withErrors(['error' => '新增成功，但異動紀錄新增失敗！']);
				}
			}
			if($searchdata['pd_rwd'] == 0){
				return redirect('/ishot-adaptive-list')->withInput()->withErrors(['error' => '刪除成功！']);
			}else{
				return redirect('/ishot-rwd-list')->withInput()->withErrors(['error' => '刪除成功！']);
			}
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return redirect()->back()->withInput()->withErrors(['error' => '未知錯誤，刪除失敗！']);
		}
	}

	/**
	 * Action[新增熱門版型]
	 * @param  Request $request [包含pd_id(版型編號)]
	 */
	public function actionHotCreate(Request $request){
		$searchdata = Request::all();
		$pd_r = new \App\Repositories\ProjectDataRepository;
		try {
			if(!CommonTools::checkArrayValue($searchdata,'pd_id_array')){
				return redirect()->back()->withInput()->withErrors(['error' => '尚未傳入版型編號！']);
			}
			$pd_id_array = json_decode($searchdata['pd_id_array']);
			DB::beginTransaction();
			foreach($pd_id_array as $val){
				$arraydata['pd_id'] = $val;
				$arraydata['pd_hot'] = 1;
				$arraydata['pd_hot_top'] = 0;
				if(!$pd_r->update($arraydata)){
					DB::rollback();
					return redirect()->back()->withInput()->withErrors(['error' => '新增失敗！']);
				}
				// 新增異動紀錄
				$savedata['tr_action'] = 2; // 修改版型
				$savedata['pd_id'] = $val;
				if(!$this->modify_record($savedata)){
					DB::rollback();
					return redirect()->back()->withInput()->withErrors(['error' => '異動紀錄新增失敗！']);
				}
			}
			DB::commit();


			if($searchdata['pd_rwd'] == 0){
				return redirect('/ishot-adaptive-list')->withInput()->withErrors(['error' => '新增成功！']);
			}else{
				return redirect('/ishot-rwd-list')->withInput()->withErrors(['error' => '新增成功！']);
			}
		} catch (\Exception $e) {
			DB::rollback();
			CommonTools::writeErrorLogByException($e);
			return redirect()->back()->withInput()->withErrors(['error' => '未知錯誤，新增失敗！']);
		}
	}

	/**
	 * Action[修改熱門排行的顯示]
	 */
	public function actionHotAdaptiveModify(Request $request){
		$searchdata = Request::all();
		$sp_r = new \App\Repositories\SystemParameterRepository;
		try {
			if(!$sp_r->update($searchdata)){
				return redirect()->back()->withInput()->withErrors(['error' => '修改失敗！']);
			}
			// 新增異動紀錄
			$arraydata['tr_action'] = 4; // 修改熱門排行的顯示
			if(!$this->modify_record($arraydata)){
				return redirect('/ishot-adaptive-list')->withInput()->withErrors(['error' => '修改成功，但異動紀錄新增失敗！']);
			}
			// 導頁
			return redirect('/ishot-adaptive-list')->withInput()->withErrors(['error' => '修改成功！']);
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return redirect()->back()->withInput()->withErrors(['error' => '未知錯誤，修改失敗！']);
		}
	}

	/**
	 * Action[修改熱門排行的顯示]
	 */
	public function actionHotRwdModify(Request $request){
		$searchdata = Request::all();
		$sp_r = new \App\Repositories\SystemParameterRepository;
		try {
			if(!$sp_r->update($searchdata)){
				return redirect()->back()->withInput()->withErrors(['error' => '修改失敗！']);
			}
			// 新增異動紀錄
			$arraydata['tr_action'] = 4; // 修改熱門排行的顯示
			if(!$this->modify_record($arraydata)){
				return redirect('/ishot-rwd-list')->withInput()->withErrors(['error' => '修改成功，但異動紀錄新增失敗！']);
			}
			// 導頁
			return redirect('/ishot-rwd-list')->withInput()->withErrors(['error' => '修改成功！']);
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return redirect()->back()->withInput()->withErrors(['error' => '未知錯誤，修改失敗！']);
		}
	}

	/**
	 * Action[刪除版型紀錄]
	 */
	public function actionModelDelete(Request $request){
		$searchdata = Request::all();
		$mr_r = new \App\Repositories\ModelRecordRepository;
		try {
			// 檢查mr_id是否傳入
			if(!CommonTools::checkArrayValue($searchdata,'mr_id')){
				return redirect()->back()->withInput()->withErrors(['error' => '尚未傳入版型紀錄編號，刪除失敗！']);
			}
			// 檢查pd_id是否傳入
			if(!CommonTools::checkArrayValue($searchdata,'pd_id')){
				return redirect()->back()->withInput()->withErrors(['error' => '尚未傳入版型編號，刪除失敗！']);
			}
			if(!$mr_r->delete($searchdata['mr_id'])){
				return redirect()->back()->withInput()->withErrors(['error' => '刪除失敗！']);
			}

			// 新增異動紀錄
			$arraydata['tr_action'] = 7; // 刪除版型紀錄
			$arraydata['pd_id'] = $searchdata['pd_id'];
			$arraydata['mr_id'] = $searchdata['mr_id'];
			if(!$this->modify_record($arraydata)){
				return redirect('/ismodel-list')->withInput()->withErrors(['error' => '刪除成功，但異動紀錄新增失敗！']);
			}

			// 導頁
			return redirect('/ismodel-list')->withInput()->withErrors(['error' => '刪除成功！']);
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return redirect()->back()->withInput()->withErrors(['error' => '未知錯誤，刪除失敗！']);
		}

	}

	/**
	 * Action[新增版型紀錄]
	 */
	public function actionModelCreate(Request $request){
		$searchdata = Request::all();
		$mr_r = new \App\Repositories\ModelRecordRepository;
		try {
			// 檢查租網名稱是否已被使用
			if(!CommonTools::checkArrayValue($searchdata,'mr_name')){
				return redirect()->back()->withInput()->withErrors(['error' => '尚未傳入租網名稱，新增失敗！']);
			}
			if(count($mr_r->getDataByName($searchdata['mr_name'])) > 0){
				return redirect()->back()->withInput()->withErrors(['error' => '此租網已被設定給其他版型，新增失敗！']);
			}

			// 新增異動紀錄
			$arraydata['tr_action'] = 5; // 新增版型紀錄
			$arraydata['pd_id'] = $searchdata['pd_id'];
			$arraydata['mr_id'] = $mr_id;

			// 導頁
			if(!$this->modify_record($arraydata)){
				return redirect('/ismodel-list')->withInput()->withErrors(['error' => '新增成功，但異動紀錄新增失敗！']);
			}

			// 導頁
			return redirect('/ismodel-list')->withInput()->withErrors(['error' => '新增成功！']);
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return redirect()->back()->withInput()->withErrors(['error' => '未知錯誤，新增失敗！']);
		}
	}

	/**
	 * Action[修改版型紀錄]
	 */
	public function actionModelModify(Request $request){
		$searchdata = Request::all();
		$mr_r = new \App\Repositories\ModelRecordRepository;
		try {
			// 檢查TPL是否已被使用
			if(!CommonTools::checkArrayValue($searchdata,'mr_tpl')){
				return redirect()->back()->withInput()->withErrors(['error' => '尚未傳入TPL，修改失敗！']);
			}
			if(count($mr_r->getDataByIdTPL($searchdata['mr_id'],$searchdata['mr_tpl'])) > 0){
				return redirect()->back()->withInput()->withErrors(['error' => 'TPL已被使用，修改失敗！']);
			}
			// 檢查租網名稱是否已被使用
			if(!CommonTools::checkArrayValue($searchdata,'mr_name')){
				return redirect()->back()->withInput()->withErrors(['error' => '尚未傳入租網名稱，修改失敗！']);
			}
			if(count($mr_r->getDataByIdName($searchdata['mr_id'],$searchdata['mr_name'])) > 0){
				return redirect()->back()->withInput()->withErrors(['error' => '網版名稱已被使用，修改失敗！']);
			}

			// 先修改資料
			if(!$mr_r->update($searchdata)){
				return redirect()->back()->withInput()->withErrors(['error' => '修改失敗！']);
			}

			// 接到mr_id以後再開始處理圖片的上傳
			if(Request::file('mr_view_img_upload')){
				$imgtype = Request::file('mr_view_img_upload')->getClientOriginalExtension();
				// 先處理上傳的圖檔
	        	if($imgtype == 'jpg' || $imgtype == 'jpeg' || $imgtype == 'png'){
	        		// 先刪除原本的示意圖
            		Storage::deleteDirectory('modelrecord/'.$searchdata['mr_id']);
					$url = Storage::put('modelrecord/'.$searchdata['mr_id'], Request::file('mr_view_img_upload'));
	        		$url = Storage::url($url);
	        		$searchdata['mr_view_img'] = $url;
	        	}else{
	        		return redirect()->back()->withInput()->withErrors(['error' => '傳入的檔案有不符合規定的格式！']);
	        	}

	        	// 圖片上傳完畢以後更新template資料到修改的網版
	            $imgdata['mr_id'] = $searchdata['mr_id'];
	            $imgdata['mr_view_img'] = $searchdata['mr_view_img'];
				if(!$mr_r->update($imgdata)){
					return redirect()->back()->withInput()->withErrors(['error' => '修改失敗！']);
				}
			}

			// 新增異動紀錄
			$arraydata['tr_action'] = 6; // 修改版型紀錄
			$arraydata['pd_id'] = $searchdata['pd_id'];
			$arraydata['mr_id'] = $searchdata['mr_id'];

			// 導頁
			if(!$this->modify_record($arraydata)){
				return redirect('/ismodel-list')->withInput()->withErrors(['error' => '新增成功，但異動紀錄新增失敗！']);
			}

			// 導頁
			return redirect('/ismodel-list')->withInput()->withErrors(['error' => '修改成功！']);
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return redirect()->back()->withInput()->withErrors(['error' => '未知錯誤，修改失敗！']);
		}
	}

	/**
     * 將異動資訊記錄起來
     * @param  [array] $arraydata [異動資訊]
     */
    public function modify_record($arraydata){
        try {
        	$tr_r = new \App\Repositories\TransactionRecordRepository;
            // 異動使用者名稱
            if(\App\Services\AuthService::userData()->ud_account){
                $arraydata['tr_user'] = \App\Services\AuthService::userData()->ud_account;
            }else{
                $arraydata['tr_user'] = '無法辨識的使用者';
            }


            return $tr_r->create($arraydata);
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
    }
}