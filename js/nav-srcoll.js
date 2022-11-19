var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav-menu").style.bottom = "0";
  } else {
    document.getElementById("nav-menu").style.bottom = "-100px";
  }
  prevScrollpos = currentScrollPos;
}