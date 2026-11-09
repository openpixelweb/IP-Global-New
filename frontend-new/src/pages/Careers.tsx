import { useEffect, useRef } from "react";
import type { CSSProperties, FC, MouseEvent } from "react";
import { Link } from "react-router-dom";


import CareerStoryImage from "../assets/images/we-work.png";

import "../assets/css/careers.css";

/* =========================================
   TYPES
========================================= */

interface CareerArea {
    title: string;
    description: string;
    icon: string;
}

interface CareerBenefit {
    title: string;
    description: string;
    icon: string;
    link?: { to: string; label: string };
}

interface CareerStep {
    number: string;
    title: string;
    description: string;
}

/* =========================================
   APPROVED CAREER AREAS
========================================= */

const careerAreas: CareerArea[] = [
    {
        title: "Shape the networks that keep people connected",
        description:
            "Help design and test the core systems that keep mobile networks connected. You work on the part of the network every customer relies on yet never sees.",
        icon: "ri-global-line",
    },
    {
        title: "Get hands-on with multi-vendor radio networks",
        description:
            "Work across several equipment vendors on design and rollout, and broaden your skills with every project.",
        icon: "ri-signal-tower-line",
    },
    {
        title: "Keep railways and energy networks moving",
        description:
            "Design and protect the operational networks that keep trains moving and energy flowing. The work you do with us keeps people productive and safe.",
        icon: "ri-train-line",
    },
    {
        title: "Protect networks from the latest threats",
        description:
            "Build security into networks from the first design decision and work to recognised standards such as NIST and GSMA.",
        icon: "ri-shield-check-line",
    },
    {
        title: "Build IT infrastructure from the ground up",
        description:
            "Take projects from first requirements to final handover across private and public cloud. You own the outcome from the start.",
        icon: "ri-server-line",
    },
    {
        title: "See your work in use the same day",
        description:
            "Survey and design the Wi-Fi and cabling that keep people connected, then watch the installation go live.",
        icon: "ri-wifi-line",
    },
];

/* =========================================
   APPROVED CAREER BENEFITS
========================================= */

const careerBenefits: CareerBenefit[] = [
    {
        title: "Good people, chosen for the right reasons",
        description:
            "We hire and vet with care, so you work alongside people whose skills you can rely on. As a result, you spend less time double-checking and more time building.",
        icon: "ri-user-star-line",
    },
    {
        title: "A team that's always awake somewhere",
        description:
            "Our teams work across time zones, so there's always a colleague awake when a problem lands. But because IPGS superstars always share the load, you're never left carrying an unreasonable workload.",
        icon: "ri-earth-line",
    },
    {
        title: "Projects that grow with the relationship",
        description:
            "Clients come back with bigger projects and introduce us to new ones. You spend your time on work that keeps building on itself.",
        icon: "ri-line-chart-line",
    },
    {
        title: "A way in, whatever your background",
        description:
            "If you're changing direction, the IPGS Academy offers a way into careers in telecoms and networking with no technical background needed. Visit the IPGS Academy page to find out how it works.",
        icon: "ri-key-2-line",
        link: { to: "/about/ipgs-academy", label: "Explore IPGS Academy" },
    },
];

/* =========================================
   APPROVED RECRUITMENT PROCESS
========================================= */

const careerSteps: CareerStep[] = [
    {
        number: "01",
        title: "Tell us about you",
        description:
            "Send your CV and a few lines about what you'd love to work on. But don't forget to tell us about the person behind the resume.",
    },
    {
        number: "02",
        title: "Talk to the team",
        description:
            "Talk to the people you'd work with and ask them anything. If things feel right, you're right, and there's an opportunity, we'll invite you to an interview.",
    },
    {
        number: "03",
        title: "Get a clear answer",
        description:
            "We come back to you with a decision and the reasons behind it. We don't do waffle, but we do offer constructive feedback to those who are unsuccessful.",
    },
    {
        number: "04",
        title: "Start with support",
        description:
            "Your first weeks are built around helping you settle in. When you're one of us, you're never on your own. There's always someone to support and guide you until you're comfortable in your new role.",
    },
];

const prefersReducedMotion = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Sets a stagger delay used by the CSS transitions. */
const delay = (ms: number): CSSProperties =>
    ({ "--d": `${ms}ms` }) as CSSProperties;

/** Feeds the cursor position to the CSS spotlight on a card. */
const trackSpotlight = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
};

/* =========================================
   PAGE COMPONENT
========================================= */

const Careers: FC = () => {
    const rootRef = useRef<HTMLDivElement>(null);
    const openingsId = "ipgs-careers-openings";

    /* ---------- SEO ---------- */
    useEffect(() => {
        const previousTitle = document.title;
        const metaDescription = document.querySelector<HTMLMetaElement>(
            'meta[name="description"]'
        );
        const previousDescription = metaDescription?.content;

        document.title = "IT Careers in Telecoms and Networking | IPGS Careers";

        if (metaDescription) {
            metaDescription.content =
                "Start one of the IT careers at IPGS, where your decisions count, and you work with specialists you can rely on. See current openings today.";
        }

        return () => {
            document.title = previousTitle;
            if (metaDescription && previousDescription !== undefined) {
                metaDescription.content = previousDescription;
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
            { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
        );

        items.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const scrollToOpenings = (e: MouseEvent<HTMLAnchorElement>) => {
        const target = document.getElementById(openingsId);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({
            behavior: prefersReducedMotion() ? "auto" : "smooth",
            block: "start",
        });
    };

    return (
        <div className="js-scroll ipgs-careers-page is-anim" ref={rootRef}>
            {/* ================= HERO BANNER ================= */}
            <div className="hero-data-bottom">
                <div className="services-home-hero desck-about ipgs-careers-banner">
                    <div className="title-of-hero">
                        <p>IT careers with limitless potential</p>
                        <span>
                            <Link to="/">Home</Link>
                            {" - "}
                            <Link to="/AboutUs">About Us</Link>
                            {" - "}
                            Careers
                        </span>
                    </div>
                </div>
            </div>

            
            {/* ================= AUTONOMY ================= */}
            <section className="ipgs-careers-freedom">
                <div className="container">
                    <div className="ipgs-careers-freedom-grid">
                        <div className="ipgs-careers-freedom-image">
                            <div className="ipgs-careers-photo" data-reveal="image">
                                <img
                                    src={CareerStoryImage}
                                    alt="Technology and infrastructure project collaboration"
                                    loading="lazy"
                                />
                            </div>

                            <span
                                className="ipgs-careers-image-label"
                                data-reveal="up"
                                style={delay(500)}
                            >
                                People / Purpose / Progress
                            </span>
                        </div>

                        <div className="ipgs-careers-freedom-content">
                            <div className="ipgs-careers-label" data-reveal="up">
                                <span></span>
                                The way we work
                            </div>

                            <h2 data-reveal="up" style={delay(100)}>
                                Where a good idea becomes a decision by lunchtime
                            </h2>

                            {/* Idea -> decision line draws across on reveal */}
                            <div
                                className="ipgs-careers-flow"
                                data-reveal="flow"
                                style={delay(200)}
                                aria-hidden="true"
                            >
                                <span className="ipgs-careers-flow-node">
                                    A good idea
                                </span>
                                <span className="ipgs-careers-flow-line"></span>
                                <span className="ipgs-careers-flow-node ipgs-careers-flow-node--end">
                                    A decision
                                </span>
                            </div>

                            <p data-reveal="up" style={delay(300)}>
                                At IPGS, the person closest to the problem
                                usually gets to decide how to solve it. Senior
                                managers trust their teams to make their own
                                calls, so a good idea never waits in a queue
                                for sign-off.
                            </p>

                            <p data-reveal="up" style={delay(380)}>
                                That combination of speed and autonomy makes
                                IPGS careers different. You spend your days
                                solving problems and moving projects forward.
                                Every decision you make and action you take
                                makes a difference. And when you succeed,
                                you're recognised by colleagues and clients
                                alike.
                            </p>

                            <div data-reveal="up" style={delay(460)}>
                                <Link to="/contact" className="ipgs-careers-text-link">
                                    Discuss your next career move
                                    <i
                                        className="ri-arrow-right-up-line"
                                        aria-hidden="true"
                                    ></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= SPECIALIST AREAS ================= */}
            <section className="ipgs-careers-areas">
                <div className="container">
                    <div className="ipgs-careers-areas-heading">
                        <div className="ipgs-careers-label" data-reveal="up">
                            <span></span>
                            Explore our specialisms
                        </div>

                        <div className="ipgs-careers-section-heading-grid">
                            <h2 data-reveal="up" style={delay(100)}>
                                IT careers from the trackside to the mobile mast
                            </h2>

                            <p data-reveal="up" style={delay(200)}>
                                IPGS works across six specialist areas, from
                                rail signalling to radio networks, and
                                colleagues in each one share problems and
                                answers. We often have fantastic opportunities
                                across all these areas — in locations around
                                the world.
                            </p>
                        </div>
                    </div>

                    <div className="ipgs-careers-areas-grid">
                        {careerAreas.map((area, i) => (
                            <article
                                className="ipgs-careers-area"
                                key={area.title}
                                data-reveal="up"
                                style={delay((i % 3) * 120)}
                                onMouseMove={trackSpotlight}
                            >
                                <div className="ipgs-careers-area-icon">
                                    <i className={area.icon} aria-hidden="true"></i>
                                </div>
                                <h3>{area.title}</h3>
                                <p>{area.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= BENEFITS ================= */}
            <section className="ipgs-careers-benefits">
                <div className="container">
                    <div className="ipgs-careers-benefits-grid">
                        <div className="ipgs-careers-benefits-intro">
                            <div className="ipgs-careers-label" data-reveal="up">
                                <span></span>
                                Why join IPGS
                            </div>

                            <h2 data-reveal="up" style={delay(100)}>
                                Why IPGS careers are in such high demand right
                                now
                            </h2>

                            <p data-reveal="up" style={delay(200)}>
                                Every engineer wants to take on challenges and
                                see the fruits of their labour in action. And
                                we can definitely offer that. But the things
                                that make you stay are how you're treated and
                                who you work with, and that's where IPGS
                                excels.
                            </p>

                            <div data-reveal="up" style={delay(300)}>
                                <Link to="/about/culture" className="ipgs-careers-text-link">
                                    Discover our culture
                                    <i
                                        className="ri-arrow-right-line"
                                        aria-hidden="true"
                                    ></i>
                                </Link>
                            </div>
                        </div>

                        <div className="ipgs-careers-benefits-list">
                            {careerBenefits.map((benefit, i) => (
                                <article
                                    className="ipgs-careers-benefit"
                                    key={benefit.title}
                                    data-reveal="up"
                                    style={delay(i * 100)}
                                >
                                    <div className="ipgs-careers-benefit-icon">
                                        <i className={benefit.icon} aria-hidden="true"></i>
                                    </div>

                                    <div>
                                        <h3>{benefit.title}</h3>
                                        <p>{benefit.description}</p>

                                        {benefit.link && (
                                            <Link
                                                to={benefit.link.to}
                                                className="ipgs-careers-benefit-link"
                                            >
                                                {benefit.link.label}
                                                <i
                                                    className="ri-arrow-right-line"
                                                    aria-hidden="true"
                                                ></i>
                                            </Link>
                                        )}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= RECRUITMENT JOURNEY ================= */}
            <section className="ipgs-careers-journey">
                <div className="container">
                    <div className="ipgs-careers-journey-header">
                        <div className="ipgs-careers-label" data-reveal="up">
                            <span></span>
                            Your application journey
                        </div>

                        <h2 data-reveal="up" style={delay(100)}>
                            Your IPGS journey starts here
                        </h2>

                        <p data-reveal="up" style={delay(200)}>
                            Landing one of our IT careers starts with a simple
                            conversation, and we keep you informed at every
                            stage.
                        </p>
                    </div>

                    {/* Timeline: the line draws across, then each step lights up */}
                    <ol className="ipgs-careers-journey-grid" data-reveal="track">
                        {careerSteps.map((step, i) => (
                            <li
                                className="ipgs-careers-journey-step"
                                key={step.number}
                                style={delay(300 + i * 350)}
                            >
                                <div className="ipgs-careers-journey-number">
                                    {step.number}
                                </div>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* ================= OPENINGS ================= */}
            <section
                id={openingsId}
                className="ipgs-careers-openings"
                aria-labelledby="ipgs-careers-openings-title"
            >
                <div className="container">
                    <div className="ipgs-careers-openings-inner">
                        <div>
                            <div className="ipgs-careers-label" data-reveal="up">
                                <span></span>
                                Current opportunities
                            </div>

                            <h2
                                id="ipgs-careers-openings-title"
                                data-reveal="up"
                                style={delay(100)}
                            >
                                Interested in working with IPGS?
                            </h2>

                            <p data-reveal="up" style={delay(200)}>
                                Send us your CV and a few lines about what
                                you'd love to work on, and we'll tell you where
                                it could take you.
                            </p>
                        </div>

                        <div data-reveal="up" style={delay(300)}>
                            <Link to="/contact" className="ipgs-careers-primary-btn">
                                Enquire about opportunities
                                <i
                                    className="ri-arrow-right-up-line"
                                    aria-hidden="true"
                                ></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="ipgs-careers-final">
                <div className="container">
                    <div className="ipgs-careers-final-grid">
                        <div className="ipgs-careers-final-content">
                            <div className="ipgs-careers-label" data-reveal="up">
                                <span></span>
                                Take the next step
                            </div>

                            <h2 data-reveal="up" style={delay(100)}>
                                Start your IPGS career by telling us about
                                yourself
                            </h2>

                            <p data-reveal="up" style={delay(200)}>
                                Browse our current openings, or send us your CV
                                if you can't see the right role yet. Tell us
                                what you do best, and we'll tell you where it
                                could take you.
                            </p>
                        </div>

                        <div
                            className="ipgs-careers-final-actions"
                            data-reveal="up"
                            style={delay(300)}
                        >
                            <a
                                href={`#${openingsId}`}
                                className="ipgs-careers-final-primary"
                                onClick={scrollToOpenings}
                            >
                                See current openings at IPGS
                                <i
                                    className="ri-arrow-right-up-line"
                                    aria-hidden="true"
                                ></i>
                            </a>

                            <Link to="/contact" className="ipgs-careers-final-secondary">
                                Ask about CV submissions
                                <i
                                    className="ri-arrow-right-line"
                                    aria-hidden="true"
                                ></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
