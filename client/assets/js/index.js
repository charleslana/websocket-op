document.getElementById('loginForm').addEventListener('submit', e => {
  e.preventDefault();
  loadingButton();
  instance
    .post('/user/login', {
      username: document.getElementById('username').value,
      password: document.getElementById('password').value,
    })
    .then(response => {
      redirectAlert(response.data);
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

function redirectAlert(data) {
  Swal.fire({
    title: 'Atenção!',
    text: data.message,
    icon: 'success',
    confirmButtonText: 'Ok',
    allowOutsideClick: false,
  }).then(result => {
    if (result.isConfirmed) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', data.username);
      window.location.href = 'home.html';
    }
  });
}
