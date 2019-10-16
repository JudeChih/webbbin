<?php

namespace App\Repositories;

use App\Models\JsonInOutRecord;
use App\Library\CommonTools;
use DB;

class JsonInOutRecordRepository {

    //新增資料
    public function insertData($arraydata) {
        try {
            //檢查「必填值」
            if (!CommonTools::checkArrayValue($arraydata, "jio_receive") ||
                !CommonTools::checkArrayValue($arraydata, "jio_return") ||
                !CommonTools::checkArrayValue($arraydata, "jio_wcffunction") ||
                !CommonTools::checkArrayValue($arraydata, "ps_id")) {
                return false;
            }

            $savedata['jio_receive'] = $arraydata['jio_receive'];
            $savedata['jio_return'] = $arraydata['jio_return'];
            $savedata['jio_wcffunction'] = $arraydata['jio_wcffunction'];
            $savedata['ps_id'] = $arraydata['ps_id'];


            if (!CommonTools::checkArrayValue($arraydata, "isflag")) {
                $savedata['isflag'] = '1';
            } else {
                $savedata['isflag'] = $arraydata['isflag'];
            }

            if (!CommonTools::checkArrayValue($arraydata, "create_user")) {
                $savedata['create_user'] = 'webapi';
            } else {
                $savedata['create_user'] = $arraydata['create_user'];
            }
            if (!CommonTools::checkArrayValue($arraydata, "last_update_user")) {
                $savedata['last_update_user'] = 'webapi';
            } else {
                $savedata['last_update_user'] = $arraydata['last_update_user'];
            }

            JsonInOutRecord::insert($savedata);

            return true;

        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
    }

    public function insertDataGetId($arraydata, &$jio_id) {
        try {
            //檢查「必填值」
            if (!CommonTools::checkArrayValue($arraydata, "jio_receive") ||
                !CommonTools::checkArrayValue($arraydata, "jio_return") ||
                !CommonTools::checkArrayValue($arraydata, "jio_wcffunction") ||
                !CommonTools::checkArrayValue($arraydata, "ps_id")) {
                return false;
            }

            $savedata['jio_receive'] = $arraydata['jio_receive'];
            $savedata['jio_return'] = $arraydata['jio_return'];
            $savedata['jio_wcffunction'] = $arraydata['jio_wcffunction'];
            $savedata['ps_id'] = $arraydata['ps_id'];


            if (!CommonTools::checkArrayValue($arraydata, "isflag")) {
                $savedata['isflag'] = '1';
            } else {
                $savedata['isflag'] = $arraydata['isflag'];
            }

            if (!CommonTools::checkArrayValue($arraydata, "create_user")) {
                $savedata['create_user'] = 'bbin';
            } else {
                $savedata['create_user'] = $arraydata['create_user'];
            }
            if (!CommonTools::checkArrayValue($arraydata, "last_update_user")) {
                $savedata['last_update_user'] = 'bbin';
            } else {
                $savedata['last_update_user'] = $arraydata['last_update_user'];
            }

            $jio_id = JsonInOutRecord::insertGetId($savedata);

            return $jio_id;
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
    }
}
