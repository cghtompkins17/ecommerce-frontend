import Header from './components/header';
import HomePage from './pages/home-page'
import ProductPage from './pages/product-page';
import {getUrlRequest} from '/util.js'

const root = document.querySelector("#root");
const header = document.querySelector("#header");

const routes = {
    '/': HomePage,
    '/product/:id': ProductPage 
}


async function router(){
    const request = getUrlRequest();
    const parseUrl = (request.resource ? `/${request.resource}` : '/') +
                     (request.id ? `/:id` : '') +
                     (request.verb ? `/${request.verb}` : '')

    const page = routes[parseUrl];
    header.innerHTML = Header.render();
    //root.innerHTML = await HomePage.render();
    root.innerHTML = await page.render();
}

window.addEventListener("load", router);
window.addEventListener("hashchange", router);