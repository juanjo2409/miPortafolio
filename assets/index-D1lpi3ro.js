(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const e of a)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function l(a){const e={};return a.integrity&&(e.integrity=a.integrity),a.referrerPolicy&&(e.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?e.credentials="include":a.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(a){if(a.ep)return;a.ep=!0;const e=l(a);fetch(a.href,e)}})();function d(){return`
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
    `}function p(){const t=document.getElementById("hamburger-btn"),s=document.getElementById("mobile-nav"),l=document.getElementById("ham-1"),o=document.getElementById("ham-2"),a=document.getElementById("ham-3");!t||!s||(t.addEventListener("click",()=>{const e=s.classList.contains("open");s.classList.toggle("open"),e?(l.style.transform="",o.style.opacity="",a.style.transform=""):(l.style.transform="rotate(45deg) translate(3px, 3px)",o.style.opacity="0",a.style.transform="rotate(-45deg) translate(3px, -3px)")}),s.querySelectorAll("a").forEach(e=>{e.addEventListener("click",()=>{s.classList.remove("open"),l.style.transform="",o.style.opacity="",a.style.transform=""})}))}function x(){return`
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
    `}const m=[{id:"inventario",icon:"📦",tag:"tag-violet",tagLabel:"PYTHON",title:"Sistema Inventario",description:"Sistema de inventario en Python con menú interactivo en consola, gestión de productos y persistencia de datos.",tech:["Python","CLI","JSON"],githubUrl:"https://github.com/juanjo2409/proyecto_python",demoUrl:null,featured:!1},{id:"tareas",icon:"✅",tag:"tag-green",tagLabel:"PYTHON",title:"Gestión de Tareas",description:"Aplicación Python para organización y control de tareas. Ejercicios de fundamentos con lógica CRUD completa.",tech:["Python","POO","CLI"],githubUrl:"https://github.com/juanjo2409/FundamentosPython",demoUrl:null,featured:!1},{id:"taskflow",icon:"🗂️",tag:"tag-amber",tagLabel:"FULL STACK",title:"TaskFlow SPA",description:"Aplicación web completa con autenticación JWT, gestión de tareas, roles y permisos. Frontend SPA en JS Vanilla + API REST en Node.js.",tech:["JavaScript","Node.js","Express","JWT","MySQL"],githubUrl:"https://github.com/juanjo2409",demoUrl:null,featured:!0},{id:"portafolio",icon:"🌐",tag:"tag-cyan",tagLabel:"WEB",title:"Portafolio Profesional",description:"Sitio web personal y profesional diseñado con una estética premium oscura, micro-animaciones y estructura limpia. Optimizado para dispositivos móviles.",tech:["JavaScript","Vite","Tailwind CSS","Git"],githubUrl:"https://github.com/juanjo2409/miPortafolio",demoUrl:"https://juanjo2409.github.io/miPortafolio/",featured:!1}];function v(t){const s=t.tech.map(e=>`<span class="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-slate-400">${e}</span>`).join(""),l=t.githubUrl?`<a href="${t.githubUrl}" target="_blank"
               class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-violet-600/20 border border-violet-500/30 text-violet-300 text-sm font-semibold hover:bg-violet-600/35 hover:border-violet-400/50 transition-all duration-200">
               <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
               GitHub
           </a>`:"",o=t.demoUrl?`<a href="${t.demoUrl}"
               class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-sm font-semibold hover:bg-cyan-500/20 hover:border-cyan-400/45 transition-all duration-200">
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
               Ver demo
           </a>`:"",a=t.featured?'<div class="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold">⭐ Destacado</div>':"";return`
    <article class="project-card${t.featured?" featured":""} relative group">
        ${a}
        <div class="flex items-start justify-between gap-3">
            <div class="flex items-center gap-3">
                <div class="text-3xl">${t.icon}</div>
                <span class="${t.tag}">${t.tagLabel}</span>
            </div>
        </div>
        <div>
            <h3 class="text-xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">${t.title}</h3>
            <p class="text-slate-400 text-sm leading-relaxed">${t.description}</p>
        </div>
        <div class="flex flex-wrap gap-2">
            ${s}
        </div>
        <div class="flex gap-3 flex-wrap pt-2 border-t border-white/8">
            ${l}
            ${o}
        </div>
    </article>
    `}function u(){const t=m.map(s=>v(s)).join("");return`
    <div class="bg-mesh min-h-screen text-slate-200">

        ${d()}

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
                        ${t}
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
                                    <a href="mailto:juanjosemn160@gmail.com" class="text-slate-200 font-semibold hover:text-violet-400 transition-colors">juanjosemn160@gmail.com</a>
                                </div>
                            </div>
                            <div class="glass-card rounded-2xl p-6 flex items-center gap-4 hover:border-violet-500/40 transition-all">
                                <div class="h-12 w-12 rounded-xl bg-cyan-500/15 flex items-center justify-center text-xl flex-shrink-0">📞</div>
                                <div>
                                    <p class="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Teléfono</p>
                                    <a href="tel:+573022955108" class="text-slate-200 font-semibold hover:text-violet-400 transition-colors">+57 302 295 5108</a>
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

        ${x()}

    </div>
    `}function b(){p(),f(),h(),g()}function f(){const t=new IntersectionObserver(s=>{s.forEach(l=>{l.isIntersecting&&l.target.classList.add("visible")})},{threshold:.12});document.querySelectorAll(".reveal").forEach(s=>t.observe(s))}function h(){const t=window.location.hash;t&&setTimeout(()=>{const o=document.querySelector(t);o&&o.scrollIntoView({behavior:"smooth"})},80),document.querySelectorAll('a[href^="#"], a[href^="/#"]').forEach(o=>{o.addEventListener("click",a=>{a.preventDefault();const e=o.getAttribute("href"),i=e.startsWith("/#")?e.replace("/#",""):e.replace("#",""),n=document.getElementById(i);n&&(n.scrollIntoView({behavior:"smooth"}),window.history.pushState(null,null,`#${i}`));const r=document.getElementById("mobile-nav");r&&r.classList.remove("open")})});const s=document.querySelectorAll("main section"),l=document.querySelectorAll("nav a, #mobile-nav a");window.addEventListener("scroll",()=>{let o="inicio";const a=window.scrollY+150;s.forEach(e=>{const i=e.offsetTop,n=e.offsetHeight;a>=i&&a<i+n&&(o=e.getAttribute("id"))}),l.forEach(e=>{const i=e.getAttribute("href");i===`#${o}`||i===`/#${o}`?(e.classList.add("text-violet-400"),e.classList.remove("text-slate-300")):(e.classList.remove("text-violet-400"),e.classList.contains("btn-ghost")||e.classList.add("text-slate-300"))})})}function g(){const t=document.getElementById("contact-form"),s=document.getElementById("form-msg"),l=document.getElementById("btn-submit"),o=document.getElementById("submit-text");t&&t.addEventListener("submit",a=>{a.preventDefault();const e=t.nombre.value.trim(),i=t.email.value.trim(),n=t.mensaje.value.trim();if(!e||!i||!n){s.textContent="⚠️ Por favor completa todos los campos.",s.className="text-center text-sm text-amber-400",s.classList.remove("hidden");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i)){s.textContent="⚠️ El email no es válido.",s.className="text-center text-sm text-amber-400",s.classList.remove("hidden");return}l.disabled=!0,o.textContent="Enviando...",setTimeout(()=>{t.reset(),l.disabled=!1,o.textContent="Enviar mensaje",s.textContent="✅ ¡Mensaje enviado! Te responderé pronto.",s.className="text-center text-sm text-emerald-400",s.classList.remove("hidden"),setTimeout(()=>s.classList.add("hidden"),5e3)},1500)})}const c=document.getElementById("app");c&&(c.innerHTML=u(),b());
