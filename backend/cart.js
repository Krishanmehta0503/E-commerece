document.addEventListener("DOMContentLoaded", () => {
  const cartContainer = document.getElementById("cart-container");
  const totalEl = document.getElementById("cart-total");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;

  if (cart.length === 0) {
    cartContainer.innerHTML = `<p class="text-center">Your cart is empty.</p>`;
    document.getElementById("checkoutBtn").style.display = "none";
    return;
  }

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const col = document.createElement("div");
    col.className = "col-md-6";

    col.innerHTML = `
      <div class="card shadow-sm p-3">
        <div class="row g-3">
          <div class="col-md-4">
            <img src="${item.img}" class="img-fluid rounded" alt="${item.title}" />
          </div>
          <div class="col-md-8">
            <h5>${item.title}</h5>
            <p>${item.desc}</p>
            <p><strong>Price:</strong> ₹${item.price}</p>
            <p><strong>Quantity:</strong> ${item.quantity}</p>
            <p><strong>Total:</strong> ₹${itemTotal}</p>
            <button class="btn btn-danger btn-sm remove-btn" data-index="${index}">Remove</button>
          </div>
        </div>
      </div>
    `;
    cartContainer.appendChild(col);
  });

  totalEl.textContent = total;

  // Remove button functionality
  document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = parseInt(btn.dataset.index);
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      window.location.reload(); // refresh to reflect change
    });
  });
});
