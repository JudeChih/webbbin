// game輪播語法
(function() {
    var vari = {
        width: 858,
        pics: document.getElementById("pics"),
        prev: document.getElementById("prev"),
        next: document.getElementById("next"),
        len: document.getElementById("pics").getElementsByTagName("li").length,
        intro: document.getElementById("pics").getElementsByTagName("p"),
        now: 1,
        step: 5,
        dir: null,
        span: null,
        span2: null,
        begin: null,
        begin2: null,
        end2: null,
        move: function() {
            if (parseInt(vari.pics.style.left, 10) > vari.dir * vari.now * vari.width && vari.dir == -1) {
                vari.step = (vari.step < 2) ? 1 : (parseInt(vari.pics.style.left, 10) - vari.dir * vari.now * vari.width) / 5;
                vari.pics.style.left = parseInt(vari.pics.style.left, 10) + vari.dir * vari.step + "px";
            } else if (parseInt(vari.pics.style.left, 10) < -vari.dir * (vari.now - 2) * vari.width && vari.dir == 1) {
                vari.step = (vari.step < 2) ? 1 : (-vari.dir * (vari.now - 2) * vari.width - parseInt(vari.pics.style.left, 10)) / 5;
                vari.pics.style.left = parseInt(vari.pics.style.left, 10) + vari.dir * vari.step + "px";
            } else {
                vari.now = vari.now - vari.dir;
                clearInterval(vari.begin);
                vari.begin = null;
                vari.step = 5;
                vari.width = 858;
            }
        },
        scr: function() {
            if (parseInt(vari.span.style.top, 10) > -31) {
                vari.span.style.top = parseInt(vari.span.style.top, 10) - 5 + "px";
            } else {
                clearInterval(vari.begin2);
                vari.begin2 = null;
            }
        },
        stp: function() {
            if (parseInt(vari.span2.style.top, 10) < 0) {
                vari.span2.style.top = parseInt(vari.span2.style.top, 10) + 10 + "px";
            } else {
                clearInterval(vari.end2);
                vari.end2 = null;
            }
        }
    };
    vari.prev.onclick = function() {
        if (!vari.begin && vari.now != 1) {
            vari.dir = 1;
            vari.begin = setInterval(vari.move, 20);
        } else if (!vari.begin && vari.now == 1) {
            vari.dir = -1
            vari.width *= vari.len - 1;
            vari.begin = setInterval(vari.move, 20);
        };
    };
    vari.next.onclick = function() {
        if (!vari.begin && vari.now != vari.len) {
            vari.dir = -1;
            vari.begin = setInterval(vari.move, 20);
        } else if (!vari.begin && vari.now == vari.len) {
            vari.dir = 1
            vari.width *= vari.len - 1;
            vari.begin = setInterval(vari.move, 20);
        };
    };
})();
