@@include('jquery-3.6.2.min.js')
@@include('slick.js')
@@include('jquery-ui.js')
@@include('jquery.magnific-popup.js')
@@include('jquery.mask.js')

$(function() {

    $('.popup-form__mask-phone-number').mask('+7-000-000-00-00');

    $(window).scroll(function(){
		if($(window).scrollTop() > 100) {
			$('#arrow-top-page').fadeIn(700);
		} else {
			$('#arrow-top-page').fadeOut(700);
		}
        if($(window).scrollTop() > 100) {
			$('#header').addClass('header__fixed-header');
			$('#header-block').addClass('header-block__hide-show');
		} else {
			$('#header').removeClass('header__fixed-header');
			$('#header-block').removeClass('header-block__hide-show');
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

    $( ".full-item__di-show" ).hide('fast');

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

    $('.work-price__category').hide('fast');
    $('.work-price__open-category').click(function(){
        $(this).toggleClass('active');
        $(this).next('.work-price__category').slideToggle('fast');
	});

    $('.order-list__item-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 2
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1
                }
            },
        ]
    });

    $('.order-list__my-reviews-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 4
              }
            },
            {
                breakpoint: 1100,
                settings: {
                  slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1
                }
            },
        ]
    });

    $('.category-filter').click(function(e){
        e.preventDefault();
        $(this).children('.category-filter__list').slideToggle('fast');
	});

    $('.header__profile-link').click(function(e){
        e.preventDefault();
        $(this).next('.header-user-menu').slideToggle('fast');
	});

    $('.header__cart-link').click(function(e){
        e.preventDefault();
	});

    $('.header__all-category-link').click(function(e){
        e.preventDefault();
        $('#navi-category').slideToggle('fast');
        $(this).toggleClass('header__all-category-link-active');
	});

    let navItem = $('.navi-category__navi-link');
    let windowsWidth;
    let categoryNum;
    let categoryMenuTimer;

    navItem.each(function(i, el){
        $(el).on({
            mouseenter: function(){
                clearTimeout(categoryMenuTimer);
                categoryMenuTimer = setTimeout(function(){
                    categoryNum = $(el).attr('data-attribute');
                    $('.navi-category__navi-content').hide('fast');
                    $('.navi-category__nc-'+categoryNum).show('fade', 300);
                }, 300);
            },
            mouseleave: function(){
                clearTimeout(categoryMenuTimer);
            },
            click: function(event){
                windowsWidth = $(window).width();
                if(windowsWidth <= 768) {
                    event.preventDefault();
                }
            }
        });
    });

    $('.popup-open-modal').magnificPopup({
        type:'inline',
        midClick: true,
        mainClass: 'mfp-fade',
		removalDelay: 160,
    });

    $('.popup-form__input-sms').keyup(function(){
        if($(this).val().length == '1'){
            $(this).next('.popup-form__input-sms').focus();
        } else if ($(this).val().length == '0'){
            $(this).prev('.popup-form__input-sms').focus();
        }
    });

    $('.ajax-popup-link').magnificPopup({
        type: 'ajax',
        midClick: false,
        mainClass: 'mfp-fade',
        removalDelay: 160,
    });

    $('.popup-search-modal').magnificPopup({
        type:'inline',
        midClick: true,
        mainClass: 'mfp-fade',
		removalDelay: 160,
        alignTop: true,
    });

    $("a.scroll-to").on("click", function(e){
        e.preventDefault();
        var anchor = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top - 150
        }, 800);
    });

    $('.index-catalog__wrapper').slick({
        arrows: false,
        slidesToShow: 1,        
        infinite: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 4000,
                settings: "unslick",
            },
        ]
    });

    $(".header__more-menu-link").on("click",function(e){
        e.preventDefault();
    });

    $('.header__mobile-main-menu-link').click(function(e){
        e.preventDefault();
        $('.header__top').addClass('header__top-active');
	});

    $('.header__mb-menu-close').click(function(e){
        e.preventDefault();
        $('.header__top').removeClass('header__top-active');
	});

    $('.header__all-category-link3').click(function(e){
        e.preventDefault();
        $('#navi-category').slideToggle('fast');
	});

    $('.navi-category__mobile-back-to-menu').click(function(e){
        e.preventDefault();
        $('#navi-category').slideToggle('fast');
	});

    $('.navi-category__mobile-back-all-category').click(function(e){
        e.preventDefault();
        $(this).parent('.navi-category__navi-content').hide('fast');
	});

    $('.navi-category__category-title').click(function(e){
        windowsWidth = $(window).width();
        if(windowsWidth <= 576) {
            e.preventDefault();
            $(this).next('.navi-category__subcategory-navi').slideToggle('fast');
            $(this).toggleClass('navi-category__category-title-active');
        }
	});

    $('.catalog-list__category-title').click(function(e){
        windowsWidth = $(window).width();
        if(windowsWidth <= 576) {
            e.preventDefault();
            $(this).next('.catalog-list__category-nav').slideToggle('fast');
            $(this).toggleClass('catalog-list__category-title-active');
        }
	});
    
});