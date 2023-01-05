addEventListener('DOMContentLoaded', () => {
  loading();
  document.getElementById('cards').innerHTML = '';
  instance
    .get('/shop')
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
            url('assets/images/characters/${d.character.image}.png');
        "
      >
        <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">${
            d.character.name
          }</h2>
          <ul class="d-flex list-unstyled mt-auto">
            <li class="me-auto">
              <button type="button" class="btn btn-outline-light" onclick="confirmAlert(() => buyCard(${
                d.id
              }))">Comprar</button>
            </li>
            <li class="d-flex align-items-center me-3">
              <small class='text-warning me-2'>O</small>
              <small>${numberFormatter(d.gold)}</small>
            </li>
            <li class="d-flex align-items-center">
            <small class='text-primary me-2'>B</small>
            <small>${numberFormatter(d.berry)}</small>
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

function buyCard(id) {
  instance
    .get(`/shop/buy?id=${id}`)
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
    .finally(() => {});
}
