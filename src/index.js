import './styles/index.scss';
import 'material-design-icons/iconfont/material-icons.css';
import './js/script';
import onLoadPage from './js/renderMainPage';
import refs from './js/refs';
import './js/renderMyLibrary';
import {onSearch, randerGenreFilm} from './js/renderSearchFilm';
import renderHederHandler from './js/header-logic'


// randerGenreFilm();
onLoadPage();
renderHederHandler();
