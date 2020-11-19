import refs from './refs';

refs.filmGalery.addEventListener('click', onCardFilmClick);
refs.modal.addEventListener('click', onBackdropClick);

function onCardFilmClick(e) {
  if (!e.target.closest('.film__item')) return;
  //---
  const current = e.target.closest('.film__item');
  console.log(current.children[0].src);
  const modalImg = refs.modal.querySelector('.card-img > img');
  const modalTitle = refs.modal.querySelector('.card-title');
  modalImg.src = current.children[0].src;
  modalTitle.textContent = current.children[1].textContent;
  //---
  refs.modal.classList.remove('is-hidden');
  window.addEventListener('keydown', onEscPress);
}

function onCloseModal() {
  refs.modal.classList.add('is-hidden');
  window.removeEventListener('keydown', onEscPress);
}

function onEscPress(e) {
  if (e.code == 'Escape') {
    onCloseModal();
  }
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseModal();
  }
}
