addEventListener('DOMContentLoaded', () => {
  instance
    .get('/user/details')
    .then(response => {
      mountUser(response.data);
    })
    .catch(error => {
      if (error.response) {
        errorAlert(error.response.data.message);
        return;
      }
      errorAlert(error.message);
    })
    .finally(() => {});
});

function mountUser(data) {
  document.getElementById('name').textContent = data.username;
  document.getElementById('berry').textContent = numberFormatter(data.berry);
  document.getElementById('gold').textContent = numberFormatter(data.gold);
  document.getElementById('minExp').textContent = numberFormatter(data.minExp);
  document.getElementById('maxExp').textContent = numberFormatter(data.maxExp);
  document.getElementById('level').textContent = numberFormatter(data.level);
  document.getElementById('score').textContent = numberFormatter(data.score);
}
