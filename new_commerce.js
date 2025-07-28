

// console.log("hello world");

const slider = document.querySelector('.testimonial-wrapper');
const slides = document.querySelectorAll('.testimonial-slide');
const prevBtn = document.querySelector('.testimonial-btn.prev');
const nextBtn = document.querySelector('.testimonial-btn.next');
const dotsContainer = document.querySelector('.dots-container');

let currentSlide = 0;
const totalSlides = slides.length;

// Create dots
slides.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(index));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function updateSlider() {
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentSlide].classList.add('active');
}

function goToSlide(index) {
  currentSlide = index;
  updateSlider();
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlider();
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto Slide
let autoSlide = setInterval(nextSlide, 4000);

// Pause on hover
slider.parentElement.addEventListener('mouseenter', () => clearInterval(autoSlide));
slider.parentElement.addEventListener('mouseleave', () => autoSlide = setInterval(nextSlide,4000));

function generateCaptcha() {
  let captcha = Math.floor(1000 + Math.random() * 9000);
  document.getElementById('captcha').innerText = captcha;
  return captcha;
}

function checkCaptcha(event) {
  event.preventDefault();
  let userValue = document.getElementById('captchaInput').value;
  let captchaValue = document.getElementById('captcha').innerText;
  if (userValue == captchaValue) {
    alert("CAPTCHA Verified! Form submitted.");
  } else {
    alert("CAPTCHA Incorrect. Try again.");
    generateCaptcha();
  }
}

window.onload = generateCaptcha;

// <!-- Floating Contact Widget -->

const contactToggle = document.querySelector(".contact-toggle");
const contactOptions = document.querySelector(".contact-options");

contactToggle.addEventListener("click", () => {
  contactOptions.style.display =
    contactOptions.style.display === "flex" ? "none" : "flex";
});
