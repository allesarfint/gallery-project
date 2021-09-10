import './css/style.css';
import {galleryContent} from './gallery.js';
import { modal } from './modal.js';
import { textContent } from './text';
import { createView } from './firstview';
import { createCarousel, carouselFunction } from './carousel';
import { createMapsLibrary } from './map';

const body = document.body;

body.appendChild(createView())

const navmenu = document.createElement("div");
navmenu.id = "navmenu";

const title = document.createElement("h1");
title.classList.add("project");
title.textContent = "Superficies";
navmenu.appendChild(title);

const pages = document.createElement("div");
pages.classList.add("menu");
const pageNames = [
    {title: "Pix", content: galleryContent()},
    {title: "Algunos escritos", content: textContent()}, 
    {title: "Recorridos", content: createMapsLibrary()},
    // {title: "Superficies", content: createCarousel(), second: carouselFunction()}
];
pageNames.forEach(page => {
    const menu = document.createElement("span");
    menu.classList.add("menu-item");
    menu.id = page.title;
    menu.textContent = page.title;
    menu.addEventListener("click", function() {
        wrapper.style.animationName = "fadeout";
        wrapper.style.animationDuration = "1s";
        setTimeout(() => {
            content.innerHTML = "";
            content.appendChild(page.content);
            wrapper.style.animationName = "fadein";
            wrapper.style.animationDuration = "1s"
        }, 990);
    })
    pages.appendChild(menu);
})

const superficiesMenu = document.createElement("span");
superficiesMenu.classList.add("menu-item");
superficiesMenu.id = "Superficies";
superficiesMenu.textContent = "Superficies";
superficiesMenu.addEventListener("click", () => {
    wrapper.style.animationName = "fadeout";
    wrapper.style.animationDuration = "0.5s";
    setTimeout(function() {
        content.innerHTML = "";
        content.style.visibility = "hidden";
        content.appendChild(createCarousel());
        setTimeout(function() {
            content.style.visibility = "visible";
            wrapper.style.animationName = "fadein";
            wrapper.style.animationDuration = "1s"
            carouselFunction();
        }, 1490);
    }, 490);
})
pages.appendChild(superficiesMenu)
navmenu.appendChild(pages);

body.appendChild(navmenu);

const menus = document.querySelectorAll(".menu-item");
for (let i = 0; i < menus.length; i++) {
    menus[i].addEventListener("click", function() {
        for (let j = 0; j < menus.length; j++) {
            menus[j].classList.remove("active");
        }
        this.classList.add("active");
    })
}

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
menus[0].classList.add("active");

wrapper.appendChild(modal);