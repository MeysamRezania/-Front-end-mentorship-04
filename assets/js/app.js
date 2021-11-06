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

  if (scrollHeight > stickyNavbarOffset) {
    navbar.classList.add('sticky-none');
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
    navbar.classList.remove('sticky-none');
  }
});

// testimonial slider

const sliderItems = document.querySelectorAll('.testimonial');
const sliderContainer = sliderItems[0].parentElement;
const sliderCtrlLeft = document.querySelector(
  '.slider-ctrl span:first-of-type'
);
const sliderCtrlRight = document.querySelector(
  '.slider-ctrl span:last-of-type'
);

const translateXPx = sliderContainer.getBoundingClientRect().width / 3;

let currentState = 0;

const translateX = (state) => {
  sliderItems.forEach((item) => {
    item.style.transform = `translateX(${-state * translateXPx}px)`;
  });
};

sliderCtrlRight.addEventListener('click', () => {
  currentState = currentState >= sliderItems.length - 3 ? 0 : currentState + 1;
  // console.log(currentState >= sliderItems.length ? 0 : currentState++);
  translateX(currentState);
});

sliderCtrlLeft.addEventListener('click', () => {
  currentState = currentState <= 0 ? sliderItems.length - 3 : currentState - 1;

  translateX(currentState);
});

// tooltip

const tooltip = document.querySelector('.tooltip');

const tooltipBtn = tooltip.firstElementChild;
const tooltipLine = tooltipBtn.nextElementSibling;
const tooltipInfo = tooltipLine.nextElementSibling;

const tooltipChildren = [tooltipBtn, tooltipLine, tooltipInfo];

tooltipBtn.addEventListener('click', () => {
  tooltipChildren.forEach((child) => {
    child.classList.toggle('show');
  });
});
