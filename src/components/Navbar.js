import { html, currentUri } from "yandom";

const Navbar = () => {
    const current = currentUri();

    setTimeout(() => {
        const nav = document.getElementById("rt-nav");
        if (!nav) return;

        let lastY = window.scrollY;
        window.addEventListener("scroll", () => {
            const y = window.scrollY;
            nav.classList.toggle("rt-nav--compact", y > 40);
            lastY = y;
        }, { passive: true });

        if (!window.matchMedia("(pointer: fine)").matches) return;
        nav.querySelectorAll(".rt-magnetic").forEach((el) => {
            el.addEventListener("mousemove", (e) => {
                const r = el.getBoundingClientRect();
                const relX = e.clientX - (r.left + r.width / 2);
                const relY = e.clientY - (r.top + r.height / 2);
                el.style.transform = `translate(${relX * 0.25}px, ${relY * 0.35}px)`;
            });
            el.addEventListener("mouseleave", () => {
                el.style.transform = "translate(0, 0)";
            });
        });
    }, 0);

    const link = (to, label) => html.routerLink({
        to,
        class: `rt-magnetic py-1 rounded-full text-sm md:text-md tracking-widest uppercase transition-all ${current === to
            ? "px-4 bg-violet-600 hover:bg-violet-500 text-white"
            : "px-4 hover:text-white hover:bg-white/10 text-zinc-400"
            }`,
        style: "transition: transform 0.15s ease, background-color 0.2s ease, color 0.2s ease;"
    }, [label]);

    return html.nav({
        id: "rt-nav",
        class: "fixed top-4 left-0 right-0 z-50 px-6",
        style: "transition: top 0.35s cubic-bezier(0.22, 1, 0.36, 1);",
    }, [

        html.style({}, [`
            #rt-nav.rt-nav--compact { top: 0.4rem; }
            #rt-nav.rt-nav--compact .rt-nav-pill {
                padding-top: 0.3rem; padding-bottom: 0.3rem;
                box-shadow: 0 8px 30px #00000060;
            }
        `]),

        html.div({ class: "hidden md:flex justify-between items-center" }, [
            html.routerLink({
                to: '/', scrollTo: "#hero",
                class: "rt-reveal text-sm md:text-md tracking-widest text-violet-400 hover:text-violet-300 transition-colors"
            }, ["rxnel-ysr"]),

            html.div({ class: "rt-reveal rt-nav-pill flex items-center gap-1 border border-white/10 bg-zinc-950/80 backdrop-blur-md rounded-full px-2 py-1.5 transition-all duration-300" }, [
                link('/', 'Home'),
                link('/projects', 'Projects'),
                link('/certificates', 'Certificates'),
                link('/playground', 'Playground'),
            ]),
        ]),

        html.div({ class: "flex md:hidden justify-center" }, [
            html.div({ class: "rt-reveal rt-nav-pill flex items-center gap-1 border border-white/10 bg-zinc-950/80 backdrop-blur-md rounded-full px-2 py-1.5 shadow-[0_0_20px_#00000060] transition-all duration-300" }, [
                html.routerLink({
                    to: '/', scrollTo: "#hero",
                    class: "px-3 py-1 text-sm md:text-md tracking-widest text-violet-400 hover:text-violet-300 transition-colors font-bold"
                }, ["rxnel-ysr"]),
                html.span({ class: "w-px h-4 bg-white/10" }, []),
                link('/', 'Home'),
                link('/projects', 'Projects'),
                link('/certificates', 'Certificates'),
            ]),
        ]),

    ]);
};

export default Navbar;