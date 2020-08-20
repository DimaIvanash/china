$(document).ready(function(){
    $('.reviews__carousel_inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/slide_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/slide_right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
});