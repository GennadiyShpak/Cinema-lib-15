import refs from './refs';
export { onStudentBtnClick, onBackdropClick, onCloseTeamModal };

refs.studentBtnClick.addEventListener('click', onStudentBtnClick);
refs.teamModal.addEventListener('click', onBackdropClick);
refs.closeBtn.addEventListener('click', onCloseTeamModal);

function onStudentBtnClick() {
  refs.teamModal.classList.remove('is-hidden');
  document.addEventListener('keydown', onEscPress);
  console.log(onStudentBtnClick);
}
console.log(onStudentBtnClick);
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
