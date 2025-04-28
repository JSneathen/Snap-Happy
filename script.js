// --- Chat Toggle (for site-wide live chat bubble) ---
function toggleChat() {
  const chatBox = document.getElementById('chatBox');
  if (chatBox) {
    chatBox.style.display = (chatBox.style.display === 'block') ? 'none' : 'block';
  }
}

// --- Login Page Script ---
function setupLogin() {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      if (email === 'IT@299.com' && password === '1234') {
        alert('Login Successful! 🎉 Welcome to Snap Happy Photography.');
        window.location.href = 'dashboard.html';
      } else {
        alert('Invalid credentials. Please try again.');
      }
    });
  }
}

// --- Cart Handling for Store and Prints ---
let cart = [];

function addToCart(item) {
  cart.push(item);
  alert('Item added to cart! 🛒');
}

function checkoutCart() {
  alert('Thank you for your purchase! 🛍️');
  cart = [];
  closeCart();
}

function closeCart() {
  const cartPopup = document.getElementById('cartPopup');
  if (cartPopup) {
    cartPopup.style.display = 'none';
  }
}

// --- Retouch & Print Request Handling ---
function openRetouchRequest(imageSrc) {
  const popupImage = document.getElementById('popupImage');
  if (popupImage) {
    popupImage.src = imageSrc;
  }
  const retouchPopup = document.getElementById('retouchPopup');
  if (retouchPopup) {
    retouchPopup.style.display = 'block';
  }
}

function closePopup() {
  const retouchPopup = document.getElementById('retouchPopup');
  if (retouchPopup) {
    retouchPopup.style.display = 'none';
  }
}

function orderPrint() {
  const size = document.getElementById('printSize').value;
  cart.push(`Ordered print (${size})`);
  alert(`Print (${size}) added to cart! 📸`);
  closePopup();
}

function submitRetouch() {
  const desc = document.getElementById('retouchDescription').value;
  if (desc.trim() !== '') {
    alert('Your retouch request has been submitted! ✨');
    closePopup();
  } else {
    alert('Please enter a description before submitting.');
  }
}

// --- Gallery Randomized Display from Internet (Picsum Photos) ---
function setupGallery() {
  const gallery = document.getElementById('gallery');
  if (gallery) {
    for (let i = 0; i < 8; i++) {
      const img = document.createElement('img');
      img.src = `https://picsum.photos/400/300?random=${Math.floor(Math.random() * 1000)}`;
      img.alt = "Gallery Photo";
      img.onclick = () => openRetouchRequest(img.src);
      img.className = 'gallery-photo';
      gallery.appendChild(img);
    }
  }
}

// --- Master Setup on Page Load ---
document.addEventListener('DOMContentLoaded', () => {
  const chatBubble = document.querySelector('.chat-bubble');
  const closeBtn = document.querySelector('.close-btn');

  if (chatBubble) chatBubble.addEventListener('click', toggleChat);
  if (closeBtn) closeBtn.addEventListener('click', toggleChat);

  setupLogin();
  setupGallery();
});
