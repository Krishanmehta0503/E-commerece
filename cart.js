    // Load cart items
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById("cart-container");
    const totalElement = document.getElementById("cart-total");

    let total = 0;

    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Your cart is empty</p>";
    } else {
      cartContainer.innerHTML = "";
      cart.forEach((item, index) => {
        const price = parseFloat(item.price) || 0;
        total += price;

        cartContainer.innerHTML += `
          <div class="card mb-3 shadow-sm" style="max-width: 600px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${item.img || 'images/book.jpg'}" class="img-fluid rounded-start" alt="${item.title}">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${item.title}</h5>
                  <p class="card-text">${item.desc}</p>
                  <p class="card-text"><strong>₹${item.price}</strong></p>
                  <button class="btn btn-danger btn-sm" onclick="removeItem(${index})">Remove</button>
                </div>
              </div>
            </div>
          </div>
        `;
      });
    }

    totalElement.innerText = `₹${total}`;

    // Remove item function
    function removeItem(index) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      location.reload();
    }
