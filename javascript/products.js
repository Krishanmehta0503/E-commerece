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
