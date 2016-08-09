

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
    navigationTooltips: ['firstPage', 'secondPage'],
    showActiveTooltip: false,
    anchors:['firstPage', 'secondPage', 'thirdPage'],
    // sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
   });

   // Hamburger menu event
   $('.c-hamburger').click(function(e) {
     e.preventDefault();
     $(this).toggleClass('is-active');
   })

});

// Transparent to opaque background for sticky header
// Scroll optimization with window.requestAnimationFrame
// Reference : https://developer.mozilla.org/en-US/docs/Web/Events/scroll

// var body = document.querySelector('body');
// var latestKnownScrollY = 0;
// var ticking = false;
//
// function checkPos(scroll_pos) {
//   // do something with the scroll position
//   if(scroll_pos > 1) {
//     body.classList.add('is-scrolled');
//   }
//   else {
//     body.classList.remove('is-scrolled');
//   }
// }
//
// window.addEventListener('scroll', function(e) {
//   latestKnownScrollY = window.scrollY;
//   if (!ticking) {
//     window.requestAnimationFrame(function() {
//       checkPos(latestKnownScrollY);
//       ticking = false;
//     });
//   }
//   ticking = true;
// });
//
// // Animate the hamburger menu
// var hamMenu = document.querySelector('.c-hamburger');
//
// hamMenu.addEventListener('click', function(e) {
//   e.preventDefault();
//   this.classList.toggle('is-active');
// })
