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

document.addEventListener("DOMContentLoaded", function () {
  const quickViewModal = new bootstrap.Modal(document.getElementById('quickViewModal'));
  const modalTitle = document.getElementById('modal-title');
  const modalPrice = document.getElementById('modal-price');
  const modalDesc = document.getElementById('modal-desc');
  const modalImg = document.getElementById('modal-img');

  // Function to open modal with product data
  function openModal(data) {
    modalTitle.textContent = data.title;
    modalPrice.textContent = data.price;
    modalDesc.textContent = data.desc;
    modalImg.src = data.img;
    quickViewModal.show();
  }

  // For Quick View buttons
  document.querySelectorAll('.quick-view').forEach(button => {
    button.addEventListener('click', function () {
      const data = {
        title: this.dataset.title,
        price: this.dataset.price,
        desc: this.dataset.desc,
        img: this.dataset.img
      };
      openModal(data);
    });
  });

  // Make the whole card clickable
  document.querySelectorAll('.product-card-inner').forEach(card => {
  card.addEventListener('click', function () {
    const button = this.querySelector('.quick-view');
    if (button) {
      const data = {
        title: button.dataset.title,
        price: button.dataset.price,
        desc: button.dataset.desc,
        img: button.dataset.img
      };

      // Save product data to localStorage
      localStorage.setItem("selectedProduct", JSON.stringify(data));

      // Open modal
      openModal(data);
    }
  });
});
});
const data = JSON.parse(localStorage.getItem("selectedProduct"));
let product = {
  title: "",
  price: 0,
  desc: "",
  img: ""
};

if (data) {
  document.getElementById("modal-title").textContent = data.title;
  document.getElementById("modal-price").textContent = data.price;
  document.getElementById("modal-desc").textContent = data.desc;
  document.getElementById("modal-img").src = data.img;

  product = {
    title: data.title,
    price: parseInt(data.price.replace(/[₹,]/g, '')),
    desc: data.desc,
    img: data.img
  };
}

// Show payment summary column on Buy Now
document.getElementById("buyNowBtn")?.addEventListener("click", () => {
  const quantity = parseInt(document.getElementById("quantity").value) || 1;
  const price = parseInt(product.price);
  const total = quantity * price;

  document.getElementById("summary-title").textContent = product.title;
  document.getElementById("summary-price").textContent = price;
  document.getElementById("summary-quantity").textContent = quantity;
  document.getElementById("summary-total").textContent = total;

  document.getElementById("payment-summary-column").classList.remove("d-none");
});

document.getElementById("quantity").addEventListener("input", () => {
  const data = JSON.parse(localStorage.getItem("selectedProduct"));
  if (!data) return;

  const quantity = parseInt(document.getElementById("quantity").value) || 1;
  const price = parseInt(data.price.replace(/[₹,]/g, ''));
  const total = quantity * price;

  document.getElementById("summary-quantity").textContent = quantity;
  document.getElementById("summary-total").textContent = total;
});


// Razorpay Payment
document.getElementById("payNowBtn").addEventListener("click", () => {
  const quantity = parseInt(document.getElementById("quantity").value);
  const totalAmount = product.price * quantity;

  const options = {
    key: "rzp_test_XXXXXXXXXXXX", // Replace with your Razorpay Test Key
    amount: totalAmount * 100,
    currency: "INR",
    name: "Solitaire Infosys",
    description: product.title,
    handler: function (response) {
      alert("Payment successful! ID: " + response.razorpay_payment_id);
    },
    theme: {
      color: "#198754",
    },
  };

  const rzp = new Razorpay(options);
  rzp.open();
});

// Add to cart
document.getElementById("addToCartBtn").addEventListener("click", () => {
  const quantity = parseInt(document.getElementById("quantity").value);
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ ...product, quantity });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Product added to cart!");
});