import './css/style.css';
import { imgs } from './imgdata.js';
import { reset, gallery, createDivFrame, createImg} from './gallery.js';
import { modal } from './modal.js';

const body = document.body;

const wrapper = document.createElement("div");
wrapper.id = "wrapper";

const header = document.createElement("div");
header.id = "header";
const h1 = document.createElement("h1");
h1.textContent = "Galeria";
header.appendChild(h1);

wrapper.appendChild(header);

const content = document.createElement("div");
content.id = "content";
wrapper.appendChild(content);

body.appendChild(wrapper);

const navmenu = document.createElement("div");
navmenu.id = "navmenu";
body.appendChild(navmenu);

for (let i = 0; i < imgs.length; i++) {
    const imgUrl = imgs[i];
    
    const imgPicture = createImg(imgUrl);
    const divFrame = createDivFrame(imgPicture);
    
    gallery.appendChild(divFrame);
}

content.appendChild(gallery);
content.appendChild(reset);
content.appendChild(modal);