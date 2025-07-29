function validateLogin(event) {
  event.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  console.log("Email entered:", email);
  console.log("Password entered:", password);

  const validEmail = "krishanmehta052001@gmail.com";
  const validPassword = "Pass@12345";

  if (email === validEmail && password === validPassword) {
    console.log("Login successful, redirecting...");
    window.location.href = "E-Commerce_website.html";
  } else {
    console.log("Login failed");
    errorMsg.textContent = "Unable to login. Please check your email or password.";
    errorMsg.style.color = "red";
  }
}

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
