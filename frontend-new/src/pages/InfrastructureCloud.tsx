
import { useEffect } from "react";
import type { FC } from "react";
import { Link } from "react-router-dom";

import "../assets/css/infrastructure-cloud.css";

/* ==========================================
   TYPES
========================================== */

interface InfrastructureItem {
    number: string;
    title: string;
    description: string;
    icon: string;
}

/* ==========================================
   SIX APPROVED INFRASTRUCTURE CAPABILITIES
========================================== */

const capabilities: InfrastructureItem[] = [
    {
        number: "01",
        title: "Transition without disruption",
        description:
            "We move data from public clouds to private environments through meticulous planning and step-by-step execution. This ensures your users can carry on as normal. Your organisation ends up with clearer costs and more control, without anyone noticing the change.",
        icon: "ri-arrow-left-right-line",
    },
    {
        number: "02",
        title: "A private cloud based on your priorities",
        description:
            "We can design and build a private cloud in your own data centre or in a shared one. You get an environment sized for your needs and under your control, making your costs easier to predict. You also get to decide who gets access to what.",
        icon: "ri-cloud-line",
    },
    {
        number: "03",
        title: "Keep your data where you need it",
        description:
            "We design your environment so your data remains secure and under your direct control. Audits get easier, compliance is assured, and you can say with confidence exactly where your data is located.",
        icon: "ri-shield-keyhole-line",
    },
    {
        number: "04",
        title: "Custom cloud infrastructure solutions built from scratch",
        description:
            "We gather your requirements and write the specification, then install and test your equipment before it goes live. You get a design that fits your goals and equipment that has already proven it works.",
        icon: "ri-settings-3-line",
    },
    {
        number: "05",
        title: "Data protection long after delivery",
        description:
            "Our ongoing support keeps your software up to date and your systems monitored, so problems show up early. Your systems stay secure and available, and your team spends less time firefighting.",
        icon: "ri-shield-check-line",
    },
    {
        number: "06",
        title: "Public or private, it’s about what’s best for you",
        description:
            "Some workloads belong in AWS, Azure, or Google Cloud, and we build and connect those, too. Each workload gets the right home, and nothing that works well has to move.",
        icon: "ri-server-line",
    },
];

/* ==========================================
   FOUR APPROVED IPGS ADVANTAGES
========================================== */

const advantages: InfrastructureItem[] = [
    {
        number: "01",
        title: "Concept to completion, all in-house",
        description:
            "Requirements, design, build, and support all sit within our own team, so one group owns responsibilities and outcomes from start to finish.",
        icon: "ri-stack-line",
    },
    {
        number: "02",
        title: "Specialists who share the load",
        description:
            "Our infrastructure specialists work alongside our network and security teams and share responsibility for the result. There is an “I” in IPGS, but it’s “We” when it comes to project delivery.",
        icon: "ri-team-line",
    },
    {
        number: "03",
        title: "Quick answers from a team our size",
        description:
            "We're small enough to decide fast and big enough to deliver, so we’re able to respond to requests and queries according to your timeframe.",
        icon: "ri-timer-flash-line",
    },
    {
        number: "04",
        title: "Cloud infrastructure services with named people behind them",
        description:
            "You know who's working on your project, because we give you named contacts. But we also give you authentic relationships, so you always know a friendly colleague is ready to act.",
        icon: "ri-customer-service-2-line",
    },
];


/* ==========================================
   MAIN INFRASTRUCTURE & CLOUD PAGE
========================================== */

const InfrastructureCloud: FC = () => {

    useEffect(() => {
        const previousTitle = document.title;

        const meta =
            document.querySelector<HTMLMetaElement>(
                'meta[name="description"]'
            );

        const previousDescription = meta?.content;

        document.title =
            "Cloud Infrastructure Services, Private and Public | IPGS";

        if (meta) {
            meta.content =
                "IPGS delivers cloud infrastructure services across private, public, and on-premises environments, from initial requirements to ongoing support. Talk to our team today.";
        }

        /* ==========================================
           SCROLL REVEAL ANIMATIONS
        ========================================== */

        const elements =
            document.querySelectorAll<HTMLElement>(
                ".ipgs-cloud-page [data-cloud-reveal]"
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
                                "cloud-visible"
                            );

                            observer?.unobserve(entry.target);
                        }
                    });
                },
                {
                    threshold: 0.08,
                    rootMargin: "0px 0px -25px 0px",
                }
            );

            elements.forEach((element) => {
                observer?.observe(element);
            });
        } else {
            elements.forEach((element) => {
                element.classList.add("cloud-visible");
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
            <div className="js-scroll ipgs-cloud-page">

                {/* ======================================
                    SECTION 01 - EXISTING IPGS HERO
                    SAME PROJECT BANNER FORMAT
                ====================================== */}

                <div className="hero-data-bottom">

                    <div className="services-home-hero desck-about ipgs-cloud-banner">

                        <div className="title-of-hero">

                            <p>
                                Empowering growth and
                                    securing data <br />through
                                    cloud infrastructure services
                            </p>

                            <span>
                                <Link to="/">Home</Link>
                                {" - "}
                                Infrastructure &amp; Cloud
                            </span>

                        </div>

                    </div>

                </div>


                


                {/* ======================================
                    SECTION 03 - OUR APPROACH
                ====================================== */}

                <section className="ipgs-cloud-approach">

                    <div className="container">

                        <div className="ipgs-cloud-approach-grid">

                            <div data-cloud-reveal>

                                <div className="ipgs-cloud-label">
                                    <span></span>
                                    OUR APPROACH
                                </div>

                                <span className="ipgs-cloud-chapter">
                                    01 / INFRASTRUCTURE STRATEGY
                                </span>

                                <h2>
                                    Cloud infrastructure services
                                    that put each workload
                                    <span> where it works best</span>
                                </h2>

                            </div>

                            <div
                                className="ipgs-cloud-approach-copy"
                                data-cloud-reveal
                            >

                                <p>
                                    Our cloud infrastructure
                                    services start with an honest
                                    question about where each of
                                    your workloads belongs.
                                    Sometimes the answer is a
                                    public cloud, and sometimes
                                    it's hardware you control.
                                </p>

                                <p>
                                    Cost and data control shape
                                    that answer, and so does how
                                    tied you are to one supplier.
                                    We weigh all of it with you
                                    before we build anything.
                                </p>

                                <div className="ipgs-cloud-approach-quote">
                                    We're a small company with big
                                    capabilities. This means you
                                    always get quick decisions
                                    and fast answers.
                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* ======================================
                    SECTION 04 - SIX CAPABILITIES
                ====================================== */}

                <section className="ipgs-cloud-services">

                    <div className="container">

                        <div
                            className="ipgs-cloud-services-heading"
                            data-cloud-reveal
                        >

                            <div className="ipgs-cloud-label">
                                <span></span>
                                OUR CAPABILITIES
                            </div>

                            <h2>
                                The proven tools we use
                                to build and run
                                <span> your infrastructure</span>
                            </h2>

                            <p>
                                We take a pragmatic approach
                                to designing and implementing
                                cloud infrastructure solutions.
                                Once we’ve assessed your
                                operational and security
                                requirements, we’ll develop
                                a custom package that includes
                                one or more of our proven
                                capabilities.
                            </p>

                        </div>

                        <div className="ipgs-cloud-services-grid">

                            {capabilities.map((item) => (

                                <article
                                    className="ipgs-cloud-service"
                                    key={item.number}
                                    data-cloud-reveal
                                >

                                    <div className="ipgs-cloud-service-top">

                                        <span className="ipgs-cloud-service-number">
                                            {item.number}
                                        </span>

                                        <div className="ipgs-cloud-service-icon">
                                            <i
                                                className={item.icon}
                                                aria-hidden="true"
                                            ></i>
                                        </div>

                                    </div>

                                    <h3>{item.title}</h3>

                                    <p>{item.description}</p>

                                    <span
                                        className="ipgs-cloud-service-line"
                                        aria-hidden="true"
                                    ></span>

                                </article>

                            ))}

                        </div>

                    </div>

                </section>


                {/* ======================================
                    SECTION 05 - PROJECT EXPERIENCE
                ====================================== */}

                <section className="ipgs-cloud-case-section">

                    <div className="container">

                        <div className="ipgs-cloud-case-layout">

                            <div
                                className="ipgs-cloud-case-heading"
                                data-cloud-reveal
                            >

                                <div className="ipgs-cloud-label">
                                    <span></span>
                                    DELIVERY EXPERIENCE
                                </div>

                                <span className="ipgs-cloud-case-index">
                                    PROJECT / PRIVATE CLOUD
                                </span>

                                <h2>
                                    Experience from
                                    VodafoneThree's move
                                    <span> to private cloud</span>
                                </h2>

                            </div>

                            <div
                                className="ipgs-cloud-case-content"
                                data-cloud-reveal
                            >

                                <div className="ipgs-cloud-case-symbol">
                                    <i
                                        className="ri-cloud-line"
                                        aria-hidden="true"
                                    ></i>

                                    <span className="ipgs-cloud-case-arrow">
                                        <i
                                            className="ri-arrow-right-line"
                                            aria-hidden="true"
                                        ></i>
                                    </span>

                                    <i
                                        className="ri-server-line"
                                        aria-hidden="true"
                                    ></i>
                                </div>

                                <p>
                                    We're supporting VodafoneThree
                                    as it moves a project from
                                    public cloud to a private one.
                                    The move is cutting costs
                                    and strengthening security
                                    and compliance.
                                </p>

                                <div className="ipgs-cloud-case-footnote">
                                    <span>
                                        PUBLIC CLOUD
                                    </span>

                                    <span>
                                        PRIVATE CLOUD
                                    </span>
                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* ======================================
                    SECTION 06 - WHY IPGS
                ====================================== */}

                <section className="ipgs-cloud-why">

                    <div className="container">

                        <div
                            className="ipgs-cloud-why-heading"
                            data-cloud-reveal
                        >

                            <div className="ipgs-cloud-label">
                                <span></span>
                                THE IPGS DIFFERENCE
                            </div>

                            <h2>
                                Why teams choose IPGS
                                <span> for infrastructure</span>
                            </h2>

                            <p>
                                Our meticulous approach to cloud
                                infrastructure has earned us a
                                global reputation for excellence
                                and reliability. But there’s
                                more to our success.
                            </p>

                        </div>

                        <div className="ipgs-cloud-why-list">

                            {advantages.map((item) => (

                                <article
                                    className="ipgs-cloud-why-item"
                                    key={item.number}
                                    data-cloud-reveal
                                >

                                    <span className="ipgs-cloud-why-number">
                                        {item.number}
                                    </span>

                                    <div className="ipgs-cloud-why-copy">

                                        <h3>{item.title}</h3>

                                        <p>{item.description}</p>

                                    </div>

                                    <i
                                        className={item.icon}
                                        aria-hidden="true"
                                    ></i>

                                </article>

                            ))}

                        </div>

                    </div>

                </section>


                {/* ======================================
                    SECTION 07 - FINAL CTA
                ====================================== */}

                <section className="ipgs-cloud-final">

                    <div className="container">

                        <div className="ipgs-cloud-final-layout">

                            <div data-cloud-reveal>

                                <div className="ipgs-cloud-label">
                                    <span></span>
                                    LET'S WORK TOGETHER
                                </div>

                                <h2>
                                    Start planning your
                                    cloud infrastructure
                                    <span> with IPGS</span>
                                </h2>

                                <p>
                                    Tell us what you run today
                                    and what you'd like to change,
                                    and we'll design and implement
                                    a solution that truly serves
                                    your organisation.
                                </p>

                                <p>
                                    Get in touch to tell us
                                    about your cloud-based needs.
                                </p>

                            </div>

                            <div
                                className="ipgs-cloud-final-action"
                                data-cloud-reveal
                            >

                                <Link
                                    to="/Contact"
                                    className="ipgs-cloud-final-button"
                                >
                                    Talk to Our Infrastructure Team Today

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

export default InfrastructureCloud;
