// sticky socials

const windowHeight = window.innerHeight;
const fullHeight = Math.max(
  document.body.scrollHeight,
  document.documentElement.scrollHeight,
  document.body.offsetHeight,
  document.documentElement.offsetHeight,
  document.body.clientHeight,
  document.documentElement.clientHeight
);
const windowBottom = fullHeight - windowHeight - 200;
const stickySocials = document.querySelector('.sticky-socials');

// sticky navbar
const navbar = document.querySelector('nav');

const navbarHeight = navbar.getBoundingClientRect().height;

const stickyNavbarOffset = windowHeight / 2;

// scroll event listener
window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > windowBottom) {
    stickySocials.classList.add('hidden');
  } else {
    stickySocials.classList.remove('hidden');
  }
  
  // if(scrollHeight > navbarHeight) {
  //   navbar.cl
  // }

  if(scrollHeight > stickyNavbarOffset) {
    navbar.classList.add('sticky-none');
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
    navbar.classList.remove('sticky-none');
  }
});
