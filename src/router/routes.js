import { renderHome, setupHome } from "../views/home.js";
import { renderMascotas, setupMascotas } from "../views/mascotas.js";

export const routes = {
    "/": {
        render: renderHome,
        setup: setupHome,
    },
    "/mascotas": {
        render: renderMascotas,
        setup: setupMascotas,
    },
};
