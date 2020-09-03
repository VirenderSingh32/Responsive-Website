const navbar = $('#navbar');
let scrolled = false;

window.onscroll = ()=>{
  if(window.pageYOffset > 100) {
    navbar.removeClass("top");
    if(!scrolled) {
      navbar.addClass('go-up')
    }
    setTimeout(()=>{
      navbar.removeClass("go-up");
      scrolled = true;
    },200);
  } else {
    navbar.addClass("top");
    scrolled = false;
  }
};