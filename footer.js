// footer.js
document.addEventListener("DOMContentLoaded", function() {
  fetch("E:\infosys web development\Hardeep Sir (Live Project)\e-commerece\footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;
    })
    .catch(error => console.error("Error loading footer:", error));
});
