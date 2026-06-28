import { html } from "yandom";
import router from "../router/index.js";
import Navbar from "./components/Navbar.js";

const App = () => {
    setTimeout(() => {
        const glow = document.getElementById("glow-layer");
        if (!glow) return;
        window.addEventListener("scroll", () => {
            const progress =
                window.scrollY / (document.body.scrollHeight - window.innerHeight);
            const y = 10 + progress * 80;
            glow.style.background = `radial-gradient(ellipse at 50% ${y}%, #1e1b4b 0%, transparent 60%)`;
        });
    }, 0);

    return html.div(
        { class: "min-h-screen bg-zinc-950 text-white font-mono relative" },
        [
            html.div({
                id: "glow-layer",
                class: "fixed inset-0 pointer-events-none z-0",
                style:
                    "background: radial-gradient(ellipse at 50% 10%, #1e1b4b 0%, transparent 60%)",
            }),

            html.div({
                class: "fixed inset-0 pointer-events-none z-0",
                style:
                    "background-image: linear-gradient(to right, #ffffff18 1px, transparent 1px), linear-gradient(to bottom, #ffffff18 1px, transparent 1px); background-size: 48px 48px;",
            }),

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
