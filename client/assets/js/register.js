document.getElementById('loginForm').addEventListener('submit', e => {
  e.preventDefault();
  instance
    .post('/user', {
      username: document.getElementById('username').value,
      password: document.getElementById('password').value,
      passwordConfirmation: document.getElementById('passwordConfirmation')
        .value,
    })
    .then(response => {
      successAlert(response.data.message);
    })
    .catch(error => {
      if (error.response) {
        errorAlert(error.response.data.message);
        return;
      }
      errorAlert(error.message);
    });
});
