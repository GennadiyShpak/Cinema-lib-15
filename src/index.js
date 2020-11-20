import "./styles/index.scss";
import "material-design-icons/iconfont/material-icons.css";
import "./js/script";
import onLoadPage from './js/renderMainPage'
import refs from "./js/refs";



onLoadPage();

console.log("refs.searchForm", refs.searchForm)
