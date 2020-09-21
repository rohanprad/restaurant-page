import {loadMenuPage} from './menu.js';
import {loadHomepage} from './home.js';
import {loadContactPage} from './contact.js';
 
loadHomepage();


const home = document.querySelector('#home');
const menu = document.querySelector('#menu');
const contact = document.querySelector('#contact');


home.addEventListener('click', loadHomepage);
contact.addEventListener('click', loadContactPage);
menu.addEventListener('click', loadMenuPage);
