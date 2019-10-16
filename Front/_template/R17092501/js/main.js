$(() => {
    const html = "html, body";
    const overlay = ".overlay-bg";
    const btnBox = ".main-btn";
    const closeBtn = ".close-btn";

    const mainBtnFun = (button, box) => {
        $(button).click(() => {
            $(btnBox + "," + closeBtn).addClass("is-showing");
            $(html).addClass("no-scroll");
            $(overlay + "," + box).addClass("active");
        });
        $(closeBtn + "," + overlay).click(() => {
            $(btnBox + "," + closeBtn).removeClass("is-showing");
            $(html).removeClass("no-scroll");
            $(overlay + "," + box).removeClass("active");
        });
    }

    mainBtnFun(".btn-nav", ".mainnav-wrap");
    mainBtnFun(".btn-member", ".account-inner");

    //loading
    let loaded = false;
    const loadFinish = () => {
        if (!loaded) {
            $("#mainBody").removeClass('loading')
        }
        loaded = true
    }

    $(window).load(() => { setTimeout(() => { loadFinish() }, 100) });
    setTimeout(() => { loadFinish() }, 5000);


    //餘額展開
    $("#js-ele-obalance-wrap").click(function() {
        $("#js-ele-obalance-item-wrap").toggleClass("active");
    });

    // scorll top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 240) {
            $(".btn-top").fadeIn();
        } else {
            $(".btn-top").fadeOut();
        }
    });
    $(".btn-top").click(function() {
        $('body, html').animate({
            scrollTop: 0
        }, 500);
    });

});