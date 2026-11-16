
import { useEffect, useRef } from "react";
import type { FC } from "react";
import { Link } from "react-router-dom";

import "../assets/css/data-centre-services.css";

/* ==========================================
   TYPES
========================================== */

interface DataCentreItem {
    title: string;
    description: string;
    icon: string;
}

/* ==========================================
   SIX APPROVED DATA CENTRE CAPABILITIES
========================================== */

const services: DataCentreItem[] = [
    {
        title: "Data centre design & architecture",
        description:
            "We plan the layout, cabling, and capacity of your data centre around the way your business works. This approach ensures it performs from day one and has room to grow.",
        icon: "ri-layout-grid-line",
    },
    {
        title: "Server & storage solutions",
        description:
            "We select, build, and install servers and storage to match your workloads. The preparatory and planning work we do ensures your applications run quickly and your data is always easy to reach.",
        icon: "ri-server-line",
    },
    {
        title: "Virtualisation & cloud integration",
        description:
            "Your dedicated IPGS team connects your data centre to private and public cloud, so each workload sits where it costs least and performs best. Moving it never leaves you exposed.",
        icon: "ri-cloud-line",
    },
    {
        title: "Data centre security & compliance",
        description:
            "We build protection in from the start, including segmentation and firewalling. Our work adheres to UK telecoms security law, CIS, and NIST. The result is simple yet crucial. Your data stays protected, and audits are easier and faster.",
        icon: "ri-shield-check-line",
    },
    {
        title: "Monitoring & management",
        description:
            "Our engineers watch your environment and handle updates as and when they come along. We’re used to working across multiple time zones, so small issues anywhere in the world are caught before they become serious outages.",
        icon: "ri-pulse-line",
    },
    {
        title: "Disaster recovery & backup solutions",
        description:
            "Backup and recovery are planned and executed with precision, so you can restore systems quickly after a failure. From day one, we’ll make it our mission to keep your business running smoothly while providing the kind of data protection that gives your customers confidence.",
        icon: "ri-restart-line",
    },
];

/* ==========================================
   FOUR OUTCOMES FROM APPROVED DOCUMENT
========================================== */

const outcomes = [
    {
        title: "Improved infrastructure performance and reliability",
        description:
            "Your teams work faster, and outages become rare.",
        icon: "ri-speed-up-line",
    },
    {
        title: "Enhanced network security and risk management",
        description:
            "Threats are found early, and every risk is tracked.",
        icon: "ri-shield-keyhole-line",
    },
    {
        title: "Scalable IT systems that support future growth",
        description:
            "This means you add capacity when you need it without rebuilding.",
        icon: "ri-stack-line",
    },
    {
        title: "Expert guidance for digital transformation initiatives",
        description:
            "Each move, such as bringing workloads out of the public cloud, is planned and costed in advance.",
        icon: "ri-compass-3-line",
    },
];



/* ==========================================
   MAIN COMPONENT
========================================== */

const DataCentreServices: FC = () => {
    const pageRef = useRef<HTMLDivElement>(null);

    /* ======================================
       SEO
    ====================================== */

    useEffect(() => {
        const previousTitle = document.title;

        const meta =
            document.querySelector<HTMLMetaElement>(
                'meta[name="description"]'
            );

        const previousDescription = meta?.content;

        document.title =
            "Data Centre Services: Design, Security and Support | IPGS";

        if (meta) {
            meta.content =
                "IPGS provides data centre services from design and build to security, monitoring and recovery. One in-house team for your on-premises or co-location setup. Talk to us today.";
        }

        return () => {
            document.title = previousTitle;

            if (
                meta &&
                previousDescription !== undefined
            ) {
                meta.content = previousDescription;
            }
        };
    }, []);

    /* ======================================
       SCROLL REVEAL ANIMATION
    ====================================== */

    useEffect(() => {
        const root = pageRef.current;

        if (!root) return;

        const elements =
            root.querySelectorAll<HTMLElement>(
                "[data-dc-reveal]"
            );

        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (
            reducedMotion ||
            !("IntersectionObserver" in window)
        ) {
            elements.forEach((element) =>
                element.classList.add("dc-visible")
            );

            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(
                            "dc-visible"
                        );

                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.08,
                rootMargin: "0px 0px -20px 0px",
            }
        );

        elements.forEach((element) =>
            observer.observe(element)
        );

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={pageRef}
            className="js-scroll ipgs-dc-page"
        >

            {/* ======================================
                SECTION 01 - EXISTING HERO BANNER
            ====================================== */}

            <div className="hero-data-bottom">

                <div className="services-home-hero desck-about ipgs-dc-banner">

                    <div className="title-of-hero">

                        <p>
                            Data centre services
                                that scale <br />as fast as
                                 your ambitions
                        </p>

                        <span>
                            <Link to="/">Home</Link>
                            {" - "}
                            <Link to="/enterprise-it-services">
                                Enterprise IT Services
                            </Link>
                            {" - "}
                            Data Centre Services
                        </span>

                    </div>

                </div>

            </div>


            


            {/* ======================================
                SECTION 03 - RELIABLE INFRASTRUCTURE
            ====================================== */}

            <section className="ipgs-dc-foundation">

                <div className="container">

                    <div className="ipgs-dc-foundation-grid">

                        <div data-dc-reveal>

                            <div className="ipgs-dc-label">
                                <span></span>
                                THE FOUNDATION
                            </div>

                            <span className="ipgs-dc-chapter">
                                RELIABLE INFRASTRUCTURE
                            </span>

                            <h2>
                                Reliable, scalable data
                                centre solutions for
                                <span> modern enterprises</span>
                            </h2>

                        </div>

                        <div
                            className="ipgs-dc-foundation-copy"
                            data-dc-reveal
                        >

                            <p>
                                When your data centre stops,
                                your business stops. We build
                                and look after both the physical
                                and technical layers, so your
                                systems stay available, protected
                                and ready to grow with your plans.
                            </p>

                            <p>
                                Our data centre services cover
                                everything from first design to
                                everyday running, managed and
                                monitored by a dedicated team
                                of professionals you’ll get
                                to know by name.
                            </p>

                            <div className="ipgs-dc-foundation-note">
                                <i
                                    className="ri-links-line"
                                    aria-hidden="true"
                                ></i>

                                <span>
                                    One in-house team,
                                    from design to everyday running.
                                </span>
                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ======================================
                SECTION 04 - SIX SERVICES
            ====================================== */}

            <section className="ipgs-dc-services">

                <div className="container">

                    <div
                        className="ipgs-dc-services-heading"
                        data-dc-reveal
                    >

                        <div className="ipgs-dc-label">
                            <span></span>
                            OUR CAPABILITIES
                        </div>

                        <div className="ipgs-dc-heading-grid">

                            <h2>
                                Perfected data centre
                                services,
                                <span> adapted to meet your needs</span>
                            </h2>

                            <p>
                                From design and deployment
                                to ongoing management,
                                our data centre services
                                deliver security and performance.
                            </p>

                        </div>

                    </div>

                    <div className="ipgs-dc-services-list">

                        {services.map((service) => (
                            <article
                                className="ipgs-dc-service"
                                key={service.title}
                                data-dc-reveal
                            >

                                <div className="ipgs-dc-service-copy">

                                    <h3>{service.title}</h3>

                                    <p>{service.description}</p>

                                </div>

                                <div className="ipgs-dc-service-icon">
                                    <i
                                        className={service.icon}
                                        aria-hidden="true"
                                    ></i>
                                </div>

                            </article>
                        ))}

                    </div>

                </div>

            </section>


            {/* ======================================
                SECTION 05 - FOUR BUSINESS OUTCOMES
            ====================================== */}

            <section className="ipgs-dc-outcomes">

                <div className="container">

                    <div
                        className="ipgs-dc-outcomes-heading"
                        data-dc-reveal
                    >

                        <div className="ipgs-dc-label">
                            <span></span>
                            BUSINESS OUTCOMES
                        </div>

                        <h2>
                            Delivering results,
                            <span> driving growth</span>
                        </h2>

                        <p>
                            The consequences of the work
                            we do around data centre
                            infrastructure are far-reaching.
                            And because we know what we’re
                            doing, they always have a positive
                            impact across the organisations
                            we serve.
                        </p>

                    </div>

                    <div className="ipgs-dc-outcomes-grid">

                        {outcomes.map((item) => (
                            <article
                                className="ipgs-dc-outcome"
                                key={item.title}
                                data-dc-reveal
                            >

                                <div className="ipgs-dc-outcome-top">
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


            {/* ======================================
                SECTION 06 - WHY IPGS
            ====================================== */}

            <section className="ipgs-dc-why">

                <div className="container">

                    <div className="ipgs-dc-why-grid">

                        <div data-dc-reveal>

                            <div className="ipgs-dc-label">
                                <span></span>
                                WHY IPGS
                            </div>

                            <h2>
                                Why clients choose IPGS
                                for
                                <span> data centre solutions</span>
                            </h2>

                        </div>

                        <div
                            className="ipgs-dc-why-content"
                            data-dc-reveal
                        >

                            <p>
                                Our team brings real industry
                                experience to every project,
                                including building and securing
                                private cloud and multi-data-centre
                                environments for telecom clients.
                                We focus on practical solutions
                                to real business challenges,
                                so your technology investment
                                delivers returns well into
                                the future.
                            </p>

                            <p>
                                With IPGS in your corner,
                                a single in-house team looks
                                after design, build, security,
                                and support. That means no
                                hand-offs and a named contact
                                who knows both your team
                                and your site. We are small
                                enough to move fast and
                                experienced enough to get
                                it right first time.
                            </p>

                            <div className="ipgs-dc-why-footnote">
                                <span>DESIGN</span>
                                <span>BUILD</span>
                                <span>SECURITY</span>
                                <span>SUPPORT</span>
                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ======================================
                SECTION 07 - FINAL CTA
            ====================================== */}

            <section className="ipgs-dc-final">

                <div className="container">

                    <div className="ipgs-dc-final-grid">

                        <div data-dc-reveal>

                            <div className="ipgs-dc-label">
                                <span></span>
                                LET'S WORK TOGETHER
                            </div>

                            <h2>
                                Plan your data centre
                                with an
                                <span> experienced specialist</span>
                            </h2>

                            <p>
                                Tell us what you run today
                                and where you want to be.
                                We'll show you how our
                                data centre services keep
                                it reliable, secure,
                                and ready to grow.
                            </p>

                        </div>

                        <div
                            className="ipgs-dc-final-action"
                            data-dc-reveal
                        >

                            <Link
                                to="/Contact"
                                className="ipgs-dc-final-button"
                            >
                                Talk to Our Data Centre Team Today

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

export default DataCentreServices;
