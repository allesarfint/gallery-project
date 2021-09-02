import './css/style.css';
import {galleryContent, resetButton} from './gallery.js';
import { modal } from './modal.js';
import { textContent } from './text';

const body = document.body;

const navmenu = document.createElement("div");
navmenu.id = "navmenu";

const title = document.createElement("h1");
title.classList.add("project");
title.textContent = "Nombre del Projecto";
navmenu.appendChild(title);

const pages = document.createElement("div");
pages.classList.add("menu");
const pageNames = [
    {title: "Galeria", content: galleryContent()},
    {title: "Texto", content: textContent()}, 
    {title: "Mapa", content: "LOL"}
];
pageNames.forEach(page => {
    const menu = document.createElement("span");
    menu.classList.add("menu-item");
    menu.id = page.title;
    menu.textContent = page.title;
    menu.addEventListener("click", function() {
        content.innerHTML = "";
        content.appendChild(page.content)
    })
    pages.appendChild(menu);
})
navmenu.appendChild(pages);

body.appendChild(navmenu);

const wrapper = document.createElement("div");
wrapper.id = "wrapper";

// const header = document.createElement("div");
// header.id = "header";
// const h1 = document.createElement("h1");
// h1.textContent = "Galeria";
// header.appendChild(h1);

// wrapper.appendChild(header);

const content = document.createElement("div");
content.id = "content";
wrapper.appendChild(content);

body.appendChild(wrapper);

content.appendChild(galleryContent());
content.appendChild(resetButton());
wrapper.appendChild(modal);