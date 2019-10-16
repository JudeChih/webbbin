var string = {
  url : {// 目前用在圖片連結的拼湊
    'rentSearch':'http://art.rentsearch.com',
    'webbbin_back':'http://wms.bbinpartner.com',
    'webbbin_front':'http://web.bbinpartner.com',
  },
  folder : {// 目前是用在liveDemo連結的拼湊
    'live_demo':'/_template/',
  }
}
$(function(){
  // 提示欄位未填的功能，初始化
  $('[data-toggle="tooltip"]').tooltip();

  $('#open_image_manager').filemanager('image');

  //easy-sidebar-toggle-right
  $('.easy-sidebar-toggle').click(function(e) {
    e.preventDefault();
    $('body').toggleClass('toggled');
    $('.navbar.easy-sidebar').removeClass('toggled');
  });

  // 修改、新增、刪除之後在頁面會跳出的小視窗，確認的按鈕
  $('.btn_yes').on('click', function() {
    $('.prompt_body').fadeOut(400, function() {
      $('.prompt_body').remove();
    });
  })


})