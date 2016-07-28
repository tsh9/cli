
// Transparent to opaque background for sticky header
// Scroll optimization with window.requestAnimationFrame
// Reference : https://developer.mozilla.org/en-US/docs/Web/Events/scroll

var body = document.querySelector('body');
var latestKnownScrollY = 0;
var ticking = false;

function doSomething(scroll_pos) {
  // do something with the scroll position
  if(scroll_pos > 1) {
    body.classList.add('is-scrolled');
  }
  else {
    body.classList.remove('is-scrolled');
  }

  if(scroll_pos < 1) {
    body.classList.add('not-scrolled');
  }
  else {
    body.classList.remove('not-scrolled');
  }
}

window.addEventListener('scroll', function(e) {
  latestKnownScrollY = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(latestKnownScrollY);
      ticking = false;
    });
  }
  ticking = true;
});

// Animate the hamburger menu
var hamMenu = document.querySelector('.c-hamburger');

hamMenu.addEventListener('click', function(e) {
  e.preventDefault();
  this.classList.toggle('is-active');
})
