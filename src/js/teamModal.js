import refs from './refs';

refs.studentBtnClick.addEventListener('click', onStudentBtnClick);
refs.teamModal.addEventListener('click', onBackdropClick);
refs.closeBtn.addEventListener('click', onCloseTeamModal);

function onStudentBtnClick() {
  refs.teamModal.classList.remove('is-hidden');
  window.addEventListener('keydown', onEscPress);
}

function onCloseTeamModal() {
  refs.teamModal.classList.add('is-hidden');
}

function onEscPress(e) {
  if (e.code == 'Escape') {
    onCloseTeamModal();
  }
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseTeamModal();
  }
}
