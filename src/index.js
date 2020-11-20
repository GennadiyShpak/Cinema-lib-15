import './styles/index.scss';
import 'material-design-icons/iconfont/material-icons.css';
import './js/script';
import onLoadPage from './js/renderMainPage';
import refs from './js/refs';
import './js/renderMyLibrary';
import onSearch from './js/renderSearchFilm';

onLoadPage();

refs.searchForm.addEventListener('submit', onSearch);
