import './css/modal.css';

export const modal = document.createElement("div");
modal.id = "modal";
modal.classList.add("modal");

const closeButton = document.createElement("span")
closeButton.classList.add("close");
closeButton.addEventListener("click", function() { 
    modal.style.display = "none";
})
closeButton.textContent = "×"
modal.appendChild(closeButton);

export const modalContent = document.createElement("img");
modalContent.id = "img01"
modalContent.classList.add("modal-content");
modal.appendChild(modalContent);
