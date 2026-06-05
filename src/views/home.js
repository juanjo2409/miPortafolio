import { navbarHtml, setupNavbar, footerHtml } from "../components/navbar.js";
import { projects, projectCardHtml } from "../components/projects.js";

export function renderHome() {
    const projectsGrid = projects.map(p => projectCardHtml(p)).join("");

    return `
    <div class="bg-mesh min-h-screen text-slate-200">

        ${navbarHtml("home")}

        <main>

            <!-- ═══════════════ HERO ═══════════════ -->
            <section id="inicio" class="relative min-h-screen flex items-center justify-center px-6 pt-10 pb-20 overflow-hidden">

                <!-- Glow orbs -->
                <div class="pointer-events-none absolute top-1/4 left-1/4 h-80 w-80 rounded-full bg-violet-600/15 blur-3xl"></div>
                <div class="pointer-events-none absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl"></div>

                <div class="relative mx-auto max-w-4xl text-center stagger">

                    <!-- Available badge -->
                    <div class="animate-fade-up inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm font-semibold text-violet-300 mb-8">
                        <span class="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        Disponible para proyectos
                    </div>

                    <!-- Profile photo -->
                    <div class="animate-fade-up flex justify-center mb-8">
                        <div class="profile-ring">
                            <img src="img/foto.jpeg" alt="Juan José Maldonado"
                                class="w-32 h-32 rounded-full object-cover border-4 border-violet-600/50 shadow-2xl shadow-violet-900/50 animate-pulse-glow">
                        </div>
                    </div>

                    <!-- Tagline -->
                    <p class="animate-fade-up section-label justify-center mb-4">
                        DESARROLLADOR SOFTWARE · FULL STACK
                    </p>

                    <!-- Main title -->
                    <h1 class="animate-fade-up text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight mb-6">
                        Hola, soy<br>
                        <span class="gradient-text">Juan José</span>
                    </h1>

                    <!-- Description -->
                    <p class="animate-fade-up text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10">
                        Construyo <strong class="text-slate-200">soluciones web modernas y eficientes</strong>. Especializado en el desarrollo
                        <strong class="text-violet-400">Full Stack</strong> con enfoque en
                        <strong class="text-cyan-400">Python y JavaScript</strong>, aplicando siempre código limpio y buenas prácticas.
                    </p>

                    <!-- CTA buttons -->
                    <div class="animate-fade-up flex flex-col sm:flex-row gap-4 justify-center mb-14">
                        <a href="#proyectos" class="btn-primary text-base px-8 py-4">
                            Ver proyectos
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </a>
                        <a href="#contacto" class="btn-secondary text-base px-8 py-4">
                            Contactarme
                        </a>
                    </div>

                    <!-- Stats -->
                    <div class="animate-fade-up flex flex-wrap justify-center gap-6">
                        <div class="glass-card rounded-2xl px-8 py-5 text-center min-w-[100px]">
                            <p class="text-3xl font-black gradient-text">4+</p>
                            <p class="text-xs text-slate-500 font-semibold mt-1 uppercase tracking-wide">Proyectos</p>
                        </div>
                        <div class="glass-card rounded-2xl px-8 py-5 text-center min-w-[100px]">
                            <p class="text-3xl font-black text-cyan-400">2</p>
                            <p class="text-xs text-slate-500 font-semibold mt-1 uppercase tracking-wide">Años estudiando</p>
                        </div>
                        <div class="glass-card rounded-2xl px-8 py-5 text-center min-w-[100px]">
                            <p class="text-3xl font-black text-emerald-400">6+</p>
                            <p class="text-xs text-slate-500 font-semibold mt-1 uppercase tracking-wide">Tecnologías</p>
                        </div>
                    </div>
                </div>

                <!-- Scroll indicator -->
                <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 text-xs font-semibold">
                    <span>Scroll</span>
                    <div class="w-px h-10 bg-gradient-to-b from-violet-500/60 to-transparent animate-pulse"></div>
                </div>
            </section>


            <!-- ═══════════════ SOBRE MÍ ═══════════════ -->
            <section id="sobre" class="px-6 py-24">
                <div class="mx-auto max-w-6xl">

                    <div class="mb-14 reveal">
                        <p class="section-label">SOBRE MÍ</p>
                        <h2 class="text-4xl sm:text-5xl font-black text-white">¿Quién soy?</h2>
                    </div>

                    <div class="grid lg:grid-cols-2 gap-12 items-start">

                        <!-- Text side -->
                        <div class="reveal space-y-6">
                            <div class="glass-card rounded-3xl p-8 space-y-4">
                                <p class="text-slate-300 text-lg leading-relaxed">
                                    Soy un desarrollador de software apasionado por crear <strong class="text-violet-300">soluciones web robustas y escalables</strong>, optimizando el rendimiento y la experiencia del usuario.
                                </p>
                                <p class="text-slate-400 leading-relaxed">
                                    Cuento con experiencia práctica diseñando APIs REST, estructurando bases de datos y desarrollando interfaces dinámicas con tecnologías modernas como <strong class="text-cyan-400">Node.js, Express y Python</strong>. Mi enfoque principal es escribir código limpio y estructurado que resuelva problemas reales de negocio.
                                </p>
                                <div class="pt-4 flex flex-wrap gap-3">
                                    <a href="https://github.com/juanjo2409" target="_blank"
                                       class="btn-primary text-sm px-5 py-2.5 gap-2">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                                        Ver GitHub
                                    </a>
                                    <a href="#proyectos" class="btn-secondary text-sm px-5 py-2.5">
                                        Ver proyectos
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- Skills grid -->
                        <div class="reveal grid grid-cols-2 sm:grid-cols-3 gap-4 stagger">
                            <div class="skill-card">
                                <span class="text-2xl">💻</span>
                                <h4 class="text-white font-bold text-sm">HTML & CSS</h4>
                                <p class="text-slate-500 text-xs">Flexbox, Grid, animaciones</p>
                            </div>
                            <div class="skill-card">
                                <span class="text-2xl">🐍</span>
                                <h4 class="text-white font-bold text-sm">Python</h4>
                                <p class="text-slate-500 text-xs">Scripting, backends, CLI</p>
                            </div>
                            <div class="skill-card">
                                <span class="text-2xl">⚡</span>
                                <h4 class="text-white font-bold text-sm">JavaScript</h4>
                                <p class="text-slate-500 text-xs">DOM, APIs, SPA</p>
                            </div>
                            <div class="skill-card">
                                <span class="text-2xl">🚀</span>
                                <h4 class="text-white font-bold text-sm">Git & GitHub</h4>
                                <p class="text-slate-500 text-xs">Control de versiones</p>
                            </div>
                            <div class="skill-card">
                                <span class="text-2xl">🗄️</span>
                                <h4 class="text-white font-bold text-sm">SQL / MySQL</h4>
                                <p class="text-slate-500 text-xs">Bases de datos</p>
                            </div>
                            <div class="skill-card">
                                <span class="text-2xl">🌐</span>
                                <h4 class="text-white font-bold text-sm">Node.js</h4>
                                <p class="text-slate-500 text-xs">APIs REST, Express</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <!-- ═══════════════ PROYECTOS ═══════════════ -->
            <section id="proyectos" class="px-6 py-24">
                <div class="mx-auto max-w-6xl">

                    <div class="mb-14 reveal text-center">
                        <p class="section-label justify-center">MI TRABAJO</p>
                        <h2 class="text-4xl sm:text-5xl font-black text-white mb-4">Proyectos</h2>
                        <p class="text-slate-400 max-w-lg mx-auto">Proyectos que he construido mientras aprendo y crezco como desarrollador.</p>
                    </div>

                    <div class="reveal grid sm:grid-cols-2 gap-6">
                        ${projectsGrid}
                    </div>

                    <div class="reveal mt-12 text-center">
                        <a href="https://github.com/juanjo2409" target="_blank"
                           class="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-violet-500/30 bg-violet-500/8 text-violet-300 font-bold hover:bg-violet-500/15 hover:border-violet-400/50 transition-all duration-300 text-sm">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                            Ver todos los proyectos en GitHub
                        </a>
                    </div>
                </div>
            </section>


            <!-- ═══════════════ CONTACTO ═══════════════ -->
            <section id="contacto" class="px-6 py-24">
                <div class="mx-auto max-w-5xl">

                    <div class="mb-14 reveal text-center">
                        <p class="section-label justify-center">CONTACTO</p>
                        <h2 class="text-4xl sm:text-5xl font-black text-white mb-4">Hablemos</h2>
                        <p class="text-slate-400 max-w-md mx-auto">¿Tienes un proyecto en mente? Me encantaría escucharte.</p>
                    </div>

                    <div class="reveal grid md:grid-cols-2 gap-10 items-start">

                        <!-- Info -->
                        <div class="space-y-5">
                            <div class="glass-card rounded-2xl p-6 flex items-center gap-4 hover:border-violet-500/40 transition-all">
                                <div class="h-12 w-12 rounded-xl bg-violet-500/15 flex items-center justify-center text-xl flex-shrink-0">📧</div>
                                <div>
                                    <p class="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Email</p>
                                    <p class="text-slate-200 font-semibold">juanjo2409@gmail.com</p>
                                </div>
                            </div>
                            <div class="glass-card rounded-2xl p-6 flex items-center gap-4 hover:border-violet-500/40 transition-all">
                                <div class="h-12 w-12 rounded-xl bg-slate-500/15 flex items-center justify-center text-xl flex-shrink-0">🐙</div>
                                <div>
                                    <p class="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">GitHub</p>
                                    <a href="https://github.com/juanjo2409" target="_blank"
                                       class="text-violet-400 font-semibold hover:text-violet-300 transition-colors">
                                        github.com/juanjo2409
                                    </a>
                                </div>
                            </div>
                            <div class="glass-card rounded-2xl p-6 flex items-center gap-4 hover:border-violet-500/40 transition-all">
                                <div class="h-12 w-12 rounded-xl bg-cyan-500/15 flex items-center justify-center text-xl flex-shrink-0">📍</div>
                                <div>
                                    <p class="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Ubicación</p>
                                    <p class="text-slate-200 font-semibold">Colombia 🇨🇴</p>
                                </div>
                            </div>
                        </div>

                        <!-- Form -->
                        <form id="contact-form" class="glass-card rounded-3xl p-8 space-y-5" novalidate>
                            <div>
                                <label class="form-label" for="nombre">Nombre</label>
                                <input type="text" id="nombre" name="nombre" placeholder="Tu nombre completo"
                                    class="field" autocomplete="name" />
                            </div>
                            <div>
                                <label class="form-label" for="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="tu@email.com"
                                    class="field" autocomplete="email" />
                            </div>
                            <div>
                                <label class="form-label" for="mensaje">Mensaje</label>
                                <textarea id="mensaje" name="mensaje" rows="4" placeholder="Cuéntame sobre tu proyecto..."
                                    class="field resize-none"></textarea>
                            </div>
                            <button type="submit" id="btn-submit"
                                class="btn-primary w-full text-base py-4 gap-2">
                                <span id="submit-text">Enviar mensaje</span>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                            </button>
                            <p id="form-msg" class="text-center text-sm hidden"></p>
                        </form>
                    </div>
                </div>
            </section>

        </main>

        ${footerHtml()}

    </div>
    `;
}

export function setupHome() {
    setupNavbar();
    setupScrollReveal();
    setupHashNavigation();
    setupContactForm();
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
        { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

function setupHashNavigation() {
    // Handle hash-based smooth scroll on page load
    const hash = window.location.hash;
    if (hash) {
        setTimeout(() => {
            const target = document.querySelector(hash);
            if (target) target.scrollIntoView({ behavior: "smooth" });
        }, 80);
    }

    // Intercept hash links for smooth scroll
    document.querySelectorAll('a[href^="#"], a[href^="/#"]').forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const href = link.getAttribute("href");
            const sectionId = href.startsWith("/#") ? href.replace("/#", "") : href.replace("#", "");
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
                // Update URL hash without jumping
                window.history.pushState(null, null, `#${sectionId}`);
            }
            // Close mobile nav if open
            const mobileNav = document.getElementById("mobile-nav");
            if (mobileNav) mobileNav.classList.remove("open");
        });
    });

    // Scrollspy: update navbar active state based on current scroll position
    const sections = document.querySelectorAll("main section");
    const navLinks = document.querySelectorAll("nav a, #mobile-nav a");

    window.addEventListener("scroll", () => {
        let currentSectionId = "inicio";
        const scrollPosition = window.scrollY + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            const href = link.getAttribute("href");
            const isMatch = href === `#${currentSectionId}` || href === `/#${currentSectionId}`;
            if (isMatch) {
                link.classList.add("text-violet-400");
                link.classList.remove("text-slate-300");
            } else {
                link.classList.remove("text-violet-400");
                if (!link.classList.contains("btn-ghost")) {
                    link.classList.add("text-slate-300");
                }
            }
        });
    });
}

function setupContactForm() {
    const form = document.getElementById("contact-form");
    const msg = document.getElementById("form-msg");
    const btn = document.getElementById("btn-submit");
    const submitText = document.getElementById("submit-text");

    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const nombre = form.nombre.value.trim();
        const email = form.email.value.trim();
        const mensaje = form.mensaje.value.trim();

        if (!nombre || !email || !mensaje) {
            msg.textContent = "⚠️ Por favor completa todos los campos.";
            msg.className = "text-center text-sm text-amber-400";
            msg.classList.remove("hidden");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            msg.textContent = "⚠️ El email no es válido.";
            msg.className = "text-center text-sm text-amber-400";
            msg.classList.remove("hidden");
            return;
        }

        // Simulate sending
        btn.disabled = true;
        submitText.textContent = "Enviando...";

        setTimeout(() => {
            form.reset();
            btn.disabled = false;
            submitText.textContent = "Enviar mensaje";
            msg.textContent = "✅ ¡Mensaje enviado! Te responderé pronto.";
            msg.className = "text-center text-sm text-emerald-400";
            msg.classList.remove("hidden");

            setTimeout(() => msg.classList.add("hidden"), 5000);
        }, 1500);
    });
}
