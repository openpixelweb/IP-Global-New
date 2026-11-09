
import { useEffect, useState } from "react";
import type { FC } from "react";
import { Link } from "react-router-dom";

import "../assets/css/ran.css";

/* ==========================================
   TYPES
========================================== */

interface RANService {
    number: string;
    title: string;
    description: string;
    icon: string;
}

interface RANPrinciple {
    number: string;
    title: string;
    description: string;
}

/* ==========================================
   SIX APPROVED RAN CAPABILITIES
========================================== */

const ranServices: RANService[] = [
    {
        number: "01",
        title: "Independent design that suits your whole network",
        description:
            "We design across the major RAN vendors without favouring any of them. Our engineers analyse your node dumps and recommend features that enhance user experience and performance KPIs.",
        icon: "ri-node-tree",
    },
    {
        number: "02",
        title: "Roll out large programmes without losing continuity",
        description:
            "We support large rollout and transformation programmes from integration through stabilisation, ensuring a consistent service across legacy and modern platforms.",
        icon: "ri-base-station-line",
    },
    {
        number: "03",
        title: "Bring new 5G features into service smoothly",
        description:
            "We implement new features on an end-to-end basis, from 5G standalone slicing and VoNR to advanced scheduling and power saving. We also offer expertise in integrations and decommissioning.",
        icon: "ri-signal-tower-line",
    },
    {
        number: "04",
        title: "Combine transport and radio for one secure network",
        description:
            "We integrate transport and RAN with secure connectivity that meets stringent regulatory requirements in the UK and around the world. Migration and hybrid integration are part of the same job.",
        icon: "ri-shield-check-line",
    },
    {
        number: "05",
        title: "Get faulty hardware back in service",
        description:
            "Our trusted repair partners take care of faulty RAN and transport cards, so you get working hardware back in service without any disruption or hassle.",
        icon: "ri-tools-line",
    },
    {
        number: "06",
        title: "Let AI and automation do the routine work",
        description:
            "We use AI and automation tools to manage energy-saving switch-off on legacy RAN and RF optimisation. Drive-test analysis and test automation ensure your engineers spend more time on strategic decisions.",
        icon: "ri-cpu-line",
    },
];

/* ==========================================
   FOUR APPROVED DELIVERY PRINCIPLES
========================================== */

const ranPrinciples: RANPrinciple[] = [
    {
        number: "01",
        title: "We adapt to your networks",
        description:
            "We work around your governance and standards, so there's no new process to learn. Transitioning to IPGS is as fast as it is painless.",
    },
    {
        number: "02",
        title: "Responsive when things change",
        description:
            "A dedicated UK team ramps up fast when things change. Our India-based team is always ready to pitch in when additional expertise is needed.",
    },
    {
        number: "03",
        title: "Multi-vendor RAN support you can rely on",
        description:
            "We use multiple vendors without favouring any one of them. This approach ensures your design and advice come with no strings attached.",
    },
    {
        number: "04",
        title: "Cost-effective by design",
        description:
            "Our UK team and our engineers in India work together, so you get expert help and proven expertise at a competitive price.",
    },
];

/* ==========================================
   INTERACTIVE RAN CAPABILITY
========================================== */

const RANCapabilities: FC = () => {
    const [activeItem, setActiveItem] = useState<number | null>(0);

    return (
        <div className="ipgs-ran-capabilities-grid">
            {ranServices.map((service, index) => {
                const isOpen = activeItem === index;

                return (
                    <article
                        className={`ipgs-ran-capability ${
                            isOpen ? "is-active" : ""
                        }`}
                        key={service.number}
                        data-ran-reveal
                    >
                        <h3>
                            <button
                                type="button"
                                className="ipgs-ran-capability-trigger"
                                aria-expanded={isOpen}
                                aria-controls={`ran-panel-${index}`}
                                onClick={() =>
                                    setActiveItem(
                                        isOpen ? null : index
                                    )
                                }
                            >
                                <span className="ipgs-ran-capability-index">
                                    {service.number}
                                </span>

                                <span className="ipgs-ran-capability-name">
                                    {service.title}
                                </span>

                                <span className="ipgs-ran-capability-icon">
                                    <i
                                        className={service.icon}
                                        aria-hidden="true"
                                    ></i>
                                </span>

                                <i
                                    className={
                                        isOpen
                                            ? "ri-subtract-line"
                                            : "ri-add-line"
                                    }
                                    aria-hidden="true"
                                ></i>
                            </button>
                        </h3>

                        {isOpen && (
                            <div
                                id={`ran-panel-${index}`}
                                className="ipgs-ran-capability-panel"
                            >
                                <p>{service.description}</p>
                            </div>
                        )}
                    </article>
                );
            })}
        </div>
    );
};

/* ==========================================
   MAIN RAN PAGE
========================================== */

const RAN: FC = () => {
    useEffect(() => {
        const oldTitle = document.title;
        const meta = document.querySelector<HTMLMetaElement>(
            'meta[name="description"]'
        );
        const oldDescription = meta?.content;

        document.title =
            "Multi-Vendor RAN Support for Mobile Operators | IPGS";

        if (meta) {
            meta.content =
                "IPGS provides multi-vendor RAN support for mobile operators, from independent design and rollout to testing and 4th-line support. Talk to our RAN team today.";
        }

        const elements = document.querySelectorAll<HTMLElement>(
            ".ipgs-ran-page [data-ran-reveal]"
        );

        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        let observer: IntersectionObserver | null = null;

        if (
            !reducedMotion &&
            typeof IntersectionObserver !== "undefined"
        ) {
            observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add(
                                "ran-visible"
                            );
                            observer?.unobserve(entry.target);
                        }
                    });
                },
                {
                    threshold: 0.06,
                    rootMargin: "0px 0px -25px 0px",
                }
            );

            elements.forEach((element) =>
                observer?.observe(element)
            );
        } else {
            elements.forEach((element) =>
                element.classList.add("ran-visible")
            );
        }

        return () => {
            observer?.disconnect();
            document.title = oldTitle;

            if (meta && oldDescription !== undefined) {
                meta.content = oldDescription;
            }
        };
    }, []);

    return (
        <>
            <div className="js-scroll ipgs-ran-page">
                {/* ================= HERO: IPGS BRAND ================= */}
                <section className="ipgs-ran-brand-hero" aria-labelledby="ipgs-ran-hero-title">
                    <div className="ipgs-ran-brand-hero-ring" aria-hidden="true" />
                    <div className="ipgs-ran-brand-hero-inner">
                        <h1 id="ipgs-ran-hero-title">
                            Multi-vendor RAN support that keeps<br className="ipgs-ran-hero-desktop-break" /> your radio network performing optimally
                        </h1>
                        <nav className="ipgs-ran-brand-breadcrumb" aria-label="Breadcrumb">
                            <Link to="/">Home</Link>
                            <span aria-hidden="true"> - </span>
                            <Link to="/telecom-network-services">Telecom Network Services</Link>
                            <span aria-hidden="true"> - </span>
                            <span aria-current="page">RAN</span>
                        </nav>
                    </div>
                </section>

                {/* ======================================
                    03 - OPERATOR-FIRST APPROACH
                ====================================== */}

                <section className="ipgs-ran-approach">
                    <div className="container">
                        <div className="ipgs-ran-approach-layout">

                            <div data-ran-reveal>
                                <div className="ipgs-ran-label">
                                    <span></span>
                                    HOW WE SUPPORT OPERATORS
                                </div>

                                <span className="ipgs-ran-chapter">
                                    01 / OUR APPROACH
                                </span>

                                <h2>
                                    Multi-vendor RAN support
                                    that fits the way
                                    <span> you already work</span>
                                </h2>
                            </div>

                            <div
                                className="ipgs-ran-approach-copy"
                                data-ran-reveal
                            >
                                <p>
                                    Our multi-vendor RAN support
                                    works under your governance
                                    and uses your tools and
                                    standards, so you never
                                    have to worry about transition
                                    issues or disruption.
                                </p>

                                <p>
                                    Whether you engage us directly
                                    or bring us in alongside your
                                    existing service partners, our
                                    RAN team supports programmes
                                    with fast and precise
                                    implementation and help from
                                    our wider resource pool in India.
                                </p>

                                <div className="ipgs-ran-approach-note">
                                    <i
                                        className="ri-check-double-line"
                                        aria-hidden="true"
                                    ></i>
                                    <strong>
                                        Your tools. Your standards.
                                        One experienced RAN team.
                                    </strong>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* ======================================
                    04 - SIX CAPABILITIES
                ====================================== */}

                <section className="ipgs-ran-services">
                    <div className="container">

                        <div
                            className="ipgs-ran-services-heading"
                            data-ran-reveal
                        >
                            <div className="ipgs-ran-label">
                                <span></span>
                                OUR TECHNICAL CAPABILITIES
                            </div>

                            <div className="ipgs-ran-heading-grid">
                                <h2>
                                    Strengthen your radio network
                                    <span> without missing a beat</span>
                                </h2>

                                <p>
                                    Our engineers will embed
                                    themselves seamlessly into
                                    your existing radio network —
                                    providing exceptional services
                                    backed by years of on-site
                                    experience.
                                </p>
                            </div>
                        </div>

                        <RANCapabilities />

                    </div>
                </section>

                {/* ======================================
                    05 - TIER 1 EXPERIENCE
                ====================================== */}

                <section className="ipgs-ran-experience">
                    <div className="container">
                        <div className="ipgs-ran-experience-layout">

                            <div className="ipgs-ran-experience-feature" data-ran-reveal>
                                <div className="ipgs-ran-feature-top"><span>ENGINEERING EXPERIENCE</span><span>IPGS / RAN</span></div>
                                <div className="ipgs-ran-feature-num" aria-hidden="true">01<span>/</span>03</div>
                                <h3>From network design<br />to live operation.</h3>
                                <div className="ipgs-ran-feature-list">
                                    <div><span>01</span><strong>Network sharing</strong><i className="ri-arrow-right-up-line" aria-hidden="true" /></div>
                                    <div><span>02</span><strong>LTE refarming</strong><i className="ri-arrow-right-up-line" aria-hidden="true" /></div>
                                    <div><span>03</span><strong>5G capacity expansion</strong><i className="ri-arrow-right-up-line" aria-hidden="true" /></div>
                                </div>
                            </div>

                            <div
                                className="ipgs-ran-experience-copy"
                                data-ran-reveal
                            >
                                <div className="ipgs-ran-label">
                                    <span></span>
                                    PROVEN OPERATOR EXPERIENCE
                                </div>

                                <h2>
                                    Experience from programmes at
                                    <span> a Tier 1 UK operator</span>
                                </h2>

                                <p>
                                    We've supported a Tier-1 UK
                                    operator with network sharing
                                    across two vendors' networks.
                                    Our teams have also contributed
                                    to LTE refarming and 5G
                                    capacity expansion.
                                </p>

                                <p>
                                    From design and test through
                                    to implementation, our RAN
                                    specialists are there to
                                    ensure your project is
                                    delivered seamlessly.
                                </p>

                                <Link
                                    to="/Contact"
                                    className="ipgs-ran-text-link"
                                >
                                    Discuss Your RAN Programme
                                    <i
                                        className="ri-arrow-right-up-line"
                                        aria-hidden="true"
                                    ></i>
                                </Link>
                            </div>

                        </div>
                    </div>
                </section>

                {/* ======================================
                    06 - FOUR DELIVERY PRINCIPLES
                ====================================== */}

                <section className="ipgs-ran-principles">
                    <div className="container">

                        <div
                            className="ipgs-ran-principles-heading"
                            data-ran-reveal
                        >
                            <div className="ipgs-ran-label">
                                <span></span>
                                THE IPGS DIFFERENCE
                            </div>

                            <h2>
                                Why operators trust IPGS
                                with their
                                <span> radio access networks</span>
                            </h2>

                            <p>
                                When we take on a RAN project,
                                we adhere to four non-negotiable
                                principles.
                            </p>
                        </div>

                        <div className="ipgs-ran-principles-grid">
                            {ranPrinciples.map((principle) => (
                                <article
                                    className="ipgs-ran-principle"
                                    key={principle.number}
                                    data-ran-reveal
                                >
                                    <span className="ipgs-ran-principle-number">
                                        {principle.number}
                                    </span>

                                    <div>
                                        <h3>{principle.title}</h3>
                                        <p>{principle.description}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ======================================
                    07 - FINAL CTA
                ====================================== */}

                <section className="ipgs-ran-final">
                    <div className="container">
                        <div className="ipgs-ran-final-layout">

                            <div data-ran-reveal>
                                <div className="ipgs-ran-label">
                                    <span></span>
                                    START A CONVERSATION
                                </div>

                                <h2>
                                    Start your RAN programme
                                    <span> with IPGS</span>
                                </h2>

                                <p>
                                    Tell us which vendors and
                                    which challenges sit on
                                    your roadmap, and we'll show
                                    you how our team fits
                                    around them.
                                </p>

                                <p>
                                    Get in touch and start
                                    the conversation.
                                </p>
                            </div>

                            <div
                                className="ipgs-ran-final-action"
                                data-ran-reveal
                            >
                                <Link
                                    to="/Contact"
                                    className="ipgs-ran-final-button"
                                >
                                    Talk to Our RAN Team Today
                                    <i
                                        className="ri-arrow-right-up-line"
                                        aria-hidden="true"
                                    ></i>
                                </Link>
                            </div>

                        </div>
                    </div>
                </section>

            </div>
        </>
    );
};

export default RAN;
