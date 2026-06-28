import { html } from "yandom";

const Homepage = () => {
    const skills = [
        "JavaScript",
        "Bit of TypeScript",
        "Node.js",
        "React",
        "Vue",
        "Bit of Flutter",
        "Docker",
        "Linux",
        "PHP",
        "Laravel",
        "Python",
        "MySQL",
    ];

    return html.$([
        html.section(
            {
                id: "hero",
                class:
                    "min-h-screen flex flex-col items-center justify-center text-center px-6 gap-6",
            },
            [
                html.span(
                    {
                        class:
                            "text-xs tracking-[0.4em] uppercase text-violet-400 border border-violet-400/30 px-4 py-1 rounded-full",
                    },
                    ["Available for work"],
                ),
                // html.img({ src: "https://avatars.githubusercontent.com/u/178984230?v=4&size=200", alt: "Muhammad Yusron Elyadi", class: "w-24 h-24 rounded-full border border-violet-400/30 object-cover" }, []),
                html.h1(
                    {
                        class: "text-5xl md:text-7xl font-black tracking-tighter bg-gradient-to-br from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent leading-none",
                    },
                    ["Muhammad Yusron Elyadi"],
                ),
                html.p({ class: "text-zinc-400 text-lg max-w-md" }, [
                    "Reverse Engineer, Fullstack Developer and sometimes experimenting on Tampering.",
                ]),
                html.div({ class: "flex gap-4 mt-4" }, [
                    html.routerLink(
                        {
                            scrollTo: "#about",
                            block: 'center',
                            reload: false,
                            class:
                                "px-6 py-2 bg-violet-600 hover:bg-violet-500 text-white text-xs tracking-widest uppercase rounded-full transition-colors",
                        },
                        ["About"],
                    ),
                    html.routerLink(
                        {
                            scrollTo: "#contact",
                            class:
                                "px-6 py-2 border border-white/20 hover:border-white/40 text-xs tracking-widest uppercase rounded-full transition-colors",
                        },
                        ["Contact"],
                    ),
                ]),
            ],
        ),

        html.section(
            {
                id: "about",
                class: "max-w-3xl mx-auto px-6 py-32 flex flex-col gap-8",
            },
            [
                html.span({ class: "text-comment" }, ["// about"]),
                html.h2(
                    { class: "text-4xl font-black tracking-tighter text-white" },
                    ["Who I am,"],
                ),
                html.p({ class: "text-zinc-400 leading-relaxed" }, [
                    "A Reverse Engineer, Web Dev and Data Engineer enthusiast with experience in Laravel & backend development, with working knowledge across JS, Python, and modern web tooling",
                ]),
                html.p({ class: "text-zinc-400 leading-relaxed" }, [
                    "As a proof, I've built this website with my own JavaScript framework + Tailwind CSS, demonstrating my understanding and capabilities.",
                ]),
            ],
        ),

        html.section(
            {
                id: "skills",
                class: "max-w-3xl mx-auto px-6 py-32 flex flex-col gap-8",
            },
            [
                html.span({ class: "text-comment" }, ["// skills"]),
                html.h2(
                    { class: "text-4xl font-black tracking-tighter text-white" },
                    ["Tech Stack"],
                ),
                html.div({ class: "flex flex-wrap gap-3 mt-4" }, [
                    ...skills.map((skill) =>
                        html.span(
                            {
                                class:
                                    "px-4 py-2 border border-white/10 bg-white/5 rounded-full text-xs text-zinc-400 tracking-widest hover:border-violet-400/40 hover:text-violet-400 transition-all cursor-default",
                            },
                            [skill],
                        ),
                    ),
                ]),
            ],
        ),

        html.section(
            {
                id: "contact",
                class: "max-w-3xl mx-auto px-6 py-32 flex flex-col gap-8",
            },
            [
                html.span({ class: "text-comment" }, ["// contact"]),
                html.h2(
                    { class: "text-4xl font-black tracking-tighter text-white" },
                    ["Get In Touch"],
                ),
                html.p({ class: "text-zinc-400" }, [
                    "Open to opportunities, collabs, or just a chat.",
                ]),
                html.div({ class: "flex gap-4 mt-4" }, [
                    html.a(
                        {
                            href: "mailto:myusronelyadi@email.com",
                            class:
                                "px-6 py-2 bg-violet-600 hover:bg-violet-500 text-xs tracking-widest uppercase rounded-full transition-colors",
                        },
                        ["Email Me"],
                    ),
                    html.a(
                        {
                            href: "https://github.com/Rxnel-ysr",
                            class:
                                "px-6 py-2 border border-white/20 hover:border-white/40 text-xs tracking-widest uppercase rounded-full transition-colors",
                        },
                        ["GitHub"],
                    ),
                ]),
            ],
        ),
    ])
}

export default Homepage;