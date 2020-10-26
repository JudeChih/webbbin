<?php

namespace App\Http\Controllers\ViewControllers;

use App\Http\Controllers\Controller;
use App\Services\CommonTools;
use App\Services\AuthService;

// 錯誤代碼 #010000
class AllInOneController extends Controller
{
	/**
	 * 取得首頁所需全部資料
	 */
	public function getAllData(){
		$pd_r = new \App\Repositories\ProjectDataRepository;
		$ld_r = new \App\Repositories\LogoDataRepository;
		$ud_r = new \App\Repositories\UserDataRepository;
		$tr_r = new \App\Repositories\TransactionRecordRepository;
		$ls_r = new \App\Repositories\LogoSortRepository;
		try {
			////////////////////////////////////////////////////////////////////////
			//登入者資訊
			$data['userdata'] = AuthService::userData();
			////////////////////////////////////////////////////////////////////////
			//index相關
			$data['index']['orderBy'] = 'pd_date';
			////// 有關固定網版的數據取得 //////
			// 取得固定網版總數
			if(!$data['index']['project_count'] = $pd_r->getAdaptiveCount()){
				$data['index']['project_count'] = 0;
			}
			// 取得固定網版-各網版布局的總數
			if(!$data['index']['layout_count'][0] = $pd_r->getAdaptiveLayoutCount(1)){
				$data['index']['layout_count'][0] = 0;
			}
			if(!$data['index']['layout_count'][1] = $pd_r->getAdaptiveLayoutCount(2)){
				$data['index']['layout_count'][1]= 0;
			}
			if(!$data['index']['layout_count'][2] = $pd_r->getAdaptiveLayoutCount(3)){
				$data['index']['layout_count'][2] = 0;
			}
			if(!$data['index']['layout_count'][3] = $pd_r->getAdaptiveLayoutCount(4)){
				$data['index']['layout_count'][3] = 0;
			}
			if(!$data['index']['layout_count'][4] = $pd_r->getAdaptiveLayoutCount(5)){
				$data['index']['layout_count'][4] = 0;
			}
			// 取得固定網版-各網版風格的總數
			if(!$data['index']['style_count'][0] = $pd_r->getAdaptiveStyleCount(1)){
				$data['index']['style_count'][0] = 0;
			}
			if(!$data['index']['style_count'][1] = $pd_r->getAdaptiveStyleCount(2)){
				$data['index']['style_count'][1] = 0;
			}
			if(!$data['index']['style_count'][2] = $pd_r->getAdaptiveStyleCount(3)){
				$data['index']['style_count'][2] = 0;
			}
			if(!$data['index']['style_count'][3] = $pd_r->getAdaptiveStyleCount(4)){
				$data['index']['style_count'][3] = 0;
			}
			// 取得固定網版-各網版色系的總數
			if(!$data['index']['color_count']['white'] = $pd_r->getAdaptiveColorCount('white')){
				$data['index']['color_count']['white'] = 0;
			}
			if(!$data['index']['color_count']['grey'] = $pd_r->getAdaptiveColorCount('grey')){
				$data['index']['color_count']['grey'] = 0;
			}
			if(!$data['index']['color_count']['black'] = $pd_r->getAdaptiveColorCount('black')){
				$data['index']['color_count']['black'] = 0;
			}
			if(!$data['index']['color_count']['blue'] = $pd_r->getAdaptiveColorCount('blue')){
				$data['index']['color_count']['blue'] = 0;
			}
			if(!$data['index']['color_count']['green'] = $pd_r->getAdaptiveColorCount('green')){
				$data['index']['color_count']['green'] = 0;
			}
			if(!$data['index']['color_count']['yellow'] = $pd_r->getAdaptiveColorCount('yellow')){
				$data['index']['color_count']['yellow'] = 0;
			}
			if(!$data['index']['color_count']['brown'] = $pd_r->getAdaptiveColorCount('brown')){
				$data['index']['color_count']['brown'] = 0;
			}
			if(!$data['index']['color_count']['orange'] = $pd_r->getAdaptiveColorCount('orange')){
				$data['index']['color_count']['orange'] = 0;
			}
			if(!$data['index']['color_count']['red'] = $pd_r->getAdaptiveColorCount('red')){
				$data['index']['color_count']['red'] = 0;
			}
			if(!$data['index']['color_count']['pink'] = $pd_r->getAdaptiveColorCount('pink')){
				$data['index']['color_count']['pink'] = 0;
			}
			if(!$data['index']['color_count']['purple'] = $pd_r->getAdaptiveColorCount('purple')){
				$data['index']['color_count']['purple'] = 0;
			}
			// 取得最新五筆的固定網版名稱
			if(!$data['index']['newestdata'] = $pd_r->getFiveLatestAdaptiveData()){
				return CommonTools::returnData('資料獲取失敗');
			}
			// 取得最新三筆的固定網版資料
			if(!$data['index']['projectdata'] = $pd_r->getThreeLatestAdaptiveData($data['index'])){
				return CommonTools::returnData('資料獲取失敗');
			}
			////////////////////////////////////////////////////////////////////////
			//project相關
			//資料的排列依據
			$data['project']['orderBy'] = 'pd_date';
			//版型名稱
			$data['project']['pd_num'] = '';
			if (!$data['project']['projects'] = $pd_r->getAllData($data['project'])) {
				return CommonTools::returnData('資料獲取失敗');
			}
			////////////////////////////////////////////////////////////////////////
			//logo相關
			//合作夥伴名稱
			$data['logo']['ld_name'] = '';
			//合作夥伴查詢條件
			// if (!$data['logo']['logos'] = $ld_r->getAllData($data['logo'])) {
			// 	return CommonTools::returnData('資料獲取失敗');
			// }
			//合作夥伴的排序
			if (!$data['logo']['logos'] = $ls_r->getAllData($data['logo']['ld_name'])){
				return CommonTools::returnData('資料獲取失敗');
			}
			////////////////////////////////////////////////////////////////////////
			//user相關
			//使用者名稱
			$data['user']['ud_name'] = '';
			if (!$data['user']['users'] = $ud_r->getAllData($data['user'])) {
				return CommonTools::returnData('資料獲取失敗');
			}
			////////////////////////////////////////////////////////////////////////
			//transaction相關
			//抓取異動紀錄資料
			if (!$data['transaction']['records'] = $tr_r->getAllData($data)) {
				return CommonTools::returnData('資料獲取失敗');
			}
			//抓取使用者登入紀錄
			if (!$data['transaction']['lastlogins'] = $ud_r->getAllUserLastLogin($data)) {
				return CommonTools::returnData('資料獲取失敗');
			}

			return response()->json($data);
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return CommonTools::returnData('#010101');
		}
	}
}