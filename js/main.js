jQuery(document).ready ( function () {
    $('#Container').mixItUp();

    $('.carousel').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        mobileFirst: true,
        arrows: false
    });


    $('#contact_tabs').responsiveTabs({
        startCollapsed: 'accordion'
    });

});