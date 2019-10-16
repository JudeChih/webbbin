/**
 * 登入表單效果
 * @param _o object {
 *     Opacity : 標題透明度
 *     MS      : 標題顯示速度
 *   }
 */
$.fn.InputLabels = function(_o) {
    var o = {
        'Opacity': 0.5,
        'MS': 300,
        'next': false
    };
    $.extend(o, _o);

    return this.each(function() {
        var label = $(this);
        var input = o.next ? $(this).next('input[name=' + $(this).attr('name') + ']') : $('input[name=' + $(this).attr('name') + ']');
        var show = true;

        // 預防瀏覽器記帳密機制
        setTimeout(function() {
            this.opacity = (input.val() == "") ? 1.0 : 0;
            label.css('opacity', this.opacity);
        }, 300);

        if (label.attr('for') == undefined) {
            label.attr('for', $(this).attr('name'));
        }

        input.focus(function() {
            if (input.val() == "") {
                setOpacity(o.Opacity);
            }
        }).blur(function() {
            if (input.val() == "") {
                if (!show) {
                    label.css({ opacity: 0.0 }).show();
                }
                setOpacity(1.0);
            } else {
                setOpacity(0.0);
            }
        }).keydown(function(e) {
            if ((e.keyCode == 16) || (e.keyCode == 9) || (e.keyCode == 13)) return;
            if (show) {
                label.hide();
                show = false;
            }
        });

        var setOpacity = function(opacity) {
            label.stop().animate({ 'opacity': opacity }, o.MS);
            show = (opacity > 0.0);
        };
    });
};
$('#LoginForm,#searchWrap').find('label').InputLabels();


$(function() {
    // $('select[name=orderList]').find('option[value='+$('.form_orderby').find('input[name=orderBy]').val()+']').prop('selected',true);

    // 首頁的監聽
    $('select[name=orderList]').change(function(){
        $('.form_orderby').find('input[name=orderBy]').val($(this).find('option:selected').val());
        $('.form_orderby').submit();
    })
    // 網版列表的監聽
    $('select[name=adaptive_order]').change(function(){
        $('#searchWrap').find('input[name=orderBy]').val($(this).find('option:selected').val());
        $('#searchWrap').submit();
    })
    $('select[name=page_limit]').change(function(){
        $('#searchWrap').find('input[name=limit]').val($(this).find('option:selected').val());
        $('#searchWrap').submit();
    })
    //===== 列表大圖模式=====//
    $('.model-btn').on('click', function() {
        if ($(this).hasClass('model-img')) {
            $(this).removeClass('model-img');
            $('#searchWrap').find('input[name=model]').val('list');
            $('#searchWrap').find('input[name=change_model]').val(1);
            $('#searchWrap').submit();
        } else {
            $(this).addClass('model-img');
            $('#searchWrap').find('input[name=model]').val('image');
            $('#searchWrap').find('input[name=change_model]').val(1);
            $('#searchWrap').submit();
        }
        return false;
    });
    // form placeholder
    $('[placeholder]').focus(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
            input.val('');
            input.removeClass('placeholder');
        }
    }).blur(function() {
        var input = $(this);
        if (input.val() == '' || input.val() == input.attr('placeholder')) {
            input.addClass('placeholder');
            input.val(input.attr('placeholder'));
        }
    }).blur();
    $('[placeholder]').parents('form').submit(function() {
        $(this).find('[placeholder]').each(function() {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
            }
        })
    });

    //側邊nav下拉選單
    $('.drop-title').on('click', function(e) {
        e.preventDefault();
        $(this).parent().find('.drop-group').slideToggle('drop-open');
        $(this).toggleClass('drop-title-down');
    });

    //table顯示隱藏按鈕，記得再多加一個alert判斷
    $('.template-btn').on('click', function() {
        if ($(this).hasClass('template-btn-h')) {
            $(this).removeClass('template-btn-h');
            $(this).addClass('template-btn-v');
        } else if ($(this).hasClass('template-btn-v')) {
            $(this).removeClass('template-btn-v');
            $(this).addClass('template-btn-h');
        }
    });


    $('.pagination-wrap a').on('click', function(e) {
        e.preventDefault();
    });

    //gototop
    $('.js-gotoTop').on('click', function() {
        $('html body').animate({ 'scrollTop': 0 }, 250);
    });

    //使用者狀態
    $('.js-table-btn > button').on('click', function() {
        $(this).addClass('table-active').siblings().removeClass('table-active');
        $('input[name=ud_status]').val($(this).data('value'));
        return false;
    });

    //color-picker
    $('.js-color-pick span').on('click', function() {
        $(this).toggleClass('color-active');
    });

    //=====alert start=====//
    $(".btn-s-del,.btn-del,.temp-staut>a,.temp-icon>a").click(function() {
        //alert 確定是否更動的警示視窗
        $('html body').scrollLeft(0);
        $('html body').scrollTop(0);
        $('html').addClass('over_hidden');
        $(".mask-bg").toggleClass("active");
        $(".alert-wrap").toggleClass("active");
        if($(this).data('type') == 'pd_show'){
            if($(this).data('value') == 1){
                $('.alert-wrap .text_active').text('關閉');
                $('.alert-wrap .text_type').text('狀態?');
            }else{
                $('.alert-wrap .text_active').text('顯示');
                $('.alert-wrap .text_type').text('狀態?');
            }
            $('.alert-wrap .btn_edit').prop('href',$(this).data('href'));
        }else if($(this).data('type') == 'pd_new'){
            if($(this).data('value') == 1){
                $('.alert-wrap .text_active').text('隱藏');
                $('.alert-wrap .text_type').text('最新項目icon?');
            }else{
                $('.alert-wrap .text_active').text('顯示');
                $('.alert-wrap .text_type').text('最新項目icon?');
            }
            $('.alert-wrap .btn_edit').prop('href',$(this).data('href'));
        }else if($(this).data('type') == 'delete_template'){
            $('.alert-wrap .text_ask').text('確定要刪除');
            $('.alert-wrap .text_active').text($('.text-nar').text());
            $('.alert-wrap .text_type').text('網版?');
            $('.alert-wrap .btn_edit').on('click',function(){
                $('.delete_form').submit();
            })
        }else if($(this).data('type') == 'delete_user'){
            var form = $(this).siblings('.delete_form');
            $('.alert-wrap .text_ask').text('確定要刪除');
            $('.alert-wrap .text_active').text($(this).parent('td').siblings('.table-username').find('a').text());
            $('.alert-wrap .text_type').text('使用者?');
            $('.alert-wrap .btn_edit').on('click',function(){
                form.submit();
            })
        }
    });

    function lightboxCheck() {
        //移除警示視窗
        $('.mask-bg').removeClass("active");
        $('.alert-wrap').removeClass("active");
        $('html').removeClass('over_hidden');
    }

    $('.tip-wrap .btn_edit').on('click',function(){
        $('.tip-wrap').remove();
        $('.overlay').remove();
        $('html').removeClass('over_hidden');
    })

    $(".mask-bg,.alert-close,.alert-link>.btn-cancel").click(function() {
        lightboxCheck();
    });
    //=====alert end=====//
    //=====tab start=====//
    $('#tab2').hide();
    $('#tab-link a').on('click', function() {
        //全部先藏起來
        $('#tab1').hide();
        $('#tab2').hide();
        //顯示頁簽對應的內容
        $($(this).attr('href')).show();
        $('#tab-link .active').removeClass('active');
        $(this).addClass('active');

        //變更異動title文字
        $('.tab-title1').removeClass('tab-title2');
        if ($('#tab-link ul li:nth-child(2) a').hasClass('active')) {
            $('.tab-title1').addClass('tab-title2');
        }

        return false;
    });
    //=====tab end=====//
    //=====add input 新增圖片欄位 =====//
    var MaxInputs_i = 8; //最多只能新增8個
    var MaxInputs_m = 8; //最多只能新增8個
    var contenedor_i = $(".js-img-wrap");
    var contenedor_m = $(".js-model-wrap");
    var AddButton_i = $(".js-add-img");
    var AddButton_m = $(".js-add-model");
    var x = $(".js-img-wrap p").length + 1;
    var y = $(".js-model-wrap p").length + 1;
    var FieldCount_i = x - 1;
    var FieldCount_m = y - 1;

    // $(AddButton_i).click(function(e) {
    //     if (x <= MaxInputs_i) {
    //         FieldCount_i++;
    //         $($(this).prev()).append('<p class="table-template-edit-add clearfix"><input type="text"><a href="##" class="btn btn-upload">檔案上傳</a><a href="##" class="btn btn-del-circle js-del-input_i"><span class="fa"></span></a></p>');
    //         x++;
    //     }
    //     return false;
    // });
    // $(AddButton_m).click(function(e) {
    //     if (y <= MaxInputs_m) {
    //         FieldCount_m++;
    //         $($(this).prev()).append('<p class="table-template-edit-add clearfix"><input type="text"><a href="##" class="btn btn-upload">檔案上傳</a><a href="##" class="btn btn-del-circle js-del-input_m"><span class="fa"></span></a></p>');
    //         y++;
    //     }
    //     return false;
    // });

    $("body").on("click", '.js-del-input_i', function(e) {
        if (x > 1) {
            $(this).parent('p').remove();
            x--;
        }
        return false;
    });
    $("body").on("click", '.js-del-input_m', function(e) {
        if (y > 1) {
            $(this).parent('p').remove();
            y--;
        }
        return false;
    });

    //=====add input 新增圖片欄位 end =====//
    if(typeof dd !== 'undefined'){
        // $(window).resize(function() {
        //     var wdth=$(window).width();
        //     if(wdth > 1424){
        //         console.log(12)
        //         Chart.defaults.global.tooltips.bodyFontSize = 50;
        //     }else{
        //         console.log(13)
        //         Chart.defaults.global.tooltips.bodyFontSize = 20;
        //     }
        // });
        Chart.defaults.global.tooltips.bodyFontSize = 40;
        //圓餅圖
        //pie1
        var labels = ['直向大小', '橫向大小', '多面切割', '對角線', '無規則'];
        var total1 = 0;
        var ctx = document.getElementById('chart1').getContext('2d');
        var pieChart = new Chart(ctx,{
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    //預設資料
                    data: [dd.layout_01_count, dd.layout_02_count, dd.layout_03_count, dd.layout_04_count, dd.layout_05_count],
                    backgroundColor: [
                        //資料顏色
                        "#7d66f4",
                        "#ff7e00",
                        "#ffd200",
                        "#bc00ff",
                        "#f94c4c"
                    ],
                }],
            },
            options: {
                animation: {
                    animateScale: true,
                    animateRotate: true
                },
                // 關於滑過後的 顯示
                tooltips: {
                    callbacks: {
                        label: function(tooltipItem, data) {
                            var dataset = data.datasets[tooltipItem.datasetIndex];
                            //計算總和
                            var sum = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
                                return previousValue + currentValue;
                            });
                            var currentValue = dataset.data[tooltipItem.index];
                            var percent = Math.round(((currentValue / sum) * 100));
                            return " " + data.labels[tooltipItem.index] + ":" + currentValue;
                        }
                    }
                },

                //提示項目的處理
                legend: {
                    display: false,
                    position: 'right',
                    labels: {
                        usePointStyle: true,
                        generateLabels: function(chart) {
                            var data = chart.data;
                            if (data.labels.length && data.datasets.length) {
                                return data.labels.map(function(label, i) {
                                    var ds = data.datasets[0];
                                    var arc = chart.getDatasetMeta(0).data[i];
                                    var custom = arc && arc.custom || {};
                                    var getValueAtIndexOrDefault = Chart.helpers.getValueAtIndexOrDefault;
                                    var arcOpts = chart.options.elements.arc;
                                    var fill = custom.backgroundColor ? custom.backgroundColor : getValueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
                                    var stroke = custom.borderColor ? custom.borderColor : getValueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
                                    var bw = custom.borderWidth ? custom.borderWidth : getValueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);

                                    var value = chart.config.data.datasets[chart.getDatasetMeta(0).data[i]._datasetIndex].data[chart.getDatasetMeta(0).data[i]._index];

                                    return {
                                        text: label + " : " + value,
                                        fillStyle: fill,
                                        strokeStyle: stroke,
                                        lineWidth: bw,
                                        hidden: isNaN(ds.data[i]) || chart.getDatasetMeta(0).data[i].hidden,
                                        index: i
                                    };
                                });
                            } else {
                                return [];
                            }
                        }
                    }
                }

            },
        });


        //pie2 ============================
        var labels2 = ['前衛時尚', '復古典雅', '精緻華麗', '簡約大氣'];
        var total2 = 0;
        var ctx = document.getElementById('chart2').getContext('2d');
        var pieChart = new Chart(ctx,{
            type: 'pie',
            data: {
                labels: labels2,
                datasets: [{
                    //預設資料
                    data: [dd.style_01_count, dd.style_02_count, dd.style_03_count, dd.style_04_count],
                    backgroundColor: [
                        //資料顏色
                        "#7d66f4",
                        "#ff7e00",
                        "#ffd200",
                        "#bc00ff"
                    ],
                }],
            },
            options: {
                animation: {
                    animateScale: true,
                    animateRotate: true
                },
                // 關於滑過後的 顯示
                tooltips: {
                    callbacks: {
                        label: function(tooltipItem, data) {
                            var dataset = data.datasets[tooltipItem.datasetIndex];
                            //計算總和
                            var sum = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
                                return previousValue + currentValue;
                            });
                            var currentValue = dataset.data[tooltipItem.index];
                            var percent = Math.round(((currentValue / sum) * 100));
                            return " " + data.labels[tooltipItem.index] + ":" + currentValue;
                        }
                    }
                },
                //提示項目的處理
                legend: {
                    display: false,
                    position: 'right',
                    labels: {
                        usePointStyle: true,
                        generateLabels: function(chart) {
                            var data = chart.data;
                            if (data.labels.length && data.datasets.length) {
                                return data.labels.map(function(label, i) {
                                    var ds = data.datasets[0];
                                    var arc = chart.getDatasetMeta(0).data[i];
                                    var custom = arc && arc.custom || {};
                                    var getValueAtIndexOrDefault = Chart.helpers.getValueAtIndexOrDefault;
                                    var arcOpts = chart.options.elements.arc;
                                    var fill = custom.backgroundColor ? custom.backgroundColor : getValueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
                                    var stroke = custom.borderColor ? custom.borderColor : getValueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
                                    var bw = custom.borderWidth ? custom.borderWidth : getValueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);

                                    var value = chart.config.data.datasets[chart.getDatasetMeta(0).data[i]._datasetIndex].data[chart.getDatasetMeta(0).data[i]._index];

                                    return {
                                        text: label + " : " + value,
                                        fillStyle: fill,
                                        strokeStyle: stroke,
                                        lineWidth: bw,
                                        hidden: isNaN(ds.data[i]) || chart.getDatasetMeta(0).data[i].hidden,
                                        index: i
                                    };
                                });
                            } else {
                                return [];
                            }
                        }
                    }
                }
            },
        });


        //pie3 ============================
        var labels3 = ['white', 'grey', 'black', 'blue', 'green', 'yellow', 'brown', 'orange', 'red', 'pink', 'purple'];
        var total3 = 0;
        var ctx = document.getElementById('chart3').getContext('2d');
        var pieChart = new Chart(ctx,{
            type: 'pie',
            data: {
                labels: labels3,
                datasets: [{
                    //預設資料
                    data: [dd.color_white_count, dd.color_grey_count, dd.color_black_count, dd.color_blue_count, dd.color_green_count, dd.color_yellow_count, dd.color_brown_count, dd.color_orange_count, dd.color_red_count, dd.color_pink_count, dd.color_purple_count],
                    backgroundColor: [
                        //資料顏色
                        "#fff",
                        "#999",
                        "#000",
                        "#008fe4",
                        "#46c100",
                        "#f1f500",
                        "#5b2900",
                        "#ff7e00",
                        "#f31809",
                        "#ff007e",
                        "#bc00ff"
                    ],
                }],
            },
            options: {
                animation: {
                    animateScale: true,
                    animateRotate: true
                },
                // 關於滑過後的 顯示
                tooltips: {
                    callbacks: {
                        label: function(tooltipItem, data) {
                            var dataset = data.datasets[tooltipItem.datasetIndex];
                            //計算總和
                            var sum = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
                                return previousValue + currentValue;
                            });
                            var currentValue = dataset.data[tooltipItem.index];
                            var percent = Math.round(((currentValue / sum) * 100));
                            return " " + data.labels[tooltipItem.index] + ":" + currentValue;
                        }
                    }
                },
                //提示項目的處理
                legend: {
                    display: false,
                    position: 'right',
                    labels: {
                        usePointStyle: true,
                        generateLabels: function(chart) {
                            var data = chart.data;
                            if (data.labels.length && data.datasets.length) {
                                return data.labels.map(function(label, i) {
                                    var ds = data.datasets[0];
                                    var arc = chart.getDatasetMeta(0).data[i];
                                    var custom = arc && arc.custom || {};
                                    var getValueAtIndexOrDefault = Chart.helpers.getValueAtIndexOrDefault;
                                    var arcOpts = chart.options.elements.arc;
                                    var fill = custom.backgroundColor ? custom.backgroundColor : getValueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
                                    var stroke = custom.borderColor ? custom.borderColor : getValueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
                                    var bw = custom.borderWidth ? custom.borderWidth : getValueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);

                                    var value = chart.config.data.datasets[chart.getDatasetMeta(0).data[i]._datasetIndex].data[chart.getDatasetMeta(0).data[i]._index];

                                    return {
                                        text: label + " : " + value,
                                        fillStyle: fill,
                                        strokeStyle: stroke,
                                        lineWidth: bw,
                                        hidden: isNaN(ds.data[i]) || chart.getDatasetMeta(0).data[i].hidden,
                                        index: i
                                    };
                                });
                            } else {
                                return [];
                            }
                        }
                    }
                }
            },
        });
    }
});