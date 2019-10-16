//LOGIN POPUP
( function( window ) {

'use strict';

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};


// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );



//GO TOP
$(function(){
  var $floatDown = $(".float-btn-down");
  var $floatTop = $(".float-btn-top");

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var backPoint = $('#page-container').height() + $('#page-footer').height() -$(window).height();

    if (scroll > backPoint) {
        $floatDown.stop().hide();
        $floatTop.show();
    } else {
        $floatDown.show();
        $floatTop.stop().hide();
    }
  });

  $floatDown.click(function(){
      $("html,body").animate({
          "scrollTop": window.scrollY+400
      },1000);
      return false;
  });
  $floatTop.click(function(){
      $("html,body").animate({
          scrollTop:0
      },1000);
  });
});
