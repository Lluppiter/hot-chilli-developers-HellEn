let btn = document.querySelector('.arrow');
//
function magic() {
  if (window.pageYOffset > 800) {
    btn.style.opacity = '1';
  } else {
    btn.style.opacity = '0';
  }
}
//
btn.onclick = function () {
  window.scrollTo(0, 0);
};

// When scrolling, we run the function
window.onscroll = magic;
