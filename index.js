function validateLogin(event) {
  event.preventDefault(); // prevent default form submission

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  // Simple validation (you can replace this with actual authentication)
  if (email === "Krishanmehta052001@gmail.com" && password === "Pass@12345") {
    // Redirect to your e-commerce page
    window.location.href = "E-Commerece website.html";
  } else {
    errorMsg.textContent = "Invalid email or password!";
    errorMsg.style.color = "red";
  }
}

function togglePassword() {
  const passwordField = document.getElementById("password");
  const icon = document.getElementById("toggleIcon");

  if (passwordField.type === "password") {
    passwordField.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    passwordField.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}
