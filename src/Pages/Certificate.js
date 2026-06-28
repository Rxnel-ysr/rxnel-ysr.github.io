import { html, file } from "yandom";

const Certificates = () => {
    const certificates = [
        {
            title: "LKS East Java 2026 Participant",
            issuer: "KEPALA DINAS PENDIDIKAN PROVINSI JAWA TIMUR",
            date: "12 April 2026",
            image: file('/public/assets/certificates/1683 Web Technologies - Muhammad Yusron Elyadi - SMKN 2 KRAKSAAN_sign-1.png'),
            link: "#",
        },
        {
            title: "Medallion Of Excellence - LKS East Java 2026",
            issuer: "KEPALA DINAS PENDIDIKAN PROVINSI JAWA TIMUR",
            date: "10 April 2026",
            image: file('/public/assets/certificates/2464 Web Technologies - MfE - Muhammad Yusron Elyadi - SMKN 2 KRAKSAAN_sign-1.png'),
            link: "#",
        },
        {
            title: "First Place Winner of the Probolinggo LKS 2026",
            issuer: "CABANG DINAS PENDIDIKAN WILAVAH PROBOLINGGO",
            date: "5 Feb 2026",
            image: file('/public/assets/certificates/LKS 2026 Probolinggo Muhammad Yusron Elyadi.png'),
            link: "#",
        },
        {
            title: "LKS East Java 2025 Participant",
            issuer: "KEPALA DINAS PENDIDIKAN PROVINSI JAWA TIMUR",
            date: "25 April 2025",
            image: file('/public/assets/certificates/1733 Web Technologies - MUHAMMAD YUSRON ELYADI - SMKN 2 KRAKSAAN_sign-1.png'),
            link: "#",
        },
        {
            title: "First Place Winner of the Probolinggo LKS 2025",
            issuer: "CABANG DINAS PENDIDIKAN WILAVAH PROBOLINGGO",
            date: "27 Feb 2025",
            image: file('/public/assets/certificates/Sertifikat LKS Dikmen - Rev. Nomor_31_sign-1.png'),
            link: "#",
        },
    ];

    setTimeout(() => {
        document.getElementById('cert-lightbox-backdrop')
            ?.addEventListener('click', () => {
                document.getElementById('cert-lightbox').style.display = 'none';
            });
        
        let clb = document.getElementById('cert-lightbox');
        document.addEventListener('keydown', (e) => {
            if (e.key == 'Escape' && clb.style.display != 'none') clb.style.display = 'none';
        })
    }, 0);

    return html.$([

        // ── Lightbox ─────────────────────────────────────────────────
        html.div({
            id: "cert-lightbox",
            class: "fixed inset-0 z-50 items-center justify-center p-8",
            style: "display:none; background: rgba(0,0,0,0.9); backdrop-filter: blur(12px);"
        }, [
            html.div({ id: "cert-lightbox-backdrop", class: "absolute inset-0" }, []),
            html.div({ class: "relative max-w-4xl w-full z-10 flex flex-col gap-4 items-end" }, [
                html.button({
                    onclick: "document.getElementById('cert-lightbox').style.display='none'",
                    class: "text-zinc-400 hover:text-white text-xs tracking-widest uppercase transition-colors mb-2"
                }, ["✕ Close"]),
                html.img({ src: "", alt: "Certificate", class: "w-full rounded-2xl border border-white/10 shadow-2xl" }, []),
            ]),
        ]),

        // ── Page ─────────────────────────────────────────────────────
        html.section({ class: "max-w-4xl mx-auto px-6 py-32 flex flex-col gap-16" }, [
            html.div({ class: "flex flex-col gap-3" }, [
                html.span({ class: "text-comment" }, ["// certificates"]),
                html.h1({ class: "text-5xl font-black tracking-tighter text-white" }, ["Certificates"]),
                html.p({ class: "text-zinc-500 text-sm" }, [
                    "Courses, trainings, and things I've been certified in."
                ]),
            ]),

            html.div({ class: "grid grid-cols-1 sm:grid-cols-2 gap-8 w-full" }, [
                ...certificates.map(({ title, issuer, date, image, link }) =>
                    html.div({
                        class: "group relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-violet-500/40 hover:shadow-[0_0_40px_#7c3aed20] transition-all duration-500 flex flex-col"
                    }, [
                        // top accent line
                        html.div({ class: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" }, []),

                        // image — tall so cert is actually readable
                        image
                            ? html.div({
                                class: "relative overflow-hidden cursor-zoom-in",
                                style: "height: 280px;",
                                onclick: `(function(){var l=document.getElementById('cert-lightbox');l.style.display='flex';l.querySelector('img').src='${image}'})()`,
                            }, [
                                html.img({ src: image, alt: title, class: "w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500" }, []),
                                html.div({ class: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300", style: "background: rgba(0,0,0,0.35)" }, [
                                    html.span({ class: "text-white text-xs tracking-widest uppercase border border-white/40 px-4 py-1.5 rounded-full backdrop-blur-sm" }, ["Click to expand"]),
                                ]),
                            ])
                            : html.div({
                                class: "flex items-center justify-center bg-gradient-to-br from-violet-900/40 to-purple-900/20",
                                style: "height: 280px;"
                            }, [
                                html.span({ class: "text-zinc-600 text-xs tracking-widest uppercase" }, ["No preview"]),
                            ]),

                        // footer
                        html.div({ class: "p-5 flex items-center justify-between gap-4" }, [
                            html.div({ class: "flex flex-col gap-0.5 min-w-0" }, [
                                html.span({ class: "text-white text-sm font-bold tracking-tight truncate" }, [title]),
                                html.span({ class: "text-zinc-500 text-xs truncate" }, [issuer]),
                            ]),
                            html.div({ class: "flex items-center gap-3 shrink-0" }, [
                                html.span({ class: "text-xs text-violet-400/70 border border-violet-400/20 bg-violet-400/5 px-2 py-0.5 rounded-full whitespace-nowrap" }, [date]),
                                link !== "#"
                                    ? html.a({ href: link, target: "_blank", class: "text-xs text-zinc-600 hover:text-violet-400 transition-colors tracking-widest uppercase whitespace-nowrap" }, ["Verify →"])
                                    : null,
                            ]),
                        ]),
                    ])
                ),
            ]),
        ]),
    ]);
};

export default Certificates;