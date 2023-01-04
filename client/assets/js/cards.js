addEventListener('DOMContentLoaded', () => {
  loading();
  document.getElementById('cards').innerHTML = '';
  instance
    .get('/character')
    .then(response => {
      mountCards(response.data);
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

function mountCards(data) {
  data.map(d => {
    const text = `
    <div class="col">
      <div
        class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
        style="
          background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url('assets/images/characters/${d.image}.png');
        "
      >
        <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">${d.name}</h2>
          <ul class="d-flex list-unstyled mt-auto">
            <li class="me-auto">
              <img
                src="assets/images/avatars/1.png"
                alt="Image"
                width="32"
                height="32"
                class="rounded-circle border border-white"
              />
            </li>
            <li class="d-flex align-items-center me-3">
              <i class="bi bi-geo-fill me-2"></i>
              <small>Earth</small>
            </li>
            <li class="d-flex align-items-center">
              <i class="bi bi-calendar3 me-2"></i>
              <small>3d</small>
            </li>
          </ul>
        </div>
      </div>
    </div>
    `;
    document.getElementById('cards').insertAdjacentHTML('beforeend', text);
  });
}

function loading() {
  document.getElementById('loading').style.opacity = 1;
}

function removeLoading() {
  document.getElementById('loading').style.opacity = 0;
}
