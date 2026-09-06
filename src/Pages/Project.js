import { html, useState, useEffect, useMemo } from "yandom";

const Projects = () => {

    const [activeType, setActiveType] = useState('all');

    const projects = [
        {
            title: "rxnel-ysr.github.io",
            stack: ["yandom", "Tailwind", "Vanilla JS"],
            desc: [
                "Personal portfolio built on a custom virtual DOM framework written from native JavaScript.",
                "And... where theme toggle you ask? ...who actually use them anyway?"
            ],
            status: "wip",
            image: '/public/assets/projects/portfolio.png',
            link: "https://rxnel-ysr.github.io",
            type: ['website']
        },
        {
            title: "GetSkill.id",
            stack: ["Laravel", "Bootstrap"],
            desc: [
                "I previously contributed as a backend developer to the development of the GetSkill website, owned by (Hummatech)[https://hummatech.com].",
                "(Getskill)[https://getskill.id] is an online learning platform that helps users develop skills in various fields. With courses from experts that can be accessed anytime, the platform also offers exclusive training events and certificates as proof of competency to support career development."
            ],
            status: "live",
            link: "https://getskill.id",
            image: '/public/assets/projects/getskill.png',
            type: ['website']
        },
        {
            title: "Mischool.id",
            stack: ["Laravel", "Bootstrap"],
            desc: [
                "I previously contributed as a backend developer to the development of the Miscool website, owned by (Hummatech)[https://hummatech.com].",
                "(Mischool)[https://mischool.id] is a platform designed to support schools, academic and operational data management platform that offers features for attendance tracking, disciplinary records, remediation, teaching logs and staff logs, student feedback, and a guestbook."
            ],
            status: "live",
            link: "https://mischool.id",
            image: '/public/assets/projects/mischool.png',
            type: ['website']
        },
        {
            title: "Baria",
            stack: ["DSL-VDOM", "Vanilla JS"],
            desc: ["Baria is a learning platform for beginners that focuses on visuals and hands-on practice, interactive and fun platform for learning Hiragana, Katakana, and other aspects of the Japanese language."],
            status: "live",
            image: '/public/assets/projects/baria.png',
            link: "https://rxnel-ysr.github.io/Baria",
            type: ['website']
        },
        {
            title: "LALAA",
            stack: ["Python", "Ollama"],
            desc: ["A python tool wrapper built on top of ollama python api. An Agent that capable of executing command, searching internet, summarize a page and operating a browser."],
            status: "personal",
            image: '/public/assets/projects/lalaa.png',
            type: ['AI', 'CLI']
        },
        {
            title: "Vault",
            stack: ["Python", "SQLite"],
            desc: ["Encrypted, chunked, safe storage tool can store any files and store it inside SQLite safely.", "Originates from mere boredom, and implemented out of free will."],
            status: "personal",
            image: '/public/assets/projects/vault.png',
            type: ['tool', 'CLI']
        },
        {
            title: "yandom",
            stack: ["Javascript"],
            desc: ["A lightweight React-inspired frontend framework built in vanilla JavaScript. Features a component model, reactive state management with TTL-based memory system, built-in router, and dependency-tracked invalidation. No build step, no npm, no bundler — just drop in an importmap and go. 76KB total.", "Under 1MB. Built from scratch."],
            status: "personal",
            type: ['framework']
        },
        {
            title: "DunnoTheNameYet",
            stack: ["PHP"],
            desc: ["A full-featured PHP web framework built from scratch. Includes MVC architecture, a custom template compiler, Trie/Radix router, ORM with query builder, WebSocket server (RFC 6455), Livewire-inspired reactive components, dependency injection container, PHP classes auto-discovery, middleware, CSRF protection, rate limiting, and an HTTP client.", "Under 1MB. Built from scratch."],
            status: "personal",
            type: ['framework']
        },
        {
            title: "APKG",
            stack: ["Laravel", "Bootstrap"],
            desc: "APKG is a website for evaluating the performance of school educators.",
            status: "archived",
            type: ['website']
        },
        {
            title: "POS",
            stack: ["Laravel", "Bootstrap"],
            desc: "An archived project that intended to become a canteen POS.",
            status: "archived",
            type: ['website']
        },
    ];

    const types = useMemo(() => ['all', ...new Set(projects.map(p => p.type).flat())], []);
    const filtered = useMemo(() => {
        return activeType === 'all'
            ? projects
            : projects.filter(p => p.type.includes(activeType));
    }, [activeType]);

    const statusStyle = {
        live: { dot: "bg-emerald-400", text: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10", label: "Live" },
        wip: { dot: "bg-yellow-400", text: "text-yellow-400 border-yellow-400/30 bg-yellow-400/10", label: "In Progress" },
        archived: { dot: "bg-zinc-500", text: "text-zinc-500 border-zinc-500/30 bg-zinc-500/10", label: "Archived" },
        personal: { dot: "bg-blue-400", text: "text-blue-500 border-zinc-500/30 bg-blue-500/10", label: "Personal Tool" },
    };

    function parseInlineLinks(text) {
        const parts = [];
        const regex = /\(([^)]+)\)\[([^\]]+)\]/g;
        let last = 0, match;
        while ((match = regex.exec(text)) !== null) {
            if (match.index > last) parts.push(text.slice(last, match.index));
            parts.push(html.a({ href: match[2], target: "_blank", class: "text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors" }, [match[1]]));
            last = match.index + match[0].length;
        }
        if (last < text.length) parts.push(text.slice(last));
        return parts;
    }

    function descWrapper(content) {
        return Array.isArray(content)
            ? content.map(s => descWrapper(s))
            : (typeof content === 'string'
                ? html.p({ class: "text-zinc-400 text-sm leading-relaxed" }, parseInlineLinks(content))
                : content);
    }

    return html.$([
        html.section({ id: 'project', class: "max-w-4xl mx-auto px-6 py-32 flex flex-col gap-16" }, [

            html.div({ class: "rt-scroll-in flex flex-col gap-3", "data-dir": "up", "clean": true }, [
                html.span({ class: "text-comment" }, ["// projects"]),
                html.h1({ class: "text-5xl font-black tracking-tighter text-white" }, ["Previous Works"]),
                html.p({ class: "text-zinc-500 text-sm max-w-md" }, [
                    "Things I've built, explored, or broken on purpose."
                ]),
            ]),

            // ── Filter tabs ──────────────────────────────────────────
            html.div({ class: "flex items-center gap-2 flex-wrap" }, [
                ...types.map(type =>
                    html.button({
                        onclick: () => setActiveType(type),
                        class: `px-4 py-1.5 rounded-full text-xs tracking-widest uppercase transition-all border ${activeType === type
                            ? "bg-violet-600 border-violet-600 text-white"
                            : "border-white/10 bg-white/5 text-zinc-400 hover:border-violet-400/40 hover:text-violet-400"
                            }`
                    }, [type])
                ),
            ]),

            html.div({ class: "flex flex-col gap-6" }, [
                ...filtered.map(({ title, stack, desc, status, link, image }, i) => {
                    const s = statusStyle[status] ?? statusStyle.archived;
                    const isEven = i % 2 === 0;

                    return html.div({
                        class: "rt-tilt-card rt-scroll-in group relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-violet-500/40 hover:shadow-[0_0_40px_#7c3aed18] transition-all duration-500",
                        "data-dir": isEven ? "left" : "right",
                    }, [
                        html.div({ class: "rt-glare rounded-2xl" }, []),

                        html.div({ class: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" }, []),

                        html.div({ class: "absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" }, []),

                        html.div({ class: `rt-tilt-inner relative flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} min-h-56` }, [

                            image
                                ? html.div({ class: "md:w-2/5 h-48 md:h-auto overflow-hidden" }, [
                                    html.img({ src: image, alt: title, class: "rt-tilt-img w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500" }, []),
                                ])
                                : html.div({ class: `md:w-2/5 h-48 md:h-auto bg-gradient-to-br ${isEven ? "from-violet-900/40 to-purple-900/20" : "from-indigo-900/40 to-violet-900/20"} flex items-center justify-center` }, [
                                    html.span({ class: "text-5xl font-black text-white/5 tracking-tighter select-none" }, [title[0]]),
                                ]),

                            html.div({ class: "flex-1 p-8 flex flex-col justify-between gap-6" }, [

                                html.div({ class: "flex flex-col gap-3" }, [
                                    html.div({ class: "flex items-center gap-3 flex-wrap" }, [
                                        html.span({ class: "text-xl font-bold tracking-tight text-white" }, [title]),
                                        html.span({ class: `flex items-center gap-1.5 text-xs px-2 py-0.5 rounded-full border ${s.text}` }, [
                                            html.span({ class: `w-1.5 h-1.5 rounded-full ${s.dot} inline-block ${(status === 'live' || status === 'wip') ? 'animate-pulse-dot' : ''}` }, []), s.label,
                                        ]),
                                    ]),
                                    descWrapper(desc)
                                ]),

                                html.div({ class: "flex items-center justify-between flex-wrap gap-4" }, [
                                    html.div({ class: "flex flex-wrap gap-2" }, [
                                        ...stack.map(tag =>
                                            html.span({ class: "px-3 py-1 border border-white/10 bg-white/5 rounded-full text-xs text-zinc-400 tracking-widest uppercase" }, [tag])
                                        ),
                                    ]),
                                    link && html.a({ href: link, target: '_blank', class: "flex items-center gap-2 text-xs text-zinc-500 hover:text-violet-400 transition-colors tracking-widest uppercase group/link" }, [
                                        html.span({}, ["View Project"]),
                                        html.span({ class: "group-hover/link:translate-x-1 transition-transform duration-200" }, ["→"]),
                                    ]),
                                ]),
                            ]),
                        ]),
                    ]);
                }),
            ]),
        ])
    ])
};

export default Projects;