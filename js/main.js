
$(document).ready(function() {

    /* Slider */

        $('.single-item').slick({
            dots: true,
            speed: 1000,
            infinite: true,
            prevArrow: $('.respond__left'),
            nextArrow: $('.respond__right'),
            slidesToShow: 1,
            slidesToScroll: 1
        });


    /* Hamburger */

    $('.icon').on('click', function () {
        $(this).toggleClass('open');
        $('.sub-menu').toggleClass('oppenned');
    });


    /* Animate anchor link */

    $('.bulgary__link').on('click', function (e) {
        e.preventDefault();

        var selector = $(this).attr('href');
        var h = $(selector);

        $('html, body').animate({
            scrollTop: h.offset().top
        }, 1000);


    });


    /* Forms */

    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите минимум {2} символа!")
                },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                    required: "Пожалуйста, введите свою почту",
                    email: "Неправильно введен адрес почты"
                }
            }
        });
    }

    validateForms('#consultation form');
    validateForms('form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/question.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $(this).find(".form__ok").fadeIn().fadeIn(1500).fadeOut('slow');
            $('form').trigger('reset');
        });
        $(this).find("input").val("");
        return false;
    });



    /* Modal */

    $('.act').on('click', function(e) {
        e.preventDefault();
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.mod__close').on('click', function() {
        $('.overlay, #consultation').fadeOut('slow');
        $("label.error").fadeOut('fast');
    });


     /* Smooth scroll and pageup */

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href=#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
    new WOW().init();
});







