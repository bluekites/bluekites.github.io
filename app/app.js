$(document).ready(function(){
  
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
  $('#saas-image').contenthover({
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
  });
});