import { navbarHtml, setupNavbar, footerHtml } from "../components/navbar.js";
import { projects, projectCardHtml } from "../components/projects.js";

const pets = [
    {
        name: "Max",
        emoji: "🐶",
        img: "/public/img/images.jpeg",
        description: "Un perro alegre y leal que siempre llena la casa de energía y felicidad. Le encanta correr y jugar todo el día.",
        traits: ["Alegre", "Leal", "Energético"],
        color: "amber",
    },
    {
        name: "Luna",
        emoji: "🐱",
        img: "/public/img/gato.avif",
        description: "Una gatita tranquila y curiosa que disfruta dormir bajo el sol y explorar cada rincón de la casa.",
        traits: ["Tranquila", "Curiosa", "Independiente"],
        color: "cyan",
    },
    {
        name: "Chispas",
        emoji: "🦁",
        img: "/public/img/leon.jpeg",
        description: "Pequeño, juguetón y lleno de vida. Siempre listo para la aventura y el juego sin importar la hora.",
        traits: ["Juguetón", "Aventurero", "Curioso"],
        color: "violet",
    },
];

function petCardHtml(pet) {
    const colorMap = {
        amber: { border: "border-amber-500/30", glow: "hover:border-amber-400/50 hover:shadow-amber-900/30", badge: "bg-amber-500/15 text-amber-300 border-amber-500/25", icon: "bg-amber-500/15 text-amber-300" },
        cyan:  { border: "border-cyan-500/25",  glow: "hover:border-cyan-400/50 hover:shadow-cyan-900/30",   badge: "bg-cyan-500/15 text-cyan-300 border-cyan-500/25",   icon: "bg-cyan-500/15 text-cyan-300" },
        violet:{ border: "border-violet-500/25",glow: "hover:border-violet-400/50 hover:shadow-violet-900/30",badge: "bg-violet-500/15 text-violet-300 border-violet-500/25",icon: "bg-violet-500/15 text-violet-300" },
    };
    const c = colorMap[pet.color];
    const traits = pet.traits.map(t =>
        `<span class="px-3 py-1 rounded-full text-xs font-semibold border ${c.badge}">${t}</span>`
    ).join("");

    return `
    <article class="pet-card ${c.border} ${c.glow} transition-all duration-300 hover:shadow-2xl group">
        <div class="relative overflow-hidden h-56">
            <img src="${pet.img}" alt="${pet.name}"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
            <div class="absolute bottom-4 left-4 flex items-center gap-2">
                <div class="h-9 w-9 rounded-xl ${c.icon} flex items-center justify-center text-lg backdrop-blur-sm border border-white/10">${pet.emoji}</div>
                <h3 class="text-xl font-black text-white">${pet.name}</h3>
            </div>
        </div>
        <div class="p-6 space-y-4">
            <p class="text-slate-400 text-sm leading-relaxed">${pet.description}</p>
            <div class="flex flex-wrap gap-2">
                ${traits}
            </div>
        </div>
    </article>
    `;
}

export function renderMascotas() {
    const petsHtml = pets.map(p => petCardHtml(p)).join("");
    const projectsGrid = projects.map(p => projectCardHtml(p)).join("");

    return `
    <div class="bg-mesh min-h-screen text-slate-200">

        ${navbarHtml("mascotas")}

        <main>

            <!-- ═══════════════ HERO ═══════════════ -->
            <section class="relative px-6 pt-20 pb-16 text-center overflow-hidden">
                <!-- Glow -->
                <div class="pointer-events-none absolute top-0 left-1/3 h-72 w-72 rounded-full bg-cyan-500/12 blur-3xl"></div>
                <div class="pointer-events-none absolute top-0 right-1/4 h-56 w-56 rounded-full bg-violet-600/10 blur-3xl"></div>

                <div class="relative mx-auto max-w-3xl stagger">
                    <div class="animate-fade-up inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300 mb-6">
                        <span class="text-base">🐾</span>
                        Mis compañeros de vida
                    </div>
                    <h1 class="animate-fade-up text-5xl sm:text-6xl font-black text-white leading-tight mb-6">
                        Mis <span class="gradient-text">Mascotas</span>
                    </h1>
                    <p class="animate-fade-up text-lg text-slate-400 leading-relaxed max-w-xl mx-auto">
                        Pequeños amigos que hacen cada día más especial. Aquí están Max, Luna y Chispas — mis compañeros inseparables.
                    </p>
                </div>
            </section>


            <!-- ═══════════════ GALERÍA DE MASCOTAS ═══════════════ -->
            <section class="px-6 py-16">
                <div class="mx-auto max-w-6xl">
                    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
                        ${petsHtml}
                    </div>
                </div>
            </section>


            <!-- ═══════════════ SEPARADOR ═══════════════ -->
            <div class="mx-auto max-w-6xl px-6">
                <div class="h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent"></div>
            </div>


            <!-- ═══════════════ PROYECTOS ═══════════════ -->
            <section class="px-6 py-24">
                <div class="mx-auto max-w-6xl">

                    <div class="mb-14 reveal text-center">
                        <p class="section-label justify-center">MI TRABAJO</p>
                        <h2 class="text-4xl sm:text-5xl font-black text-white mb-4">
                            Proyectos que he hecho
                        </h2>
                        <p class="text-slate-400 max-w-lg mx-auto">
                            Además de mis mascotas, también me dedico a construir cosas en código. Aquí están mis proyectos.
                        </p>
                    </div>

                    <div class="reveal grid sm:grid-cols-2 gap-6">
                        ${projectsGrid}
                    </div>

                    <div class="reveal mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://github.com/juanjo2409" target="_blank"
                           class="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl border border-violet-500/30 bg-violet-500/8 text-violet-300 font-bold hover:bg-violet-500/15 hover:border-violet-400/50 transition-all duration-300 text-sm">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                            Ver más en GitHub
                        </a>
                        <a href="/"
                           class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-slate-800/60 border border-slate-600/30 text-slate-300 font-bold hover:bg-slate-700/60 hover:border-slate-500/40 transition-all duration-300 text-sm">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                            Volver al portfolio
                        </a>
                    </div>
                </div>
            </section>

        </main>

        ${footerHtml()}

    </div>
    `;
}

export function setupMascotas() {
    setupNavbar();
    setupScrollReveal();
}

function setupScrollReveal() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.10 }
    );
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}
