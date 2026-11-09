
import { useEffect, useRef } from "react";
import type { FC } from "react";
import { Link } from "react-router-dom";

import "../assets/css/it-managed-services.css";

/* ==========================================
   IPGS - IT MANAGED SERVICES
   React + TypeScript
========================================== */

interface ManagedServiceItem {
    number: string;
    title: string;
    description: string;
    icon: string;
}

interface ProjectItem {
    number: string;
    name: string;
    description: string;
    label: string;
}

const deliverySteps: ManagedServiceItem[] = [
    {
        number: "01",
        title: "Survey your site room by room, space by space",
        description:
            "We walk your site, measure signal strength, and map where coverage drops, so you know exactly where connections thrive and struggle.",
        icon: "ri-search-eye-line",
    },
    {
        number: "02",
        title: "Get a clear report you can act on",
        description:
            "We send a plain-English report of what we found and what to fix first, so your team can set a budget and press ahead with certainty.",
        icon: "ri-file-chart-line",
    },
    {
        number: "03",
        title: "Agree on a design before we build",
        description:
            "We draw up the network on paper and agree it with you first, so what we install is what you expected, with no surprise costs.",
        icon: "ri-node-tree",
    },
    {
        number: "04",
        title: "Install everything without disruption",
        description:
            "Our engineers fit the cabling, access points and equipment around your working day, so your people carry on working while it goes in.",
        icon: "ri-tools-line",
    },
    {
        number: "05",
        title: "Set up and connect every device",
        description:
            "We configure and test the network until every device connects first time, so your people can start using it from day one.",
        icon: "ri-wifi-line",
    },
];

const projects: ProjectItem[] = [
    {
        number: "01",
        name: "Wipro and Brambles (CHEP)",
        label: "GLOBAL SITE SURVEYS",
        description:
            "On behalf of Wipro, we've completed more than 370 site surveys around the world for global supply chain and logistics specialist Brambles. The work grew quickly from a trial batch of 14 sites to 30. So impressed were our clients that they increased our remit to 100 before giving us their entire programme.",
    },
    {
        number: "02",
        name: "Berkeley Square House, Mayfair",
        label: "BACKBONE NETWORK MANAGEMENT",
        description:
            "We manage the backbone network at Berkeley Square House for building manager Colliers, which is a flagship building for us. The quality of our work led Colliers to refer us to a new tenant.",
    },
    {
        number: "03",
        name: "University of Reading",
        label: "CAMPUS WI-FI REFRESH",
        description:
            "We replaced 622 Wi-Fi access points across 15 buildings while keeping the campus connected.",
    },
    {
        number: "04",
        name: "Southwark, Brent, and Lewisham councils",
        label: "PUBLIC SECTOR SERVICES",
        description:
            "We're approved as a supplier to all three councils, and work on a library project is due to start in November 2026.",
    },
];

const advantages: ManagedServiceItem[] = [
    {
        number: "01",
        title: "We start small and grow quickly",
        description:
            "Clients often test us with a small batch, then scale up once they've seen the quality. Our teams in the UK and India, backed by specialists in Poland and local partners where needed, keep work moving around the clock.",
        icon: "ri-expand-diagonal-line",
    },
    {
        number: "02",
        title: "Decisions made where the work happens",
        description:
            "Clients tell us they like dealing with people who can say yes on the spot, so your project never has to wait for a series of sign-offs.",
        icon: "ri-flashlight-line",
    },
    {
        number: "03",
        title: "A design built around your building",
        description:
            "We use proven methods before designing solutions that meet the needs of your business or site. That's why no two solutions we've delivered over the years have been the same.",
        icon: "ri-building-line",
    },
    {
        number: "04",
        title: "The expertise and know-how of an established team",
        description:
            "The same team handles the survey, design, installation, and set-up, so you talk to people who know your project. And no matter who you talk to at IPGS, you're guaranteed the same level of service and technical excellence.",
        icon: "ri-team-line",
    },
];



/* ==========================================
   MAIN PAGE
========================================== */

const ITManagedServices: FC = () => {
    const pageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const previousTitle = document.title;

        const meta = document.querySelector<HTMLMetaElement>(
            'meta[name="description"]'
        );

        const previousDescription = meta?.content;

        document.title =
            "Wi-Fi and Network Infrastructure Services | IPGS";

        if (meta) {
            meta.content =
                "IPGS surveys, designs, installs, and sets up Wi-Fi and network infrastructure for businesses, universities, and buildings worldwide. Talk to our team today.";
        }

        return () => {
            document.title = previousTitle;

            if (meta && previousDescription !== undefined) {
                meta.content = previousDescription;
            }
        };
    }, []);

    useEffect(() => {
        const root = pageRef.current;
        if (!root) return;

        const elements = root.querySelectorAll<HTMLElement>(
            "[data-ms-reveal]"
        );

        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (
            reducedMotion ||
            typeof IntersectionObserver === "undefined"
        ) {
            elements.forEach((element) =>
                element.classList.add("ms-visible")
            );
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("ms-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.08,
                rootMargin: "0px 0px -25px 0px",
            }
        );

        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={pageRef} className="js-scroll ipgs-ms-page">

            {/* ======================================
                01 - EXISTING IPGS HERO BANNER
            ====================================== */}

            <div className="hero-data-bottom">
                <div className="services-home-hero desck-about ipgs-ms-banner">
                    <div className="title-of-hero">
                        <p>Fostering connections is the goal.
                                <br />Delivering exceptional managed <br />IT
                                services is how we get there</p>

                        <span>
                            <Link to="/">Home</Link>
                            {" - "}
                            IT Managed Services
                        </span>
                    </div>
                </div>
            </div>

            

            {/* ======================================
                03 - WHY NETWORKS NEED ATTENTION
            ====================================== */}

            <section className="ipgs-ms-context">
                <div className="container">
                    <div className="ipgs-ms-context-grid">

                        <div data-ms-reveal>
                            <div className="ipgs-ms-label">
                                <span></span>
                                CONNECTIVITY THAT WORKS
                            </div>

                            <span className="ipgs-ms-chapter">
                                01 / THE CHALLENGE
                            </span>

                            <h2>
                                Wi-Fi and network infrastructure
                                services for connectivity that has
                                <span> run out of steam</span>
                            </h2>
                        </div>

                        <div className="ipgs-ms-context-copy" data-ms-reveal>
                            <p>
                                Networks age, and the number of people
                                using them keeps growing. Old equipment
                                struggles under the load, and the result
                                is slow internet and congestion at
                                busy times.
                            </p>

                            <p>
                                Our Wi-Fi and network infrastructure
                                services start with a close look at
                                what you have and what you need.
                                Then we make your connection faster
                                and more reliable.
                            </p>

                            <p>
                                Think of the last time you joined the
                                Wi-Fi in a shopping centre, and it just
                                worked. A team like ours made that happen.
                            </p>

                            <p>
                                Whether you're installing a new WiFi setup
                                or updating an existing one, you can
                                rely on IPGS for reliability, performance,
                                and cost-effectiveness.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ======================================
                04 - FIVE STEP DELIVERY PROCESS
            ====================================== */}

            <section className="ipgs-ms-process" id="managed-process">
                <div className="container">
                    <div className="ipgs-ms-process-intro" data-ms-reveal>
                        <div className="ipgs-ms-label">
                            <span></span>
                            THE IPGS DELIVERY PROCESS
                        </div>

                        <h2>
                            A proven pathway to
                            <span> real connection</span>
                        </h2>

                        <p>
                            Our goal is to ensure everyone in your
                            organisation or development stays connected.
                            We achieve it through a proven five-step
                            process. Whether you're opening a new business
                            or updating an existing network, we're
                            meticulous in our approach.
                        </p>
                    </div>

                    <div className="ipgs-ms-process-list">
                        {deliverySteps.map((step) => (
                            <article
                                className="ipgs-ms-process-item"
                                key={step.number}
                                data-ms-reveal
                            >
                                <div className="ipgs-ms-process-marker">
                                    <span>{step.number}</span>
                                    <i
                                        className={step.icon}
                                        aria-hidden="true"
                                    ></i>
                                </div>

                                <div className="ipgs-ms-process-copy">
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ======================================
                05 - PROJECT EXPERIENCE
            ====================================== */}

            <section className="ipgs-ms-projects">
                <div className="container">

                    <div className="ipgs-ms-projects-heading" data-ms-reveal>
                        <div className="ipgs-ms-label">
                            <span></span>
                            OUR EXPERIENCE
                        </div>

                        <div className="ipgs-ms-heading-grid">
                            <h2>
                                A proven track record of
                                <span> service delivery</span>
                            </h2>

                            <p>
                                On-site experience isn't just a
                                claim at IPGS. Our track record
                                of delivering high-profile WiFi
                                infrastructure projects speaks
                                for itself.
                            </p>
                        </div>
                    </div>

                    <div className="ipgs-ms-projects-grid">
                        {projects.map((project) => (
                            <article
                                className="ipgs-ms-project"
                                key={project.number}
                                data-ms-reveal
                            >
                                <div className="ipgs-ms-project-top">
                                    <span>{project.number}</span>
                                    <i
                                        className="ri-arrow-right-up-line"
                                        aria-hidden="true"
                                    ></i>
                                </div>

                                <span className="ipgs-ms-project-label">
                                    {project.label}
                                </span>

                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                            </article>
                        ))}
                    </div>

                </div>
            </section>

            {/* ======================================
                06 - WHY IPGS
            ====================================== */}

            <section className="ipgs-ms-advantages">
                <div className="container">

                    <div
                        className="ipgs-ms-advantages-heading"
                        data-ms-reveal
                    >
                        <div className="ipgs-ms-label">
                            <span></span>
                            THE IPGS DIFFERENCE
                        </div>

                        <h2>
                            Why organisations choose IPGS for
                            <span> Wi-Fi and network infrastructure</span>
                        </h2>

                        <p>
                            Four things set our team apart, and
                            each plays a part in our approach to
                            project delivery.
                        </p>
                    </div>

                    <div className="ipgs-ms-advantages-list">
                        {advantages.map((item) => (
                            <article
                                className="ipgs-ms-advantage"
                                key={item.number}
                                data-ms-reveal
                            >
                                <span className="ipgs-ms-advantage-number">
                                    {item.number}
                                </span>

                                <div className="ipgs-ms-advantage-copy">
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
                07 - FINAL CTA
            ====================================== */}

            <section className="ipgs-ms-final">
                <div className="container">
                    <div className="ipgs-ms-final-layout">

                        <div data-ms-reveal>
                            <div className="ipgs-ms-label">
                                <span></span>
                                LET'S WORK TOGETHER
                            </div>

                            <h2>
                                Start planning your
                                <span> network upgrade with IPGS</span>
                            </h2>

                            <p>
                                Tell us where your Wi-Fi or network
                                is falling short, and we'll show
                                you what needs to change.
                            </p>

                            <p>
                                Let's talk about a better WiFi
                                experience for your customers.
                            </p>
                        </div>

                        <div
                            className="ipgs-ms-final-action"
                            data-ms-reveal
                        >
                            <Link
                                to="/Contact"
                                className="ipgs-ms-final-btn"
                            >
                                Talk to Our Infrastructure Services Team Today

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

export default ITManagedServices;
