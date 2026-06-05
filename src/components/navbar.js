// Navbar HTML shared across pages
export function navbarHtml() {
    return `
    <header class="app-header animate-slide-down">
        <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

            <!-- Logo -->
            <a href="#inicio" class="flex items-center gap-2 group">
                <div class="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center text-white font-black text-base shadow-lg group-hover:shadow-violet-500/50 transition-all duration-300">JM</div>
                <span class="text-lg font-black tracking-tight text-white">Juan<span class="gradient-text">José</span><span class="text-violet-400">.</span></span>
            </a>

            <!-- Desktop nav -->
            <nav class="hidden md:flex items-center gap-1">
                <a href="#inicio" class="btn-ghost text-violet-400">Inicio</a>
                <a href="#sobre" class="btn-ghost">Sobre mí</a>
                <a href="#proyectos" class="btn-ghost">Proyectos</a>
                <a href="#contacto" class="btn-ghost">Contacto</a>
            </nav>

            <!-- Mobile hamburger -->
            <button id="hamburger-btn" class="md:hidden flex flex-col gap-1.5 p-2 rounded-xl border border-violet-500/30 bg-violet-500/10 hover:bg-violet-500/20 transition-all" aria-label="Abrir menú">
                <span class="block w-5 h-0.5 bg-violet-400 transition-all duration-300" id="ham-1"></span>
                <span class="block w-5 h-0.5 bg-violet-400 transition-all duration-300" id="ham-2"></span>
                <span class="block w-5 h-0.5 bg-violet-400 transition-all duration-300" id="ham-3"></span>
            </button>
        </div>

        <!-- Mobile menu -->
        <div id="mobile-nav" class="md:hidden flex-col gap-2 px-6 pb-5 border-t border-violet-500/15 pt-4">
            <a href="#inicio" class="block px-4 py-3 rounded-xl text-slate-300 hover:text-violet-400 hover:bg-violet-500/10 font-semibold transition-all">Inicio</a>
            <a href="#sobre" class="block px-4 py-3 rounded-xl text-slate-300 hover:text-violet-400 hover:bg-violet-500/10 font-semibold transition-all">Sobre mí</a>
            <a href="#proyectos" class="block px-4 py-3 rounded-xl text-slate-300 hover:text-violet-400 hover:bg-violet-500/10 font-semibold transition-all">Proyectos</a>
            <a href="#contacto" class="block px-4 py-3 rounded-xl text-slate-300 hover:text-violet-400 hover:bg-violet-500/10 font-semibold transition-all">Contacto</a>
        </div>
    </header>
    `;
}

export function setupNavbar() {
    const btn = document.getElementById("hamburger-btn");
    const mobileNav = document.getElementById("mobile-nav");
    const ham1 = document.getElementById("ham-1");
    const ham2 = document.getElementById("ham-2");
    const ham3 = document.getElementById("ham-3");

    if (!btn || !mobileNav) return;

    btn.addEventListener("click", () => {
        const isOpen = mobileNav.classList.contains("open");
        mobileNav.classList.toggle("open");
        // Animate hamburger to X
        if (!isOpen) {
            ham1.style.transform = "rotate(45deg) translate(3px, 3px)";
            ham2.style.opacity = "0";
            ham3.style.transform = "rotate(-45deg) translate(3px, -3px)";
        } else {
            ham1.style.transform = "";
            ham2.style.opacity = "";
            ham3.style.transform = "";
        }
    });

    // Handle hash links on mobile (close menu and scroll)
    mobileNav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            mobileNav.classList.remove("open");
            ham1.style.transform = "";
            ham2.style.opacity = "";
            ham3.style.transform = "";
        });
    });
}

export function footerHtml() {
    return `
    <footer class="border-t border-violet-500/15 mt-24">
        <div class="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <a href="#inicio" class="flex items-center gap-2 group">
                <div class="h-8 w-8 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center text-white font-black text-sm">JM</div>
                <span class="font-black text-white">Juan<span class="gradient-text">José</span><span class="text-violet-400">.</span></span>
            </a>
            <p class="text-slate-500 text-sm">Construido con ❤️ usando <span class="text-violet-400 font-semibold">Vite + Tailwind CSS</span></p>
            <p class="text-slate-600 text-sm">© 2026 Juan José Maldonado</p>
        </div>
    </footer>
    `;
}
