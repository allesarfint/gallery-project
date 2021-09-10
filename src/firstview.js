import './css/modal.css';

export function createView() {
    const view = document.createElement("div");
    view.id = "view";

    const viewContent = document.createElement("div");
    viewContent.id = "view-content";
    view.appendChild(viewContent);

    const projectTitle = document.createElement("h1");
    projectTitle.textContent = "El lugar de las Superficies";
    projectTitle.classList.add("project");
    viewContent.appendChild(projectTitle);

    const closeButton = document.createElement("span");
    closeButton.textContent = "×";
    const afterText = document.createElement("article");
    afterText.id = "after-text";

    const text = `
    Partir de una imagen, recomponer, reconfigurar, extraer de ella su mínimo punto de homogeneidad, vacilar a partir de la saturación, el matiz, el aspecto cromático, su intensidad y encontrar la posición enriquecida en la cual la mirada acude a la inquietud, a la ambigüedad de lo eventual, ya no en movimiento, sino como un hecho capturado en el instante que se prolonga en el tiempo. Un punto de la imagen que se correlaciona directamente con otros mínimos elementos.

    El cuerpo urbano nos posiciona constantemente como espectadores de pequeñas realidades fragmentadas de la ciudad, al tiempo en que estas orgánicamente se van posicionando en la superficie del escenario social. El lugar de las superficies, es un espacio desde el cual se hace una serie de consideraciones teóricas y visuales, alrededor de algunas dinámicas socio- espaciales, que manifiestan la disonancia en que se revela la urbe; con la intención de construir nuevas significaciones e interrelaciones de la realidad concreta de la ciudad de Medellín, específicamente en los sectores patrimoniales, Prado Centro, Boston, y Los Ángeles y las formas espaciales que se generan allí. Tomando como medio el aspecto comunicativo del color, como marcaje urbano y como elemento que se yuxtapone constantemente entre las dinámicas urbanas del patrimonio habitado y arquitectónico.
    `;

    afterText.textContent = text;
    const closeX = document.createElement("span");
    closeX.classList.add("closeX");
    closeX.textContent = "Continuar"

    const animatedPoint = document.createElement("div");
    animatedPoint.classList.add("animated-point");
    animatedPoint.addEventListener("click", function () {
        animatedPoint.style.animationName = "fadeout";
        animatedPoint.style.animationDuration = "0.5s";
        setTimeout (function () {
            viewContent.removeChild(animatedPoint);          
        }, 490)
        projectTitle.style.animationName = "fadeout";
        projectTitle.style.animationDuration = "0.5s";
        setTimeout (function () {
            projectTitle.style.visibility = "hidden";   
        }, 500)
        arrow.style.animationName = "fadeout";
        arrow.style.animationDuration = "0.5s";
        setTimeout (function () {
            viewContent.removeChild(arrow);
            viewContent.appendChild(afterText);
            viewContent.appendChild(closeX);
            afterText.style.animationName = "fadein";
            afterText.style.animationDuration = "0.5s";
        }, 500)
        setTimeout (function () {
            closeX.style.animationName = "fadein";
            closeX.style.animationDuration = "0.5s";     
        }, 500)
            
    })
    viewContent.appendChild(animatedPoint);

    setTimeout(function () {
        closeX.addEventListener("click", function() {
            viewContent.style.animationName = "fadeout";
            viewContent.style.animationDuration = "0.5s";

            setTimeout(function() {
                view.removeChild(viewContent);
                view.style.animationName = "fadeout";
                view.style.animationDuration = "0.5s";
                setTimeout (function () {
                    view.parentNode.removeChild(view);
                }, 490)
            }, 490)
        })
    }, 1000)

    const arrow = document.createElement("img");
    arrow.src = "http://a1sites.com/FreeImages/Free_Clip_Art/images/arrow/up_arrow_clip.png";
    arrow.style.width = "20px";
    arrow.style.marginTop = "20px";
    viewContent.appendChild(arrow);

    return view
}