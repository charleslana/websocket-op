function ranking(property) {
  loading();
  document.getElementById('ranking').innerHTML = '';
  instance
    .get(`/user/ranking?property=${property}`)
    .then(response => {
      mountRanking(response.data);
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
}

addEventListener('DOMContentLoaded', () => {
  ranking('score');
});

function mountRanking(data) {
  data.map((d, index) => {
    const text = `
    <tr>
      <th scope="row">${index + 1}</th>
      <td><img src="assets/images/avatars/${d.avatar}.png" width="50" /></td>
      <td>${d.username}</td>
      <td>${numberFormatter(d.score)}</td>
      <td>${numberFormatter(d.level)}</td>
      <td>${numberFormatter(d.gold)}</td>
      <td>${numberFormatter(d.berry)}</td>
    </tr>
    `;
    document.getElementById('ranking').insertAdjacentHTML('beforeend', text);
  });
}

function loading() {
  document.getElementById('loading').style.opacity = 1;
}

function removeLoading() {
  document.getElementById('loading').style.opacity = 0;
}

document.getElementById('selectRanking').addEventListener('change', () => {
  ranking(document.getElementById('selectRanking').value);
});
