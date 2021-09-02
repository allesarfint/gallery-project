import {modal, modalContent} from './modal.js';
import { imgs } from './imgdata';
import './css/gallery.css'

export function galleryContent() {
    const gallery = document.createElement("div");
    gallery.id = "gallery";

    const createDivFrame = picture => {
        const divTag = document.createElement("div");
        divTag.classList.add("frame");    
        divTag.append(picture);
        return divTag
    }

    const createImg = url => {
        const imgTag = document.createElement("img");
        imgTag.src = url;
        imgTag.classList.add("picture");
        imgTag.classList.add("hidden");
        imgTag.addEventListener("mouseover", (e) => {
            e.target.classList.remove("hidden");
        });
        imgTag.addEventListener("click", function(){
            modal.style.display = "block";
            modalContent.src = this.src;
        })
        return imgTag
    }

    for (let i = 0; i < imgs.length; i++) {
        const imgUrl = imgs[i];
        
        const imgPicture = createImg(imgUrl);
        const divFrame = createDivFrame(imgPicture);
        
        gallery.appendChild(divFrame);
    }
    return gallery
}

export function resetButton() {
    const reset = document.createElement("button");
    reset.id = "reset";
    reset.type = "button";
    reset.textContent = "Reset";
    reset.addEventListener("click", () => {
        const pictures = document.querySelectorAll(".picture");
        pictures.forEach(picture => {
            picture.classList.add("hidden");
        })
    })
    return reset
}