// products.js
  let selectedProduct = {};

  // Open modal with product data
  document.querySelectorAll(".view-details").forEach(btn => {
    btn.addEventListener("click", () => {
      selectedProduct = {
        title: btn.dataset.title,
        price: parseInt(btn.dataset.price),
        desc: btn.dataset.desc,
        qty: 1
      };

      document.getElementById("productTitle").innerText = selectedProduct.title;
      document.getElementById("productDesc").innerText = selectedProduct.desc;
      document.getElementById("productPrice").innerText = selectedProduct.price;

      new bootstrap.Modal(document.getElementById("productModal")).show();
    });
  });

  // Add to cart
  document.getElementById("addToCart").addEventListener("click", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(selectedProduct);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("✅ Added to Cart!");
  });

  // Buy now → Razorpay
  document.getElementById("buyNow").addEventListener("click", () => {
    var options = {
      key: "rzp_test_1234567890", // Replace with your Razorpay Key
      amount: selectedProduct.price * 100,
      currency: "INR",
      name: "My E-Commerce",
      description: selectedProduct.title,
      handler: function (response) {
        alert("✅ Payment Successful! ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999"
      },
      theme: { color: "#3399cc" }
    };
    var rzp = new Razorpay(options);
    rzp.open();
  });
