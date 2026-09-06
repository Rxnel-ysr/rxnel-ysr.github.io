import { html } from "yandom";

const NotFound = () => {
    return html.$([
        html.section({
            id: "not-found",
            class: "min-h-screen flex flex-col items-center justify-center text-center px-6 gap-10 relative overflow-hidden",
        }, [

            html.style({}, [`
                .rt-star {
                    position: absolute;
                    width: 3px; height: 3px;
                    border-radius: 50%;
                    background: #e9d5ff;
                    box-shadow: 0 0 6px 1px #c4b5fdaa;
                    animation: rt-star-twinkle 2.4s ease-in-out infinite;
                }
                @keyframes rt-star-twinkle {
                    0%, 100% { opacity: 0.15; transform: scale(0.8); }
                    50%      { opacity: 1; transform: scale(1.3); }
                }

                /* ── saturn ── sphere + banded surface + glowing tilted ring ── */
                .rt-saturn-perspective {
                    perspective: 900px;
                    width: 230px; height: 230px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 1;
                }
                .rt-saturn {
                    position: relative;
                    width: 100%; height: 100%;
                    transform-style: preserve-3d;
                    /* held at a fixed, dramatic angle — no spin */
                    transform: rotateY(-20deg) rotateX(11deg);
                }
                .rt-saturn-sphere {
                    position: absolute; top: 50%; left: 50%;
                    width: 130px; height: 130px;
                    border-radius: 50%;
                    overflow: hidden;
                    transform: translate(-50%, -50%);
                    background: radial-gradient(circle at 34% 28%, #fff3d9 0%, #eaceA0 16%, #c9a06a 42%, #8a6a3d 70%, #4b3620 100%);
                    box-shadow:
                        0 0 44px #7c3aed40,
                        inset -16px -16px 30px #00000070,
                        inset 10px 10px 22px #ffffff30;
                    z-index: 2;
                }
                .rt-saturn-bands {
                    position: absolute;
                    inset: -30%;
                    background: repeating-linear-gradient(
                        100deg,
                        #f5e6c8 0%, #f5e6c8 6%,
                        #d8b978 6%, #d8b978 11%,
                        #b8863f 11%, #b8863f 15%,
                        #f0dca6 15%, #f0dca6 21%,
                        #8a6430 21%, #8a6430 26%
                    );
                    opacity: 0.5;
                    mix-blend-mode: multiply;
                }
                .rt-saturn-rim {
                    position: absolute; inset: 0;
                    border-radius: 50%;
                    background: radial-gradient(circle at 68% 74%, #a78bfa55 0%, transparent 55%);
                    mix-blend-mode: screen;
                }
                .rt-saturn-ring {
                    position: absolute; top: 50%; left: 50%;
                    border-radius: 50%;
                    transform: translate(-50%, -50%);
                }
                .rt-saturn-ring--inner { width: 214px; height: 62px; }
                .rt-saturn-ring--mid   { width: 250px; height: 72px; }
                .rt-saturn-ring--outer { width: 286px; height: 82px; }

                .rt-saturn-ring--back  { z-index: 1; }
                .rt-saturn-ring--front {
                    z-index: 3;
                    /* only the lower arc renders, so it reads as passing in front of the planet */
                    clip-path: polygon(0 46%, 100% 46%, 100% 100%, 0% 100%);
                }

                .rt-saturn-ring--inner.rt-saturn-ring--back  { border: 3px solid #e9d5ffa8; box-shadow: 0 0 18px #c4b5fd70; }
                .rt-saturn-ring--inner.rt-saturn-ring--front { border: 3px solid #f3e8ffe0; box-shadow: 0 0 18px #e9d5ffaa; }

                .rt-saturn-ring--mid.rt-saturn-ring--back  { border: 2px solid #a78bfa60; box-shadow: 0 0 14px #7c3aed50; }
                .rt-saturn-ring--mid.rt-saturn-ring--front { border: 2px solid #c4b5fdb0; box-shadow: 0 0 14px #a78bfa60; }

                .rt-saturn-ring--outer.rt-saturn-ring--back  { border: 1.5px solid #7c3aed40; }
                .rt-saturn-ring--outer.rt-saturn-ring--front { border: 1.5px solid #a78bfa60; }

                @media (prefers-reduced-motion: reduce) {
                    .rt-saturn-halo { animation: none; opacity: 0.85; }
                    .rt-star { animation: none; opacity: 0.6; }
                }
            `]),


            html.div({ class: "rt-star", style: "top: 18%; left: 32%; animation-delay: 0s;" }, []),
            html.div({ class: "rt-star", style: "top: 30%; left: 68%; animation-delay: 0.6s;" }, []),
            html.div({ class: "rt-star", style: "top: 12%; left: 62%; animation-delay: 1.1s;" }, []),
            html.div({ class: "rt-star", style: "top: 40%; left: 24%; animation-delay: 1.6s;" }, []),
            html.div({ class: "rt-star", style: "top: 15%; left: 48%; animation-delay: 0.3s;" }, []),
            html.div({ class: "rt-star", style: "top: 36%; left: 76%; animation-delay: 1.9s;" }, []),

            html.div({ class: "rt-reveal", style: "position: relative; z-index: 1;" }, [
                html.span({ class: "text-comment" }, ["// not_found"]),
            ]),


            html.div({ class: "rt-reveal flex flex-col gap-3", style: "position: relative; z-index: 1;" }, [
                html.h1({ class: "text-7xl md:text-8xl font-black tracking-tighter bg-gradient-to-br from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent leading-none" }, ["404"]),
                html.p({ class: "text-zinc-500 text-sm max-w-xs mx-auto leading-relaxed" }, [
                    "Nothing in orbit at this address — the page drifted off somewhere.",
                ]),
            ]),

            html.div({ class: "rt-reveal flex gap-4", style: "position: relative; z-index: 1;" }, [
                html.routerLink({
                    to: "/",
                    scrollTo: "#hero",
                    class: "px-6 py-2 bg-violet-600 hover:bg-violet-500 text-white text-xs tracking-widest uppercase rounded-full transition-colors",
                }, ["Back Home"]),
            ]),

        ]),
    ]);
};

export default NotFound;