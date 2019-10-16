$(function() {
    $('body').append($('<div>').append($('#ele-popup-group')).html());

    $("#js-ele-lang").on("click", function(e) {
        if ($(this).hasClass("active")) {
            langAutoClose();
        }else {
            $("#js-ele-lang, #ele-popup-group").addClass("active");
        }
    });

    $("body").click(function(event){
        if($(event.target).closest('#js-ele-lang, .ele-popup-group').length === 0) {
            if($('.ele-popup-group').is(":visible")) {
                langAutoClose();
            }
        }
    });

    $('#ele-popup-group').click(function() {
        langAutoClose();
    });
    $(document).keyup(function(event){
        if(event.which=='27'){
            langAutoClose();
        }
    });



    function langAutoClose(){
        $('#js-ele-lang, #ele-popup-group').removeClass("active");
    }
});