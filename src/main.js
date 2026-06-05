import "./styles/global.css";
import { renderHome, setupHome } from "./views/home.js";

const app = document.getElementById("app");
if (app) {
    app.innerHTML = renderHome();
    setupHome();
}

