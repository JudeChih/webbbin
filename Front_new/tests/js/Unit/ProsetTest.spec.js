import Vue from "vue";
import { shallowMount } from '@vue/test-utils';
import { mount } from '@vue/test-utils';
import Proset from '../../../resources/assets/js/pages/Proset_test.vue';
import { assert } from 'chai';
import { expect } from 'chai';
import { should } from 'chai';
import moxios from 'moxios';
import axios from 'axios';

// 這邊是參考用斷言，不影響目前前端的單元測試，純屬參考以及複製貼上用
describe('預設斷言',()=>{
    
    it('判斷是什麼類型的',()=>{
        expect('foo').to.be.a('string');
        expect({ a: 1 }).to.be.an('object');
        expect(null).to.be.a('null');
        expect(undefined).to.be.an('undefined');
        expect(new Error).to.be.an('error');
        expect(Promise.resolve()).to.be.a('promise');
        expect(new Float32Array).to.be.a('float32array');
        expect(Symbol()).to.be.a('symbol');

        var myObj = {[Symbol.toStringTag]: 'myCustomType'};
        expect(myObj).to.be.a('myCustomType').but.not.an('object');
    });

    it('變數msg是否沒被渲染成"new message"', ()=>{
        const msg = 'new message';
        const wrapper = shallowMount(Proset, {
            propsData: { msg },
        });

        expect(wrapper.text()).to.not.include(msg);
    });

    it('變數content是否被渲染成"new content"', ()=>{
        const toby = 'new content';
        const wrapper = shallowMount(Proset, {
            propsData: { toby },
        });
        
        expect(wrapper.text()).to.include(toby);
    });

    it('測試使用物件跟陣列取值', ()=>{
        const wrapper = mount(Proset);

        expect(wrapper.find('.hello').text()).to.contain('new');
    });

    it('断言第一洞与第二洞是否相等', ()=>{
        assert.deepEqual({ tea: 'green' }, { tea: 'green' });
    });

    it('断言目标属性值减少了多少', ()=>{
        var myObj = {val: 1};
        var subtractTwo = function () { myObj.val -= 2; };

        expect(subtractTwo).to.decrease(myObj, 'val').by(2);
    });

    it('断言目标是密封的（不能添加新属性，已存在属性不能修改和删除）', ()=>{
        var sealedObject = Object.seal({'gg':0});
        var frozenObject = Object.freeze({'qq':1});

        expect(sealedObject).to.be.sealed;
        expect(frozenObject).to.be.sealed;
        expect(1).to.be.sealed;
    });

    it('断言第一洞===第二洞(嚴格相等)', ()=>{
        assert.strictEqual(3, 3, 'no coercion for strict equality');

    });

    it('断言第一洞!==第二洞(不嚴格相等)', ()=>{
        assert.notStrictEqual(3, '3', 'no coercion for strict equality');

    });

    it('是否為真，不是的話會顯示後面的message', ()=>{
        var tea = 'tasty chai';
        var teaServed = true;
        assert.isNotTrue(tea, 'great, time for tea!');
        assert.isTrue(teaServed, 'the tea has been served');
    });

    it('判斷第一洞的type為什麼', ()=>{
        function Cat () { 
            return false;
        }

        expect(new Cat()).to.be.an.instanceof(Object);
        expect([1, 2]).to.be.an.instanceof(Array);
    });

    it('丟測試值進函數中，是否返回真值',()=>{
        expect(8).to.satisfy(function(num) {
            return num > 0; 
        });
    });

    it('目標屬於其中的一個',()=>{
        expect(1).to.be.oneOf([1, 2, 3]);
    });

    it('断言目标長度',()=>{
        expect([1, 2, 3]).to.have.length.within(1, 3);
        expect('foo').to.have.lengthOf(3);
    });

    it('断言目标包含子串',()=>{
        expect('foobar').to.have.string('bar');
    });
});