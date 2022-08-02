$(document).ready(function () {
  $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    asNavFor: '.slidermini',
  });
  $('.slidermini').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,

    waitForAnimate: false,
    focusOnSelect: true,
    asNavFor: '.slider',
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
          infinite: false,
        },
      },
    ],
  });
});
