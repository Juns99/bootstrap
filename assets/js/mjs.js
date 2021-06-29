$(document).ready(function(){
    $('.videoBtn').each(function (index) {
        var $this = $(this);
        var vid = $(this).find('video').get(0);
        var btn = $(this).find('.vdo_btn_play');
        vid.onended = function () {
            setTimeout(function () {
                btn.css({ "display": "block" });
                vid.currentTime = 0;
                vid.pause();
            }, 1000);
        };
        btn.on('click', function () {
            vid.play();
            btn.css({ "display": "none" });
        });
    });
});
