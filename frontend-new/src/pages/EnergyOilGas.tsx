import { useEffect, useRef, useState } from "react";
import type { CSSProperties, FC } from "react";
import { Link } from "react-router-dom";

import "../assets/css/energy-oil-gas.css";

/* =========================================
   TYPES
========================================= */

interface EnergyService {
    title: string;
    description: string;
    icon: string;
}

interface EnergyAdvantage {
    title: string;
    description: string;
}

/* =========================================
   SIX SERVICES FROM APPROVED DOCUMENT
========================================= */

const energyServices: EnergyService[] = [
    {
        title: "Bring legacy plant networks onto IP without stopping production",
        description:
            "Legacy serial networks give way to IP while your operation keeps producing. We plan coexistence first, so the old and new networks work side by side until you're ready to switch.",
        icon: "ri-git-merge-line",
    },
    {
        title: "Connect the field to the control room",
        description:
            "Secure, resilient links carry data from field equipment and substations to your control rooms. Your operators see the same picture the equipment does.",
        icon: "ri-node-tree",
    },
    {
        title: "Keep industrial control systems secure and in view",
        description:
            "Firewall integration, access control, network segmentation, and cyber assurance protect your industrial control systems and SCADA. With our team in the driving seat, production carries on while the security works quietly in the background.",
        icon: "ri-shield-check-line",
    },
    {
        title: "Respect the protocols your plant already speaks",
        description:
            "Our engineers know Modbus, DNP3, GOOSE, and Profinet. It’s this level of knowledge that ensures the network design reflects how your equipment communicates.",
        icon: "ri-code-box-line",
    },
    {
        title: "Build resilience you can test",
        description:
            "We physically separate A and B networks with automatic failover to keep operations connected when one path goes down. Testing proves it before handover, so your first failover is never a surprise.",
        icon: "ri-git-branch-line",
    },
    {
        title: "Prove it works before it goes live",
        description:
            "FAT and SAT testing checks the network against your design before anything goes live, and the records stay with you afterwards. This means your assurance team gets clear evidence to sign off against.",
        icon: "ri-file-check-line",
    },
];

/* =========================================
   FIVE APPROVED DELIVERY ADVANTAGES
========================================= */

const energyAdvantages: EnergyAdvantage[] = [
    {
        title: "Security built into every oil and gas operational technology service",
        description:
            "Security shapes the first design decision and every decision after it. An IEC 62443-aligned baseline gives your assurance team a solid standard to audit against.",
    },
    {
        title: "Engineers who put safety and availability first",
        description:
            "One of our key priorities is to find the best way to implement changes without touching production. Our OT team understands what a bad day costs, and plans around it.",
    },
    {
        title: "Delivery measured by zero downtime",
        description:
            "We measure success by delivery that's on time and on budget. Zero downtime and security are always built in by design when our team is in control. You always know who's managing your project.",
    },
    {
        title: "Every IPGS discipline on one team",
        description:
            "Everything you need for smooth, safe, and compliant operations is provided by IPGS, so nothing waits on a hand-off between departments.",
    },
    {
        title: "Quick decisions from people who can make them",
        description:
            "Small-company agility means decisions get made where the work happens. No matter when you reach out, you always deal with people who can say yes.",
    },
];

/* Taken from the intro copy */
const plantChain = [
    { label: "Wellheads", icon: "ri-drop-line" },
    { label: "Pipelines", icon: "ri-route-line" },
    { label: "Substations", icon: "ri-flashlight-line" },
    { label: "Control rooms", icon: "ri-computer-line" },
];

const lifecycle = [
    { label: "Design", icon: "ri-pencil-ruler-2-line" },
    { label: "Migration", icon: "ri-git-merge-line" },
    { label: "Assurance", icon: "ri-verified-badge-line" },
];

/** Sets a stagger delay used by the CSS transitions. */
const delay = (ms: number): CSSProperties =>
    ({ "--d": `${ms}ms` }) as CSSProperties;

/* =========================================
   INTERACTIVE SERVICE ACCORDION
========================================= */

const EnergyServices: FC = () => {
    const [activeService, setActiveService] = useState<number | null>(0);

    return (
        <div className="ipgs-energy-services-list">
            {energyServices.map((service, index) => {
                const isOpen = activeService === index;

                return (
                    <article
                        className={`ipgs-energy-service${isOpen ? " is-active" : ""}`}
                        key={service.title}
                        data-reveal="up"
                        style={delay(index * 90)}
                    >
                        <h3 className="ipgs-energy-service-heading">
                            <button
                                type="button"
                                id={`energy-service-button-${index}`}
                                className="ipgs-energy-service-button"
                                aria-expanded={isOpen}
                                aria-controls={`energy-service-panel-${index}`}
                                onClick={() =>
                                    setActiveService(isOpen ? null : index)
                                }
                            >
                                <span className="ipgs-energy-service-icon">
                                    <i className={service.icon} aria-hidden="true"></i>
                                </span>

                                <span className="ipgs-energy-service-title">
                                    {service.title}
                                </span>

                                <span className="ipgs-energy-toggle" aria-hidden="true"></span>
                            </button>
                        </h3>

                        <div
                            id={`energy-service-panel-${index}`}
                            role="region"
                            aria-labelledby={`energy-service-button-${index}`}
                            className="ipgs-energy-service-panel"
                        >
                            <div>
                                <p>{service.description}</p>

                                {index === 0 && (
                                    <Link
                                        to="/contact"
                                        className="ipgs-energy-service-link"
                                    >
                                        Discuss Legacy-to-IP Migration
                                        <i className="ri-arrow-right-line" aria-hidden="true"></i>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

/* =========================================
   MAIN PAGE
========================================= */

const EnergyOilGas: FC = () => {
    const rootRef = useRef<HTMLDivElement>(null);

    /* ---------- SEO ---------- */
    useEffect(() => {
        const oldTitle = document.title;
        const meta = document.querySelector<HTMLMetaElement>(
            'meta[name="description"]'
        );
        const oldDescription = meta?.content;

        document.title = "Oil and Gas Operational Technology Services | IPGS";

        if (meta) {
            meta.content =
                "IPGS designs and secures the operational networks behind oil, gas, and energy, keeping safety-critical systems live through every change.";
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

    return (
        <div className="js-scroll ipgs-energy-page is-anim" ref={rootRef}>
            {/* ================= BANNER ================= */}
            <div className="hero-data-bottom">
                <div className="services-home-hero desck-about ipgs-energy-banner">
                    <div className="title-of-hero">
                        <p>Oil and gas operational technology services <br />that keep production connected and protected</p>

                        <span>
                            <Link to="/">Home</Link>
                            {" - "}
                            <Link to="/operational-technology">
                                Operational Technology
                            </Link>
                            {" - "}
                            Energy, Oil &amp; Gas
                        </span>
                    </div>
                </div>
            </div>

            
            {/* ================= ALWAYS-ON OPERATIONS ================= */}
            <section className="ipgs-energy-operations">
                <div className="container">
                    <div className="ipgs-energy-operations-grid">
                        <div className="ipgs-energy-uptime" data-reveal="panel">
                            <span className="ipgs-energy-chain-tag">
                                Always-on operations
                            </span>

                            <strong>Production never stops.</strong>

                            <svg
                                className="ipgs-energy-pulse"
                                viewBox="0 0 600 120"
                                preserveAspectRatio="none"
                                aria-hidden="true"
                            >
                                <path
                                    className="pulse-base"
                                    d="M0 60 H120 L140 60 L160 20 L185 100 L205 60 H330 L350 60 L370 30 L392 90 L410 60 H600"
                                />
                                <path
                                    className="pulse-live"
                                    d="M0 60 H120 L140 60 L160 20 L185 100 L205 60 H330 L350 60 L370 30 L392 90 L410 60 H600"
                                />
                            </svg>

                            <p>
                                Resilience has to be physical, and every
                                change has to be planned around a process that
                                never stops.
                            </p>
                        </div>

                        <div className="ipgs-energy-operations-content">
                            <div className="ipgs-energy-label" data-reveal="up">
                                <span></span>
                                Operational continuity
                            </div>

                            <h2 data-reveal="up" style={delay(100)}>
                                Expert-led services built for{" "}
                                <span>round-the-clock energy operations</span>
                            </h2>

                            <p data-reveal="up" style={delay(200)}>
                                Operational technology controls the physical
                                processes involved in energy extraction and
                                generation, from valves and wellheads to
                                robots on the plant floor. When it fails, the
                                consequences reach well beyond a slow inbox.
                            </p>

                            <p data-reveal="up" style={delay(280)}>
                                Energy networks are a crucial part of national
                                infrastructure. Resilience has to be physical,
                                and every change has to be planned around a
                                process that never stops. With such a huge
                                amount at stake, we take our responsibilities
                                very seriously.
                            </p>

                            <p data-reveal="up" style={delay(360)}>
                                IPGS brings network and security specialists
                                together as one team. Our oil and gas
                                operational technology services treat design
                                and migration as one job, with assurance built
                                in. The people who plan your network are the
                                ones who drive it forward, hand it over, and
                                monitor it moving forward.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= SIX CAPABILITIES ================= */}
            <section className="ipgs-energy-capabilities">
                <div className="container">
                    <div className="ipgs-energy-capabilities-heading">
                        <div className="ipgs-energy-label" data-reveal="up">
                            <span></span>
                            What we deliver
                        </div>

                        <div className="ipgs-energy-heading-grid">
                            <h2 data-reveal="up" style={delay(100)}>
                                Operational technology for energy,{" "}
                                <span>from the wellhead to the control room</span>
                            </h2>

                            <p data-reveal="up" style={delay(200)}>
                                Every oil and gas operational technology
                                service below works alone or joins a wider
                                programme with one team behind it.
                            </p>
                        </div>
                    </div>

                    <div className="ipgs-energy-capabilities-grid">
                        <aside className="ipgs-energy-lifecycle" data-reveal="panel">
                            <span className="ipgs-energy-chain-tag">
                                Design / Migration / Assurance
                            </span>

                            <ol>
                                {lifecycle.map((step, i) => (
                                    <li key={step.label} style={delay(i * 3000)}>
                                        <i className={step.icon} aria-hidden="true"></i>
                                        <strong>{step.label}</strong>
                                    </li>
                                ))}
                            </ol>

                            <p>Integrated delivery for critical infrastructure.</p>
                        </aside>

                        <EnergyServices />
                    </div>
                </div>
            </section>

            {/* ================= WHY IPGS ================= */}
            <section className="ipgs-energy-assurance">
                <div className="container">
                    <div className="ipgs-energy-assurance-heading">
                        <div className="ipgs-energy-label" data-reveal="up">
                            <span></span>
                            The IPGS difference
                        </div>

                        <div className="ipgs-energy-heading-grid">
                            <h2 data-reveal="up" style={delay(100)}>
                                An OT partner that takes{" "}
                                <span>uptime personally</span>
                            </h2>

                            <p data-reveal="up" style={delay(200)}>
                                Energy operators live by a simple rule.
                                Production continues, and every change works
                                around it. Our team plans with that rule in
                                mind, from our initial meeting to project
                                delivery and monitoring.
                            </p>
                        </div>
                    </div>

                    <div className="ipgs-energy-assurance-list">
                        {energyAdvantages.map((item, i) => (
                            <article
                                key={item.title}
                                className="ipgs-energy-assurance-item"
                                data-reveal="up"
                                style={delay((i % 2) * 120)}
                            >
                                <span className="ipgs-energy-tick" aria-hidden="true">
                                    <i className="ri-check-line"></i>
                                </span>

                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="ipgs-energy-final">
                <div className="ipgs-energy-signal" aria-hidden="true">
                    <span></span>
                    <span></span>
                    <span></span>
                    <i></i>
                </div>

                <div className="container">
                    <div className="ipgs-energy-final-grid">
                        <div>
                            <div className="ipgs-energy-label" data-reveal="up">
                                <span></span>
                                Plan your network upgrade
                            </div>

                            <h2 data-reveal="up" style={delay(100)}>
                                Plan your operational network{" "}
                                <span>upgrade with IPGS</span>
                            </h2>

                            <p data-reveal="up" style={delay(200)}>
                                Tell us what your plant network looks like
                                today, and we'll map a secure, IP-ready route
                                that protects production along the way.
                            </p>

                            <p data-reveal="up" style={delay(280)}>
                                Talk to our OT team this week, and walk away
                                with a plan for your next move.
                            </p>
                        </div>

                        <div
                            className="ipgs-energy-final-action"
                            data-reveal="up"
                            style={delay(360)}
                        >
                            <Link to="/contact" className="ipgs-energy-final-button">
                                Book Your OT Planning Call
                                <i className="ri-arrow-right-up-line" aria-hidden="true"></i>
                            </Link>

                            <span>
                                Contact our team to arrange a planning
                                discussion.
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EnergyOilGas;
