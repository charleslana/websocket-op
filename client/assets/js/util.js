function errorAlert(message) {
  Swal.fire({
    title: 'Atenção!',
    text: message,
    icon: 'error',
    confirmButtonText: 'Ok',
  });
}

function successAlert(message) {
  Swal.fire({
    title: 'Atenção!',
    text: message,
    icon: 'success',
    confirmButtonText: 'Ok',
  });
}

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: { token: localStorage.getItem('token') ?? '' },
});

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response && error.response.status === 401) {
      window.location.href = 'index.html';
      return;
    }
    return Promise.reject(error);
  }
);

function numberFormatter(number) {
  return number.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}
