// Simple slider: auto + manual arrows
let slideIndex = 0;
const showSlides = () => {
  const slides = document.querySelectorAll('.slide');
  if(!slides.length) return;
  slides.forEach(s => s.style.display = 'none');
  slideIndex++;
  if(slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex-1].style.display = 'block';
  setTimeout(showSlides, 4500);
};
document.addEventListener('DOMContentLoaded', () => {
  showSlides();
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  if(prev && next){
    prev.addEventListener('click', () => {
      slideIndex = Math.max(1, slideIndex-1) - 1;
      showSlides();
    });
    next.addEventListener('click', () => {
      slideIndex = slideIndex + 1;
      showSlides();
    });
  }
});
