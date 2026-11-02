import { useEffect, useRef } from "react";
import type { CSSProperties, FC } from "react";
import { Link } from "react-router-dom";

import "../assets/css/core-network.css";

/* ==========================================
   TYPES
========================================== */

interface CoreItem {
    title: string;
    description: string;
    icon: string;
}

/* ==========================================
   FIVE APPROVED CORE NETWORK SERVICES
========================================== */

const coreServices: CoreItem[] = [
    {
        title: "Strengthen your team with core network resourcing",
        description:
            "Specialist engineers join your programme across design, build, test, and operations, so your milestones stay on track.",
        icon: "ri-team-line",
    },
    {
        title: "Move voice and SIP traffic across with confidence",
        description:
            "Our voice and SIP migration support takes you from legacy systems to modern infrastructure. The engineers involved understand what a dropped call costs you.",
        icon: "ri-phone-line",
    },
    {
        title: "Build TSA compliance into your programme from day one",
        description:
            "Regulatory guidance helps your programme meet Telecommunications Security Act requirements as it goes. Compliance stays on schedule because nobody leaves it until the end.",
        icon: "ri-shield-check-line",
    },
    {
        title: "Get more from your network",
        description:
            "Performance optimisation looks across your whole core for improvements. Your network works harder, and your subscribers feel the difference.",
        icon: "ri-speed-up-line",
    },
    {
        title: "Give your team time back with automation and AI",
        description:
            "Core network automation and AI take repetitive work off your operations team. Your engineers spend their time on the problems that need a human.",
        icon: "ri-cpu-line",
    },
];

/* ==========================================
   FOUR APPROVED OPERATOR ADVANTAGES
========================================== */

const coreAdvantages: CoreItem[] = [
    {
        title: "Speed when you need it",
        description:
            "We bring engineers on board quickly and with little fuss. Your timeline doesn't stop for onboarding or transition, so it’s our job to ensure speedy results that don’t interfere with your operations.",
        icon: "ri-timer-flash-line",
    },
    {
        title: "Experience from inside a Tier 1 operator",
        description:
            "Our consultants have spent years working with a Tier-1 UK mobile network operator, so they understand your world before they start.",
        icon: "ri-base-station-line",
    },
    {
        title: "Advisors who take the initiative and remain proactive at all times",
        description:
            "Experienced advisors support decisions about where your network goes next, and our expertise reaches well beyond transport and security.",
        icon: "ri-compass-3-line",
    },
    {
        title: "Core network services from a team that stays together",
        description:
            "We promote staff retention and track staff satisfaction levels, as settled teams deliver accurate and reliable work. You’ll see familiar faces from concept to completion, giving you the peace of mind that comes from knowing the people in control of your networks are fully invested in their continued success.",
        icon: "ri-group-line",
    },
];

const stages = [
    { label: "Design.", icon: "ri-pencil-ruler-2-line" },
    { label: "Migrate.", icon: "ri-git-merge-line" },
    { label: "Optimise.", icon: "ri-speed-up-line" },
];

const delivery = [
    { label: "Embedded expertise.", icon: "ri-node-tree" },
    { label: "Accountable delivery.", icon: "ri-shield-check-line" },
];

/** Sets a stagger delay used by the CSS transitions. */
const delay = (ms: number): CSSProperties =>
    ({ "--d": `${ms}ms` }) as CSSProperties;

/* ==========================================
   MAIN COMPONENT
========================================== */

const CoreNetwork: FC = () => {
    const rootRef = useRef<HTMLDivElement>(null);

    /* ---------- SEO ---------- */
    useEffect(() => {
        const previousTitle = document.title;
        const meta = document.querySelector<HTMLMetaElement>(
            'meta[name="description"]'
        );
        const previousDescription = meta?.content;

        document.title = "Core Network Services for Mobile Operators | IPGS";

        if (meta) {
            meta.content =
                "IPGS provides core network services for mobile operators, from design, test, and operations resourcing to voice and SIP migration, TSA guidance, and automation.";
        }

        return () => {
            document.title = previousTitle;
            if (meta && previousDescription !== undefined) {
                meta.content = previousDescription;
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
        <div className="js-scroll ipgs-core-page is-anim" ref={rootRef}>
            {/* ================= LOGO-BRAND HERO ================= */}
            <section className="ipgs-core-hero" aria-labelledby="ipgs-core-hero-title">
                <div className="ipgs-core-hero-orbit" aria-hidden="true" />
                <div className="ipgs-core-hero-container">
                    <h1 id="ipgs-core-hero-title">
                        Core network services built on
                        <span className="ipgs-core-hero-line">real operator experience</span>
                    </h1>
                    <nav className="ipgs-core-hero-breadcrumb" aria-label="Breadcrumb">
                        <Link to="/">Home</Link>
                        <span aria-hidden="true"> - </span>
                        <Link to="/telecom-network-services">Telecom Network Services</Link>
                        <span aria-hidden="true"> - </span>
                        <span aria-current="page">Core Networks</span>
                    </nav>
                </div>
            </section>

            {/* ================= OPERATOR EXPERIENCE ================= */}
            <section className="ipgs-core-experience">
                <div className="container">
                    <div className="ipgs-core-experience-grid">
                        <div className="ipgs-core-ripple-panel" data-reveal="panel">
                            <span className="ipgs-core-tag">Operator experience</span>

                            <div className="ipgs-core-ripple" aria-hidden="true">
                                <span></span>
                                <span></span>
                                <span></span>
                                <i className="ri-base-station-line"></i>
                            </div>

                            <strong>Tier 1 UK mobile network operator experience.</strong>
                        </div>

                        <div className="ipgs-core-experience-content">
                            <div className="ipgs-core-label" data-reveal="up">
                                <span></span>
                                Real-world delivery
                            </div>

                            <h2 data-reveal="up" style={delay(100)}>
                                Our best work is{" "}
                                <span>barely noticed,</span> and that's fine
                                with us
                            </h2>

                            <p data-reveal="up" style={delay(200)}>
                                Our core network services fit programmes that
                                are already underway, so your timeline keeps
                                moving while our engineers get to work. A live
                                migration can't pause for new people to find
                                their feet.
                            </p>

                            <p data-reveal="up" style={delay(280)}>
                                Consultants here bring years of experience from
                                inside a Tier 1 UK mobile network operator.
                                They understand how an operator thinks, so
                                they're useful from the first conversation.
                            </p>

                            <p data-reveal="up" style={delay(360)}>
                                Quality and accuracy of delivery keep clients
                                with us and bring further work our way.
                            </p>

                            <div
                                className="ipgs-core-experience-note"
                                data-reveal="up"
                                style={delay(440)}
                            >
                                <i className="ri-check-double-line" aria-hidden="true"></i>
                                <strong>
                                    Experience that integrates with your
                                    existing programme.
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= FIVE CAPABILITIES ================= */}
            <section className="ipgs-core-services" id="core-network-services">
                <div className="container">
                    <div className="ipgs-core-section-heading">
                        <div className="ipgs-core-label" data-reveal="up">
                            <span></span>
                            What we deliver
                        </div>

                        <div className="ipgs-core-heading-grid">
                            <h2 data-reveal="up" style={delay(100)}>
                                A proven approach to delivering{" "}
                                <span>technically sound core networks</span>
                            </h2>

                            <p data-reveal="up" style={delay(200)}>
                                We’re here to support you, so we’ll take your
                                lead and embed ourselves into your current
                                networks seamlessly. The exact solution we
                                provide will include one or more of the
                                following actions:
                            </p>
                        </div>
                    </div>

                    <div className="ipgs-core-services-layout">
                        <aside className="ipgs-core-delivery" data-reveal="panel">
                            <span className="ipgs-core-tag">Core network delivery</span>

                            <ul>
                                {delivery.map((d) => (
                                    <li key={d.label}>
                                        <i className={d.icon} aria-hidden="true"></i>
                                        <strong>{d.label}</strong>
                                    </li>
                                ))}
                            </ul>

                            <span className="ipgs-core-scan" aria-hidden="true"></span>
                        </aside>

                        <div className="ipgs-core-services-list">
                            {coreServices.map((item, i) => (
                                <article
                                    className="ipgs-core-service"
                                    key={item.title}
                                    data-reveal="up"
                                    style={delay(i * 90)}
                                >
                                    <div className="ipgs-core-service-icon" aria-hidden="true">
                                        <i className={item.icon}></i>
                                    </div>

                                    <div className="ipgs-core-service-content">
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= FOUR ADVANTAGES ================= */}
            <section className="ipgs-core-advantages">
                <div className="container">
                    <div className="ipgs-core-advantages-heading">
                        <div className="ipgs-core-label" data-reveal="up">
                            <span></span>
                            The IPGS advantage
                        </div>

                        <h2 data-reveal="up" style={delay(100)}>
                            Why mobile operators turn to IPGS for{" "}
                            <span>core network expertise</span>
                        </h2>

                        <p data-reveal="up" style={delay(200)}>
                            Four things set our core network team apart, and
                            each one comes straight from how the team works.
                            We’re judged by the projects we deliver and the
                            services we migrate, which is why we’re so highly
                            rated — and why we haven’t lost a single client
                            since 2016.
                        </p>
                    </div>

                    <div className="ipgs-core-advantages-grid">
                        {coreAdvantages.map((item, i) => (
                            <article
                                className="ipgs-core-advantage"
                                key={item.title}
                                data-reveal="up"
                                style={delay((i % 2) * 140)}
                            >
                                <div className="ipgs-core-advantage-icon" aria-hidden="true">
                                    <i className={item.icon}></i>
                                </div>

                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="ipgs-core-final">
                <div className="ipgs-core-signal" aria-hidden="true">
                    <span></span>
                    <span></span>
                    <span></span>
                    <i></i>
                </div>

                <div className="container">
                    <div className="ipgs-core-final-layout">
                        <div>
                            <div className="ipgs-core-label" data-reveal="up">
                                <span></span>
                                Let's work together
                            </div>

                            <h2 data-reveal="up" style={delay(100)}>
                                Start your core network programme with{" "}
                                <span>a conversation</span>
                            </h2>

                            <p data-reveal="up" style={delay(200)}>
                                Tell us about your migration, and we'll match
                                you with engineers who know the territory. Get
                                in touch this week and see how fast we can
                                start.
                            </p>
                        </div>

                        <div
                            className="ipgs-core-final-action"
                            data-reveal="up"
                            style={delay(300)}
                        >
                            <Link to="/Contact" className="ipgs-core-final-btn">
                                Speak to Our Core Network Team
                                <i className="ri-arrow-right-up-line" aria-hidden="true"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CoreNetwork;
