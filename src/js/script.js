import debounce from 'lodash.debounce';
import { error, success } from './pnotify';
import API from './apiService';
import LoadMoreBtn from './loadMoreBtn';
import handlebars from '../templates/main-page.hbs';
import animateScrollTo from 'animated-scroll-to';
import refs from './refs';
import { Observer } from './intersectionObserver';
//Modal window handler.
require('./handlerModal');

document.addEventListener('click', onCloseModal);
window.addEventListener('keydown', onCloseModal);

