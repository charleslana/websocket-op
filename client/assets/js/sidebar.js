addEventListener('DOMContentLoaded', () => {
  document.getElementById('username').textContent =
    localStorage.getItem('user') ?? 'user';
  document.getElementById('avatar').src = `assets/images/avatars/${
    localStorage.getItem('avatar') ?? 1
  }.png`;
});

document.getElementById('logout').addEventListener('click', e => {
  e.preventDefault();
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  localStorage.removeItem('avatar');
  window.location.href = 'index.html';
});
