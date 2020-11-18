import refs from './refs';

export default function onCloseModal(e) {
  if (e.target.classList.contains('modal__backdrop')) {
    e.target.classList.add('is-hidden');
  }
  if (e.code == 'Escape') {
    refs.modal.classList.add('is-hidden');
  }
}
