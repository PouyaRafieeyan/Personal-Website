// var swiper = new Swiper('.swiper-5', {
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     loop: true,
//     autoplay: {
//       delay: 1100,
//       disableOnInteraction: true,
//   },
//   });

const slider = document.querySelector('.slider');
let slideIndex = 0;

function nextSlide() {
  slideIndex = (slideIndex + 1) % slider.children.length;
  updateSliderPosition();
}

function updateSliderPosition() {
  const slideWidth = slider.children[0].clientWidth;
  slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

setInterval(nextSlide, 3000);

