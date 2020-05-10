$(document).ready(function() {
  $(".burger").click(function(event){
      $(".burger").toggleClass("active");
  });
});

$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
  });
});