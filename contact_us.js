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
