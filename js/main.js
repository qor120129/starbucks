
// SCROLL
const badgesEl = document.querySelector('.badges');
const mainMenuName = document.querySelectorAll('.main_menu .item');
// const mainMenuContentsMenu = document.querySelectorAll('.main_menu .contents__menu');

window.addEventListener('scroll', _.throttle(function () {
  // _.throttle(함수, 시간)
  if (window.scrollY > 500) {
    // gsap.to(요소, 지속시간, {옵션})
    gsap.to(badgesEl, .6, {
      opacity: 0,
      display: 'none'
    })
  } else {
    gsap.to(badgesEl, .6, {
      opacity: 1,
      display: 'block'
    })
  }
}, 300));

// Menu hover

for (i = 0; i < mainMenuName.length; i++) {
  mainMenuName[i].addEventListener('mouseover', function () {
    mainMenuContentsMenu = this.querySelector('.item__contents')

    contentsMenu = mainMenuContentsMenu.querySelector('.contents__menu');
    contentsTexture = mainMenuContentsMenu.querySelector('.contents__texture ');

    contentsMenu2 = mainMenuContentsMenu.querySelector('.contents__menu .inner').offsetHeight;
    contentsTexture2 = mainMenuContentsMenu.querySelector('.contents__texture .inner').offsetHeight;

    console.log('contentsTexture2', contentsTexture2)

    contentsMenu.style.height = contentsMenu2 + 'px'
    contentsTexture.style.height = contentsTexture2 + 'px'

  })
  mainMenuName[i].addEventListener('mouseout', function () {

    contentsMenu.style.height = '0'
    contentsTexture.style.height = '0'
  })
}

// 순차적으로 VISUAL
const fadeEls = document.querySelectorAll('.visual .fade_in');
fadeEls.forEach(function (fadeEls, index) {
  gsap.to(fadeEls, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  })
})



// NOTICE
new Swiper('.notice_line .swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  autoplay: true
});

new Swiper('.notice .promotion .swiper', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 3000
  },
  pagination: {
    el: '.notice .promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.notice  .promotion .swiper_next',
    prevEl: '.notice  .promotion .swiper_prev',
  },
});



// promotion
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle_promotion')

let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    promotionEl.classList.add('hide')
  } else {
    promotionEl.classList.remove('hide')
  }
})

// ScrollMagic

const spy = document.querySelectorAll('section.scroll_spy')
spy.forEach(function(spy) {
  new ScrollMagic
  .Scene ({
    triggerElement: spy,
    triggerHook: .8
  })
  .setClassToggle(spy, 'show')
  .addTo(new ScrollMagic.Controller())
})