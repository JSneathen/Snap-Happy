
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
