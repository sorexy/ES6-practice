import loadscreen from './modules/loadscreen.js';
import { loadMenu } from './modules/load-menu.js';

loadscreen();
const menu = await loadMenu();

document.getElementById("featured-items").innerHTML = menu;
