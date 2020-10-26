<?php

namespace App\Http\Controllers\ViewControllers;

use Request;
use App\Http\Controllers\Controller;
use App\Services\CommonTools;
use App\Services\AuthService;

// 錯誤代碼 #020000
class IndexController extends Controller
{
	/**
	 * 取得首頁所需全部資料
	 */
	public function getAllData(){
		$searchdata = Request::all();
		$pd_r = new \App\Repositories\ProjectDataRepository;
		try {
			$data['userdata'] = AuthService::userData();
			if(!CommonTools::checkArrayValue($searchdata, "orderBy")){
				$data['orderBy'] = 'pd_date';
			}else{
				$data['orderBy'] = $searchdata['orderBy'];
			}

			////// 有關固定網版的數據取得 //////
			// 取得固定網版總數
			if(!$data['project_count'] = $pd_r->getAdaptiveCount()){
				$data['project_count'] = 0;
			}
			// 取得固定網版-各網版布局的總數
			if(!$data['layout_count'][0] = $pd_r->getAdaptiveLayoutCount(1)){
				$data['layout_count'][0] = 0;
			}
			if(!$data['layout_count'][1] = $pd_r->getAdaptiveLayoutCount(2)){
				$data['layout_count'][1]= 0;
			}
			if(!$data['layout_count'][2] = $pd_r->getAdaptiveLayoutCount(3)){
				$data['layout_count'][2] = 0;
			}
			if(!$data['layout_count'][3] = $pd_r->getAdaptiveLayoutCount(4)){
				$data['layout_count'][3] = 0;
			}
			if(!$data['layout_count'][4] = $pd_r->getAdaptiveLayoutCount(5)){
				$data['layout_count'][4] = 0;
			}
			// 取得固定網版-各網版風格的總數
			if(!$data['style_count'][0] = $pd_r->getAdaptiveStyleCount(1)){
				$data['style_count'][0] = 0;
			}
			if(!$data['style_count'][1] = $pd_r->getAdaptiveStyleCount(2)){
				$data['style_count'][1] = 0;
			}
			if(!$data['style_count'][2] = $pd_r->getAdaptiveStyleCount(3)){
				$data['style_count'][2] = 0;
			}
			if(!$data['style_count'][3] = $pd_r->getAdaptiveStyleCount(4)){
				$data['style_count'][3] = 0;
			}
			// 取得固定網版-各網版色系的總數
			if(!$data['color_count']['white'] = $pd_r->getAdaptiveColorCount('white')){
				$data['color_count']['white'] = 0;
			}
			if(!$data['color_count']['grey'] = $pd_r->getAdaptiveColorCount('grey')){
				$data['color_count']['grey'] = 0;
			}
			if(!$data['color_count']['black'] = $pd_r->getAdaptiveColorCount('black')){
				$data['color_count']['black'] = 0;
			}
			if(!$data['color_count']['blue'] = $pd_r->getAdaptiveColorCount('blue')){
				$data['color_count']['blue'] = 0;
			}
			if(!$data['color_count']['green'] = $pd_r->getAdaptiveColorCount('green')){
				$data['color_count']['green'] = 0;
			}
			if(!$data['color_count']['yellow'] = $pd_r->getAdaptiveColorCount('yellow')){
				$data['color_count']['yellow'] = 0;
			}
			if(!$data['color_count']['brown'] = $pd_r->getAdaptiveColorCount('brown')){
				$data['color_count']['brown'] = 0;
			}
			if(!$data['color_count']['orange'] = $pd_r->getAdaptiveColorCount('orange')){
				$data['color_count']['orange'] = 0;
			}
			if(!$data['color_count']['red'] = $pd_r->getAdaptiveColorCount('red')){
				$data['color_count']['red'] = 0;
			}
			if(!$data['color_count']['pink'] = $pd_r->getAdaptiveColorCount('pink')){
				$data['color_count']['pink'] = 0;
			}
			if(!$data['color_count']['purple'] = $pd_r->getAdaptiveColorCount('purple')){
				$data['color_count']['purple'] = 0;
			}
			// echo '<script>
			// 	    var dd = '.json_encode($searchdata).';
			// 	</script>';
			// 取得最新五筆的固定網版名稱
			if(!$data['newestdata'] = $pd_r->getFiveLatestAdaptiveData()){
				return false;
			}
			// 取得最新三筆的固定網版資料
			if(!$data['projectdata'] = $pd_r->getThreeLatestAdaptiveData($data)){
				return false;
			}
			return response()->json($data);
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return CommonTools::returnData('#020101');
		}
	}
}