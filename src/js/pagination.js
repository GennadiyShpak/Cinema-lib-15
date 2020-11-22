import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import onLoadPage from './renderMainPage'


const container = document.getElementById('pagination');

const pagination = new Pagination(document.getElementById('pagination'), {
    totalItems: `1000`,
    itemsPerPage: `20`,
    visiblePages: 5,
    centerAlign: true,
  });
  container.addEventListener('click', onBtnClickHandler)
  
  
  function onBtnClickHandler (e) {
    const a = document.querySelector('.tui-is-selected')
    if (!e.target.classList.contains('tui-page-btn')) {
      return;
    } 
      mainPageMarkupHandler.page = a.textContent;
      onLoadPage()
  };
  export default container