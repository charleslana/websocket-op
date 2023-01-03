document.getElementById('loginForm').addEventListener('submit', e => {
  e.preventDefault();
  loadingButton();
  instance
    .post('/user/login', {
      username: document.getElementById('username').value,
      password: document.getElementById('password').value,
    })
    .then(response => {
      redirectAlert(response.data.message, response.data.token);
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
  document.getElementById('login').setAttribute('disabled', true);
  document.getElementById('loginSpan').classList.toggle('d-none');
}

function removeLoading() {
  document.getElementById('login').removeAttribute('disabled');
  document.getElementById('loginSpan').classList.toggle('d-none');
}

function redirectAlert(message, token) {
  Swal.fire({
    title: 'Atenção!',
    text: message,
    icon: 'success',
    confirmButtonText: 'Ok',
    allowOutsideClick: false,
  }).then(result => {
    if (result.isConfirmed) {
      localStorage.setItem('token', token);
      window.location.href = '#loginSuccess';
    }
  });
}
