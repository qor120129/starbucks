// SEARCH 
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
  searchInputEl.focus()
});
searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '검색');
});
searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


// SCROLL
const badgesEl = document.querySelector('.badges');

window.addEventListener('scroll', _.throttle(function(){
   // _.throttle(함수, 시간)
  if(window.scrollY > 500 ){
    // gsap.to(요소, 지속시간, {옵션})
    gsap.to(badgesEl, .6, {
      opacity: 0,
      display: 'none'
    })
  } else{
    gsap.to(badgesEl, .6, {
      opacity: 1,
      display: 'block'
    })
  }
},300));


// 순차적으로 VISUAL
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEls, index){
  gsap.to(fadeEls, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  })
})



// NOTICE
new Swiper('.notice-line .swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  autoplay: true
});

new Swiper('.promotion .swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.promotion .swiper-next',
    prevEl: '.promotion .swiper-prev',
  },
});


// promotion

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion')

let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion
  if(isHidePromotion){
    promotionEl.classList.add('hide')
  }else{
    promotionEl.classList.remove('hide')
  }
})