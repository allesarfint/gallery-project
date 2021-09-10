import { mapas } from './imgdata';
import './css/map.css';

export function createMapsLibrary() {
    const library = document.createElement("div");
    library.id = "library";

    for (let i = 0; i < mapas.length; i++) {
        const img = document.createElement("img");
        img.classList.add("mapa");
        img.src = mapas[i];
        library.appendChild(img);
    }

    return library
}