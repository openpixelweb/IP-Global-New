import { useEffect, useRef, useState } from "react";
import type { CSSProperties, FC } from "react";
import { Link } from "react-router-dom";

import "../assets/css/rail-transport.css";

/* ==========================================
   RAIL & TRANSPORT PAGE
   IPGS frontend-new / React TypeScript
========================================== */

interface RailItem {
    title: string;
    description: string;
    icon: string;
}

const railServices: RailItem[] = [
    {
        title: "Transform legacy rail networks without dropping a signal",
        description:
            "Move from ageing FTN and FTNx infrastructure to IP/MPLS while your services keep moving. We plan coexistence from day one, so the old network and the new one share the track happily until the switch.",
        icon: "ri-route-line",
    },
    {
        title: "Connect the trackside to the control centre",
        description:
            "Your trackside assets, signalling equipment rooms, interlockings, and SCADA systems reach the control centre over a network built to stay secure. Stations and depots join in with your Rail Operating Centres, so everything works in harmony.",
        icon: "ri-node-tree",
    },
    {
        title: "Make the move to digital signalling easy",
        description:
            "We ensure your network architecture is ready for ETCS and digital signalling before the project gets going. Segmentation and service continuity are part of the first design review, so there’s no scramble to address them later on.",
        icon: "ri-signal-tower-line",
    },
    {
        title: "Make the move to IP seamless",
        description:
            "Coexistence planning, testing, cutover, and operational handover transition legacy transmission platforms to modern IP infrastructure. As a result, your operations team gets the keys to a network it already knows.",
        icon: "ri-git-merge-line",
    },
    {
        title: "Protect signalling-adjacent systems and keep up the pace",
        description:
            "Segmentation, firewall integration, access control, and cyber assurance keep your signalling-adjacent systems protected. Your day-to-day operations stay at full speed while the security does its job in the background.",
        icon: "ri-shield-check-line",
    },
    {
        title: "Keep every voice on the network live",
        description:
            "Telephony, control room voice, PA/VA integration, and help points stay live across your network. When a passenger presses a help point, someone answers.",
        icon: "ri-customer-service-2-line",
    },
];

const railStrengths: RailItem[] = [
    {
        title: "Specialists who speak signalling",
        description:
            "Our OT engineers understand signalling and SCADA, as well as IP/MPLS. We bring that know-how to the FTN/FTNx migration as Network Rail and its supply chain move off legacy transmission equipment.",
        icon: "ri-train-line",
    },
    {
        title: "Security designed in from day one",
        description:
            "Segmentation and Zero Trust access protect your operational systems without slowing your control room down. An IEC 62443-aligned baseline gives your assurance team evidence they can use.",
        icon: "ri-lock-line",
    },
    {
        title: "Resilience that shrugs off a bad day",
        description:
            "We design physically separate A and B networks with automatic failover, so a single fault stays a single fault. Your services carry on while the engineers fix the problem.",
        icon: "ri-git-branch-line",
    },
    {
        title: "Handover that leaves you in control",
        description:
            "Implementation plans, FAT and SAT documentation, as-built records, and handover packs come with the job. As a result, your team takes over a network it can operate and audit with confidence.",
        icon: "ri-file-check-line",
    },
    {
        title: "A team of people you know and trust",
        description:
            "Network and security specialists work as one team with shared accountability, so your project has a single story. You always know exactly who to call.",
        icon: "ri-team-line",
    },
];

/* Taken from the page copy */
const ticker = [
    "FTN/FTNx migration",
    "ETCS readiness",
    "Legacy-to-IP transition",
    "IP/MPLS and fibre",
    "IEC 62443-aligned",
    "Separate A and B networks",
];

const journey = [
    { label: "Discovery", icon: "ri-search-eye-line" },
    { label: "Planning", icon: "ri-map-2-line" },
    { label: "Execution", icon: "ri-tools-line" },
    { label: "Post-migration assurance", icon: "ri-verified-badge-line" },
];

/* Taken from the intro copy */
const networkNodes = [
    { label: "Trackside assets", icon: "ri-signal-tower-line" },
    { label: "Stations", icon: "ri-building-line" },
    { label: "Depots", icon: "ri-tools-line" },
    { label: "Rail Operating Centres", icon: "ri-computer-line" },
];

const delay = (ms: number): CSSProperties =>
    ({ "--d": `${ms}ms` }) as CSSProperties;

const RailTransport: FC = () => {
    const rootRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(0);

    /* ---------- SEO ---------- */
    useEffect(() => {
        const oldTitle = document.title;
        const meta = document.querySelector<HTMLMetaElement>(
            'meta[name="description"]'
        );
        const oldDescription = meta?.content;

        document.title =
            "Rail & Transport Network Services | IPGS Operational Technology";

        if (meta) {
            meta.content =
                "IPGS delivers secure rail signalling, control systems, and transport network infrastructure, keeping safety-critical connections live through the migration.";
        }

        return () => {
            document.title = oldTitle;
            if (meta && oldDescription !== undefined) {
                meta.content = oldDescription;
            }
        };
    }, []);

    /* ---------- Scroll reveal ---------- */
    useEffect(() => {
        const root = rootRef.current;
        if (!root) return;

        const items = root.querySelectorAll<HTMLElement>("[data-reveal]");

        if (!("IntersectionObserver" in window)) {
            items.forEach((el) => el.classList.add("is-visible"));
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
        );

        items.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    /* ---------- Rail line fills as you scroll ---------- */
    useEffect(() => {
        const line = lineRef.current;
        if (!line) return;

        let frame = 0;

        const update = () => {
            frame = 0;
            const rect = line.getBoundingClientRect();
            const vh = window.innerHeight;
            const start = vh * 0.6;
            const progress = Math.min(
                1,
                Math.max(0, (start - rect.top) / rect.height)
            );
            line.style.setProperty("--p", progress.toFixed(4));
        };

        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(update);
        };

        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            if (frame) cancelAnimationFrame(frame);
        };
    }, []);

    return (
        <div className="js-scroll ipgs-rail-page is-anim" ref={rootRef}>
            {/* ================= BANNER ================= */}
            <div className="hero-data-bottom">
                <div className="services-home-hero desck-about ipgs-rail-banner">
                    <div className="title-of-hero">
                        <p>Critical transport infrastructure, <br />engineered for safety and efficiency</p>
                        <span>
                            <Link to="/">Home</Link>
                            {" - "}
                            <Link to="/operational-technology">
                                Operational Technology
                            </Link>
                            {" - "}
                            Rail &amp; Transport
                        </span>
                    </div>
                </div>
            </div>

            

            {/* ================= FOUNDATIONS ================= */}
            <section className="ipgs-rail-foundations">
                <div className="container">
                    <div className="ipgs-rail-foundations-grid">
                        <div>
                            <div className="ipgs-rail-label" data-reveal="up">
                                <span></span>
                                The network foundation
                            </div>

                            <h2 data-reveal="up" style={delay(100)}>
                                Supplying the foundations that underpin{" "}
                                <span>safe and efficient travel networks</span>
                            </h2>

                            <figure
                                className="ipgs-rail-quote"
                                data-reveal="panel"
                            >
                                <i className="ri-double-quotes-l" aria-hidden="true"></i>
                                <blockquote>
                                    Not knowing we’re there is the hallmark of
                                    our success.
                                </blockquote>
                                <figcaption>The IPGS approach</figcaption>
                            </figure>
                        </div>

                        <div className="ipgs-rail-foundations-content">
                            <p data-reveal="up">
                                Rail networks carry decades of legacy
                                transmission and signalling equipment that was
                                never built to talk to modern IP systems. Every
                                migration has to happen on a live railway, where
                                a dropped connection is an accident waiting to
                                happen.
                            </p>

                            <p data-reveal="up">
                                Most suppliers handle that risk by splitting the
                                work. One firm designs the network, another
                                migrates it, a third tests it, and
                                accountability gets lost somewhere between the
                                three. But IPGS runs the whole journey as one
                                team, from discovery and planning through
                                execution to post-migration assurance, so
                                nothing gets handed off at the exact moment it
                                matters most.
                            </p>

                            <p data-reveal="up">
                                We ensure FTN/FTNx migration, ETCS readiness,
                                and legacy-to-IP transition are executed safely
                                and cost-effectively. We’ve been doing so for
                                years. Not knowing we’re there is the hallmark
                                of our success.
                            </p>

                            <div className="ipgs-rail-journey" data-reveal="journey">
                                <strong>One accountable team</strong>
                                <ol>
                                    {journey.map((step, i) => (
                                        <li key={step.label} style={delay(i * 220)}>
                                            <i className={step.icon} aria-hidden="true"></i>
                                            <span>{step.label}</span>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= SERVICES: stations on a rail line ================= */}
            <section className="ipgs-rail-services">
                <div className="container">
                    <div className="ipgs-rail-section-head">
                        <div className="ipgs-rail-label" data-reveal="up">
                            <span></span>
                            What we deliver
                        </div>

                        <div className="ipgs-rail-section-head-grid">
                            <h2 data-reveal="up" style={delay(100)}>
                                OT services born from{" "}
                                <span>years of on-site experience</span>
                            </h2>

                            <p data-reveal="up" style={delay(200)}>
                                Each capability is delivered by the same
                                experienced operational technology team. When it
                                comes to rail networks, this means a signalling
                                migration and the security review it needs move
                                together instead of waiting on separate
                                suppliers.
                            </p>
                        </div>
                    </div>

                    <div className="ipgs-rail-route" ref={lineRef}>
                        <div className="ipgs-rail-route-track" aria-hidden="true">
                            <span></span>
                        </div>

                        <ol className="ipgs-rail-stations">
                            {railServices.map((item, i) => (
                                <li
                                    key={item.title}
                                    className={`ipgs-rail-station ${
                                        i % 2 ? "is-right" : "is-left"
                                    }`}
                                    data-reveal="station"
                                >
                                    <span className="ipgs-rail-node" aria-hidden="true">
                                        <i className={item.icon}></i>
                                    </span>

                                    <article className="ipgs-rail-station-card">
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </article>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </section>

            {/* ================= ASSURANCE: accordion ================= */}
            <section className="ipgs-rail-assurance">
                <div className="container">
                    <div className="ipgs-rail-assurance-grid">
                        <div className="ipgs-rail-assurance-intro">
                            <div className="ipgs-rail-label" data-reveal="up">
                                <span></span>
                                Why IPGS
                            </div>

                            <h2 data-reveal="up" style={delay(100)}>
                                Built for transport infrastructure that{" "}
                                <span>never gets a day off</span>
                            </h2>

                            <p data-reveal="up" style={delay(200)}>
                                Only a well-planned, well-maintained rail
                                network can keep trains moving safely, so the
                                team behind it needs to understand the
                                processes involved, as well as the technology.
                                That's how IPGS approaches OT for rail and
                                transport.
                            </p>

                            <div
                                className="ipgs-rail-failover"
                                data-reveal="panel"
                            >
                                <div className="ipgs-rail-failover-row">
                                    <span>Network A</span>
                                    <div className="ipgs-rail-wire wire-a">
                                        <i></i>
                                        <em aria-hidden="true">×</em>
                                    </div>
                                </div>

                                <div className="ipgs-rail-failover-row">
                                    <span>Network B</span>
                                    <div className="ipgs-rail-wire wire-b">
                                        <i></i>
                                    </div>
                                </div>

                                <p>
                                    Physically separate networks with
                                    automatic failover, so a single fault
                                    stays a single fault.
                                </p>
                            </div>
                        </div>

                        <div className="ipgs-rail-accordion">
                            {railStrengths.map((item, i) => {
                                const isOpen = open === i;
                                return (
                                    <div
                                        key={item.title}
                                        className={`ipgs-rail-acc-item${isOpen ? " is-open" : ""}`}
                                        data-reveal="up"
                                        style={delay(i * 90)}
                                    >
                                        <h3>
                                            <button
                                                type="button"
                                                id={`ipgs-rail-acc-btn-${i}`}
                                                aria-expanded={isOpen}
                                                aria-controls={`ipgs-rail-acc-panel-${i}`}
                                                onClick={() => setOpen(isOpen ? -1 : i)}
                                            >
                                                <i className={item.icon} aria-hidden="true"></i>
                                                <span>{item.title}</span>
                                                <b aria-hidden="true"></b>
                                            </button>
                                        </h3>

                                        <div
                                            id={`ipgs-rail-acc-panel-${i}`}
                                            role="region"
                                            aria-labelledby={`ipgs-rail-acc-btn-${i}`}
                                            className="ipgs-rail-acc-panel"
                                        >
                                            <div>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="ipgs-rail-final">
                <div className="container">
                    <div className="ipgs-rail-final-grid">
                        <div>
                            <div className="ipgs-rail-label" data-reveal="up">
                                <span></span>
                                Plan your next step
                            </div>

                            <h2 data-reveal="up" style={delay(100)}>
                                Start planning your rail <span>network move today</span>
                            </h2>

                            <p data-reveal="up" style={delay(200)}>
                                Tell us where your rail network infrastructure
                                stands today, and we'll map the route to a
                                secure, IP-based railway. Talk to our OT team
                                this week and leave with a clear first step.
                            </p>
                        </div>

                        <div
                            className="ipgs-rail-final-action"
                            data-reveal="up"
                            style={delay(300)}
                        >
                            <Link to="/contact" className="ipgs-rail-final-button">
                                Talk to Our Rail OT Team
                                <i className="ri-arrow-right-up-line" aria-hidden="true"></i>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="ipgs-rail-track" aria-hidden="true">
                    <span></span>
                    <span></span>
                </div>
            </section>
        </div>
    );
};

export default RailTransport;
