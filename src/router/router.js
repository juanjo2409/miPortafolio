import { routes } from "./routes.js";

export function navigate(path) {
    window.history.pushState({}, "", path);
    renderRouter();
}

export function renderRouter() {
    const app = document.getElementById("app");
    const currentPath = window.location.pathname;
    let route = routes[currentPath];

    if (!route) {
        // Default to home if route not found
        route = routes["/"];
    }

    app.innerHTML = route.render();

    if (route.setup) {
        route.setup();
    }
}

export function initRouter() {
    // Intercept all internal <a> link clicks for SPA navigation
    document.addEventListener("click", (event) => {
        const link = event.target.closest("a");
        if (!link) return;

        const href = link.getAttribute("href");
        if (!href || !href.startsWith("/")) return;

        event.preventDefault();
        navigate(href);
    });

    window.addEventListener("popstate", renderRouter);
    renderRouter();
}
