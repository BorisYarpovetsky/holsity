@@include('jquery-3.6.2.min.js')
@@include('slick.js')

$(function() {
    $('.index-slider__wrapper-bg').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000
    });

    $('.full-item__slider-mini').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: '.full-item__slider-full',
        vertical: true,
        verticalSwiping: true,
        centerMode: true,
        focusOnSelect: true,
        infinite: true,
    });

    $('.full-item__slider-full').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.full-item__slider-mini',
        arrows: false,
        dots: false,
        focusOnSelect: true,
        fade: true,
        infinite: true,
    });
});