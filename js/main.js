$(document).ready(function() {

  // Transparent to opaque background for sticky header on srcoll
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1){
      $('.wrapper').addClass("is-scrolled");
    }
    else{
      $('.wrapper').removeClass("is-scrolled");
    }
  });

  // Hamburger menu toggle
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

// Smooth scroll to an element
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 900);
    }
});
