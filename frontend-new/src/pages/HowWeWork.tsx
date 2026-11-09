import { useEffect, useRef } from "react";
import type { CSSProperties, FC } from "react";
import { Link } from "react-router-dom";

import DeliveryImage from "../assets/images/about/image-2.png";

import "../assets/css/how-we-work.css";

interface WorkDetail {
    title: string;
    description: string;
    icon: string;
}

const promises: { title: string; icon: string }[] = [
    { title: "Agility", icon: "ri-flashlight-line" },
    { title: "Flexibility", icon: "ri-loop-left-line" },
    { title: "Competitive Pricing", icon: "ri-price-tag-3-line" },
];



const commitments: WorkDetail[] = [
    {
        title: "No domain silos, even when it would be easier for us",
        description:
            "If your team spots a security gap or technical issue, everyone at IPGS owns it, regardless of their particular specialism. Nobody redirects you to the right department because every department already has a vested interest in the successful delivery of your project.",
        icon: "ri-team-line",
    },
    {
        title: "Single point of contact IT support for the life of your project",
        description:
            "When you partner with IPGS, you get at least one named person for the whole project. As it grows, we'll bring in specialists with the right skills, and you'll always know exactly who to call.",
        icon: "ri-customer-service-2-line",
    },
    {
        title: "Concept to completion delivered by an in-house team",
        description:
            "Requirements gathering, technical design, build, deployment, and ongoing support are all delivered by one team. Tell us what you need, and we’ll build it from the ground up. We provide fully curated and managed IT services from start to finish.",
        icon: "ri-settings-3-line",
    },
];

const deliveryDetails: WorkDetail[] = [
    {
        title: "Discipline always lies behind our friendly faces",
        description:
            "Being easy to work with doesn't mean being relaxed about delivery. Every engagement runs on the same IT project delivery process, a RACI matrix that makes responsibility explicit from day one. It's backed by a live risk register that tracks every identified risk through to resolution.",
        icon: "ri-shield-check-line",
    },
    {
        title: "An IT service delivery model that doesn't stop at go-live",
        description:
            "Once your project moves into aftercare and monitoring, response times get agreed upfront. You’ll have a complete care package in place long before anything has the chance to go wrong. We design for the best, but always plan for the worst.",
        icon: "ri-time-line",
    },
    {
        title: "A three-party partnership model built for speed",
        description:
            "Large Tier-1 organisations bring market access and brand trust. We bring the agility a fast-moving technical programme needs. Together, you get a trusted name and a team that shows up when it says it will.",
        icon: "ri-links-line",
    },
];

/** Sets a stagger delay used by the CSS reveal transitions. */
const delay = (ms: number): CSSProperties =>
    ({ "--d": `${ms}ms` }) as CSSProperties;

const HowWeWork: FC = () => {
    const rootRef = useRef<HTMLDivElement>(null);

    /* ---------- SEO ---------- */
    useEffect(() => {
        const previousTitle = document.title;
        const metaDescription = document.querySelector<HTMLMetaElement>(
            'meta[name="description"]'
        );
        const oldDescription = metaDescription?.content;

        document.title = "How We Work | IPGS Delivery Model";

        if (metaDescription) {
            metaDescription.content =
                "From a single point of contact to a three-party Tier 1 partnership model, here's how we make sure nothing falls through the cracks on your project.";
        }

        return () => {
            document.title = previousTitle;
            if (metaDescription && oldDescription !== undefined) {
                metaDescription.content = oldDescription;
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

    return (
        <div className="js-scroll ipgs-how-work is-anim" ref={rootRef}>
            {/* ================= HERO ================= */}
            

            <div className="hero-data-bottom">

    <div className="services-home-hero desck-about">

        <div className="title-of-hero">

            <p>
                An IT service delivery model
                <br />
                that leaves nothing to chance
            </p>

            <span>
                <Link to="/">Home</Link>
                            {" - "}
                            <Link to="/AboutUs">About Us</Link>
                            {" - "}
                            How We Work
            </span>

        </div>

    </div>

</div>
            {/* ================= CLIENT FIRST (no image) ================= */}
            <section className="ipgs-how-client-section">
                <div className="container">
                    <div className="ipgs-how-client-grid">
                        <div className="ipgs-how-client-content">
                            <div className="ipgs-how-label" data-reveal><span></span>Our philosophy</div>
                            <h2 data-reveal style={delay(100)}>
                                What our ‘Client First’ philosophy means in
                                practice
                            </h2>

                            <p data-reveal style={delay(120)}>
                                Client First runs on three promises: agility,
                                flexibility, and competitive pricing. We treat
                                every client relationship as a genuine
                                partnership from the first meeting onward. We
                                take our cues for success from nothing more
                                than your feedback.
                            </p>
                        </div>

                        <ul className="ipgs-how-values">
                            {promises.map((item, i) => (
                                <li
                                    className="ipgs-how-value"
                                    key={item.title}
                                    data-reveal="value"
                                    style={delay(i * 140)}
                                >
                                    <i className={item.icon} aria-hidden="true"></i>
                                    <strong>{item.title}</strong>
                                    <b aria-hidden="true" className="ipgs-how-value-arrow">
                                        <i className="ri-arrow-right-line"></i>
                                    </b>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ================= COMMITMENTS ================= */}
            <section className="ipgs-how-commit-section">
                <div className="container">
                    <div className="ipgs-how-section-head" data-reveal>
                        <div className="ipgs-how-label"><span></span>Our commitment</div>
                        <h2>One team. Shared accountability.</h2>
                        <p>
                            Three commitments we make to every client, from
                            the first call to long after go-live.
                        </p>
                    </div>

                    <div className="ipgs-how-commit-grid">
                        {commitments.map((item, i) => (
                            <article
                                className="ipgs-how-commit-item"
                                key={item.title}
                                data-reveal
                                style={delay(i * 140)}
                            >
                                <div className="ipgs-how-commit-icon">
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

            {/* ================= DELIVERY MODEL ================= */}
            <section className="ipgs-how-delivery-section">
                <div className="container">
                    <div className="ipgs-how-delivery-header" data-reveal>
                        <div className="ipgs-how-label"><span></span>Our delivery model</div>
                        <h2>Built on discipline. Delivered with care.</h2>
                    </div>

                    <div className="ipgs-how-delivery-grid">
                        <div className="ipgs-how-delivery-content">
                            {deliveryDetails.map((item, i) => (
                                <article
                                    key={item.title}
                                    className="ipgs-how-delivery-item"
                                    data-reveal
                                    style={delay(i * 140)}
                                >
                                    <div className="ipgs-how-delivery-icon">
                                        <i
                                            className={item.icon}
                                            aria-hidden="true"
                                        ></i>
                                    </div>
                                    <div className="ipgs-how-delivery-text">
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <div className="ipgs-how-delivery-image">
                            <div
                                className="ipgs-how-photo"
                                data-reveal="image"
                            >
                                <img
                                    src={DeliveryImage}
                                    alt="Technology infrastructure delivery"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="ipgs-how-final-cta">
                <div className="container">
                    <div className="ipgs-how-final-inner">
                        <div className="ipgs-how-final-content">
                            <div className="ipgs-how-label" data-reveal><span></span>Let's work together</div>
                            <h2 data-reveal style={delay(100)}>
                                The IT service delivery model behind zero lost
                                accounts
                            </h2>

                            <p data-reveal style={delay(120)}>
                                Since 2016, we haven't lost a single client
                                account, and this IT service delivery model is
                                the reason why.
                            </p>

                            <p data-reveal style={delay(200)}>
                                Ready to work with a team that owns the whole
                                problem? Get in touch, and we'll walk you
                                through how your project would start.
                            </p>
                        </div>

                        <div
                            className="ipgs-how-final-action"
                            data-reveal
                            style={delay(320)}
                        >
                            <Link
                                to="/contact"
                                className="ipgs-how-final-button"
                            >
                                Start A Project With Us
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
    );
};

export default HowWeWork;
