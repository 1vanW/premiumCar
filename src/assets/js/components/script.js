
const burger = document?.querySelector('.header__burger');

const nav = document?.querySelector('.header__nav');

const overlay = document?.querySelector('.overlay');

const body = document?.body;

burger.addEventListener('click',()=>{
  disableScroll();
  burger?.classList.toggle('header__burger--active');
  nav?.classList.toggle('header__nav--visible');
  overlay?.classList.toggle('overlay--visible');
})



function disableScroll(){
  if(body.classList.contains('dis-scroll')){
    body.classList.remove('dis-scroll');
  }
  else{
  body.classList.add('dis-scroll');
  }
}
