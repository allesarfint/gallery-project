import './style.css';
import './modal.css';
import {imgA, imgB, imgC, imgD, imgE, imgF, imgG, imgH, imgI} from './imgdata.js';

const imgs = [
    imgA, imgB, imgC, imgD, imgE, imgF, imgG, imgH, imgI,
    imgA, imgB, imgC, imgD, imgE, imgF, imgG, imgH, imgI,
    imgA, imgB, imgC, imgD, imgE, imgF, imgG, imgH, imgI,
    imgA, imgB, imgC, imgD, imgE, imgF, imgG, imgH, imgI,
];

// for (let i = 0; i < 16; i++) {
//     const img = () => {
//         const url = `https://via.placeholder.com/300x250?text=${i+1}`;
//         return {i, url}
//     }
//     imgs.push(img());
// }

const gallery = document.querySelector("#gallery");

const createDivFrame = picture => {
    const divTag = document.createElement("div");
    divTag.classList.add("frame");    
    divTag.append(picture);
    return divTag
}

const modal = document.querySelector('#myModal');
const modalContent = document.querySelector(".modal-content");

const createImg = url => {
    const imgTag = document.createElement("img");
    imgTag.src = url;
    imgTag.classList.add("picture");
    imgTag.classList.add("hidden");
    imgTag.addEventListener("mouseover", (e) => {
        e.target.classList.remove("hidden");
    });
    imgTag.onclick = function(){
        modal.style.display = "block";
        modalContent.src = this.src;
    }
    return imgTag
}

const closeButton = document.getElementsByClassName("close")[0];

closeButton.onclick = function() { 
    modal.style.display = "none";
}

for (let i = 0; i < imgs.length; i++) {
    const imgUrl = imgs[i];
    
    const imgPicture = createImg(imgUrl);
    const divFrame = createDivFrame(imgPicture);
    
    gallery.appendChild(divFrame);
}