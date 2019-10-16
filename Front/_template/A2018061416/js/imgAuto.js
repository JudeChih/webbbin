$(function(){
	var num=0;
	var btn=$('.slider-ctrl a');
	var len=btn.length; //长度
	var autoTime;  //自动播放变量
	var space={}; //命名空间
	$('.slider-ctrl a').hover(function(){
		clearInterval(autoTime);
		num=btn.index(this);  //获取当前索引
		space.showimg(num);
		},function(){
			space.time(num);
			});
	$('.pre,.next').hover(function(){
		clearInterval(autoTime);
		},function(){
			num=space.getNum();
			space.time(num);
		});
	$('.pre').click(function(){
		num=space.getNum();
		num===0?space.showimg(len-1):space.showimg(num-1); //超过长度返回最后一张图
		});
	$('.next').click(function(){
		num=space.getNum();
		num===len-1?space.showimg(0):space.showimg(num+1); //超过长度返回第一张图
		});
	space.time=function(num){            //自动播放
		autoTime=setInterval(function(){
			space.showimg(num);
			num++;
			if(num>=len){     //超过长度返回第一张图
				num=0;
				}
			},3000);
		};
	space.showimg=function(i){         //显示焦点图
		var banner=$('.img_pic a');
		var img_btn=$('.slider-ctrl a');
		img_btn.eq(i).addClass('button').siblings('a').removeClass('button');
		banner.eq(i).stop(true,false).fadeIn(400).siblings('a').hide();
		}
	space.getNum=function(){      //获取当前索引
		for(var i=0; i<len; i++){
			if(btn.eq(i).hasClass('button')){
				return i;
				}
			}
		};	
	space.time(num);

	});