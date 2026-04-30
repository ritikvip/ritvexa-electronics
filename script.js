const whatsappNumber = "+916280083845"; // yaha apna WhatsApp number daalna

const products = [
  {
    name: "Fast Charger 20W",
    price: 299,
    category: "charger",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500"
  },
  {
    name: "Type-C Cable",
    price: 149,
    category: "charger",
    image: "https://images.unsplash.com/photo-1616400619175-5beda3a17896?w=500"
  },
  {
    name: "Bluetooth Earbuds",
    price: 799,
    category: "earbuds",
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500"
  },
  {
    name: "Neckband Earphones",
    price: 499,
    category: "earbuds",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
  },
  {
    name: "Mobile Back Cover",
    price: 199,
    category: "cover",
    image: "https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?w=500"
  },
  {
    name: "Tempered Glass",
    price: 99,
    category: "cover",
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500"
  },
  {
    name: "LED Bulb 12W",
    price: 120,
    category: "light",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=500"
  },
  {
    name: "Rechargeable LED Torch",
    price: 249,
    category: "light",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500"
  }
];

let cart = [];

function showProducts(list = products) {
  const box = document.getElementById("products");
  box.innerHTML = "";

  list.forEach((p, index) => {
    box.innerHTML += `
      <div class="card">
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p class="price">₹${p.price}</p>
        <button class="add" onclick="addToCart(${index})">Add to Cart</button>
        <button class="buy" onclick="buyNow(${index})">Buy on WhatsApp</button>
      </div>
    `;
  });
}

function filterProducts(category) {
  if (category === "all") {
    showProducts(products);
  } else {
    showProducts(products.filter(p => p.category === category));
  }
}

function searchProducts() {
  const text = document.getElementById("search").value.toLowerCase();
  const result = products.filter(p => p.name.toLowerCase().includes(text));
  showProducts(result);
}

function addToCart(index) {
  cart.push(products[index]);
  document.getElementById("cartCount").innerText = cart.length;
  alert("Product added!");
}

function openCart() {
  document.getElementById("cartBox").style.display = "block";
  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    total += item.price;
    cartItems.innerHTML += `
      <div class="cart-item">
        <b>${item.name}</b><br>
        ₹${item.price}
      </div>
    `;
  });

  cartItems.innerHTML += `<h3>Total: ₹${total}</h3>`;
}

function closeCart() {
  document.getElementById("cartBox").style.display = "none";
}

function buyNow(index) {
  const p = products[index];
  const msg = `Hello bhai, mujhe ye product chahiye:%0AProduct: ${p.name}%0APrice: ₹${p.price}`;
  window.open(`https://wa.me/${+916280083845}?text=${msg}`, "_blank");
}

function sendCartWhatsApp() {
  if (cart.length === 0) {
    alert("Cart empty hai");
    return;
  }

  let msg = "Hello bhai, mujhe ye order chahiye:%0A%0A";
  let total = 0;

  cart.forEach((item, i) => {
    msg += `${i + 1}. ${item.name} - ₹${item.price}%0A`;
    total += item.price;
  });

  msg += `%0ATotal: ₹${total}`;
  window.open(`https://wa.me/${+916280083845}?text=${msg}`, "_blank");
}

showProducts();