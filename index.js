function togglePassword() {
  const passwordInput = document.getElementById("password");
  const toggleIcon = document.getElementById("toggleIcon");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  }
}

function validateLogin(event) {
  event.preventDefault(); // Prevent form reload

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  if (email === "Krishanmehta052001@gmail.com" && password === "Pass@12345") {
    window.location.href = "E-Commerce_website.html";
  } else {
    errorMsg.textContent = "Invalid email or password.";
  }
}
