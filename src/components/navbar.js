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
    <footer class="border-t border-violet-500/10 bg-slate-950/20 mt-24">
        <div class="mx-auto max-w-7xl px-6 py-12">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-violet-500/10">
                
                <!-- Col 1: Logo & Tagline -->
                <div class="space-y-4">
                    <a href="#inicio" class="flex items-center gap-2 group">
                        <div class="h-8 w-8 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center text-white font-black text-sm shadow-md group-hover:shadow-violet-500/30 transition-all duration-300">JM</div>
                        <span class="font-black text-white text-lg">Juan<span class="gradient-text">José</span><span class="text-violet-400">.</span></span>
                    </a>
                    <p class="text-slate-400 text-sm max-w-xs leading-relaxed">
                        Desarrollador de software Full Stack especializado en la creación de aplicaciones web modernas, eficientes e interactivas.
                    </p>
                </div>

                <!-- Col 2: Navigation Links -->
                <div class="space-y-3">
                    <h4 class="text-white font-bold text-sm tracking-wide uppercase">Navegación</h4>
                    <div class="flex flex-col gap-2">
                        <a href="#inicio" class="text-slate-400 hover:text-violet-400 text-sm transition-colors w-max">Inicio</a>
                        <a href="#sobre" class="text-slate-400 hover:text-violet-400 text-sm transition-colors w-max">Sobre mí</a>
                        <a href="#proyectos" class="text-slate-400 hover:text-violet-400 text-sm transition-colors w-max">Proyectos</a>
                        <a href="#contacto" class="text-slate-400 hover:text-violet-400 text-sm transition-colors w-max">Contacto</a>
                    </div>
                </div>

                <!-- Col 3: Contact Info -->
                <div class="space-y-3">
                    <h4 class="text-white font-bold text-sm tracking-wide uppercase">Contacto</h4>
                    <div class="space-y-2 text-sm text-slate-400">
                        <p class="flex items-center gap-2">
                            <span class="text-base">📧</span>
                            <a href="mailto:juanjosemn160@gmail.com" class="hover:text-violet-400 transition-colors">juanjosemn160@gmail.com</a>
                        </p>
                        <p class="flex items-center gap-2">
                            <span class="text-base">📞</span>
                            <a href="tel:+573022955108" class="hover:text-violet-400 transition-colors">+57 302 295 5108</a>
                        </p>
                        <p class="flex items-center gap-2">
                            <span class="text-base">📍</span>
                            <span>Colombia 🇨🇴</span>
                        </p>
                    </div>
                </div>

            </div>

            <!-- Footer Bottom -->
            <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p class="text-slate-500 text-xs">© 2026 Juan José Maldonado. Todos los derechos reservados.</p>
                <div class="flex items-center gap-4 text-xs text-slate-500">
                    <span>Construido con 💻 usando Vite + Tailwind CSS</span>
                </div>
            </div>
        </div>
    </footer>
    `;
}
