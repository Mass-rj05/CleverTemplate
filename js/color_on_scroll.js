$(document).ready(function () {
  let zero = 0;
  $(window).on("scroll", function () {
    $("nav").toggleClass("hide", $(window).scrollTop() > zero);
    zero = $(window).scrollTop();
  });
});

const onScroll = () => {
  $(window).scroll(function () {
    if (window.screen.width > 768) {
      $(".upbutton").toggleClass("show", $(this).scrollTop() > 50);
    } else {
      $(".upbutton").toggleClass("show", $(this).scrollTop() > 80);
    }
  });
};
onScroll();
