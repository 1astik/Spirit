$(function() {
    $('.meet .switch div').click(function() {
        $(".meet .switch div").removeClass('active');

        if ($(this).attr('class') == ('switch-2')) {
            $(".meet .all-meet-box .meet-box-1").css({"display": "none"});
            $(".meet .all-meet-box .meet-box-2").css({"display": "flex"});
            $(".meet .all-meet-box .meet-box-3").css({"display": "none"});
        }
        if ($(this).attr('class') == ('switch-3')) {
            $(".meet .all-meet-box .meet-box-1").css({"display": "none"});
            $(".meet .all-meet-box .meet-box-2").css({"display": "none"});
            $(".meet .all-meet-box .meet-box-3").css({"display": "flex"});
        }
        if ($(this).attr('class') == ('switch-1')) {
            $(".meet .all-meet-box .meet-box-1").css({"display": "flex"});
            $(".meet .all-meet-box .meet-box-2").css({"display": "none"});
            $(".meet .all-meet-box .meet-box-3").css({"display": "none"});
        }
        $(this).addClass('active');
    });



    $('.clients .switch div').click(function() {
        $(".clients .switch div").removeClass('active');

        if ($(this).attr('class') == ('switch-2')) {
            $(".clients .clients-img-all .clients-img-1").css({"display": "none"});
            $(".clients .clients-img-all .clients-img-2").css({"display": "flex"});
            $(".clients .clients-img-all .clients-img-3").css({"display": "none"});
        }
        if ($(this).attr('class') == ('switch-3')) {
            $(".clients .clients-img-all .clients-img-1").css({"display": "none"});
            $(".clients .clients-img-all .clients-img-2").css({"display": "none"});
            $(".clients .clients-img-all .clients-img-3").css({"display": "flex"});
        }
        if ($(this).attr('class') == ('switch-1')) {
            $(".clients .clients-img-all .clients-img-1").css({"display": "flex"});
            $(".clients .clients-img-all .clients-img-2").css({"display": "none"});
            $(".clients .clients-img-all .clients-img-3").css({"display": "none"});
        }
        $(this).addClass('active');
    });




    $('.work .work-menu ul li a').click(function() {
        $(".work .work-menu ul li a").removeClass('active-menu');
        if ($(this).attr('class') == ('menu-web')) {
            $(".work-web").css({"display": "flex"});
            $(".work-photo").css({"display": "none"});
            $(".work-mobile").css({"display": "none"});
        }
        if ($(this).attr('class') == ('menu-mobile')) {
            $(".work-mobile").css({"display": "flex"});
            $(".work-web").css({"display": "none"});
            $(".work-photo").css({"display": "none"});
        }
        if ($(this).attr('class') == ('menu-photo')) {
            $(".work-photo").css({"display": "flex"});
            $(".work-web").css({"display": "none"});
            $(".work-mobile").css({"display": "none"});
        }
        if ($(this).attr('class') == ('menu-all')) {
            $(".work-web").css({"display": "flex"});
            $(".work-mobile").css({"display": "flex"});
            $(".work-photo").css({"display": "flex"});
        }
        $(this).addClass('active-menu');
    });



    $('header .scroll a').click(function(){
        var pos = $(this).offset().top;
        $('html, body').animate({'scrollTop': pos + 150}, 1000);
    });


});