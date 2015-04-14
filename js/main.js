$(document).ready ( function () {
    $('#Container').mixItUp();
});

$(document).ready ( function () {
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

});

$(document).ready ( function () {
    $('#contact_tabs').responsiveTabs({
        startCollapsed: 'accordion',
    });
});