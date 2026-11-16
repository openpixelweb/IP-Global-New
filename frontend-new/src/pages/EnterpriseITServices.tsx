
import { useEffect, useRef } from "react";
import type { CSSProperties, FC } from "react";
import { Link } from "react-router-dom";

import "../assets/css/enterprise-it-services.css";

/* ==========================================
   TYPES
========================================== */

interface EnterpriseService {
    title: string;
    description: string;
    icon: string;
    path: string;
}

interface EnterpriseAdvantage {
    title: string;
    description: string;
    icon: string;
}

/* ==========================================
   FIVE APPROVED ENTERPRISE DISCIPLINES
========================================== */

const enterpriseServices: EnterpriseService[] = [
    {
        title: "Cybersecurity",
        description:
            "Get compliance-led infrastructure security aligned to the Telecommunications Security Act, CIS, and NIST. Every custom solution is backed by network security, SOC-style operations, and full vulnerability testing with remediation measures.",
        icon: "ri-shield-check-line",
        path: "/enterprise-it-services/cybersecurity",
    },
    {
        title: "Infrastructure & Cloud",
        description:
            "Move workloads across AWS, Azure, and GCP, backed by genuine expertise in cloud repatriation when public cloud stops making financial sense.",
        icon: "ri-cloud-line",
        path: "/enterprise-it-services/infrastructure-cloud",
    },
    {
        title: "Data Centre Services",
        description:
            "Keep on-premises and co-location infrastructure covered at both the physical and logical layers, day in, day out.",
        icon: "ri-server-line",
        path: "/enterprise-it-services/data-centre",
    },
    {
        title: "IT Managed Services",
        description:
            "Hand cabling, field engineering, and end-user computing to a team held to the same accountability as every other IPGS discipline.",
        icon: "ri-settings-3-line",
        path: "/enterprise-it-services/it-managed-services",
    },
    {
        title: "Product Distribution & Aggregator",
        description:
            "Source hardware and technology products through the same relationships and delivery discipline that carry through the rest of the business.",
        icon: "ri-box-3-line",
        path: "/enterprise-it-services/distribution",
    },
];

/* ==========================================
   THREE APPROVED ENTERPRISE ADVANTAGES
========================================== */

const enterpriseAdvantages: EnterpriseAdvantage[] = [
    {
        title: "One team, no handoffs",
        description:
            "Requirements gathering, design, build, deployment, and support are all delivered as part of one cohesive solution. Nothing gets quietly subcontracted to a third party you know nothing about.",
        icon: "ri-team-line",
    },
    {
        title: "Security built in from the start",
        description:
            "Your security review happens alongside your infrastructure work, not months after it. That means vulnerabilities get caught in the planning stage instead of being addressed retrospectively as technical debt.",
        icon: "ri-lock-2-line",
    },
    {
        title: "No client losses since 2016",
        description:
            "IPGS hasn't lost a client since 2016. The combination of our expertise, real-world experience, and attentiveness ensures a stellar result every time. Organisations around the world keep coming back because they know we never cut corners or hide behind mistakes.",
        icon: "ri-award-line",
    },
];

/* ==========================================
   DELIVERY STAGES
   Icons replace the original 01-05 numbers
========================================== */

const stages = [
    { title: "Requirements", icon: "ri-file-list-3-line" },
    { title: "Design", icon: "ri-pencil-ruler-2-line" },
    { title: "Build", icon: "ri-tools-line" },
    { title: "Deployment", icon: "ri-rocket-line" },
    { title: "Support", icon: "ri-customer-service-2-line" },
];

/** Sets a stagger delay used by the CSS transitions. */
const delay = (ms: number): CSSProperties =>
    ({ "--d": `${ms}ms` }) as CSSProperties;

/* ==========================================
   MAIN ENTERPRISE IT SERVICES PAGE
========================================== */

const EnterpriseITServices: FC = () => {
    const rootRef = useRef<HTMLDivElement>(null);

    /* SEO */
    useEffect(() => {
        const previousTitle = document.title;
        const meta = document.querySelector<HTMLMetaElement>(
            'meta[name="description"]'
        );
        const previousDescription = meta?.content;

        document.title = "Enterprise IT Services | IPGS";

        if (meta) {
            meta.content =
                "IPGS delivers enterprise IT services and cybersecurity services under one accountable team, with no domain silos and no handoffs.";
        }

        return () => {
            document.title = previousTitle;
            if (meta && previousDescription !== undefined) {
                meta.content = previousDescription;
            }
        };
    }, []);

    /* Scroll reveal */
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
        <div className="js-scroll ipgs-ent-page is-anim" ref={rootRef}>
            {/* ================= HERO BANNER ================= */}
            <div className="hero-data-bottom">
                <div className="services-home-hero desck-about ipgs-ent-banner">
                    <div className="title-of-hero">
                        <p>
                            Enterprise IT services that don't <br />
                            blink when everything else does
                        </p>

                        <span>
                            <Link to="/">Home</Link>
                            {" - "}
                            Enterprise IT Services
                        </span>
                    </div>
                </div>
            </div>

            {/* ================= OVERVIEW ================= */}
            <section className="ipgs-ent-overview">
                <div className="ipgs-ent-grid-bg" aria-hidden="true"></div>

                <div className="container">
                    <div className="ipgs-ent-overview-grid">
                        <div>
                            <div className="ipgs-ent-label" data-reveal="up">
                                <span></span>
                                Our approach
                            </div>

                            <h2 data-reveal="up" style={delay(100)}>
                                A full suite of IT services, customised for{" "}
                                <span>maximum effectiveness</span>
                            </h2>
                        </div>

                        <div className="ipgs-ent-overview-copy">
                            <p data-reveal="up" style={delay(150)}>
                                Security, cloud, data centres, managed
                                services, and hardware distribution often come
                                from five separate providers who barely know
                                each other exist. You end up doing the
                                integration work yourself, chasing five
                                invoices and five different accounts of what
                                happened.
                            </p>

                            <p data-reveal="up" style={delay(230)}>
                                That probably doesn’t work for you. It
                                definitely doesn’t work for us, which is why we
                                offer an end-to-end solution that keeps the
                                administration to a minimum.
                            </p>

                            <p data-reveal="up" style={delay(310)}>
                                IPGS puts all five enterprise IT services under
                                one team. Raise something with any one of them,
                                and they bring in whoever else needs to be
                                there.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= SERVICES ================= */}
            <section
                className="ipgs-ent-services"
                id="enterprise-services"
                aria-labelledby="ipgs-ent-services-title"
            >
                <div className="container">
                    <div className="ipgs-ent-services-heading">
                        <div className="ipgs-ent-label" data-reveal="up">
                            <span></span>
                            Our capabilities
                        </div>

                        <div className="ipgs-ent-heading-grid">
                            <h2
                                id="ipgs-ent-services-title"
                                data-reveal="up"
                                style={delay(100)}
                            >
                                Five IT disciplines,{" "}
                                <span>one accountable team</span>
                            </h2>

                            <p data-reveal="up" style={delay(200)}>
                                Access the IT services your organisation needs
                                for long-term success and compliance under one
                                roof. Tell us what you need, and we’ll build a
                                bespoke solution featuring one or more of our
                                specialist services.
                            </p>
                        </div>
                    </div>

                    <div className="ipgs-ent-services-list">
                        {enterpriseServices.map((service, i) => (
                            <article
                                className="ipgs-ent-service"
                                key={service.title}
                                data-reveal="up"
                                style={delay(i * 80)}
                            >
                                <div className="ipgs-ent-service-icon" aria-hidden="true">
                                    <i className={service.icon}></i>
                                </div>

                                <div className="ipgs-ent-service-content">
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </div>

                                <Link
                                    to={service.path}
                                    className="ipgs-ent-service-link"
                                    aria-label={`Learn more about ${service.title}`}
                                >
                                    <span>Learn More</span>
                                    <i className="ri-arrow-right-up-line" aria-hidden="true"></i>
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= DELIVERY MODEL ================= */}
            <section className="ipgs-ent-delivery">
                <div className="container">
                    <div className="ipgs-ent-delivery-inner">
                        <div className="ipgs-ent-label" data-reveal="up">
                            <span></span>
                            Accountability by design
                        </div>

                        <h2 data-reveal="up" style={delay(100)}>
                            One cohesive solution, from the first conversation{" "}
                            <span>to ongoing support</span>
                        </h2>

                        <ol className="ipgs-ent-delivery-stages" data-reveal="up" style={delay(200)}>
                            <span className="ipgs-ent-track" aria-hidden="true"><i></i></span>

                            {stages.map((stage, index) => (
                                <li className="ipgs-ent-delivery-stage" key={stage.title}>
                                    <span style={delay(index * 1800)}>
                                        <i className={stage.icon} aria-hidden="true"></i>
                                    </span>
                                    <strong>{stage.title}</strong>
                                </li>
                            ))}
                        </ol>

                        <p data-reveal="up" style={delay(300)}>
                            Every stage belongs to one accountable IPGS team —
                            no unnecessary handoffs between disconnected
                            providers.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= ADVANTAGES ================= */}
            <section className="ipgs-ent-advantages">
                <div className="container">
                    <div className="ipgs-ent-advantages-heading">
                        <div className="ipgs-ent-label" data-reveal="up">
                            <span></span>
                            Why choose IPGS
                        </div>

                        <div className="ipgs-ent-heading-grid">
                            <h2 data-reveal="up" style={delay(100)}>
                                Why enterprise clients choose IPGS for{" "}
                                <span>custom IT services</span>
                            </h2>

                            <p data-reveal="up" style={delay(200)}>
                                You’ll always be a priority for us. While we
                                always put quality, accuracy, and expertise
                                first, you’ll always receive the very best
                                customer service. You’ll never be just another
                                account to the IPGS team. You and your
                                colleagues will be valued partners for as long
                                as we work together.
                            </p>
                        </div>
                    </div>

                    <div className="ipgs-ent-advantages-grid">
                        {enterpriseAdvantages.map((item, i) => (
                            <article
                                className="ipgs-ent-advantage"
                                key={item.title}
                                data-reveal="up"
                                style={delay(i * 120)}
                            >
                                <div className="ipgs-ent-advantage-icon" aria-hidden="true">
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
            <section className="ipgs-ent-final">
                <div className="ipgs-ent-signal" aria-hidden="true">
                    <span></span>
                    <span></span>
                    <span></span>
                    <i></i>
                </div>

                <div className="container">
                    <div className="ipgs-ent-final-grid">
                        <div>
                            <div className="ipgs-ent-label" data-reveal="up">
                                <span></span>
                                Let's work together
                            </div>

                            <h2 data-reveal="up" style={delay(100)}>
                                Discuss your IT requirements with an{" "}
                                <span>experienced specialist</span>
                            </h2>

                            <p data-reveal="up" style={delay(200)}>
                                Get in touch, and we'll show you what
                                joined-up enterprise IT services genuinely look
                                like.
                            </p>
                        </div>

                        <div className="ipgs-ent-final-action" data-reveal="up" style={delay(300)}>
                            <Link to="/Contact" className="ipgs-ent-final-btn">
                                Get In Touch
                                <i className="ri-arrow-right-up-line" aria-hidden="true"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EnterpriseITServices;
