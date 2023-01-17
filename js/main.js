$(document).ready(function(){
    $(".owl-carousel-1").owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoplaySpeed:1000,
        autoplayTimeout:8000,
    });
    $(".owl-carousel-2").owlCarousel({
        margin:160,
        
        items:5,
        nav:true,
        navText:['<ion-icon name="arrow-back-circle-outline"></ion-icon>' , '<ion-icon name="arrow-forward-circle-outline"></ion-icon>'],
    });
  });
  