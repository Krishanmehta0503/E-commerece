document.addEventListener("DOMContentLoaded", () => {
  // Filter Buttons
  const filterBtns = document.querySelectorAll(".filter-btn");
  const products = document.querySelectorAll(".product-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");

      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      products.forEach(product => {
        product.style.display = (filter === "all" || product.dataset.category === filter) ? "block" : "none";
      });
    });
  });

  // Quick View Modal
  const quickViewBtns = document.querySelectorAll(".quick-view");
  const modal = new bootstrap.Modal(document.getElementById("quickViewModal"));
  
  quickViewBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      document.getElementById("modal-title").textContent = btn.dataset.title;
      document.getElementById("modal-price").textContent = btn.dataset.price;
      document.getElementById("modal-desc").textContent = btn.dataset.desc;
      document.getElementById("modal-img").src = btn.dataset.img;
      modal.show();
    });
  });
});

// Add this script at the bottom of products.html or in products.js
document.querySelectorAll('.quick-view').forEach(button => {
  button.addEventListener('click', () => {
    const title = button.dataset.title;
    const price = button.dataset.price;
    const desc = button.dataset.desc;
    const img = button.dataset.img;

    // Encode URL and redirect
    window.location.href = `product-details.html?title=${encodeURIComponent(title)}&price=${encodeURIComponent(price)}&desc=${encodeURIComponent(desc)}&img=${encodeURIComponent(img)}`;
  });
});
