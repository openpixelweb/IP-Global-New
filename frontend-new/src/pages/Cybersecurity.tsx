
import { useEffect, useId, useState } from "react";
import type { FC } from "react";
import { Link } from "react-router-dom";


import "../assets/css/cybersecurity.css";

/* ==========================================
   TYPES
========================================== */

interface SecurityItem {
    number: string;
    title: string;
    description: string;
    icon: string;
}

/* ==========================================
   EIGHT APPROVED SECURITY CAPABILITIES
========================================== */

const securityServices: SecurityItem[] = [
    {
        number: "01",
        title: "Find your weak spots before anyone else does",
        description:
            "Our penetration testing looks for weaknesses the way an attacker would, with or without inside knowledge of your systems. You get a clear threat assessment, and we help you fix each finding and confirm it's closed.",
        icon: "ri-search-eye-line",
    },
    {
        number: "02",
        title: "Build security into your cloud from day one",
        description:
            "We move you from legacy systems to a private cloud and secure it to current standards. Your customers' data stays protected throughout, and all you need to do is give us the go-ahead.",
        icon: "ri-cloud-line",
    },
    {
        number: "03",
        title: "Stop problems spreading across your network",
        description:
            "When threats get through, we know how to limit their impact. By splitting your network into small, separate zones and adding virtual firewalls between them, we make sure a problem in one zone doesn’t spread to others.",
        icon: "ri-node-tree",
    },
    {
        number: "04",
        title: "Control traffic down to the individual feature",
        description:
            "We can let an application through while blocking part of it, allowing you to prevent chatbots and other website functions from appearing on a website, for example. You can’t get that level of control from a traditional firewall.",
        icon: "ri-filter-3-line",
    },
    {
        number: "05",
        title: "Secure the core of your mobile data network",
        description:
            "Our specialists know how to protect the part of a mobile network that carries your subscribers' data. We offer protection across several data centres and several layers of defence. We regularly secure national and global roaming-enabled networks.",
        icon: "ri-base-station-line",
    },
    {
        number: "06",
        title: "Keep watch with tools built specifically for your team",
        description:
            "We build the management consoles and threat-detection tools your security team needs, and we can run them for you afterwards. That’s a level of customisation that makes training and implementation easier than ever.",
        icon: "ri-radar-line",
    },
    {
        number: "07",
        title: "Keep every system up to date",
        description:
            "Keeping track of the latest cybersecurity threats and developments is a priority to us. Performing regular security audits and tracking emerging software security flaws allow us to implement the right security updates before threats turn into serious issues.",
        icon: "ri-refresh-line",
    },
    {
        number: "08",
        title: "Get extra support after go-live",
        description:
            "A time-limited period of extra support follows each deployment, so any security issue found afterwards gets a fast, agreed response. And if you need ongoing support, we’re always here when you need us.",
        icon: "ri-customer-service-2-line",
    },
];

/* ==========================================
   FOUR APPROVED SECURITY ADVANTAGES
========================================== */

const securityAdvantages: SecurityItem[] = [
    {
        number: "01",
        title: "Every risk recorded and tracked",
        description:
            "A risk register records each risk and what happened to it, from the initial discovery to the final resolution. We assign responsibility to individuals, ensuring there’s always someone ready to own the results.",
        icon: "ri-file-list-3-line",
    },
    {
        number: "02",
        title: "We build it, and we can run it, too",
        description:
            "We design and integrate your security, and we can operate it for you afterwards if that’s something you need. Our cybersecurity services are built from the ground up based on your specific requirements.",
        icon: "ri-settings-3-line",
    },
    {
        number: "03",
        title: "Cybersecurity services that continue after go-live",
        description:
            "Support carries on once your system is live, with fixes and follow-up reports built into the service. We are genuinely invested in every project we take on. Maximum protection for your data is always the measure of our success.",
        icon: "ri-shield-check-line",
    },
    {
        number: "04",
        title: "Engineers of the highest calibre",
        description:
            "We vet every hire comprehensively, ensuring they demonstrate the level of expertise and experience that sets IPGS apart in the field of cybersecurity. This means you’re guaranteed the best technical minds in the business.",
        icon: "ri-user-star-line",
    },
];

/* ==========================================
   ACCESSIBLE SECURITY ACCORDION
========================================== */

const SecurityServices: FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const idPrefix = useId();

    return (
        <div className="ipgs-cyber-services-list">
            {securityServices.map((service, index) => {
                const isOpen = activeIndex === index;
                const panelId = `${idPrefix}-panel-${index}`;
                const triggerId = `${idPrefix}-trigger-${index}`;

                return (
                    <article
                        className={`ipgs-cyber-service ${
                            isOpen ? "is-active" : ""
                        }`}
                        key={service.number}
                    >
                        <h3 className="ipgs-cyber-service-heading">
                            <button
                                id={triggerId}
                                type="button"
                                className="ipgs-cyber-service-trigger"
                                aria-expanded={isOpen}
                                aria-controls={panelId}
                                onClick={() =>
                                    setActiveIndex(
                                        isOpen ? null : index
                                    )
                                }
                            >
                                <span className="ipgs-cyber-service-number">
                                    {service.number}
                                </span>

                                <span className="ipgs-cyber-service-icon">
                                    <i
                                        className={service.icon}
                                        aria-hidden="true"
                                    ></i>
                                </span>

                                <span className="ipgs-cyber-service-title">
                                    {service.title}
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

                        <div
                            id={panelId}
                            role="region"
                            aria-labelledby={triggerId}
                            className="ipgs-cyber-service-panel"
                            hidden={!isOpen}
                        >
                            <p>{service.description}</p>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

/* ==========================================
   MAIN CYBERSECURITY PAGE
========================================== */

const Cybersecurity: FC = () => {
    useEffect(() => {
        const previousTitle = document.title;

        const meta = document.querySelector<HTMLMetaElement>(
            'meta[name="description"]'
        );

        const previousDescription = meta?.content;

        document.title =
            "Cybersecurity Services for Networks and Cloud | IPGS";

        if (meta) {
            meta.content =
                "IPGS provides cybersecurity services, from penetration testing and TSA compliance to secure cloud builds and support after go-live. Talk to our security team today.";
        }

        /* Scroll animations - no external libraries */

        const elements = document.querySelectorAll<HTMLElement>(
            ".ipgs-cyber-page [data-cyber-reveal]"
        );

        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        let observer: IntersectionObserver | null = null;

        if (
            !reducedMotion &&
            "IntersectionObserver" in window
        ) {
            observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add(
                                "cyber-visible"
                            );

                            observer?.unobserve(entry.target);
                        }
                    });
                },
                {
                    threshold: 0.08,
                    rootMargin: "0px 0px -24px 0px",
                }
            );

            elements.forEach((element) =>
                observer?.observe(element)
            );
        } else {
            elements.forEach((element) => {
                element.classList.add("cyber-visible");
            });
        }

        return () => {
            observer?.disconnect();
            document.title = previousTitle;

            if (
                meta &&
                previousDescription !== undefined
            ) {
                meta.content = previousDescription;
            }
        };
    }, []);

    return (
        <>
            <div className="js-scroll ipgs-cyber-page">

                {/* =====================================
                    SECTION 01 - OUR TEAM STYLE HERO BANNER
                ===================================== */}

                <section className="ipgs-cyber-team-hero" aria-label="Cybersecurity page banner">
                    <div className="ipgs-cyber-team-hero__ring" aria-hidden="true" />
                    <div className="ipgs-cyber-team-hero__inner">
                        <h2 className="ipgs-cyber-team-hero__title">Cybersecurity services
                                    that find <br />the gaps
                                     before anyone else does</h2>
                        <nav className="ipgs-cyber-team-hero__breadcrumb" aria-label="Breadcrumb">
                            <Link to="/">Home</Link>
                            <span aria-hidden="true"> - </span>
                            <span aria-current="page">Cybersecurity</span>
                        </nav>
                    </div>
                </section>

                
                {/* =====================================
                    SECTION 03 - COMPLIANCE
                ===================================== */}

                <section className="ipgs-cyber-compliance">
                    <div className="container">
                        <div className="ipgs-cyber-compliance-grid">

                            <div data-cyber-reveal>
                                <div className="ipgs-cyber-label">
                                    <span></span>
                                    SECURITY & COMPLIANCE
                                </div>

                                <h2>
                                    Cybersecurity services
                                    built to
                                    <span> comply and protect</span>
                                </h2>
                            </div>

                            <div data-cyber-reveal>
                                <p>
                                    Our cybersecurity services
                                    are built to comply with
                                    the rules you work to,
                                    such as the Telecommunications
                                    Security Act, CIS benchmarks,
                                    NIST, and GSMA guidance.
                                </p>

                                <p>
                                    We write the policies and train
                                    your people, then configure the
                                    technology to match. Behind
                                    it all sits one point of contact,
                                    so questions always reach someone
                                    who knows your project.
                                </p>

                                <div className="ipgs-cyber-standards">
                                    <span>TSA</span>
                                    <span>CIS</span>
                                    <span>NIST</span>
                                    <span>GSMA</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* =====================================
                    SECTION 04 - EIGHT SERVICES
                ===================================== */}

                <section
                    className="ipgs-cyber-services"
                    aria-labelledby="ipgs-cyber-services-title"
                >
                    <div className="container">

                        <div
                            className="ipgs-cyber-services-heading"
                            data-cyber-reveal
                        >
                            <div className="ipgs-cyber-label">
                                <span></span>
                                WHAT WE DELIVER
                            </div>

                            <div className="ipgs-cyber-heading-grid">
                                <h2 id="ipgs-cyber-services-title">
                                    Proven methodologies for
                                    <span> maximum network protection</span>
                                </h2>

                                <p>
                                    It’s not for you to adapt to our
                                    way of working. We do the adapting
                                    at IPGS. But we bring with us a range
                                    of proven approaches designed to
                                    give your data maximum,
                                    around-the-clock protection.
                                </p>
                            </div>
                        </div>

                        <div className="ipgs-cyber-services-layout">

                            <aside className="ipgs-cyber-services-feature" data-cyber-reveal>
                                <div className="ipgs-cyber-feature-kicker"><i className="ri-shield-keyhole-line" /> NETWORK PROTECTION</div>
                                <h3>Built around your infrastructure. <span>Not the other way around.</span></h3>
                                <p>A complete security approach from one accountable team, spanning cloud, networks, and operations.</p>
                                <div className="ipgs-cyber-feature-divider" />
                                <div className="ipgs-cyber-feature-row"><i className="ri-search-eye-line" /><span>Threat assessment & testing</span><b>01</b></div>
                                <div className="ipgs-cyber-feature-row"><i className="ri-cloud-line" /><span>Secure cloud & infrastructure</span><b>02</b></div>
                                <div className="ipgs-cyber-feature-row"><i className="ri-radar-line" /><span>Monitoring & ongoing support</span><b>03</b></div>
                                <div className="ipgs-cyber-feature-footer"><span className="ipgs-cyber-feature-pulse" /> ONE TEAM. SHARED ACCOUNTABILITY.</div>
                            </aside>

                            <SecurityServices />
                        </div>

                    </div>
                </section>

                {/* =====================================
                    SECTION 05 - TELECOM EXPERIENCE
                ===================================== */}

                <section className="ipgs-cyber-experience">
                    <div className="container">
                        <div className="ipgs-cyber-experience-grid">

                            <div className="ipgs-cyber-experience-panel" data-cyber-reveal>
                                <span className="ipgs-cyber-experience-eyebrow">TELECOM SECURITY / EXPERIENCE</span>
                                <div className="ipgs-cyber-experience-emblem"><i className="ri-global-line" aria-hidden="true" /><span>DELIVERY<br />EXPERIENCE</span></div>
                                <div className="ipgs-cyber-experience-rule" />
                                <div className="ipgs-cyber-experience-points">
                                    <div><span>01</span><strong>Private cloud migration</strong></div>
                                    <div><span>02</span><strong>Network segmentation</strong></div>
                                    <div><span>03</span><strong>Multi-layer protection</strong></div>
                                </div>
                            </div>

                            <div
                                className="ipgs-cyber-experience-content"
                                data-cyber-reveal
                            >
                                <div className="ipgs-cyber-label">
                                    <span></span>
                                    DELIVERY EXPERIENCE
                                </div>

                                <h2>
                                    Experience acquired via various
                                    <span> high-profile telecom programmes</span>
                                </h2>

                                <p>
                                    We moved VodafoneThree from legacy
                                    systems to a new private cloud,
                                    ensuring it complied with all
                                    the relevant regulatory rules.
                                </p>

                                <p>
                                    Virtual firewalls and small,
                                    separate network zones kept each
                                    part of the environment contained,
                                    and close inspection of traffic
                                    added another layer of defence.
                                    We're also securing a large
                                    mobile data network across several
                                    data centres.
                                </p>

                                <Link
                                    to="/Contact"
                                    className="ipgs-cyber-text-link"
                                >
                                    Discuss Your Security Requirements
                                    <i
                                        className="ri-arrow-right-up-line"
                                        aria-hidden="true"
                                    ></i>
                                </Link>
                            </div>

                        </div>
                    </div>
                </section>

                {/* =====================================
                    SECTION 06 - WHY IPGS
                ===================================== */}

                <section className="ipgs-cyber-why">
                    <div className="container">

                        <div
                            className="ipgs-cyber-why-heading"
                            data-cyber-reveal
                        >
                            <div className="ipgs-cyber-label">
                                <span></span>
                                THE IPGS DIFFERENCE
                            </div>

                            <h2>
                                Why security teams
                                <span> trust IPGS</span>
                            </h2>

                            <p>
                                When clients turn to us for
                                cybersecurity, they stick around.
                                They also refer us to other
                                organisations in need of end-to-end
                                cybersecurity services. There are
                                several reasons why, but here
                                are a few of the most prevalent.
                            </p>
                        </div>

                        <div className="ipgs-cyber-why-grid">
                            {securityAdvantages.map((item) => (
                                <article
                                    key={item.number}
                                    className="ipgs-cyber-why-item"
                                    data-cyber-reveal
                                >
                                    <div className="ipgs-cyber-why-top">
                                        <span>{item.number}</span>
                                        <i
                                            className={item.icon}
                                            aria-hidden="true"
                                        ></i>
                                    </div>

                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =====================================
                    SECTION 07 - FINAL CTA
                ===================================== */}

                <section className="ipgs-cyber-final">
                    <div className="container">
                        <div className="ipgs-cyber-final-grid">

                            <div data-cyber-reveal>
                                <div className="ipgs-cyber-label">
                                    <span></span>
                                    LET'S PROTECT YOUR NETWORK
                                </div>

                                <h2>
                                    Stay one step ahead of the
                                    latest cyber threats
                                    <span> with the help of IPGS</span>
                                </h2>

                                <p>
                                    Tell us which standards you
                                    answer to and where your
                                    biggest risks sit, and we'll
                                    show you how to close the gaps.
                                    Get in touch to discuss your
                                    network with a time-served
                                    cybersecurity expert.
                                </p>
                            </div>

                            <div
                                className="ipgs-cyber-final-action"
                                data-cyber-reveal
                            >
                                <Link
                                    to="/Contact"
                                    className="ipgs-cyber-final-btn"
                                >
                                    Talk to Our Cybersecurity Team Today
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

export default Cybersecurity;
