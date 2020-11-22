import './styles/index.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'material-design-icons/iconfont/material-icons.css';
import './js/script';
import onLoadPage from './js/renderMainPage';
import refs from './js/refs';
import './js/renderMyLibrary';
import { onSearch, randerGenreFilm } from './js/renderSearchFilm';
import renderHederHandler from './js/header-logic';
import {
  onStudentBtnClick,
  onBackdropClick,
  onCloseTeamModal,
} from './js/teamModal';
refs.studentBtnClick.addEventListener('click', onStudentBtnClick);
refs.teamModal.addEventListener('click', onBackdropClick);
refs.closeBtn.addEventListener('click', onCloseTeamModal);
// randerGenreFilm();
onLoadPage();
renderHederHandler();
