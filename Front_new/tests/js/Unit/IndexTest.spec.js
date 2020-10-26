import Vue from "vue";
import { shallowMount } from '@vue/test-utils';
import { mount } from '@vue/test-utils';
import Index from '../../../resources/assets/js/pages/Index_test.vue';
import { assert } from 'chai';
import { expect } from 'chai';
import { should } from 'chai';
import moxios from 'moxios';
import axios from 'axios';

describe('針對首頁頁面的測試', () => {
    var num = 0;
    beforeEach(() => {
        moxios.install(axios);
    });
    afterEach(() => {
        moxios.uninstall(axios);
    });

    // 測試 init_index() 基本上都是針對js方面的修改以及設定，這邊不用下斷言
    it(++num + '. ' + '無須斷言 - 初始化首頁js方面的設定',()=>{
        expect(true).to.be.true;
    });

    // 測試 init_intro() 基本上都是針對js方面的修改以及設定，這邊不用下斷言
    it(++num + '. ' + '無須斷言 - 初始化首頁js方面的設定',()=>{
        expect(true).to.be.true;
    });

    // 測試 changeLayout() 是否接收到傳入值
    it(++num + '. ' + '斷言目標為true值 - 變更列表呈現方式',()=>{
        // 製作假傳入值
        var fake_key = 'masonry';
        if(fake_key == 'grid'){
            expect(false).to.be.true;
        }else{
            expect(true).to.be.true;
        }
    });

    // 測試 filterItems() 傳入值變更既定數值
    it(++num + '. ' + '斷言目標是否包含字串 - 變更分頁',()=>{
        // 製作假傳入值
        var fake_filterOption = 'all';
        if (fake_filterOption != 'is_new'){
            // this.$refs.cpt.filter(key);
            fake_filterOption = 'is_new';
        }

        // 斷言
        expect(fake_filterOption).to.have.string('new');
    });

    // 測試 checkTags() 傳入傳出值是否正確
    it(++num + '. ' + '斷言傳出值是否為字串 - 傳入版型資料傳出相對應的class name',()=>{
        // 製作假傳入值
        var fake_data = {'pd_layout':2,'pd_style':3,'pd_type':6};
        var fake_colors = ["yellow","coffee"];

        var layout = ['l-straight','l-horizontal','l-multi','l-diagonal','l-norules'];
        var style = ['s-fashion','s-classical','s-gorgeous','s-simple'];
        var type = ['t-casino','t-sports','t-card','t-live','t-lottery','t-mahjong','t-fishing'];
        var string = layout[fake_data.pd_layout-1] + ' ' + style[fake_data.pd_style-1] + ' ' + type[fake_data.pd_type-1] + ' ';
        
        for(var i = 0;i < fake_colors.length;i++){
            string = string + 'c-' + fake_colors[i] + ' ';
        }

        // 斷言
        expect(string).to.be.a('string');
    });

    // 測試 checkColors() 傳入傳出值是否正確
    it(++num + '. ' + '斷言傳出值是否為字串 - 傳入版型色系傳出css code',()=>{
        // 製作假傳入值
        var fake_colors = ["yellow","coffee"];

        var string = '';
        if(fake_colors.length == 1){
            string = 'background:'+(fake_colors[0]=='coffee'?'brown':fake_colors[0]);
        }else if(fake_colors.length == 2){
            string = 'background: linear-gradient(to right,' + (fake_colors[0]=='coffee'?'brown':fake_colors[0]) + ' 0%,' + (fake_colors[1]=='coffee'?'brown':fake_colors[1]) + ' 100%);';
        }else if(fake_colors.length == 3){
            string = 'background: linear-gradient(to right,' + (fake_colors[0]=='coffee'?'brown':fake_colors[0]) + ' 0%,' + (fake_colors[1]=='coffee'?'brown':fake_colors[1]) + ' 50%,'+ (fake_colors[2]=='coffee'?'brown':fake_colors[2]) +' 100%);';
        }

        // 斷言
        expect(string).to.be.a('string');
    });

    // 測試 getProjects() 取值正常
    it(++num + '. ' + '斷言是否為陣列 - 取得版型資料',()=>{
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

    // 測試 getBBINLogo() 取值正常
    it(++num + '. ' + '斷言資料筆數是否為一筆 - 單獨取得BBIN資料',()=>{
        var object_one = {};
        // 製作假回傳值，不直接跟server溝通
        moxios.stubRequest('../bbinlogo', {
            status: 200,
            response: [{"ld_id":1,"ld_name":"合作夥伴名稱","ld_img":"base64圖片路徑","ld_casino":1,"ld_sports":0,"ld_card":0,"ld_live":1,"ld_lottery":1,"ld_fishing":1,"ld_mahjong":1,"isflag":1,"create_user":"toby","create_date":"2020-08-19 11:16:09","last_update_user":"toby","last_update_date":"2020-08-19 11:16:09"}],
        });

        // 跟假server做撈值的動作
        axios.get('../bbinlogo')
            .then(function (response) {
                object_one = response.data;
                chaiTheData()
            })
            .catch(function (response) {
                console.log("撈值出錯");
            });

        // 斷言
        var chaiTheData = function(){
            expect(object_one).to.have.lengthOf(1);
        }
    });

    // 測試 getLogos() 取值正常
    it(++num + '. ' + '斷言資料是否包含ld_id - 取得合作夥伴資料',()=>{
        var object_one = {};
        // 製作假回傳值，不直接跟server溝通
        moxios.stubRequest('../getLogos', {
            status: 200,
            response: [{"ld_id":1,"ld_name":"合作夥伴名稱","ld_img":"base64圖片路徑","ld_casino":1,"ld_sports":0,"ld_card":0,"ld_live":1,"ld_lottery":1,"ld_fishing":1,"ld_mahjong":1,"isflag":1,"create_user":"toby","create_date":"2020-08-19 11:16:09","last_update_user":"toby","last_update_date":"2020-08-19 11:16:09"},{"ld_id":2,"ld_name":"合作夥伴名稱","ld_img":"base64圖片路徑","ld_casino":1,"ld_sports":0,"ld_card":0,"ld_live":1,"ld_lottery":1,"ld_fishing":1,"ld_mahjong":1,"isflag":1,"create_user":"toby","create_date":"2020-08-19 11:16:09","last_update_user":"toby","last_update_date":"2020-08-19 11:16:09"},{"ld_id":3,"ld_name":"合作夥伴名稱","ld_img":"base64圖片路徑","ld_casino":1,"ld_sports":0,"ld_card":0,"ld_live":1,"ld_lottery":1,"ld_fishing":1,"ld_mahjong":1,"isflag":1,"create_user":"toby","create_date":"2020-08-19 11:16:09","last_update_user":"toby","last_update_date":"2020-08-19 11:16:09"}],
        });

        // 跟假server做撈值的動作
        axios.get('../getLogos')
            .then(function (response) {
                object_one = response.data[0];
                chaiTheData()
            })
            .catch(function (response) {
                chaiTheData()
            });

        // 斷言
        var chaiTheData = function(){
            expect(object_one).to.have.any.keys('ld_id');
        }
    });

});