<?php

namespace App\Repositories;

use App\Models\TransactionRecord;
use App\Services\CommonTools;

class TransactionRecordRepository {

    /**
     * 取得全部的異動紀錄，一頁顯示15筆
     */
    public function getAllData($arraydata){
        try {
            return TransactionRecord::where('isflag',1)->orderBy('tr_id','DESC')->get();
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
    }

    /**
     * 建立一筆新的資料
     * @param array $arraydata 要新增的資料
     */
    public function create(array $arraydata) {
        try {
            // 異動版型編號
            if (CommonTools::CheckArrayValue($arraydata,'pd_id')) {
                $savedata['pd_id'] = $arraydata['pd_id'];
            }
            // 異動合作夥伴編號
            if (CommonTools::CheckArrayValue($arraydata,'ld_id')) {
                $savedata['ld_id'] = $arraydata['ld_id'];
            }
            // 異動使用者編號
            if (CommonTools::CheckArrayValue($arraydata,'ud_id')) {
                $savedata['ud_id'] = $arraydata['ud_id'];
            }
            // 異動項目
            if (CommonTools::CheckArrayValue($arraydata,'tr_action')) {
                $savedata['tr_action'] = $arraydata['tr_action'];
            }
            // 異動使用者名稱
            if (CommonTools::CheckArrayValue($arraydata,'tr_user')) {
                $savedata['tr_user'] = $arraydata['tr_user'];
            }
            // 異動資料狀態
            $savedata['isflag'] = 1;
            // 異動新增部門
            $savedata['create_user'] = $arraydata['tr_user'];
            // 異動新增時間
            $savedata['create_date'] = \Carbon\Carbon::now();

            TransactionRecord::insert($savedata);
            return true;
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
    }
}