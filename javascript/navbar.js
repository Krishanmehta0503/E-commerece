// navbar.js
document.addEventListener("DOMContentLoaded", function() {
  fetch("../html/navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;
    })
    .catch(error => console.error("Error loading footer:", error));
});

// header.js
document.addEventListener("DOMContentLoaded", function () {
  fetch("../html/header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header-placeholder").innerHTML = data;

      // Now dynamically set navbar links
      setDynamicNavbar();
    })
    .catch(error => console.error("Error loading header:", error));
});

function setDynamicNavbar() {
  const nav = document.getElementById("dynamic-nav");
  if (!nav) return;

  // Detect current page
  const currentPage = window.location.pathname.split("/").pop();
  const isHome = currentPage === "" || currentPage === "index.html";

  // Build links
  const links = [
    { text: "Home", href: isHome ? "#home" : "index.html" },
    { text: "About", href: isHome ? "html/about_us.html" : "about_us.html" },
    { text: "Services", href: isHome ? "#services" : "index.html#services" },
    { text: "Products", href: isHome ? "#products" : "index.html#products" },
    { text: "Contact", href: isHome ? "#contact" : "index.html#contact" },
  ];

  // Generate list items
  nav.innerHTML = links
    .map(link => `<li class="nav-item"><a class="nav-link" href="${link.href}">${link.text}</a></li>`)
    .join("");
}
