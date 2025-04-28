
// Existing Chat Toggle
function toggleChat() {
  const chatBox = document.getElementById('chatBox');
  if (chatBox) {
    chatBox.style.display = (chatBox.style.display === 'block') ? 'none' : 'block';
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const chatBubble = document.querySelector('.chat-bubble');
  const closeBtn = document.querySelector('.close-btn');

  if (chatBubble) {
    chatBubble.addEventListener('click', toggleChat);
  }
  if (closeBtn) {
    closeBtn.addEventListener('click', toggleChat);
  }

  // Fake Login Script
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
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
});
// Existing Chat Toggle
function toggleChat() {
  const chatBox = document.getElementById('chatBox');
  if (chatBox) {
    chatBox.style.display = (chatBox.style.display === 'block') ? 'none' : 'block';
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const chatBubble = document.querySelector('.chat-bubble');
  const closeBtn = document.querySelector('.close-btn');

  if (chatBubble) {
    chatBubble.addEventListener('click', toggleChat);
  }
  if (closeBtn) {
    closeBtn.addEventListener('click', toggleChat);
  }

  // Fake Login Script
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
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
});

// --- Store Cart Handling ---
let cart = [];

function addToCart(item) {
  cart.push(item);
  document.getElementById('cartItems').innerHTML = cart.map(i => '<li>' + i + '</li>').join('');
  document.getElementById('cartPopup').style.display = 'block';
}

function checkoutCart() {
  alert('Thank you for your purchase! 🛒');
  cart = [];
  closeCart();
}

function closeCart() {
  document.getElementById('cartPopup').style.display = 'none';
}

// --- Gallery Randomized Display ---
document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById('gallery');
  if (gallery) {
    const images = ['outdoor.jpg', 'studio.jpg', 'newborn.jpg', 'pets.jpg'];
    for (let i = 0; i < 8; i++) {
      const img = document.createElement('img');
      img.src = 'images/' + images[Math.floor(Math.random() * images.length)];
      img.onclick = () => openRetouchRequest(img.src);
      img.className = 'gallery-photo';
      gallery.appendChild(img);
    }
  }
});

// --- Retouch Request Popup ---
function openRetouchRequest(imageSrc) {
  document.getElementById('retouchPopup').style.display = 'block';
}

function closePopup() {
  document.getElementById('retouchPopup').style.display = 'none';
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
