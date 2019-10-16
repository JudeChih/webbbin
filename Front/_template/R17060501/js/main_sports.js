//SLIDER
(function ($, window, i) {
  $.fn.responsiveSlides = function (options) {

    // Default settings
    var settings = $.extend({
      "auto": true,             // Boolean: Animate automatically, true or false
      "speed": 300,             // Integer: Speed of the transition, in milliseconds
      "timeout": 7000,          // Integer: Time between slide transitions, in milliseconds
      "pager": true,           // Boolean: Show pager, true or false
      "nav": false,             // Boolean: Show navigation, true or false
      "random": false,          // Boolean: Randomize the order of the slides, true or false
      "pause": false,           // Boolean: Pause on hover, true or false
      "pauseControls": true,    // Boolean: Pause when hovering controls, true or false
      "prevText": "Previous",   // String: Text for the "previous" button
      "nextText": "Next",       // String: Text for the "next" button
      "maxwidth": "",           // Integer: Max-width of the slideshow, in pixels
      "navContainer": "",       // Selector: Where auto generated controls should be appended to, default is after the <ul>
      "manualControls": "",     // Selector: Declare custom pager navigation
      "namespace": "sport-slider",   // String: change the default namespace used
      before: function () {},   // Function: Before callback
      after: function () {}     // Function: After callback
    }, options);

    return this.each(function () {

      // Index for namespacing
      i++;

      var $this = $(this),

        // Local variables
        vendor,
        selectTab,
        startCycle,
        restartCycle,
        rotate,
        $tabs,

        // Helpers
        index = 0,
        $slide = $this.children(),
        length = $slide.size(),
        fadeTime = parseFloat(settings.speed),
        waitTime = parseFloat(settings.timeout),
        maxw = parseFloat(settings.maxwidth),

        // Namespacing
        namespace = settings.namespace,
        namespaceIdx = namespace + i,

        // Classes
        navClass = namespace + "_nav " + namespaceIdx + "_nav",
        activeClass = namespace + "_here",
        visibleClass = namespaceIdx + "_on",
        slideClassPrefix = namespaceIdx + "_s",

        // Pager
        $pager = $("<ul class='" + namespace + "_tabs " + namespaceIdx + "_tabs' />"),

        // Styles for visible and hidden slides
        visible = {"float": "left", "position": "relative", "opacity": 1, "zIndex": 2},
        hidden = {"float": "none", "position": "absolute", "opacity": 0, "zIndex": 1},

        // Detect transition support
        supportsTransitions = (function () {
          var docBody = document.body || document.documentElement;
          var styles = docBody.style;
          var prop = "transition";
          if (typeof styles[prop] === "string") {
            return true;
          }
          // Tests for vendor specific prop
          vendor = ["Moz", "Webkit", "Khtml", "O", "ms"];
          prop = prop.charAt(0).toUpperCase() + prop.substr(1);
          var i;
          for (i = 0; i < vendor.length; i++) {
            if (typeof styles[vendor[i] + prop] === "string") {
              return true;
            }
          }
          return false;
        })(),

        // Fading animation
        slideTo = function (idx) {
          settings.before();
          // If CSS3 transitions are supported
          if (supportsTransitions) {
            $slide
              .removeClass(visibleClass)
              .css(hidden)
              .eq(idx)
              .addClass(visibleClass)
              .css(visible);
            index = idx;
            setTimeout(function () {
              settings.after();
            }, fadeTime);
          // If not, use jQuery fallback
          } else {
            $slide
              .stop()
              .fadeOut(fadeTime, function () {
                $(this)
                  .removeClass(visibleClass)
                  .css(hidden)
                  .css("opacity", 1);
              })
              .eq(idx)
              .fadeIn(fadeTime, function () {
                $(this)
                  .addClass(visibleClass)
                  .css(visible);
                settings.after();
                index = idx;
              });
          }
        };

      // Random order
      if (settings.random) {
        $slide.sort(function () {
          return (Math.round(Math.random()) - 0.5);
        });
        $this
          .empty()
          .append($slide);
      }

      // Add ID's to each slide
      $slide.each(function (i) {
        this.id = slideClassPrefix + i;
      });

      // Add max-width and classes
      $this.addClass(namespace + " " + namespaceIdx);
      if (options && options.maxwidth) {
        $this.css("max-width", maxw);
      }

      // Hide all slides, then show first one
      $slide
        .hide()
        .css(hidden)
        .eq(0)
        .addClass(visibleClass)
        .css(visible)
        .show();

      // CSS transitions
      if (supportsTransitions) {
        $slide
          .show()
          .css({
            // -ms prefix isn't needed as IE10 uses prefix free version
            "-webkit-transition": "opacity " + fadeTime + "ms ease-in-out",
            "-moz-transition": "opacity " + fadeTime + "ms ease-in-out",
            "-o-transition": "opacity " + fadeTime + "ms ease-in-out",
            "transition": "opacity " + fadeTime + "ms ease-in-out"
          });
      }

      // Only run if there's more than one slide
      if ($slide.size() > 1) {

        // Make sure the timeout is at least 100ms longer than the fade
        if (waitTime < fadeTime + 100) {
          return;
        }

        // Pager
        if (settings.pager && !settings.manualControls) {
          var tabMarkup = [];
          $slide.each(function (i) {
            var n = i + 1;
            tabMarkup +=
              "<li>" +
              "<a href='#' class='" + slideClassPrefix + n + "'>" + n + "</a>" +
              "</li>";
          });
          $pager.append(tabMarkup);

          // Inject pager
          if (options.navContainer) {
            $(settings.navContainer).append($pager);
          } else {
            $this.after($pager);
          }
        }

        // Manual pager controls
        if (settings.manualControls) {
          $pager = $(settings.manualControls);
          $pager.addClass(namespace + "_tabs " + namespaceIdx + "_tabs");
        }

        // Add pager slide class prefixes
        if (settings.pager || settings.manualControls) {
          $pager.find('li').each(function (i) {
            $(this).addClass(slideClassPrefix + (i + 1));
          });
        }

        // If we have a pager, we need to set up the selectTab function
        if (settings.pager || settings.manualControls) {
          $tabs = $pager.find('a');

          // Select pager item
          selectTab = function (idx) {
            $tabs
              .closest("li")
              .removeClass(activeClass)
              .eq(idx)
              .addClass(activeClass);
          };
        }

        // Auto cycle
        if (settings.auto) {

          startCycle = function () {
            rotate = setInterval(function () {

              // Clear the event queue
              $slide.stop(true, true);

              var idx = index + 1 < length ? index + 1 : 0;

              // Remove active state and set new if pager is set
              if (settings.pager || settings.manualControls) {
                selectTab(idx);
              }

              slideTo(idx);
            }, waitTime);
          };

          // Init cycle
          startCycle();
        }

        // Restarting cycle
        restartCycle = function () {
          if (settings.auto) {
            // Stop
            clearInterval(rotate);
            // Restart
            startCycle();
          }
        };

        // Pause on hover
        if (settings.pause) {
          $this.hover(function () {
            clearInterval(rotate);
          }, function () {
            restartCycle();
          });
        }

        // Pager click event handler
        if (settings.pager || settings.manualControls) {
          $tabs.bind("click", function (e) {
            e.preventDefault();

            if (!settings.pauseControls) {
              restartCycle();
            }

            // Get index of clicked tab
            var idx = $tabs.index(this);

            // Break if element is already active or currently animated
            if (index === idx || $("." + visibleClass).queue('fx').length) {
              return;
            }

            // Remove active state from old tab and set new one
            selectTab(idx);

            // Do the animation
            slideTo(idx);
          })
            .eq(0)
            .closest("li")
            .addClass(activeClass);

          // Pause when hovering pager
          if (settings.pauseControls) {
            $tabs.hover(function () {
              clearInterval(rotate);
            }, function () {
              restartCycle();
            });
          }
        }

        // Navigation
        if (settings.nav) {
          var navMarkup =
            "<a href='#' class='" + navClass + " prev'>" + settings.prevText + "</a>" +
            "<a href='#' class='" + navClass + " next'>" + settings.nextText + "</a>";

          // Inject navigation
          if (options.navContainer) {
            $(settings.navContainer).append(navMarkup);
          } else {
            $this.after(navMarkup);
          }

          var $trigger = $("." + namespaceIdx + "_nav"),
            $prev = $trigger.filter(".prev");

          // Click event handler
          $trigger.bind("click", function (e) {
            e.preventDefault();

            var $visibleClass = $("." + visibleClass);

            // Prevent clicking if currently animated
            if ($visibleClass.queue('fx').length) {
              return;
            }

            //  Adds active class during slide animation
            //  $(this)
            //    .addClass(namespace + "_active")
            //    .delay(fadeTime)
            //    .queue(function (next) {
            //      $(this).removeClass(namespace + "_active");
            //      next();
            //  });

            // Determine where to slide
            var idx = $slide.index($visibleClass),
              prevIdx = idx - 1,
              nextIdx = idx + 1 < length ? index + 1 : 0;

            // Go to slide
            slideTo($(this)[0] === $prev[0] ? prevIdx : nextIdx);
            if (settings.pager || settings.manualControls) {
              selectTab($(this)[0] === $prev[0] ? prevIdx : nextIdx);
            }

            if (!settings.pauseControls) {
              restartCycle();
            }
          });

          // Pause when hovering navigation
          if (settings.pauseControls) {
            $trigger.hover(function () {
              clearInterval(rotate);
            }, function () {
              restartCycle();
            });
          }
        }

      }

      // Max-width fallback
      if (typeof document.body.style.maxWidth === "undefined" && options.maxwidth) {
        var widthSupport = function () {
          $this.css("width", "100%");
          if ($this.width() > maxw) {
            $this.css("width", maxw);
          }
        };

        // Init fallback
        widthSupport();
        $(window).bind("resize", function () {
          widthSupport();
        });
      }

    });

  };
})(jQuery, this, 0);



// 美東時間
function show_now() {
    var mydate=new Date();
    var year=mydate.getFullYear();
    var day=mydate.getDay();
    var month=mydate.getMonth();
    var daym=mydate.getDate();
    var Hours=mydate.getHours();
    var Minutes=mydate.getMinutes();
    var Seconds=mydate.getSeconds();
    if (daym<10){
    daym="0"+daym;}
    var dayarray=new Array("SUN","MON","TUE","WED","THU","FRI","STA")
    var montharray=new Array("1","2","3","4","5","6","7","8","9","10","11","12")
    var date_div=document.getElementById("js-est-reciprocal");
    var date_str=year+"/"+montharray[month]+"/"+daym+" "+Hours+":"+Minutes+":"+Seconds
    date_div.innerHTML=date_str;

    setTimeout("show_now()",1000);
}
show_now();



//LOGIN POPUP
;( function( window ) {
  
  'use strict';

  var support = { animations : Modernizr.cssanimations },
    animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
    animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
    onEndAnimation = function( el, callback ) {
      var onEndCallbackFn = function( ev ) {
        if( support.animations ) {
          if( ev.target != this ) return;
          this.removeEventListener( animEndEventName, onEndCallbackFn );
        }
        if( callback && typeof callback === 'function' ) { callback.call(); }
      };
      if( support.animations ) {
        el.addEventListener( animEndEventName, onEndCallbackFn );
      }
      else {
        onEndCallbackFn();
      }
    };

  function extend( a, b ) {
    for( var key in b ) { 
      if( b.hasOwnProperty( key ) ) {
        a[key] = b[key];
      }
    }
    return a;
  }

  function DialogFx( el, options ) {
    this.el = el;
    this.options = extend( {}, this.options );
    extend( this.options, options );
    this.ctrlClose = this.el.querySelector( '[data-dialog-close]' );
    this.isOpen = false;
    this._initEvents();
  }

  DialogFx.prototype.options = {
    // callbacks
    onOpenDialog : function() { return false; },
    onCloseDialog : function() { return false; }
  }

  DialogFx.prototype._initEvents = function() {
    var self = this;

    // close action
    this.ctrlClose.addEventListener( 'click', this.toggle.bind(this) );

    // esc key closes dialog
    document.addEventListener( 'keydown', function( ev ) {
      var keyCode = ev.keyCode || ev.which;
      if( keyCode === 27 && self.isOpen ) {
        self.toggle();
      }
    } );

    this.el.querySelector( '.dialog-overlay' ).addEventListener( 'click', this.toggle.bind(this) );
  }

  DialogFx.prototype.toggle = function() {
    var self = this;
    if( this.isOpen ) {
      classie.remove( this.el, 'dialog-open' );
      classie.add( self.el, 'dialog-close' );
      
      onEndAnimation( this.el.querySelector( '.dialog-content' ), function() {
        classie.remove( self.el, 'dialog-close' );
      } );

      // callback on close
      this.options.onCloseDialog( this );
    }
    else {
      classie.add( this.el, 'dialog-open' );

      // callback on open
      this.options.onOpenDialog( this );
    }
    this.isOpen = !this.isOpen;
  };

  // add to global namespace
  window.DialogFx = DialogFx;

})( window );


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



//最新賽果
;
(function($, window, document, undefined) {
    'use strict';
    var pluginName = 'newsTicker',
        defaults = {
            row_height: 182,
            // max_rows: 3,
            speed: 1200,
            duration: 7000,
            direction: 'up',
            autostart: 1,
            pauseOnHover: 1,
            nextButton: null,
            prevButton: null,
            startButton: null,
            stopButton: null,
            hasMoved: function() {},
            movingUp: function() {},
            movingDown: function() {},
            start: function() {},
            stop: function() {},
            pause: function() {},
            unpause: function() {}
        };

    function Plugin(element, options) {
        this.element = element;
        this.$el = $(element);
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.moveInterval;
        this.state = 0;
        this.paused = 0;
        this.moving = 0;
        if (this.$el.is('ul, ol')) {
            this.init();
        }
    }

    Plugin.prototype = {
        init: function() {
            this.$el.height(this.options.row_height * this.options.max_rows)
                .css({overflow : 'hidden'});

            this.checkSpeed();

            if(this.options.nextButton && typeof(this.options.nextButton[0]) !== 'undefined')
                this.options.nextButton.click(function(e) {
                    this.moveNext();
                    this.resetInterval();
                }.bind(this));
            if(this.options.prevButton && typeof(this.options.prevButton[0]) !== 'undefined')
                this.options.prevButton.click(function(e) {
                    this.movePrev();
                    this.resetInterval();
                }.bind(this));
            if(this.options.stopButton && typeof(this.options.stopButton[0]) !== 'undefined')
                this.options.stopButton.click(function(e) {
                    this.stop()
                }.bind(this));
            if(this.options.startButton && typeof(this.options.startButton[0]) !== 'undefined')
                this.options.startButton.click(function(e) {
                    this.start()
                }.bind(this));
            
            if(this.options.pauseOnHover) {
                this.$el.hover(function() {
                    if (this.state)
                            this.pause();
                }.bind(this), function() {
                    if (this.state)
                            this.unpause();
                }.bind(this));
            }

            if(this.options.autostart)
                this.start();
        },

        start: function() {
            if (!this.state) {
                this.state = 1;
                this.resetInterval();
                this.options.start();
            }
        },

        stop: function() {
            if (this.state) {
                clearInterval(this.moveInterval);
                this.state = 0;
                this.options.stop();
            }
        },

        resetInterval: function() {
            if (this.state) {
                clearInterval(this.moveInterval);
                this.moveInterval = setInterval(function() {this.move()}.bind(this), this.options.duration);
            }
        },

        move: function() {
            if (!this.paused) this.moveNext();
        },

        moveNext: function() {
            if (this.options.direction === 'down')
                this.moveDown();
            else if (this.options.direction === 'up')
                this.moveUp();
        },

        movePrev: function() {
            if (this.options.direction === 'down')
                this.moveUp();
            else if (this.options.direction === 'up')
                this.moveDown();
        },

        pause: function() {
            if (!this.paused) this.paused = 1;
            this.options.pause();
        },

        unpause: function() {
            if (this.paused) this.paused = 0;
            this.options.unpause();
        },

        moveDown: function() {
            if (!this.moving) {
                this.moving = 1;
                this.options.movingDown();
                this.$el.children('li:last').detach().prependTo(this.$el).css('marginTop', '-' + this.options.row_height + 'px')
                    .animate({marginTop: '0px'}, this.options.speed, function(){
                        this.moving = 0;
                        this.options.hasMoved();
                    }.bind(this));
            }
        },

        moveUp: function() {
            if (!this.moving) {
                this.moving = 1;
                this.options.movingUp();
                var element = this.$el.children('li:first');
                element.animate({marginTop: '-' + this.options.row_height + 'px'}, this.options.speed,
                    function(){
                        element.detach().css('marginTop', '0').appendTo(this.$el);
                        this.moving = 0;
                        this.options.hasMoved();
                    }.bind(this));
            }
        },

        updateOption: function(option, value) {
            if (typeof(this.options[option]) !== 'undefined'){
                this.options[option] = value;
                if (option == 'duration' || option == 'speed'){
                    this.checkSpeed();
                    this.resetInterval();
                }
            }
        },

        add: function(content){
            this.$el.append($('<li>').html(content));
        },

        getState: function() {
            if (paused) return 2 // 2 = paused
            else return this.state;// 0 = stopped, 1 = started
        },

        checkSpeed: function() {
            if (this.options.duration < (this.options.speed + 25))
                this.options.speed = this.options.duration - 25;
        },

        destroy: function() {
            this._destroy(); // or this.delete; depends on jQuery version
        }
    };

    $.fn[pluginName] = function(option) {
            var args = arguments;
            
            return this.each(function() {
                    var $this = $(this),
                            data = $.data(this, 'plugin_' + pluginName),
                            options = typeof option === 'object' && option;
                    if (!data) {
                            $this.data('plugin_' + pluginName, (data = new Plugin(this, options)));
                    }
                    // if first argument is a string, call silimarly named function
                    if (typeof option === 'string') {
                            data[option].apply(data, Array.prototype.slice.call(args, 1));
                    }
            });
    };
})(jQuery, window, document);


$('.sport-game-ticker').newsTicker();



//SLIDER
$(function () {
    $("#sportGameSlider").responsiveSlides({
    });
});



//賽事牆
$(function(){
    var $block = $('#sportGameBox1'),
        $wall = $block.find('.sport-game-wall'),
        showIndex = 0,
        fadeOutSpeed = 500,
        fadeInSpeed = 500,
        defaultZ = 10,
        isHover = false,
        timer, speed = 15000;
    $wall.css({
        opacity: 0,
        zIndex: defaultZ - 1
    }).eq(showIndex).css({
        opacity: 1,
        zIndex: defaultZ
    });
    var str = '';
    for(var i=0;i<$wall.length;i++){
        str += '<a href="#">' + (i + 1) + '</a>';
    }
    var $controlA = $('#sportGameBox1').append($('<div class="control">' + str + '</div>').css('zIndex', defaultZ + 1)).find('.control a');
    $controlA.click(function(){
        showIndex = $(this).text() * 1 - 1;
        $wall.eq(showIndex).stop().fadeTo(fadeInSpeed, 1, function(){
            if(!isHover){
                timer = setTimeout(autoClick, speed + fadeInSpeed);
            }
        }).css('zIndex', defaultZ).siblings('.sport-game-wall').stop().fadeTo(fadeOutSpeed, 0).css('zIndex', defaultZ - 1);
        $(this).addClass('on').siblings().removeClass('on');
        return false;
    }).focus(function(){
        $(this).blur();
    }).eq(showIndex).addClass('on');

    $block.hover(function(){
        isHover = true;
        clearTimeout(timer);
    }, function(){
        isHover = false;
        timer = setTimeout(autoClick, speed);
    })
    function autoClick(){
        if(isHover) return;
        showIndex = (showIndex + 1) % $controlA.length;
        $controlA.eq(showIndex).click();
    }
    timer = setTimeout(autoClick, speed);
});
$(function(){
    var $block = $('#sportGameBox2'),
        $wall = $block.find('.sport-game-wall'),
        showIndex = 0,
        fadeOutSpeed = 500,
        fadeInSpeed = 500,
        defaultZ = 10,
        isHover = false,
        timer, speed = 15000;
    $wall.css({
        opacity: 0,
        zIndex: defaultZ - 1
    }).eq(showIndex).css({
        opacity: 1,
        zIndex: defaultZ
    });
    var str = '';
    for(var i=0;i<$wall.length;i++){
        str += '<a href="#">' + (i + 1) + '</a>';
    }
    var $controlA = $('#sportGameBox2').append($('<div class="control">' + str + '</div>').css('zIndex', defaultZ + 1)).find('.control a');
    $controlA.click(function(){
        showIndex = $(this).text() * 1 - 1;
        $wall.eq(showIndex).stop().fadeTo(fadeInSpeed, 1, function(){
            if(!isHover){
                timer = setTimeout(autoClick, speed + fadeInSpeed);
            }
        }).css('zIndex', defaultZ).siblings('.sport-game-wall').stop().fadeTo(fadeOutSpeed, 0).css('zIndex', defaultZ - 1);
        $(this).addClass('on').siblings().removeClass('on');
        return false;
    }).focus(function(){
        $(this).blur();
    }).eq(showIndex).addClass('on');

    $block.hover(function(){
        isHover = true;
        clearTimeout(timer);
    }, function(){
        isHover = false;
        timer = setTimeout(autoClick, speed);
    })
    function autoClick(){
        if(isHover) return;
        showIndex = (showIndex + 1) % $controlA.length;
        $controlA.eq(showIndex).click();
    }
    timer = setTimeout(autoClick, speed);
});

(function() {
    var dlgtrigger = document.querySelector( '[data-dialog]' ),
        login_window = document.getElementById( dlgtrigger.getAttribute( 'data-dialog' ) ),
        dlg = new DialogFx( login_window );
    dlgtrigger.addEventListener( 'click', dlg.toggle.bind(dlg) );
})();



