$(document).ready(function () {
  let zero = 0;
  $(window).on("scroll", function () {
    console.log("here")
    $("nav").toggleClass("hide", $(window).scrollTop() > zero);
    zero = $(window).scrollTop();
  });
});

const onScroll = () => {
  $(window).scroll(function () {
    if (window.screen.width > 768) {
      $("nav").toggleClass("scrolled", $(this).scrollTop() > 50);
      $("nav a").toggleClass("scrolled", $(this).scrollTop() > 50);
      $(".nav_links").toggleClass("scrolled", $(this).scrollTop() > 50);
      $(".burger div").toggleClass("scrolled", $(this).scrollTop() > 50);
      $(".upbutton").toggleClass("show", $(this).scrollTop() > 50);
    } else {
      $("nav").toggleClass("scrolled", $(this).scrollTop() > 80);
      $("nav a").toggleClass("scrolled", $(this).scrollTop() > 80);
      $(".nav_links").toggleClass("scrolled", $(this).scrollTop() > 80);
      $(".burger div").toggleClass("scrolled", $(this).scrollTop() > 80);
      $(".upbutton").toggleClass("show", $(this).scrollTop() > 80);
    }
  });
};
onScroll();
