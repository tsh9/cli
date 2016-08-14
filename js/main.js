$(document).ready(function() {

  // Transparent to opaque background for stucky header on srcoll
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1){
      $('.wrapper').addClass("is-scrolled");
    }
    else{
      $('.wrapper').removeClass("is-scrolled");
    }
  });

  // fullpage.js : scrolls to section on page.
  $('#fullpage').fullpage({
    scrollBar:true,
    navigation: true,
    navigationTooltips: ['Hello', 'Cruel', 'Cruel', 'World'],
    showActiveTooltip: false,
    verticalCentered: false,
    anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
    //sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],

   });

   // Hamburger menu event
   $('.c-hamburger').click(function(e) {
     e.preventDefault();
     $('body').toggleClass('is-active');
   });

   //.off-canvas-nav-link event
   $('.off-canvas-nav-link').click(function(e) {
      e.preventDefault();
     $(this).toggleClass('is-active');
   });

});
