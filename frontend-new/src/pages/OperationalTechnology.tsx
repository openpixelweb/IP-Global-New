import { useEffect, useRef, useState } from "react";
import type { CSSProperties, FC, KeyboardEvent } from "react";
import { Link } from "react-router-dom";

import "../assets/css/operational-technology.css";

/* ==========================================
   OPERATIONAL TECHNOLOGY PAGE
   IPGS frontend-new / React TypeScript
========================================== */

interface OTStrength {
    title: string;
    description: string;
    icon: string;
}

const otStrengths: OTStrength[] = [
    {
        title: "Embedded Specialists",
        description:
            "Specialists with genuine depth of knowledge and real-life experience in critical infrastructure sectors.",
        icon: "ri-user-star-line",
    },
    {
        title: "Integrated Capability Team",
        description:
            "A multidisciplinary team that carries responsibility across the programme without fragmented handovers.",
        icon: "ri-node-tree",
    },
    {
        title: "Fully Managed Solutions",
        description:
            "An accountable approach from initial consultation and technical planning through to project delivery.",
        icon: "ri-settings-3-line",
    },
    {
        title: "Independent Assurance",
        description:
            "Testing, monitoring and technical oversight appropriate to safety-critical infrastructure environments.",
        icon: "ri-shield-check-line",
    },
];



type SectorId = "rail" | "energy";

const sectorTabs: { id: SectorId; label: string; icon: string }[] = [
    { id: "rail", label: "Rail and transport", icon: "ri-train-line" },
    { id: "energy", label: "Energy, oil and gas", icon: "ri-flashlight-line" },
];

/** Sets a stagger delay used by the CSS transitions. */
const delay = (ms: number): CSSProperties =>
    ({ "--d": `${ms}ms` }) as CSSProperties;

const OperationalTechnology: FC = () => {
    const rootRef = useRef<HTMLDivElement>(null);
    const [sector, setSector] = useState<SectorId>("rail");

    /* ---------- SEO ---------- */
    useEffect(() => {
        const oldTitle = document.title;
        const meta = document.querySelector<HTMLMetaElement>(
            'meta[name="description"]'
        );
        const oldDescription = meta?.content;

        document.title = "Operational Technology Services | IPGS";

        if (meta) {
            meta.content =
                "IPGS delivers operational technology services for rail and energy infrastructure, built and billed as a discipline in its own right.";
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

    /* ---------- Tabs: arrow-key navigation ---------- */
    const onTabKey = (e: KeyboardEvent<HTMLButtonElement>) => {
        if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
        e.preventDefault();
        const next: SectorId = sector === "rail" ? "energy" : "rail";
        setSector(next);
        document.getElementById(`ipgs-ot-tab-${next}`)?.focus();
    };

    return (
        <div className="js-scroll ipgs-ot-page is-anim" ref={rootRef}>
            {/* ================= BANNER ================= */}
            <section className="ipgs-ot-banner" aria-label="Operational Technology page banner">
                <div className="ipgs-ot-banner-ring" aria-hidden="true" />
                <div className="ipgs-ot-banner-inner">
                    <h2>Operational technology services for infrastructure that can't afford to fail</h2>
                    <nav aria-label="Breadcrumb">
                        <Link to="/">Home</Link>
                        <span aria-hidden="true"> - </span>
                        <span aria-current="page">Operational Technology</span>
                    </nav>
                </div>
            </section>

            
            {/* ================= THE CHALLENGE ================= */}
            <section className="ipgs-ot-challenge">
                <div className="container">
                    <div className="ipgs-ot-challenge-grid">
                        <div className="ipgs-ot-challenge-head">
                            <div className="ipgs-ot-label" data-reveal="up">
                                <span></span>
                                The challenge
                            </div>

                            <h2 data-reveal="up" style={delay(100)}>
                                Staying on track requires a unique blend of
                                experience and expertise
                            </h2>
                        </div>

                        <div className="ipgs-ot-challenge-content">
                            <p data-reveal="up" style={delay(150)}>
                                Rail networks, energy sites, and other critical
                                infrastructure carry a mix of ageing and modern
                                systems, meaning operational technology and
                                corporate IT are becoming increasingly
                                connected. That convergence brings real
                                cybersecurity exposure, and coordinating
                                several suppliers across one environment often
                                leaves accountability split when something goes
                                wrong.
                            </p>

                            <div className="ipgs-ot-statement" data-reveal="draw">
                                <h3>But not on our watch.</h3>
                            </div>

                            <p data-reveal="up" style={delay(150)}>
                                IPGS built its operational technology services
                                as a standalone discipline, staffed and billed
                                separately from telecom and enterprise IT work.
                                Our rail, energy, and infrastructure clients
                                get a team built specifically around critical
                                infrastructure work, with the technical depth
                                and real-world experience that it requires.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= SECTORS (tabs) ================= */}
            <section className="ipgs-ot-sectors">
                <div className="container">
                    <div className="ipgs-ot-sector-heading">
                        <div className="ipgs-ot-label" data-reveal="up">
                            <span></span>
                            Our operational technology
                        </div>

                        <div className="ipgs-ot-sector-heading-grid">
                            <h2 data-reveal="up" style={delay(100)}>
                                Two safety-critical OT use cases, one
                                accountable team
                            </h2>

                            <div data-reveal="up" style={delay(200)}>
                                <p>
                                    Both disciplines carry their own technical
                                    demands, and our multidisciplinary team has
                                    everything needed to meet each challenge.
                                </p>

                                <p>
                                    The secret to our long history of
                                    delivering safety-critical infrastructure
                                    lies in our unwavering approach to
                                    planning, monitoring, and technical
                                    leadership. Nothing gets handed off between
                                    departments partway through a programme,
                                    and every design follows IEC
                                    62443-aligned segmentation from the outset.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="ipgs-ot-tabs" data-reveal="up" style={delay(100)}>
                        <div
                            className="ipgs-ot-tablist"
                            role="tablist"
                            aria-label="Operational technology sectors"
                        >
                            {sectorTabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    id={`ipgs-ot-tab-${tab.id}`}
                                    type="button"
                                    role="tab"
                                    aria-selected={sector === tab.id}
                                    aria-controls={`ipgs-ot-panel-${tab.id}`}
                                    tabIndex={sector === tab.id ? 0 : -1}
                                    className={`ipgs-ot-tab${
                                        sector === tab.id ? " is-active" : ""
                                    }`}
                                    onClick={() => setSector(tab.id)}
                                    onKeyDown={onTabKey}
                                >
                                    <i className={tab.icon} aria-hidden="true"></i>
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* RAIL */}
                        <div
                            id="ipgs-ot-panel-rail"
                            role="tabpanel"
                            aria-labelledby="ipgs-ot-tab-rail"
                            hidden={sector !== "rail"}
                            className="ipgs-ot-panel"
                        >
                            <div className="ipgs-ot-panel-image ipgs-ot-sector-art ipgs-ot-sector-art--rail" aria-hidden="true">
                                <div className="ipgs-ot-sector-art-head"><span>IPGS / OPERATIONAL TECHNOLOGY</span><span>01 / RAIL</span></div>
                                <div className="ipgs-ot-sector-art-symbol"><i className="ri-train-line" /></div>
                                <strong>Rail &amp;<br />Transport</strong>
                                <div className="ipgs-ot-sector-art-steps"><span>Signalling</span><span>FTN / FTNx</span><span>ETCS readiness</span></div>
                            </div>

                            <div className="ipgs-ot-panel-content">
                                <h3>Rail and transport</h3>

                                <p>
                                    Our proven rail signalling services
                                    underpin this capability, covering
                                    signalling and control network enablement,
                                    FTN and FTNx migration, and digital
                                    signalling readiness for environments
                                    moving toward ETCS.
                                </p>

                                <p>
                                    Every project is backed by full testing,
                                    assurance, and handover before a system
                                    goes live. Engineers hold IRSE
                                    certification, recognised as the gold
                                    standard in rail and signalling
                                    environments, so every change carries a
                                    safety case sensibility as well as deep
                                    technical knowledge.
                                </p>

                                <Link
                                    to="/operational-technology/rail-transport"
                                    className="ipgs-ot-text-link"
                                >
                                    Learn more
                                    <i className="ri-arrow-right-up-line" aria-hidden="true"></i>
                                </Link>
                            </div>
                        </div>

                        {/* ENERGY */}
                        <div
                            id="ipgs-ot-panel-energy"
                            role="tabpanel"
                            aria-labelledby="ipgs-ot-tab-energy"
                            hidden={sector !== "energy"}
                            className="ipgs-ot-panel"
                        >
                            <div className="ipgs-ot-panel-image ipgs-ot-sector-art ipgs-ot-sector-art--energy" aria-hidden="true">
                                <div className="ipgs-ot-sector-art-head"><span>IPGS / OPERATIONAL TECHNOLOGY</span><span>02 / ENERGY</span></div>
                                <div className="ipgs-ot-sector-art-symbol"><i className="ri-flashlight-line" /></div>
                                <strong>Energy, Oil<br />&amp; Gas</strong>
                                <div className="ipgs-ot-sector-art-steps"><span>Resilient IP / MPLS</span><span>Segmentation</span><span>Zero Trust</span></div>
                            </div>

                            <div className="ipgs-ot-panel-content">
                                <h3>Energy, oil and gas</h3>

                                <p>
                                    Energy and oil and gas sites draw on the
                                    same operational technology discipline,
                                    connecting wellheads, compressor stations,
                                    and pipeline monitoring points to
                                    processing facilities and control rooms.
                                </p>

                                <p>
                                    Connectivity runs over resilient IP and
                                    MPLS infrastructure, with legacy SDH and
                                    PDH systems migrated to modern platforms
                                    through careful coexistence planning,
                                    testing, and handover. Network segmentation
                                    and Zero Trust access controls keep safety
                                    instrumented systems isolated from
                                    corporate traffic, protecting the process
                                    control layer without slowing daily
                                    operations.
                                </p>

                                <Link to="/contact" className="ipgs-ot-text-link">
                                    Discuss energy OT services
                                    <i className="ri-arrow-right-up-line" aria-hidden="true"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= WHY IPGS ================= */}
            <section className="ipgs-ot-why">
                <div className="container">
                    <div className="ipgs-ot-why-top">
                        <div>
                            <div className="ipgs-ot-label" data-reveal="up">
                                <span></span>
                                The IPGS difference
                            </div>

                            <h2 data-reveal="up" style={delay(100)}>
                                Why OT clients rely on IPGS
                            </h2>
                        </div>

                        <div className="ipgs-ot-why-copy">
                            <p data-reveal="up" style={delay(150)}>
                                IPGS is built on the same client-first approach
                                that runs through every discipline, which is
                                probably why we haven’t lost a client since
                                2016.
                            </p>

                            <p data-reveal="up" style={delay(230)}>
                                Operational technology services from IPGS carry
                                that same standard, delivered through embedded
                                specialists, an integrated capability team,
                                fully managed solutions, and independent
                                assurance.
                            </p>

                            <p data-reveal="up" style={delay(310)}>
                                Every OT specialist brings genuine depth of
                                knowledge and real-life experience in at least
                                one sector, whether it’s in the energy or
                                transport sector. That focus means critical
                                infrastructure services come from people who
                                already understand the regulatory and safety
                                environment before the first meeting. It's the
                                same standard behind every programme, from the
                                initial consultation to project delivery.
                            </p>
                        </div>
                    </div>

                    <div className="ipgs-ot-why-band ipgs-ot-delivery-band" data-reveal="up">
                        <div className="ipgs-ot-delivery-band-heading"><span>ONE ACCOUNTABLE TEAM</span><strong>Critical infrastructure. Connected expertise.</strong></div>
                        <div className="ipgs-ot-delivery-band-items" aria-label="Our delivery approach">
                            <div><i className="ri-shield-check-line" aria-hidden="true" /><span>Secure by design</span></div>
                            <div><i className="ri-node-tree" aria-hidden="true" /><span>Integrated delivery</span></div>
                            <div><i className="ri-settings-3-line" aria-hidden="true" /><span>Managed end to end</span></div>
                        </div>
                    </div>

                    <div className="ipgs-ot-pillars">
                        {otStrengths.map((item, i) => (
                            <article
                                className="ipgs-ot-pillar"
                                key={item.title}
                                data-reveal="up"
                                style={delay(i * 120)}
                            >
                                <div className="ipgs-ot-pillar-icon">
                                    <i className={item.icon} aria-hidden="true"></i>
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="ipgs-ot-final">
                <div className="ipgs-ot-signal" aria-hidden="true">
                    <span></span>
                    <span></span>
                    <span></span>
                    <i></i>
                </div>

                <div className="container">
                    <div className="ipgs-ot-final-inner">
                        <div>
                            <div className="ipgs-ot-label" data-reveal="up">
                                <span></span>
                                Let's work together
                            </div>

                            <h2 data-reveal="up" style={delay(100)}>
                                Learn more about our operational technology
                                expertise
                            </h2>

                            <p data-reveal="up" style={delay(200)}>
                                Transport and energy infrastructure deserves
                                specialists who already understand what’s at
                                stake and how to deliver infrastructure that
                                just works.
                            </p>

                            <p data-reveal="up" style={delay(280)}>
                                Get in touch and talk to our operational
                                technology services team.
                            </p>
                        </div>

                        <div
                            className="ipgs-ot-final-action"
                            data-reveal="up"
                            style={delay(380)}
                        >
                            <Link to="/contact" className="ipgs-ot-final-button">
                                Get in touch
                                <i className="ri-arrow-right-up-line" aria-hidden="true"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OperationalTechnology;
