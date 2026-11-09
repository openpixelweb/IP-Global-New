import { useEffect, useRef } from "react";
import type { CSSProperties, FC } from "react";
import { Link } from "react-router-dom";

import CompanyImage from "../assets/images/abt-01.jpg";
import EnvironmentImage from "../assets/images/why-hm.jpg";

import "../assets/css/csr.css";

/* ==========================================
   TYPES
========================================== */

interface CSRItem {
    title: string;
    description: string;
    icon: string;
}

/* ==========================================
   FOUR CSR COMMITMENTS
   APPROVED DOCUMENT CONTENT
========================================== */

const commitments: CSRItem[] = [
    {
        title: "Education that opens doors",
        description:
            "We back people who have the drive but lack direction or expertise. We see it as our responsibility to help those people discover their strengths and find a specialism that suits them. The IPGS Academy is where that starts.",
        icon: "ri-graduation-cap-line",
    },
    {
        title: "Growth for the people we already have",
        description:
            "Advanced and automation-level training stays available to our own teams, so their skills keep pace with the industry. Clients get a bench of proven specialists, and our people get a career that keeps moving.",
        icon: "ri-user-star-line",
    },
    {
        title: "Care for the places we work",
        description:
            "Our offices matter to the people in them and to the neighbourhoods around them, so we look after both. If the environments in which we operate flourish, everyone wins.",
        icon: "ri-plant-line",
    },
    {
        title: "Honesty in how we do business",
        description:
            "Honesty comes first with clients and partners, so we only publish testimonials and results we can prove. And we never shy away from telling the truth, even when it’s bad news.",
        icon: "ri-shield-check-line",
    },
];

/* ==========================================
   DIVERSITY, EQUITY & INCLUSION
========================================== */

const inclusionPrinciples: CSRItem[] = [
    {
        title: "Equal opportunity at every stage",
        description:
            "We recruit, train, pay, and promote people on their skill and potential. That applies regardless of age, disability, gender reassignment, marriage or civil partnership, pregnancy or maternity, race, religion or belief, sex, or sexual orientation.",
        icon: "ri-scales-3-line",
    },
    {
        title: "Respect every day",
        description:
            "Discrimination, harassment, bullying, and victimisation have no place at IPGS. If something goes wrong, you can raise it and expect a fair, prompt response. We treat people with the dignity and respect they deserve, and we expect everyone else — including our partners — to do the same.",
        icon: "ri-hand-heart-line",
    },
    {
        title: "Adjustments that let people do their best work",
        description:
            "We'll adapt our interviews and our workplaces for people with disabilities, so everyone can show what they're capable of. No one should be at a disadvantage due to immutable characteristics.",
        icon: "ri-user-heart-line",
    },
    {
        title: "Different backgrounds, sharper thinking",
        description:
            "Our colleagues work across Europe, the Middle East, South Asia, and Australia, and that mix of backgrounds helps us see every problem from more than one angle. A diverse workforce allows us to offer a diverse range of solutions to our clients. Everyone benefits when everyone has access to opportunity.",
        icon: "ri-global-line",
    },
];

/* ==========================================
   MODERN SLAVERY STATEMENT
========================================== */

const modernSlaveryPrinciples: CSRItem[] = [
    {
        title: "Fair, lawful recruitment",
        description:
            "We check the right to work of everyone we hire, and every worker receives clear written terms and fair pay. We never charge workers a fee to secure a role.",
        icon: "ri-file-shield-2-line",
    },
    {
        title: "Suppliers held to the same standard",
        description:
            "We expect our suppliers and partners to meet the same standards, and we'll ask them to confirm it. If one falls short, we'll work with them to fix it or end the relationship.",
        icon: "ri-links-line",
    },
    {
        title: "Risks we watch closely",
        description:
            "We assess where slavery and trafficking risks are highest, such as work arranged through agencies and subcontractors, and we monitor those areas.",
        icon: "ri-search-eye-line",
    },
    {
        title: "Speaking up safely",
        description:
            "Anyone with a concern can raise it in confidence, and we'll protect them from retaliation. We'll act on every report.",
        icon: "ri-chat-private-line",
    },
];

/** Sets a stagger delay used by the CSS transitions. */
const delay = (ms: number): CSSProperties =>
    ({ "--d": `${ms}ms` }) as CSSProperties;

/* ==========================================
   REUSABLE POLICY ROW
========================================== */

const PolicyRow: FC<{ item: CSRItem; index: number }> = ({ item, index }) => (
    <article
        className="ipgs-csr-policy"
        data-reveal="up"
        style={delay((index % 2) * 120 + Math.floor(index / 2) * 80)}
    >
        <div className="ipgs-csr-policy-icon" aria-hidden="true">
            <i className={item.icon}></i>
        </div>

        <div className="ipgs-csr-policy-copy">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
        </div>
    </article>
);

/* ==========================================
   CSR MAIN COMPONENT
========================================== */

const CSR: FC = () => {
    const rootRef = useRef<HTMLDivElement>(null);

    /* ---------- SEO ---------- */
    useEffect(() => {
        const oldTitle = document.title;
        const meta = document.querySelector<HTMLMetaElement>(
            'meta[name="description"]'
        );
        const oldDescription = meta?.content;

        document.title =
            "Corporate Social Responsibility, DEI, and Environment | IPGS";

        if (meta) {
            meta.content =
                "IPGS corporate social responsibility commitments, with our diversity, equity, and inclusion statement and our environmental statement.";
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
        <div className="js-scroll ipgs-csr-page is-anim" ref={rootRef}>
            {/* ================= BANNER ================= */}
            <div className="hero-data-bottom">
                <div className="services-home-hero desck-about ipgs-csr-banner">
                    <div className="title-of-hero">
                        <p>Corporate Social Responsibility <br /> that starts with opportunity.</p>
                        <span>
                            <Link to="/">Home</Link>
                            {" - "}
                            <Link to="/AboutUs">About Us</Link>
                            {" - "}
                            CSR
                        </span>
                    </div>
                </div>
            </div>

            
            {/* ================= PHILOSOPHY ================= */}
            <section className="ipgs-csr-philosophy-section">
                <div className="container">
                    <div className="ipgs-csr-philosophy-grid">
                        <div>
                            <div className="ipgs-csr-label" data-reveal="up">
                                <span></span>
                                Our philosophy
                            </div>

                            <h2 data-reveal="up" style={delay(100)}>
                                Corporate social responsibility in plain English
                            </h2>
                        </div>

                        <div className="ipgs-csr-philosophy-copy">
                            <p data-reveal="up" style={delay(200)}>
                                Corporate social responsibility can sound like a
                                document that lives in a drawer. At IPGS, it's a
                                set of promises that shape what we do every day.
                            </p>

                            <p data-reveal="up" style={delay(300)}>
                                Our founder believes education is the most
                                reliable way to change a life, and that belief
                                underpins both our culture and approach. Each
                                commitment is something you can hold us to.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= FOUR COMMITMENTS ================= */}
            <section className="ipgs-csr-commitments-section">
                <div className="container">
                    <div className="ipgs-csr-section-heading">
                        <div className="ipgs-csr-label" data-reveal="up">
                            <span></span>
                            What we stand for
                        </div>

                        <h2 data-reveal="up" style={delay(100)}>
                            Four commitments we'll keep.
                        </h2>

                        <p data-reveal="up" style={delay(200)}>
                            Each commitment has a clear purpose, and we'll
                            report on our progress openly.
                        </p>
                    </div>

                    <div className="ipgs-csr-commitments-grid">
                        {commitments.map((item, i) => (
                            <article
                                key={item.title}
                                className="ipgs-csr-commitment"
                                data-reveal="up"
                                style={delay((i % 2) * 140 + Math.floor(i / 2) * 100)}
                            >
                                <div className="ipgs-csr-commitment-icon">
                                    <i className={item.icon} aria-hidden="true"></i>
                                </div>

                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div
                        className="ipgs-csr-academy-link"
                        data-reveal="up"
                        style={delay(100)}
                    >
                        <div>
                            <span>Education &amp; opportunity</span>
                            <strong>
                                Discover how IPGS Academy develops technical
                                talent.
                            </strong>
                        </div>

                        <Link to="/about/ipgs-academy">
                            Explore IPGS Academy
                            <i className="ri-arrow-right-up-line" aria-hidden="true"></i>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ================= DEI ================= */}
            <section className="ipgs-csr-dei-section">
                <div className="container">
                    <div className="ipgs-csr-dei-layout">
                        <div className="ipgs-csr-dei-intro">
                            <div className="ipgs-csr-label" data-reveal="up">
                                <span></span>
                                Our people
                            </div>

                            <h2 data-reveal="up" style={delay(100)}>
                                Our Diversity, Equity, and Inclusion statement
                            </h2>

                            <p data-reveal="up" style={delay(200)}>
                                IPGS is committed to a workplace where everyone
                                gets a fair shot. Diversity, equity, and
                                inclusion only mean something when they change
                                who gets hired, trained, paid, and promoted.
                            </p>

                            <p data-reveal="up" style={delay(280)}>
                                The following four principles ensure DEI is
                                integral across every domain.
                            </p>

                            <div className="ipgs-csr-photo ipgs-csr-dei-image" data-reveal="image">
                                <img
                                    src={CompanyImage}
                                    alt="Technology company working environment"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        <div className="ipgs-csr-dei-list">
                            {inclusionPrinciples.map((item, i) => (
                                <PolicyRow key={item.title} item={item} index={i} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= ENVIRONMENT ================= */}
            <section className="ipgs-csr-environment-section">
                <div className="container">
                    <div className="ipgs-csr-environment-grid">
                        <div className="ipgs-csr-environment-image">
                            <div className="ipgs-csr-photo" data-reveal="image">
                                <img
                                    src={EnvironmentImage}
                                    alt="Built environment and sustainable workplace visual"
                                    loading="lazy"
                                />
                            </div>

                            <div
                                className="ipgs-csr-environment-image-tag"
                                data-reveal="up"
                                style={delay(500)}
                            >
                                Environment / Responsibility
                            </div>
                        </div>

                        <div className="ipgs-csr-environment-content">
                            <div className="ipgs-csr-label" data-reveal="up">
                                <span></span>
                                Environmental commitment
                            </div>

                            <h2 data-reveal="up" style={delay(100)}>
                                Our environmental statement
                            </h2>

                            <p data-reveal="up" style={delay(200)}>
                                Every office and every project leaves a mark on
                                the environment, and we're committed to keeping
                                ours as small as we reasonably can. Our India
                                offices follow waste-handling procedures,
                                including during office renovations. We’re
                                committed to bringing the same care to every
                                office we run.
                            </p>

                            <p data-reveal="up" style={delay(280)}>
                                We are committed to embracing practical ways to
                                cut energy use and business travel, and we'll
                                continue to review our carbon footprint every
                                year. We'll also favour suppliers who meet
                                recognised environmental standards.
                            </p>

                            <div
                                className="ipgs-csr-environment-footer"
                                data-reveal="up"
                                style={delay(360)}
                            >
                                <i className="ri-leaf-line" aria-hidden="true"></i>
                                <span>
                                    Practical environmental responsibility
                                    across our operations.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= MODERN SLAVERY ================= */}
            <section className="ipgs-csr-slavery-section">
                <div className="container">
                    <div className="ipgs-csr-slavery-heading">
                        <div className="ipgs-csr-label" data-reveal="up">
                            <span></span>
                            Ethical business
                        </div>

                        <div className="ipgs-csr-slavery-title-grid">
                            <h2 data-reveal="up" style={delay(100)}>
                                Our modern slavery statement
                            </h2>

                            <p data-reveal="up" style={delay(200)}>
                                IPGS has zero tolerance of modern slavery in any
                                form, including slavery, servitude, forced or
                                compulsory labour, and human trafficking. This
                                statement applies to our own people and to the
                                contractors and suppliers who work with us.
                            </p>
                        </div>
                    </div>

                    <div className="ipgs-csr-slavery-list">
                        {modernSlaveryPrinciples.map((item, i) => (
                            <PolicyRow key={item.title} item={item} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= ACCOUNTABILITY ================= */}
            <section className="ipgs-csr-accountability-section">
                <div className="container">
                    <div className="ipgs-csr-accountability-layout">
                        <div>
                            <div className="ipgs-csr-label" data-reveal="up">
                                <span></span>
                                Accountability
                            </div>

                            <h2 data-reveal="up" style={delay(100)}>
                                How we keep ourselves honest, transparent, and
                                aware
                            </h2>
                        </div>

                        <div className="ipgs-csr-accountability-copy">
                            <p data-reveal="up" style={delay(200)}>
                                Senior management approves these corporate
                                social responsibility commitments, and a named
                                owner reviews them every year, including our
                                progress on inclusion and the environment.
                            </p>

                            <p data-reveal="up" style={delay(300)}>
                                Senior management also signs off on our Modern
                                Slavery Statement each year. We'll update
                                everything as IPGS grows, and every colleague
                                will learn what it means for their role.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="ipgs-csr-final-section">
                <div className="container">
                    <div className="ipgs-csr-final-layout">
                        <div>
                            <div className="ipgs-csr-label" data-reveal="up">
                                <span></span>
                                Let's talk
                            </div>

                            <h2 data-reveal="up" style={delay(100)}>
                                Responsibility is part of how we work.
                            </h2>

                            <p data-reveal="up" style={delay(200)}>
                                Have questions about our corporate
                                responsibility commitments or want to learn more
                                about IPGS? Get in touch with our team.
                            </p>
                        </div>

                        <div
                            className="ipgs-csr-final-action"
                            data-reveal="up"
                            style={delay(300)}
                        >
                            <Link to="/contact" className="ipgs-csr-final-button">
                                Talk to us
                                <i className="ri-arrow-right-up-line" aria-hidden="true"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CSR;
