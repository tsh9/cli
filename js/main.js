
// Transparent to opaque background for sticky header
// Scroll optimization with window.requestAnimationFrame
// Reference : https://developer.mozilla.org/en-US/docs/Web/Events/scroll

var header = document.querySelector('header'),
    latestKnownScrollY = 0,
    ticking = false;

function doSomething(scroll_pos) {
  // do something with the scroll position
  if(scroll_pos > 1) {
    header.classList.add('sticky');
  }
  else {
    header.classList.remove('sticky');
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