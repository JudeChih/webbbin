<?php

namespace App\Http\Controllers\ViewControllers;

use Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\View;
use App\Library\CommonTools;

class IndexController extends Controller
{
	/**
	 * 導頁到首頁
	 */
	public function index(Request $request){
		$searchdata = Request::all();
		$ud_r = new \App\Repositories\UserDataRepository;
		$pd_r = new \App\Repositories\ProjectDataRepository;
		$mr_r = new \App\Repositories\ModelRecordRepository;
		$sp_r = new \App\Repositories\SystemParameterRepository;
		try {
			if(!CommonTools::checkArrayValue($searchdata, "orderBy")){
				$searchdata['orderBy'] = 'pd_date';
			}
			////// 有關使用者的數據取得 //////
			// 取得最後登入紀錄
			if(!isset($searchdata['limit']) || $searchdata['limit'] == ""){
            	$searchdata['limit'] = 'all';
            }
			if(!$userlastlogin = $ud_r->getAllUserLastLogin($searchdata)){
				return view('errors.503');
			}


			////// 有關固定網版的數據取得 //////
			// 取得固定網版總數
			if(!$searchdata['adaptive_count'] = $pd_r->getAdaptiveCount()){
				$searchdata['adaptive_count'] = 0;
			}
			// 取得固定網版-各網版布局的總數
			if(!$searchdata['layout_01_count'] = $pd_r->getAdaptiveLayoutCount(1)){
				$searchdata['layout_01_count'] = 0;
			}
			if(!$searchdata['layout_02_count'] = $pd_r->getAdaptiveLayoutCount(2)){
				$searchdata['layout_02_count'] = 0;
			}
			if(!$searchdata['layout_03_count'] = $pd_r->getAdaptiveLayoutCount(3)){
				$searchdata['layout_03_count'] = 0;
			}
			if(!$searchdata['layout_04_count'] = $pd_r->getAdaptiveLayoutCount(4)){
				$searchdata['layout_04_count'] = 0;
			}
			if(!$searchdata['layout_05_count'] = $pd_r->getAdaptiveLayoutCount(5)){
				$searchdata['layout_05_count'] = 0;
			}
			// 取得固定網版-各網版風格的總數
			if(!$searchdata['style_01_count'] = $pd_r->getAdaptiveStyleCount(1)){
				$searchdata['style_01_count'] = 0;
			}
			if(!$searchdata['style_02_count'] = $pd_r->getAdaptiveStyleCount(2)){
				$searchdata['style_02_count'] = 0;
			}
			if(!$searchdata['style_03_count'] = $pd_r->getAdaptiveStyleCount(3)){
				$searchdata['style_03_count'] = 0;
			}
			if(!$searchdata['style_04_count'] = $pd_r->getAdaptiveStyleCount(4)){
				$searchdata['style_04_count'] = 0;
			}
			// 取得固定網版-各網版色系的總數
			if(!$searchdata['color_white_count'] = $pd_r->getAdaptiveColorCount('white')){
				$searchdata['color_white_count'] = 0;
			}
			if(!$searchdata['color_grey_count'] = $pd_r->getAdaptiveColorCount('grey')){
				$searchdata['color_grey_count'] = 0;
			}
			if(!$searchdata['color_black_count'] = $pd_r->getAdaptiveColorCount('black')){
				$searchdata['color_black_count'] = 0;
			}
			if(!$searchdata['color_blue_count'] = $pd_r->getAdaptiveColorCount('blue')){
				$searchdata['color_blue_count'] = 0;
			}
			if(!$searchdata['color_green_count'] = $pd_r->getAdaptiveColorCount('green')){
				$searchdata['color_green_count'] = 0;
			}
			if(!$searchdata['color_yellow_count'] = $pd_r->getAdaptiveColorCount('yellow')){
				$searchdata['color_yellow_count'] = 0;
			}
			if(!$searchdata['color_brown_count'] = $pd_r->getAdaptiveColorCount('brown')){
				$searchdata['color_brown_count'] = 0;
			}
			if(!$searchdata['color_orange_count'] = $pd_r->getAdaptiveColorCount('orange')){
				$searchdata['color_orange_count'] = 0;
			}
			if(!$searchdata['color_red_count'] = $pd_r->getAdaptiveColorCount('red')){
				$searchdata['color_red_count'] = 0;
			}
			if(!$searchdata['color_pink_count'] = $pd_r->getAdaptiveColorCount('pink')){
				$searchdata['color_pink_count'] = 0;
			}
			if(!$searchdata['color_purple_count'] = $pd_r->getAdaptiveColorCount('purple')){
				$searchdata['color_purple_count'] = 0;
			}
			echo '<script>
				    var dd = '.json_encode($searchdata).';
				</script>';
			// 取得最新五筆的固定網版名稱
			if(!$newestdata = $pd_r->getFiveLatestAdaptiveData()){
				return view('errors.503');
			}
			// 取得上周新增的固定網版總數
			if(!$searchdata['adaptive_from_last_week'] = $pd_r->getAdaptiveBetweenLastWeek()){
				$searchdata['adaptive_from_last_week'] = 0;
			}else{
				$searchdata['adaptive_from_last_week'] = floor(($searchdata['adaptive_from_last_week'] / $searchdata['adaptive_count']) * 100);
			}
			// 取得最新三筆的固定網版資料
			if(!$adaptivedata = $pd_r->getThreeLatestAdaptiveData($searchdata)){
				return view('errors.503');
			}


			////// 有關版型紀錄的數據取得 //////
			// 取得版型紀錄總數
			if(!$searchdata['model_count'] = $mr_r->getAllDataCount()){
				$searchdata['model_count'] = 0;
			}
			// 取得上周新增的版型紀錄總數
			if(!$searchdata['model_from_last_week'] = $mr_r->getDataBetweenLastWeek()){
				$searchdata['model_from_last_week'] = 0;
			}else{
				$searchdata['model_from_last_week'] = floor(($searchdata['model_from_last_week'] / $searchdata['model_count']) * 100);
			}
			// 取得最新三筆的版型紀錄資料
			if(!$modeldata = $mr_r->getThreeLatestData()){
				$modeldata = false;
			}


			////// 有關熱門排行的數據取得 //////
			// 取得熱門排行是以什麼方式呈現
			if(!$adaptive = $sp_r->getDataByKey('熱門排行-固定版型')){
				return view('errors.503');
			}else{
				$adaptive = $adaptive[0];
			}
			$hotdata['adaptive'] = $adaptive['sp_parametervalue'];



			return view('index',compact('userlastlogin','searchdata','adaptivedata','modeldata','hotdata','newestdata'));
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return view('errors.503');
		}
	}
}