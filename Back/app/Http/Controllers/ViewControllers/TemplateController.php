<?php

namespace App\Http\Controllers\ViewControllers;

use Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\View;
use App\Library\CommonTools;
use Storage;
use Session;

class TemplateController extends Controller
{
	/**
	 * View[固定網版列表]頁
	 */
	public function adaptiveList(Request $request){
		$searchdata = Request::all();
		$pd_r = new \App\Repositories\ProjectDataRepository;
		try {
			//列表資料的呈現方式
			if(!CommonTools::checkArrayValue($searchdata, "change_model")){
				$searchdata['change_model'] = '0';
			}
			if(Session::has('model') && $searchdata['change_model'] == 0){
				$searchdata['model'] = Session::get('model');
			}
			if(!CommonTools::checkArrayValue($searchdata, "model")){
				$searchdata['model'] = 'list';
				Session::put('model', 'list');
			}
			if($searchdata['change_model'] == 1){
				Session::put('model', $searchdata['model']);
			}
			//資料的排列依據
			if(!CommonTools::checkArrayValue($searchdata, "orderBy")){
				$searchdata['orderBy'] = 'pd_date';
			}
			//頁數
			if(!CommonTools::checkArrayValue($searchdata, "page")){
				$searchdata['page'] = 1;
			}
			//版型編號
			if(!isset($searchdata['pd_num']) || $searchdata['pd_num'] == ""){
                $searchdata['pd_num'] = null;
            }
            //固定版型查詢條件
            if(!isset($searchdata['pd_rwd'])){
                $searchdata['pd_rwd'] = 0;
            }
            //當頁搜尋筆數
            if(!isset($searchdata['limit']) || $searchdata['limit'] == ""){
            	$searchdata['limit'] = 10;
            }
            // 取得固定網版總數
			if(!$searchdata['adaptive_count'] = $pd_r->getAdaptiveCount()){
				$searchdata['adaptive_count'] = 0;
			}

			if(!$templatedata = $pd_r->getAllData($searchdata)){
				return view('template.adaptivelist',compact('searchdata'));
			}

			return view('template.adaptivelist',compact('templatedata','searchdata'));
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return view('errors.503');
		}
	}

	/**
	 * View[RWD網版列表]頁
	 */
	public function rwdList(Request $request){
		$searchdata = Request::all();
		$pd_r = new \App\Repositories\ProjectDataRepository;
		try {
			//版型編號
			if(!isset($searchdata['pd_num']) || $searchdata['pd_num'] == ""){
                $searchdata['pd_num'] = null;
            }
            //RWD版型查詢條件
            if(!isset($searchdata['pd_rwd'])){
                $searchdata['pd_rwd'] = 1;
            }
            //當頁搜尋筆數
            if(!isset($searchdata['search_num']) || $searchdata['search_num'] == ""){
            	$searchdata['search_num'] = 40;
            }
            // 取得RWD網版總數
			if(!$searchdata['rwd_count'] = $pd_r->getRwdCount()){
				$searchdata['rwd_count'] = 0;
			}

			if(!$templatedata = $pd_r->getAllData($searchdata)){
				return view('template.rwdlist',compact('searchdata'));
			}
			return view('template.rwdlist',compact('templatedata','searchdata'));
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return view('errors.503');
		}
	}

	/**
	 * View[上傳版型專案]頁
	 */
	// public function templateUpload(){
	// 	$pd_r = new \App\Repositories\ProjectDataRepository;
	// 	try {
	// 		// 抓取尚未有線上Demo的版型
	// 		$pd_live = 0;
	// 		if(!$templatedata = $pd_r->getDataByLive($pd_live)){
	// 			return redirect()->back()->withInput()->withErrors(['error' => '暫無任何版型資料，請前往新增！']);
	// 		}

	// 		return view('template.templateupload',compact('templatedata'));
	// 	} catch (\Exception $e) {
	// 		CommonTools::writeErrorLogByException($e);
	// 		return view('errors.503');
	// 	}
	// }

	/**
	 * View[新增網版]頁
	 */
	public function templateCreate(){
		try {
			return view('template.templatecreate');
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return view('errors.503');
		}
	}

	/**
	 * View[修改網版]頁
	 */
	public function templateModify(Request $request){
		$searchdata = Request::all();
		$pd_r = new \App\Repositories\ProjectDataRepository;
		try {
			if(!CommonTools::checkArrayValue($searchdata,'pd_id')){
				return redirect()->back()->withInput()->withErrors(['error' => '尚未傳入版型編號！']);
			}
			if(!$templatedata = $pd_r->getDataById($searchdata['pd_id'])){
				return redirect()->back()->withInput()->withErrors(['error' => '查無相符的版型資料！']);
			}
			$templatedata = $templatedata[0];
			$templatedata['pd_template_img'] = json_decode($templatedata['pd_template_img']);
			$templatedata['pd_model_img'] = json_decode($templatedata['pd_model_img']);

			return view('template.templatedetail',compact('templatedata'));
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return view('errors.503');
		}
	}

	public function templateEdit($type,$id){
		$pd_r = new \App\Repositories\ProjectDataRepository;
		try {
			if(!$data = $pd_r->getDataById($id)){
				return redirect()->back()->withInput()->withErrors(['error' => '查無要修改的版型資料！']);
			}
			$data = $data[0];
			if($data[$type] == 0){
				$arraydata[$type] = 1;
				$arraydata['pd_id'] = $id;
			}else{
				$arraydata[$type] = 0;
				$arraydata['pd_id'] = $id;
			}

			if(!$pd_r->update($arraydata)){
				return redirect()->back()->withInput()->withErrors(['error' => '修改出現異常！']);
			}
			return redirect()->back()->withInput()->withErrors(['error' => '修改成功！']);
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return view('errors.503');
		}
	}

	/**
	 * Action[版型專案上傳]
	 */
	// public function actionUpload(Request $request){
	// 	$searchdata = Request::all();
	// 	$searchfile = Request::file();
	// 	$pd_r = new \App\Repositories\ProjectDataRepository;
	// 	try {
	// 		if($searchfile){
	// 			if(get_extension_funcs('zip')){
	// 		        // //開起ZIP壓縮檔
	// 		        // //getcwd()是取得絕對路徑，好像一定要這樣才讀得到檔案...
	// 		        // $z=zip_open(getcwd()."/test/test.zip");
	// 		        // //如果還沒解壓縮完成就繼續 while
	// 		        // while($c=zip_read($z)){
	// 		        //     //建立要解壓縮的檔案到test資料夾
	// 		        //     $f=fopen("./test/".zip_entry_name($c),"w");
	// 		        //     //讀取zip檔案內的資料
	// 		        //     zip_entry_open($z,$c,"r");
	// 		        //     //寫入檔案
	// 		        //     fwrite($f,zip_entry_read($c,zip_entry_filesize($c)));
	// 		        //     fclose($f);
	// 		        // }
	// 		        // zip_close($z);
	// 		        echo getcwd();
	// 		    }else{
	// 		        echo '沒安裝';
	// 		    }
	// 		}
	// 		return view('errors.503');
	// 	} catch (\Exception $e) {
	// 		CommonTools::writeErrorLogByException($e);
	// 		return redirect()->back()->withInput()->withErrors(['error' => '未知錯誤，上傳失敗！']);
	// 	}
	// }

	/**
	 * Action[刪除網版]
	 */
	public function actionDelete(Request $request){
		$searchdata = Request::all();
		$pd_r = new \App\Repositories\ProjectDataRepository;
		try {
			if(!CommonTools::checkArrayValue($searchdata,'pd_id')){
				return redirect()->back()->withInput()->withErrors(['error' => '尚未傳入版型編號，無法刪除！']);
			}
			// if(!CommonTools::checkArrayValue($searchdata,'pd_rwd')){
			// 	return redirect()->back()->withInput()->withErrors(['error' => '尚未傳入版型類型，無法進行導頁！']);
			// }
			if(!$pd_r->delete($searchdata['pd_id'])){
				return redirect()->back()->withInput()->withErrors(['error' => '刪除失敗！']);
			}

			// 新增異動紀錄
			$arraydata['tr_action'] = 3; // 刪除版型
			$arraydata['pd_id'] = $searchdata['pd_id'];
			if(!$this->modify_record($arraydata)){
				return redirect('/index')->withInput()->withErrors(['error' => '刪除成功，但異動紀錄新增失敗！']);
			}

			// 導頁
			// if($searchdata['pd_rwd'] == 1){
			// 	return redirect('/rwd-list')->withInput()->withErrors(['error' => '刪除成功！']);
			// }else{
				return redirect('/adaptive-list')->withInput()->withErrors(['error' => '刪除成功！']);
			// }
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return redirect()->back()->withInput()->withErrors(['error' => '未知錯誤，刪除失敗！']);
		}
	}

	/**
	 * Action[新增網版]
	 */
	public function actionCreate(Request $request){
		$pd_r = new \App\Repositories\ProjectDataRepository;
		$searchdata = Request::all();
		$filedata = Request::file();
		$view_boolean = true;
		$banner_boolean = true;
		$template_boolean = true;
		try {
			// 先檢查網版名稱是否重覆
			if(!CommonTools::checkArrayValue($searchdata,'pd_num')){
				return redirect()->back()->withInput()->withErrors(['error' => '尚未傳入網版名稱，新增失敗！']);
			}
			if(count($pd_r->getDataByNum($searchdata['pd_num'])) > 0){
				return redirect()->back()->withInput()->withErrors(['error' => '網版名稱已被使用，新增失敗！']);
			}
			// 先新增網版資料並回傳pd_id
			if(!$pd_id = $pd_r->createGetId($searchdata)){
				return redirect()->back()->withInput()->withErrors(['error' => '新增失敗！']);
			}

			// 新增異動紀錄
			$arraydata['tr_action'] = 1; // 新增版型
			$arraydata['pd_id'] = $pd_id;

			// 導頁
			if(!$this->modify_record($arraydata)){
				return redirect('/index')->withInput()->withErrors(['error' => '新增成功，但異動紀錄新增失敗！']);
			}
			return redirect('/index')->withInput()->withErrors(['error' => '新增成功！']);
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return redirect('/index')->withInput()->withErrors(['error' => '未知錯誤，新增失敗！']);
		}
	}

	/**
	 * Action[修改網版]
	 */
	public function actionModify(Request $request){
		$pd_r = new \App\Repositories\ProjectDataRepository;
		// 抓取傳入值
		$searchdata = Request::all();
		try {
			// 先檢查傳入的網版名稱是否已經被該網版以外的網版使用了
			if(count($pd_r->getDataByIdNum($searchdata['pd_id'],$searchdata['pd_num']))){
				return redirect()->back()->withInput()->withErrors(['error' => '網版名稱已被使用，修改失敗！']);
			}
            // 修改網版資料
			if(!$pd_r->update($searchdata)){
				return redirect()->back()->withInput()->withErrors(['error' => '修改失敗！']);
			}


			// 新增異動紀錄
			$arraydata['tr_action'] = 2; // 修改版型
			$arraydata['pd_id'] = $searchdata['pd_id'];

			// 導頁
			if(!$this->modify_record($arraydata)){
				return redirect('/index')->withInput()->withErrors(['error' => '修改成功，但異動紀錄新增失敗！']);
			}

			// 導頁
			if($searchdata['pd_rwd'] == 1){
				return redirect('/rwd-list')->withInput()->withErrors(['error' => '修改成功！']);
			}else{
				return redirect('/adaptive-list')->withInput()->withErrors(['error' => '修改成功！']);
			}
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return redirect('/index')->withInput()->withErrors(['error' => '未知錯誤，修改失敗！']);
		}
	}

	/**
	 * 當檔案總管修改資料夾名稱的時候，同步更新版型的圖片路徑
	 * @param  [string] $old_name [舊名稱，也是版型名稱]
	 * @param  [string] $new_name [新名稱]
	 */
	public function updateImgUrlWhenRename($old_name,$new_name){
		$pd_r = new \App\Repositories\ProjectDataRepository;
		try {
			// 先抓取符合這個名稱的版型資料
			if(!$templatedata = $pd_r->getDataByNum($old_name)){
				return false;
			}
			$templatedata = $templatedata[0];
			if($templatedata['pd_view_img'] != ''){
				$arraydata['pd_view_img'] = str_replace($old_name,$new_name,$templatedata['pd_view_img']);
			}
			if($templatedata['pd_banner_img'] != ''){
				$arraydata['pd_banner_img'] = str_replace($old_name,$new_name,$templatedata['pd_banner_img']);
			}
			if($templatedata['pd_template_img'] != ''){
				$arraydata['pd_template_img'] = str_replace($old_name,$new_name,$templatedata['pd_template_img']);
			}
			$arraydata['pd_id'] = $templatedata['pd_id'];
			if(!$pd_r->update($arraydata)){
				return false;
			}
			return true;
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return false;
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