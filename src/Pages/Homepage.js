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

    const NAME = "Muhammad Yusron Elyadi";
    const TAGLINE = "Reverse Engineer, Fullstack Developer and sometimes experimenting on Tampering.";

    setTimeout(() => {
        const nameEl = document.getElementById("hero-name");
        const taglineEl = document.getElementById("hero-tagline");
        if (!nameEl || !taglineEl) return;

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduceMotion) {
            nameEl.textContent = NAME;
            taglineEl.textContent = TAGLINE;
            return;
        }

        const GLYPHS = "01ABCDEF!@#$%<>[]{}/\\|_+-*^~";

        function decodeReveal(el, text, duration, onDone) {
            el.textContent = "";
            let done = false;
            const start = performance.now();
            function frame(now) {
                const elapsed = now - start;
                const revealCount = Math.min(text.length, Math.floor((elapsed / duration) * text.length));
                let out = "";
                for (let i = 0; i < text.length; i++) {
                    if (text[i] === " ") { out += " "; continue; }
                    out += i < revealCount ? text[i] : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
                }
                el.textContent = out;
                if (revealCount < text.length) {
                    if (revealCount < text.length - 20 && !done) {
                        onDone && onDone();
                        done = true;
                    }
                    requestAnimationFrame(frame);
                } else {
                    el.textContent = text;
                }

            }
            requestAnimationFrame(frame);
        }

        function typeReveal(el, text, charDelay) {
            el.textContent = "";
            let i = 0;
            (function step() {
                el.textContent = text.slice(0, i) + (i < text.length ? "▍" : "");
                if (i < text.length) {
                    i++;
                    setTimeout(step, charDelay);
                }
            })();
        }

        decodeReveal(nameEl, NAME, 600, () => {
            typeReveal(taglineEl, TAGLINE, 14);
        });

        const stage = document.getElementById("hero-cube-stage");
        const hero = document.getElementById("hero");
        if (stage && hero && window.matchMedia("(pointer: fine)").matches) {
            hero.addEventListener("mousemove", (e) => {
                const r = hero.getBoundingClientRect();
                const px = (e.clientX - r.left) / r.width;
                const py = (e.clientY - r.top) / r.height;
                const ry = (px - 0.5) * 34;
                const rx = (0.5 - py) * 34;
                stage.style.transform = `rotateY(${ry}deg) rotateX(${rx}deg)`;
            });
            hero.addEventListener("mouseleave", () => {
                stage.style.transform = "rotateY(0deg) rotateX(0deg)";
            });
        }
    }, 0);

    return html.$([
        html.section(
            {
                id: "hero",
                class:
                    "min-h-screen flex flex-col items-center justify-center text-center px-6 gap-6",
            },
            [
                html.div({ class: "rt-reveal rt-cube-perspective select-none" }, [
                    html.div({ id: "hero-cube-stage" }, [
                        html.div({ class: "rt-cube" }, [
                            html.div({ class: "rt-cube-face rt-cube-face--front" }, ["0x1A3F"]),
                            html.div({ class: "rt-cube-face rt-cube-face--back" }, ["// reversed"]),
                            html.div({ class: "rt-cube-face rt-cube-face--right" }, ["<yandom/>"]),
                            html.div({ class: "rt-cube-face rt-cube-face--left" }, ["I can see you"]),
                            html.div({ class: "rt-cube-face rt-cube-face--top" }, ["01000010"]),
                            html.div({ class: "rt-cube-face rt-cube-face--bottom" }, ["built(scratch)"]),
                        ]),
                        html.span({ class: "rt-orbit rt-orbit--a" }, ["0xFF"]),
                        html.span({ class: "rt-orbit rt-orbit--b" }, ["•"]),
                        html.span({ class: "rt-orbit rt-orbit--c" }, ["/dev"]),
                    ]),
                ]),

                html.span(
                    {
                        class:
                            "rt-reveal text-xs tracking-[0.4em] uppercase text-violet-400 border border-violet-400/30 px-4 py-1 rounded-full mt-[4rem]",
                    },
                    ["Available for work"],
                ),
                html.h1(
                    {
                        id: "hero-name",
                        class: "rt-reveal text-5xl md:text-7xl font-black tracking-tighter bg-gradient-to-br from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent leading-none",
                        style: "min-height: 1.2em;",
                    },
                    [NAME],
                ),
                html.p({ id: "hero-tagline", class: "rt-reveal text-zinc-400 text-lg max-w-md", style: "min-height: 1.75em;" }, [
                    TAGLINE,
                ]),
                html.div({ class: "rt-reveal flex gap-4 mt-4" }, [
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
                html.span({ class: "rt-scroll-in text-comment", "data-dir": "up" }, ["// about"]),
                html.h2(
                    { class: "rt-scroll-in text-4xl font-black tracking-tighter text-white", "data-dir": "left" },
                    ["Who I am,"],
                ),
                html.p({ class: "rt-scroll-in text-zinc-400 leading-relaxed", "data-dir": "up" }, [
                    "A Reverse Engineer, Web Dev and Data Engineer enthusiast with experience in Laravel & backend development, with working knowledge across JS, Python, and modern web tooling",
                ]),
                html.p({ class: "rt-scroll-in text-zinc-400 leading-relaxed", "data-dir": "right" }, [
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
                html.span({ class: "rt-scroll-in text-comment", "data-dir": "up" }, ["// skills"]),
                html.h2(
                    { class: "rt-scroll-in text-4xl font-black tracking-tighter text-white", "data-dir": "right" },
                    ["Tech Stack"],
                ),
                html.div({ class: "rt-scroll-in flex flex-wrap gap-3 mt-4", "data-dir": "up" }, [
                    ...skills.map((skill) =>
                        html.span(
                            {
                                class:
                                    "rt-skill-tag px-4 py-2 border border-white/10 bg-white/5 rounded-full text-xs text-zinc-400 tracking-widest hover:border-violet-400/40 hover:text-violet-400 transition-all cursor-default",
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
                html.span({ class: "rt-scroll-in text-comment", "data-dir": "up" }, ["// contact"]),
                html.h2(
                    { class: "rt-scroll-in text-4xl font-black tracking-tighter text-white", "data-dir": "left" },
                    ["Get In Touch"],
                ),
                html.p({ class: "rt-scroll-in text-zinc-400", "data-dir": "up" }, [
                    "Open to opportunities, collabs, or just a chat.",
                ]),
                html.div({ class: "rt-scroll-in flex gap-4 mt-4", "data-dir": "right" }, [
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