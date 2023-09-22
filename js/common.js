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

// Menu hover
const mainMenuName = document.querySelectorAll('.main_menu .item');

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


// AWARDS
new Swiper('.awards .swiper', {
  // Optional parameters
  slidesPerView:6,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 5000
  },
});




// YEAR
const thisYear = document.querySelector('.this_year')
thisYear.textContent = new Date().getFullYear();