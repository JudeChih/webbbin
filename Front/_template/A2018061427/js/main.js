$('.login-btn,.btn-submit').on('click', function() {
    $('.login-wrap').toggleClass('login-click');
});
$(document).ready(function() {

    var $el, leftPos, newWidth;
    $mainNav2 = $("#nav");

    /*
        EXAMPLE ONE
    */

    /* Add Magic Line markup via JavaScript, because it ain't gonna work without */
    $("#nav").append("<li id='magic-line'></li>");

    /* Cache it */
    var $magicLine = $("#magic-line");

    $magicLine
        .width($(".current").width())
        .css("left", $(".current a").position().left)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());


    $("#nav li").find("a").hover(function() {
        $el = $(this);
        leftPos = $el.position().left;
        newWidth = $el.width();

        $magicLine.stop().animate({
            left: leftPos,
            width: newWidth
        });
    }, function() {
        $magicLine.stop().animate({
            left: $magicLine.data("origLeft"),
            width: $magicLine.data("origWidth")
        });
    });
});
