import debounce from 'lodash.debounce';
import { error, success } from './pnotify';
import API from './apiService';
import LoadMoreBtn from './loadMoreBtn';
import onOpenModal from './openModal';
import onCloseModal from './closeModal';
import handlebars from "../templates/main-page.hbs";
import animateScrollTo from 'animated-scroll-to';
import refs from './refs';
import { Observer } from './intersectionObserver';

document.addEventListener('click', onCloseModal);
window.addEventListener('keydown', onCloseModal);
