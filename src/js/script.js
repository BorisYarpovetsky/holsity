@@include('jquery-3.6.2.min.js')
@@include('slick.js')
@@include('jquery-ui.js')

$(function() {

    $(window).scroll(function(){
		if($(window).scrollTop() > 100) {
			$('#arrow-top-page').show();
		} else {
			$('#arrow-top-page').hide();
		}
	});
 
	$('#arrow-top-page').click(function(){
        $('html, body').animate({scrollTop: 0}, 600);
        return false;
	});

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
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
        ]
    });

    $( ".full-item__tabs" ).tabs();

    $( ".full-item__di-show" ).hide();

    $( ".full-item__di-title" ).on( "click", function() {
        $( this ).toggleClass('di-active');
        $( this ).next('.full-item__di-show').slideToggle('slow');
    });
    
    $( ".header__search-input" ).on( "focus", function() {
        $( this ).parent('.header__search').addClass('header__search-active');
    });

    $( ".header__search-input" ).on( "focusout", function() {
        $( this ).parent('.header__search').removeClass('header__search-active');
    });

    function activeItem() {
        if($(".short-item__add-link").hasClass("short-item__add-link-active") || $(".short-item__add-compare").hasClass("short-item__add-compare-active")) {
            $(".short-item__add-link-active").parent('.short-item__rt-info').addClass('short-item__rt-info-active');
        } else {
            $(".short-item__add-link-active").parent('.short-item__rt-info').removeClass('short-item__rt-info-active');
        }
    }
    activeItem();

    function activeItemclick(clickItem) {
        if($(clickItem).children(".short-item__add-link").hasClass("short-item__add-link-active") || $(clickItem).children(".short-item__add-compare").hasClass("short-item__add-compare-active")) {
            $(clickItem).addClass('short-item__rt-info-active');
        } else {
            $(clickItem).addClass('short-item__rt-info-active');
        }
    }

    $( ".short-item__add-link" ).on( "click", function() {
        $( this ).toggleClass('short-item__add-link-active');
        clickItem = $(this).parent();
        activeItemclick(clickItem);
    });

    $( ".short-item__add-compare" ).on( "click", function() {
        $( this ).toggleClass('short-item__add-compare-active');
        clickItem = $(this).parent();
        activeItemclick(clickItem)
    });

    $('#line-view-style-button').click(function(){
        $(this).addClass('active');
        $('#block-view-style-button').removeClass('active');        
        $('#item-list-style').addClass('active-list-style-view');
	});

    $('#block-view-style-button').click(function(){
        $(this).addClass('active');
        $('#line-view-style-button').removeClass('active');        
        $('#item-list-style').removeClass('active-list-style-view')
	});

    $('.compare-page__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: false,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },
        ]
    });

    function compareResize() {
        let lineNum = $('.compare-page__line-num');
        let itmTable;
        let arr = [];
        let maxHeight;
        for (let z = 0; z < lineNum.length; z++) {
            itmTable = $(".itm-"+z);
            for (i = 0; i < itmTable.length; i++) {
                getHeight = itmTable.eq(i).height();
                arr[i] = getHeight;
            }
            maxHeight = Math.max.apply(null, arr) + 24;
            itmTable.css({"height":maxHeight+'px'});
        }
    }
    compareResize();

});