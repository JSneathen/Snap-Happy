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

// --- Proofing Portal Logic ---
const proofs = [
  'https://picsum.photos/id/1015/400/300',
  'https://picsum.photos/id/1016/400/300',
  'https://picsum.photos/id/1025/400/300',
  'https://picsum.photos/id/1035/400/300',
  'https://picsum.photos/id/1045/400/300'
];

let selectedProof = null;

function loadProofs() {
  const pendingGrid = document.getElementById('pendingGrid');
  if (pendingGrid) {
    proofs.forEach((src, index) => {
      const card = createProofCard(src, index);
      pendingGrid.appendChild(card);
    });
  }
}

function createProofCard(src, index) {
  const card = document.createElement('div');
  card.className = 'proof-card';

  const img = document.createElement('img');
  img.src = src;
  img.alt = "Proof Image";

  const status = document.createElement('p');
  status.className = 'proof-status';
  status.innerText = 'Status: Pending';

  const approveBtn = document.createElement('button');
  approveBtn.innerText = 'Approve';
  approveBtn.onclick = () => approveProof(card);

  const reviseBtn = document.createElement('button');
  reviseBtn.innerText = 'Request Revision';
  reviseBtn.onclick = () => openRevisionPopup(card);

  card.appendChild(img);
  card.appendChild(status);
  card.appendChild(approveBtn);
  card.appendChild(reviseBtn);

  return card;
}

function approveProof(card) {
  card.querySelector('.proof-status').innerText = 'Status: Approved';
  document.getElementById('approvedGrid').appendChild(card);
}

function openRevisionPopup(card) {
  selectedProof = card;
  document.getElementById('revisionPopup').style.display = 'block';
}

function submitRevision() {
  const text = document.getElementById('revisionText').value;
  if (text.trim() !== '') {
    selectedProof.querySelector('.proof-status').innerText = 'Status: Revision Requested';
    document.getElementById('revisionGrid').appendChild(selectedProof);
    closeRevisionPopup();
    alert('Revision submitted! 📝');
  } else {
    alert('Please enter a description before submitting.');
  }
}

function closeRevisionPopup() {
  document.getElementById('revisionPopup').style.display = 'none';
}

// Load Proofs Automatically
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('pendingGrid')) {
    loadProofs();
  }
});

// Fade-in on Scroll for Features
document.addEventListener('DOMContentLoaded', () => {
  const featureImgs = document.querySelectorAll('.feature img');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  featureImgs.forEach(img => {
    observer.observe(img);
  });
});


