function validateLogin(event) {
  event.preventDefault(); // prevent default form submission

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  // Simple validation (you can replace this with actual authentication)
  if (email === "admin@example.com" && password === "123456") {
    // Redirect to your e-commerce page
    window.location.href = "e-commerece.html";
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
