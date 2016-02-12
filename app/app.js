$(document).ready(function(){
  $(window).resize();
  // code for smooth scrolling
  $(".navbar-brand").click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 1000);
  });
  
  $("a[href='#home']").click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 1000);
  });
  
  $("a[href='#about']").click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
  });
  
  $("a[href='#work']").click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#work").offset().top
    }, 1000);
  });
  
  $("a[href='#contact']").click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
  });
  
  $("a[href='#faq']").click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#faq").offset().top
    }, 1000);
  });
  
  // code for content hover
  
  $('#saas-image').hover(function(){
    $('#saas-image.content-holder h3').fadeIn(1000);
  }, function(){
    $('#saas-image.content-holder h3').fadeOut(1000);
  });
  
  $('#pinclone-image').hover(function(){
    $('#pinclone-image.content-holder h3').fadeIn(1000);
  }, function() {
    $('#pinclone-image.content-holder h3').fadeOut(1000);
  });
  
  $('#wyslegal-image').hover(function(){
    $('#wyslegal-image.content-holder h3').fadeIn(1000);
  }, function(){
    $('#wyslegal-image.content-holder h3').fadeOut(1000);
  });
  
  $('#shop-image').hover(function(){
    $('#shop-image.content-holder h3').fadeIn(1000);
  }, function(){
    $('#shop-image.content-holder h3').fadeOut(1000);
  });
  
  $('#api-image').hover(function(){
    $('#api-image.content-holder h3').fadeIn(1000);
  }, function() {
    $('#api-image.content-holder h3').fadeOut(1000);
  });
  
  $('#rails-shopping-image').hover(function(){
    $('#rails-shopping-image.content-holder h3').fadeIn(1000);
  }, function(){
    $('#rails-shopping-image.content-holder h3').fadeOut(1000);
  });
  
});

$(window).resize(function() {
   if ($(this).width() > 480) {
     // code for image hover
    $(".about-image").mouseenter(function(){
      $(".about-image").fadeOut(800, function(){
        $(".about-image2").fadeIn(800, function(){
          $(".about-image2").mouseleave(function(){
            $(".about-image2").fadeOut(800, function(){
              $(".about-image").fadeIn(800);
            });
          });
        });
      });
    });
   }
});