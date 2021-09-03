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
        this.parentNode.parentNode.parentNode.removeChild(view);
    })
    viewContent.appendChild(animatedPoint);

    return view
}