import { html, currentUri } from "yandom";

const Navbar = () => {
    const current = currentUri();

    const link = (to, label) => html.routerLink({
        to,
        class: `py-1 rounded-full text-sm md:text-md tracking-widest uppercase transition-all ${current === to
                ? "px-4 bg-violet-600 hover:bg-violet-500 text-white"
                : "px-4 hover:text-white hover:bg-white/10 text-zinc-400"
            }`
    }, [label]);

    return html.nav({
        class: "fixed top-4 left-0 right-0 z-50 px-6",
    }, [

        // ── Desktop — logo left, pill right ──────────────────────────
        html.div({ class: "hidden md:flex justify-between items-center" }, [
            html.routerLink({
                to: '/', scrollTo: "#hero",
                class: "text-sm md:text-md tracking-widest text-violet-400 hover:text-violet-300 transition-colors"
            }, ["rxnel-ysr"]),

            html.div({ class: "flex items-center gap-1 border border-white/10 bg-zinc-950/80 backdrop-blur-md rounded-full px-2 py-1.5" }, [
                link('/', 'Home'),
                link('/projects', 'Projects'),
                link('/certificates', 'Certificates'),
                link('/playground', 'Playground'),
            ]),
        ]),

        // ── Mobile — single floating island centered ──────────────────
        html.div({ class: "flex md:hidden justify-center" }, [
            html.div({ class: "flex items-center gap-1 border border-white/10 bg-zinc-950/80 backdrop-blur-md rounded-full px-2 py-1.5 shadow-[0_0_20px_#00000060]" }, [
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