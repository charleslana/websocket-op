addEventListener('DOMContentLoaded', () => {
  document.getElementById('username').textContent =
    localStorage.getItem('user');
});

document.getElementById('logout').addEventListener('click', e => {
  e.preventDefault();
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  window.location.href = 'index.html';
});
