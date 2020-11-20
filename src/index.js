import "./styles/index.scss";
import "material-design-icons/iconfont/material-icons.css";
import "./js/script";
import onLoadPage from './js/renderMainPage'
import refs from "./js/refs";

import onSearch from './js/renderSearchFilm';


onLoadPage();
refs.searchForm.addEventListener('submit', onSearch);





//------------------------------------



import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';



const container = document.getElementById('pagination');
// const pagination = new Pagination(container,);

const options = {
    totalItems: 1000,
    itemsPerPage: 20,
    visiblePages: 10,
    page: 1,
    centerAlign: false,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
          '<span class="tui-ico-ellip">...</span>' +
        '</a>'
    }
  };

//   pagination.on('beforeMove', evt => {
//     const { page } = evt;
//     const result = ajax.call({page});
  
//     if(result) {
//       pagination.movePageTo(page);
//     } else {
//       return false;
//     }
//   });

  const pagination = new Pagination(document.getElementById('pagination'), {
    totalItems: 1000,
    itemsPerPage: 20,
    visiblePages: 5,
    centerAlign: true,
    template: {
        page: '<a href="#" class="tui-page-btn">{{page}}</a>',
        currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
        moveButton:
          '<a href="#" class="tui-page-btn tui-{{type}}">' +
            '<span class="tui-ico-{{type}}">{{type}}</span>' +
          '</a>',
        disabledMoveButton:
          '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
            '<span class="tui-ico-{{type}}">{{type}}</span>' +
          '</span>',
        moreButton:
          '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
            '<span class="tui-ico-ellip">...</span>' +
          '</a>'
      }
});

