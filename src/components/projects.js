// Reusable projects data
export const projects = [
    {
        id: "inventario",
        icon: "📦",
        tag: "tag-violet",
        tagLabel: "PYTHON",
        title: "Sistema Inventario",
        description: "Sistema de inventario en Python con menú interactivo en consola, gestión de productos y persistencia de datos.",
        tech: ["Python", "CLI", "JSON"],
        githubUrl: "https://github.com/juanjo2409/proyecto_python",
        demoUrl: null,
        featured: false,
    },
    {
        id: "tareas",
        icon: "✅",
        tag: "tag-green",
        tagLabel: "PYTHON",
        title: "Gestión de Tareas",
        description: "Aplicación Python para organización y control de tareas. Ejercicios de fundamentos con lógica CRUD completa.",
        tech: ["Python", "POO", "CLI"],
        githubUrl: "https://github.com/juanjo2409/FundamentosPython",
        demoUrl: null,
        featured: false,
    },
    {
        id: "taskflow",
        icon: "🗂️",
        tag: "tag-amber",
        tagLabel: "FULL STACK",
        title: "TaskFlow SPA",
        description: "Aplicación web completa con autenticación JWT, gestión de tareas, roles y permisos. Frontend SPA en JS Vanilla + API REST en Node.js.",
        tech: ["JavaScript", "Node.js", "Express", "JWT", "MySQL"],
        githubUrl: "https://github.com/juanjo2409",
        demoUrl: null,
        featured: true,
    },
    {
        id: "mascotas",
        icon: "🐾",
        tag: "tag-cyan",
        tagLabel: "WEB",
        title: "Mascotas Web",
        description: "Galería responsive creada con HTML y CSS usando Flexbox y Grid. Diseño moderno con animaciones y hover effects.",
        tech: ["HTML", "CSS", "Flexbox", "Grid"],
        githubUrl: "https://github.com/juanjo2409",
        demoUrl: "/mascotas",
        featured: false,
    },
];

export function projectCardHtml(project) {
    const techPills = project.tech.map(t =>
        `<span class="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-slate-400">${t}</span>`
    ).join("");

    const githubBtn = project.githubUrl
        ? `<a href="${project.githubUrl}" target="_blank"
               class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-violet-600/20 border border-violet-500/30 text-violet-300 text-sm font-semibold hover:bg-violet-600/35 hover:border-violet-400/50 transition-all duration-200">
               <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
               GitHub
           </a>`
        : "";

    const demoBtn = project.demoUrl
        ? `<a href="${project.demoUrl}"
               class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-sm font-semibold hover:bg-cyan-500/20 hover:border-cyan-400/45 transition-all duration-200">
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
               Ver demo
           </a>`
        : "";

    const featuredBadge = project.featured
        ? `<div class="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold">⭐ Destacado</div>`
        : "";

    return `
    <article class="project-card${project.featured ? ' featured' : ''} relative group">
        ${featuredBadge}
        <div class="flex items-start justify-between gap-3">
            <div class="flex items-center gap-3">
                <div class="text-3xl">${project.icon}</div>
                <span class="${project.tag}">${project.tagLabel}</span>
            </div>
        </div>
        <div>
            <h3 class="text-xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">${project.title}</h3>
            <p class="text-slate-400 text-sm leading-relaxed">${project.description}</p>
        </div>
        <div class="flex flex-wrap gap-2">
            ${techPills}
        </div>
        <div class="flex gap-3 flex-wrap pt-2 border-t border-white/8">
            ${githubBtn}
            ${demoBtn}
        </div>
    </article>
    `;
}
