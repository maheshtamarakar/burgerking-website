$(document).ready(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("change");
    $(".nav-menu").toggleClass("change");
  });

//   carousel jquery
  function slider() {
    $current = $(".home .carousel.active");
    if ($current.length == 0) {
      $current.addClass("active");
    } else {
      $next = $current.removeClass("active").next();
      if ($next.length == 0) {
        $(".home .carousel:nth-of-type(1)").addClass("active");
      } else {
        $next.addClass("active");
      }
    }
  }
  setInterval(slider, 5000);
  $(window).on('scroll load', function(){
    if($(window).scrollTop()>10){
      $('.header').addClass('header-active');
    }
    else{
      $('.header').removeClass('header-active');
    }
  })
});
