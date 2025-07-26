  function togglePassword() {
    const passwordField = document.getElementById('password');
    const icon = document.getElementById('toggleIcon');
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

  function validateLogin(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("errorMsg");

    if (email === "" || password === "") {
      errorMsg.textContent = "Please enter both email and password.";
      return false;
    }

    // ✅ Correct redirect
    window.location.href = "E-Commerce_website.html";
    return false;
  }