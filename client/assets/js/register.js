document.getElementById('registerForm').addEventListener('submit', e => {
  e.preventDefault();
  loadingButton();
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
    })
    .finally(() => {
      removeLoading();
    });
});

function loadingButton() {
  document.getElementById('register').setAttribute('disabled', true);
  document.getElementById('registerSpan').classList.toggle('d-none');
}

function removeLoading() {
  document.getElementById('register').removeAttribute('disabled');
  document.getElementById('registerSpan').classList.toggle('d-none');
}
