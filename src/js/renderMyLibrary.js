import templates from '../templates/main-page.hbs';

export default function makeLibrayWatched() {
  const queueBtn = document.querySelector('.btn-queue');
  const watchedBtn = document.querySelector('.btn-watchd');

  removeClass(queueBtn);
  addClass(watchedBtn);

  queueBtn.addEventListener('click', makeLibraryQueue);

  const watched = JSON.parse(localStorage.getItem('watched'));
  makeMarkup(watched);
}

function makeLibraryQueue() {
  const queueBtn = document.querySelector('.btn-queue');
  const watchedBtn = document.querySelector('.btn-watchd');

  removeClass(watchedBtn);
  addClass(queueBtn);

  watchedBtn.addEventListener('click', makeLibrayWatched);

  const queue = JSON.parse(localStorage.getItem('queue'));
  makeMarkup(queue);
}

function makeMarkup(data) {
  const watchedList = document.querySelector('.film__watched');

  if (data.length === 0) {
    watchedList.innerHTML =
      '<p class="glow">List is empty. Add some films </p>';
    return;
  }

  watchedList.innerHTML = templates(data);
}

function removeClass(button) {
  button.classList.remove('button-active');
}
function addClass(button) {
  button.classList.add('button-active');
}
