$(document).ready(function () {
    
    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
        $(".navibar_list").slideToggle();
    });

    $(".navibar_link a").click(function () {
        $(".navibar_link a").removeClass("current");
        $(this).addClass("current");
        var id = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(id).offset().top - 40
        }, 1000);
        console.log(id);
        $(id).addClass("current");
    });

    $(document).scroll(function () {
        if ($(document).scrollTop() > 0 && (screen.width >= 1024)) {
            $(".navibar").addClass("navscrollbg");
        } else {
            $(".navibar").removeClass("navscrollbg");
        }
    });

    $(".slick_carousel").slick({
        autoplay: true
    });
});