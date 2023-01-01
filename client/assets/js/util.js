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
  headers: { 'X-Custom-Header': 'foobar' },
});
