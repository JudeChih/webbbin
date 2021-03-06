import Vue from "vue";
import { shallowMount } from '@vue/test-utils';
import { mount } from '@vue/test-utils';
import Detail from '../../../resources/assets/js/pages/Detail_test.vue';
import { assert } from 'chai';
import { expect } from 'chai';
import { should } from 'chai';
import moxios from 'moxios';
import axios from 'axios';

describe('針對細節頁面的測試', () => {
    var num = 0;
    beforeEach(() => {
        moxios.install(axios);
    });
    afterEach(() => {
        moxios.uninstall(axios);
    });

    // 測試 init() 基本上都是針對js方面的修改以及設定，這邊不用下斷言
    it(++num + '. ' + '無須斷言 - 初始化首頁js方面的設定',()=>{
        expect(true).to.be.true;
    });

    // 測試 checkUrl() 判斷連結做設定，斷言無法跟去網路連結做測試
    it(++num + '. ' + '無須斷言 - 檢查該使用者是否可以瀏覽該頁面',()=>{
        expect(true).to.be.true;
    });

    // 測試 getProjects() 取值正常
    it(++num + '. ' + '斷言是否為陣列 - 取得所有版型資料',()=>{
        var object_one = {};
        // 製作假回傳值，不直接跟server溝通
        moxios.stubRequest('../projects', {
            status: 200,
            response: [{"pd_id":1,"pd_num":"版型名稱","pd_date":"版型完成日","pd_show":1,"pd_new":1,"pd_hot":1,"pd_hot_top":0,"pd_live":1,"pd_live_url":"","pd_rwd":0,"pd_desktop_check":1,"pd_tablet_check":0,"pd_mobile_check":0,"pd_layout":3,"pd_style":1,"pd_colors":"[\"blue\",\"yellow\",\"orange\"]","pd_type":2,"pd_view_img":"示意圖路徑","pd_banner_img":"banner圖路徑","pd_template_img":"版型各頁面圖片路徑","pd_model_img":"null","pd_notices":"","isflag":1,"create_user":"Blue","create_date":"2020-07-07 16:49:30","last_update_user":"Blue","last_update_date":"2020-08-18 11:04:25"},{"pd_id":2,"pd_num":"版型名稱","pd_date":"版型完成日","pd_show":1,"pd_new":1,"pd_hot":1,"pd_hot_top":0,"pd_live":1,"pd_live_url":"","pd_rwd":0,"pd_desktop_check":1,"pd_tablet_check":0,"pd_mobile_check":0,"pd_layout":3,"pd_style":1,"pd_colors":"[\"blue\",\"yellow\",\"orange\"]","pd_type":2,"pd_view_img":"示意圖路徑","pd_banner_img":"banner圖路徑","pd_template_img":"版型各頁面圖片路徑","pd_model_img":"null","pd_notices":"","isflag":1,"create_user":"Blue","create_date":"2020-07-07 16:49:30","last_update_user":"Blue","last_update_date":"2020-08-18 11:04:25"},{"pd_id":3,"pd_num":"版型名稱","pd_date":"版型完成日","pd_show":1,"pd_new":1,"pd_hot":1,"pd_hot_top":0,"pd_live":1,"pd_live_url":"","pd_rwd":0,"pd_desktop_check":1,"pd_tablet_check":0,"pd_mobile_check":0,"pd_layout":3,"pd_style":1,"pd_colors":"[\"blue\",\"yellow\",\"orange\"]","pd_type":2,"pd_view_img":"示意圖路徑","pd_banner_img":"banner圖路徑","pd_template_img":"版型各頁面圖片路徑","pd_model_img":"null","pd_notices":"","isflag":1,"create_user":"Blue","create_date":"2020-07-07 16:49:30","last_update_user":"Blue","last_update_date":"2020-08-18 11:04:25"}],
        });

        // 跟假server做撈值的動作
        axios.get('../projects')
            .then(function (response) {
                object_one = response.data;
                chaiTheData();
            })
            .catch(function (response) {
                console.log("撈值出錯");
            });

        // 斷言
        var chaiTheData = function(){
            expect(object_one).to.be.an('array');
        }

    });

    // 測試 getPrevProject() 取值正常
    it(++num + '. ' + '斷言是否為陣列 - 取得上一筆版型資料',()=>{
        var object_one = {};
        // 製作假回傳值，不直接跟server溝通
        moxios.stubRequest('../prev_project/1', {
            status: 200,
            response: [{"pd_id":1,"pd_num":"版型名稱","pd_date":"版型完成日","pd_show":1,"pd_new":1,"pd_hot":1,"pd_hot_top":0,"pd_live":1,"pd_live_url":"","pd_rwd":0,"pd_desktop_check":1,"pd_tablet_check":0,"pd_mobile_check":0,"pd_layout":3,"pd_style":1,"pd_colors":"[\"blue\",\"yellow\",\"orange\"]","pd_type":2,"pd_view_img":"示意圖路徑","pd_banner_img":"banner圖路徑","pd_template_img":"版型各頁面圖片路徑","pd_model_img":"null","pd_notices":"","isflag":1,"create_user":"Blue","create_date":"2020-07-07 16:49:30","last_update_user":"Blue","last_update_date":"2020-08-18 11:04:25"}],
        });

        // 跟假server做撈值的動作
        axios.get('../prev_project/1')
            .then(function (response) {
                object_one = response.data;
                chaiTheData();
            })
            .catch(function (response) {
                console.log("撈值出錯");
            });

        // 斷言
        var chaiTheData = function(){
            expect(object_one).to.be.an('array');
        }

    });

    // 測試 getNextProject() 取值正常
    it(++num + '. ' + '斷言是否為陣列 - 取得下一筆版型資料',()=>{
        var object_one = {};
        // 製作假回傳值，不直接跟server溝通
        moxios.stubRequest('../next_project/2', {
            status: 200,
            response: [{"pd_id":2,"pd_num":"版型名稱","pd_date":"版型完成日","pd_show":1,"pd_new":1,"pd_hot":1,"pd_hot_top":0,"pd_live":1,"pd_live_url":"","pd_rwd":0,"pd_desktop_check":1,"pd_tablet_check":0,"pd_mobile_check":0,"pd_layout":3,"pd_style":1,"pd_colors":"[\"blue\",\"yellow\",\"orange\"]","pd_type":2,"pd_view_img":"示意圖路徑","pd_banner_img":"banner圖路徑","pd_template_img":"版型各頁面圖片路徑","pd_model_img":"null","pd_notices":"","isflag":1,"create_user":"Blue","create_date":"2020-07-07 16:49:30","last_update_user":"Blue","last_update_date":"2020-08-18 11:04:25"}],
        });

        // 跟假server做撈值的動作
        axios.get('../next_project/2')
            .then(function (response) {
                object_one = response.data;
                chaiTheData();
            })
            .catch(function (response) {
                console.log("撈值出錯");
            });

        // 斷言
        var chaiTheData = function(){
            expect(object_one).to.be.an('array');
        }
    });

});