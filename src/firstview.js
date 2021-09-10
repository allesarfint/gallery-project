import './css/modal.css';

export function createView() {
    const view = document.createElement("div");
    view.id = "view";

    const viewContent = document.createElement("div");
    viewContent.id = "view-content";
    view.appendChild(viewContent);

    const projectTitle = document.createElement("h1");
    projectTitle.textContent = "Superficies";
    projectTitle.classList.add("project");
    viewContent.appendChild(projectTitle);

    const animatedPoint = document.createElement("div");
    animatedPoint.classList.add("animated-point");
    animatedPoint.addEventListener("click", function () {
        view.style.animationName = "fadeout";
        view.style.animationDuration = "0.6s";
        setTimeout (function () {
            view.parentNode.removeChild(view);
        }, 500)
            
    })
    viewContent.appendChild(animatedPoint);

    return view
}