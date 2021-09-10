import { imgs } from './imgdata';
import './css/carousel.scss';


export function createCarousel () {
    const carousel = document.createElement("div");
    carousel.classList.add("carousel");
    carousel.dataset.gap = 20;
    carousel.dataset.bfc;

    const figure = document.createElement("figure");
    for (let i = 0; i < imgs.length; i++) {
        const image = document.createElement("img");
        image.src = imgs[i];
        figure.appendChild(image);
    }
    carousel.appendChild(figure);

    const nav = document.createElement("nav");
    const buttonPrev = document.createElement("button");
    buttonPrev.classList.add("nav", "prev");
    buttonPrev.textContent = "Prev";
    
    const buttonNext = document.createElement("button");
    buttonNext.classList.add("nav", "next");
    buttonNext.textContent = "Next";

    nav.appendChild(buttonPrev);
    nav.appendChild(buttonNext);

    carousel.appendChild(nav);
    return carousel
};
  
export function carouselFunction() {
    const carousel = document.querySelector(".carousel");
    var figure = carousel.querySelector("figure"),
      nav = carousel.querySelector("nav"),
      images = figure.children,
      n = images.length,
      gap = carousel.dataset.gap || 0,
      bfc = true,
      theta = (2 * Math.PI) / n,
      currImage = 0;
    setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    window.addEventListener("resize", () => {
      setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    });
  
    setupNavigation();
  
    function setupCarousel(n, s) {
      var apothem = s / (2 * Math.tan(Math.PI / n));
      figure.style.transformOrigin = `50% 50% ${-apothem}px`;
  
      for (var i = 0; i < n; i++) images[i].style.padding = `${gap}px`;
      for (i = 1; i < n; i++) {
        images[i].style.transformOrigin = `50% 50% ${-apothem}px`;
        images[i].style.transform = `rotateY(${i * theta}rad)`;
      }
      if (bfc)
        for (i = 0; i < n; i++) images[i].style.backfaceVisibility = "hidden";
  
      rotateCarousel(currImage);
    }
  
    function setupNavigation() {
      nav.addEventListener("click", onClick, true);
  
      function onClick(e) {
        e.stopPropagation();
  
        var t = e.target;
        if (t.tagName.toUpperCase() != "BUTTON") return;
  
        if (t.classList.contains("next")) {
          currImage++;
        } else {
          currImage--;
        }
  
        rotateCarousel(currImage);
      }
    }
  
    function rotateCarousel(imageIndex) {
      figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
    }
  }
  