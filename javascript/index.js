function togglePassword() {
      const input = document.getElementById('password');
      const icon = document.getElementById('toggleIcon');
      if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
      } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
      }
    }

    function validateLogin(event) {
      event.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const errorMsg = document.getElementById("errorMsg");

      if (email === "krishanmehta052001@gmail.com" && password === "Pass@12345") {
        window.location.href = "http://127.0.0.1:5500/html/E-Commerce%20website.html";
      } else {
        errorMsg.style.display = "block";
        errorMsg.innerText = "Enter valid username and password";
        document.querySelector(".form").style.height = "auto";
      }
    }