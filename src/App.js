import { html } from "yandom";
import router from "../router/index.js";
import Navbar from "./components/Navbar.js";

const App = () => {
    if (typeof document !== "undefined") {
        document.documentElement.classList.add("rt-booting");
    }

    setTimeout(() => {
        const glow = document.getElementById("glow-layer");
        const cursor = document.getElementById("rt-cursor");
        const coords = document.getElementById("rt-cursor-coords");
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const isFinePointer = window.matchMedia("(pointer: fine)").matches;

        if (reduceMotion) {
            document.querySelectorAll(".rt-scroll-in").forEach((el) => el.classList.add("rt-in"));
        } else {
            const revealObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add("rt-in");
                    revealObserver.unobserve(entry.target);
                });
            }, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });

            const watchTree = (node) => {
                if (!node || node.nodeType !== 1) return;
                if (node.matches?.(".rt-scroll-in")) revealObserver.observe(node);
                node.querySelectorAll?.(".rt-scroll-in").forEach((el) => revealObserver.observe(el));
            };
            watchTree(document.body);

            new MutationObserver((mutations) => {
                mutations.forEach((m) => m.addedNodes.forEach(watchTree));
            }).observe(document.body, { childList: true, subtree: true });
        }

        const gridA = document.getElementById("rt-grid-a");
        const gridB = document.getElementById("rt-grid-b");
        if (isFinePointer && !reduceMotion && (gridA || gridB)) {
            window.addEventListener("mousemove", (e) => {
                const px = e.clientX / window.innerWidth - 0.5;
                const py = e.clientY / window.innerHeight - 0.5;
                if (gridA) gridA.style.transform = `translate3d(${px * -16}px, ${py * -16}px, 0)`;
                if (gridB) gridB.style.transform = `translate3d(${px * -7}px, ${py * -7}px, 0)`;
            });
        }

        if (glow) {
            window.addEventListener("scroll", () => {
                const progress =
                    window.scrollY / (document.body.scrollHeight - window.innerHeight);
                const y = 10 + progress * 80;
                glow.dataset.y = y;
                if (!glow.dataset.hover) {
                    glow.style.background = `radial-gradient(ellipse at 50% ${y}%, #1e1b4b 0%, transparent 60%)`;
                }
            });
        }

        function runEntryReveal() {
            const els = Array.from(document.querySelectorAll(".rt-reveal"))
                .filter((el) => el.offsetParent !== null);

            document.documentElement.classList.remove("rt-booting");

            if (reduceMotion) {
                document.documentElement.classList.add("rt-revealed");
                document.dispatchEvent(new CustomEvent("rt:revealed"));
                return;
            }
            els.forEach((el, i) => {
                el.style.transitionDelay = `${Math.min(i, 8) * 55}ms`;
            });
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    document.documentElement.classList.add("rt-revealed");
                    document.dispatchEvent(new CustomEvent("rt:revealed"));
                });
            });
        }

        const pageLoaded = new Promise((resolve) => {
            if (document.readyState === "complete") resolve();
            else window.addEventListener("load", resolve, { once: true });
        });
        const fontsReady = (document.fonts && document.fonts.ready) || Promise.resolve();
        Promise.all([pageLoaded, fontsReady]).then(runEntryReveal);

        if (!isFinePointer || reduceMotion || !cursor) return;

        document.documentElement.classList.add("rt-cursor-active");

        let mx = window.innerWidth / 2, my = window.innerHeight / 2;
        let cx = mx, cy = my;

        const toHex = (n) => `0x${Math.max(0, Math.round(n)).toString(16).toUpperCase().padStart(3, "0")}`;

        window.addEventListener("mousemove", (e) => {
            mx = e.clientX;
            my = e.clientY;
            if (coords) coords.textContent = `${toHex(mx)},${toHex(my)}`;

            if (glow) {
                glow.dataset.hover = "1";
                const px = (mx / window.innerWidth) * 100;
                const py = (my / window.innerHeight) * 100;
                glow.style.background = `radial-gradient(ellipse at ${px}% ${py}%, #1e1b4b 0%, transparent 55%)`;
                clearTimeout(glow._t);
                glow._t = setTimeout(() => { delete glow.dataset.hover; }, 1200);
            }
        });

        window.addEventListener("mouseleave", () => {
            if (cursor) cursor.style.opacity = "0";
        });
        window.addEventListener("mouseenter", () => {
            if (cursor) cursor.style.opacity = "1";
        });

        (function tick() {
            cx += (mx - cx) * 0.22;
            cy += (my - cy) * 0.22;
            cursor.style.transform = `translate(${cx - 12}px, ${cy - 12}px)`;
            requestAnimationFrame(tick);
        })();

        document.addEventListener("mouseover", (e) => {
            if (e.target.closest("a, button, [role='button'], input, textarea")) {
                cursor.classList.add("rt-cursor--active");
            }
        });
        document.addEventListener("mouseout", (e) => {
            if (e.target.closest("a, button, [role='button'], input, textarea")) {
                cursor.classList.remove("rt-cursor--active");
            }
        });


        if (!reduceMotion && window.matchMedia("(pointer: fine)").matches) {
            document.querySelectorAll(".rt-tilt-card").forEach((card) => {
                const inner = card.querySelector(".rt-tilt-inner");
                const img = card.querySelector(".rt-tilt-img");
                card.addEventListener("mousemove", (e) => {
                    const r = card.getBoundingClientRect();
                    const px = (e.clientX - r.left) / r.width;
                    const py = (e.clientY - r.top) / r.height;
                    const rx = (0.5 - py) * 5;
                    const ry = (px - 0.5) * 5;
                    card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`;
                    card.style.setProperty("--rt-glare-x", `${px * 100}%`);
                    card.style.setProperty("--rt-glare-y", `${py * 100}%`);
                    if (inner) inner.style.transform = "translateZ(18px)";
                    if (img) img.style.transform = `scale(1.05) translate3d(${(0.5 - px) * 10}px, ${(0.5 - py) * 10}px, 0)`;
                });
                card.addEventListener("mouseleave", () => {
                    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
                    if (inner) inner.style.transform = "translateZ(0)";
                    if (img) img.style.transform = "scale(1) translate3d(0, 0, 0)";
                });
            });
        }
    }, 0);

    return html.div(
        { class: "min-h-screen bg-zinc-950 text-white font-mono relative" },
        [

            html.div({ id: "rt-cursor", domControlled: true }, [
                html.div({ class: "rt-cursor-dot" }, []),
                html.span({ id: "rt-cursor-coords" }, ["0x000,0x000"]),
            ]),

            html.div({
                id: "glow-layer",
                class: "fixed inset-0 pointer-events-none z-0",
                style:
                    "background: radial-gradient(ellipse at 50% 10%, #1e1b4b 0%, transparent 60%); transition: background 0.6s ease;",
            }),

            html.div({
                id: "rt-grid-a",
                class: "fixed inset-0 pointer-events-none z-0",
                style:
                    "background-image: linear-gradient(to right, #ffffff18 1px, transparent 1px), linear-gradient(to bottom, #ffffff18 1px, transparent 1px); background-size: 48px 48px; transition: transform 0.2s ease-out;",
            }),
            html.div({
                id: "rt-grid-b",
                class: "fixed inset-0 pointer-events-none z-0",
                style:
                    "background-image: linear-gradient(to right, #ffffff0c 1px, transparent 1px), linear-gradient(to bottom, #ffffff0c 1px, transparent 1px); background-size: 112px 112px; transition: transform 0.2s ease-out;",
            }),

            html.div({ class: "hidden md:block rt-drift rt-drift--a" }, []),
            html.div({ class: "hidden md:block rt-drift rt-drift--b" }, []),
            html.div({ class: "hidden md:block rt-drift rt-drift--c" }, []),

            html.div({ class: "relative z-10 flex flex-col gap-25" }, [
                Navbar(),

                router.routerView(),

                html.footer(
                    {
                        class:
                            "fixed bottom-2 left-0 right-0 z-2 px-6 border-t border-white/5 px-8 py-8 flex justify-between items-center text-xs text-zinc-500 tracking-widest uppercase",
                    },
                    [
                        html.a({ href: "https://github.com/Rxnel-ysr", target: "_blank" }, [
                            "rxnel-ysr",
                        ]),
                        html.a(
                            {
                                href: "https://github.com/Rxnel-ysr/yandom",
                                target: "_blank",
                            },
                            ["built with yandom"]
                        ),
                        html.span({}, ["2026"]),
                    ],
                ),
            ]),
        ],
    );
};

export default App;