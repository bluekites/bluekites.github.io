$(document).ready(function(){
  
  
  
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
  
  /*$(".about-image").hover(function(){
    $(".about-image").fadeOut(800, function(){
      $(".about-image2").fadeIn(800);
    });
  }, function(){
    $(".about-image2").fadeOut(800, function(){
       $(".about-image").fadeIn(800);
    });
  });*/
  
/*  $(".image-box").hover(function(){
    $(".about-image").hide();
    $(".about-image2").show();
  }, function(){
    $(".about-image2").hide();
    $(".about-image").show();
  })*/
  
  // code for smooth scrolling
  $("a[href='#']").click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
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
  
  $('#sf-image').hover(function(){
    $('#sf-image.content-holder h3').fadeIn(1000);
  }, function(){
    $('#sf-image.content-holder h3').fadeOut(1000);
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
  
  $('#quiz-image').hover(function(){
    $('#quiz-image.content-holder h3').fadeIn(1000);
  }, function(){
    $('#quiz-image.content-holder h3').fadeOut(1000);
  });
  
  /*$('#saas-image').contenthover({
    overlay_background:'#000',
    overlay_opacity:0.8
  });
  $('#pinclone-image').contenthover({
    overlay_background:'#000',
    overlay_opacity:0.8
  });
  $('#sf-image').contenthover({
    overlay_background:'#000',
    overlay_opacity:0.8
  });
  $('#shop-image').contenthover({
    overlay_background:'#000',
    overlay_opacity:0.8
  });
  $('#api-image').contenthover({
    overlay_background:'#000',
    overlay_opacity:0.8
  });
  $('#quiz-image').contenthover({
    overlay_background:'#000',
    overlay_opacity:0.8
  });*/
});