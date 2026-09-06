import { html } from "yandom";

const Loader = () => {
    setTimeout(() => {
        const status = document.getElementById('loader-status');
        let n = 0;
        const tick = setInterval(() => {
            n = (n + Math.floor(Math.random() * 400) + 40) % 0xFFF;
            if (status) status.textContent = `decrypting 0x${n.toString(16).toUpperCase().padStart(3, '0')}`;
        }, 90);
    }, 0);

    return html.div({
        id: "page-loader",
        class: "fixed inset-0 z-[2] flex flex-col items-center justify-center gap-8 backdrop-blur-md",
        style: "transition: opacity 0.6s ease;"
    }, [

        // spinner stack
        html.div({ class: "relative flex items-center justify-center", style: "width: 80px; height: 80px;" }, [

            // outer ring — slow spin
            html.div({
                style: `
                position: absolute; inset: 0;
                border-radius: 50%;
                border: 1px solid transparent;
                border-top-color: #7c3aed;
                border-right-color: #7c3aed20;
                animation: spin 2s linear infinite;
            ` }, []),

            // middle ring — counter spin
            html.div({
                style: `
                position: absolute; inset: 10px;
                border-radius: 50%;
                border: 1px solid transparent;
                border-bottom-color: #a78bfa;
                border-left-color: #a78bfa20;
                animation: spin-reverse 1.5s linear infinite;
            ` }, []),

            // inner ring — fast spin
            html.div({
                style: `
                position: absolute; inset: 22px;
                border-radius: 50%;
                border: 1px solid transparent;
                border-top-color: #c4b5fd;
                border-right-color: #c4b5fd20;
                animation: spin 1s linear infinite;
            ` }, []),

            // center dot — pulse
            html.div({
                style: `
                width: 8px; height: 8px;
                border-radius: 50%;
                background: #7c3aed;
                box-shadow: 0 0 12px #7c3aed, 0 0 24px #7c3aed60;
                animation: pulse-glow 1.5s ease-in-out infinite;
            ` }, []),
        ]),

        // logo + status
        html.div({ class: "flex flex-col items-center gap-2" }, [
            html.span({ class: "text-xs tracking-[0.4em] uppercase text-violet-400", style: "animation: flicker 3s ease-in-out infinite;" }, ["rxnel-ysr"]),
            html.span({ id: "loader-status", class: "text-xs tracking-widest text-zinc-600 uppercase font-mono" }, ["decrypting 0x000"]),
        ]),

    ]);
};

export default Loader;