import { useEffect, useRef } from "react";
import type { CSSProperties, FC } from "react";
import { Link } from "react-router-dom";

import "../assets/css/telecom-network-services.css";

interface TelecomStrength {
    title: string;
    description: string;
    icon: string;
}

const strengths: TelecomStrength[] = [
    {
        title: "No client losses since 2016",
        description:
            "IPGS hasn't lost a client since 2016. Why? Because we plan meticulously, bring a huge range of expertise to every project, and keep the lines of communication open with our clients from the initial consultation to final delivery and beyond.",
        icon: "ri-shield-check-line",
    },
    {
        title: "Real operator experience",
        description:
            "Every engineer at IPGS has genuine Tier 1 UK operator experience behind them. After all, someone who's actually sat inside an operator's network understands your pressures before you've finished explaining them. It’s this background that allows us to be both proactive and reactive when the occasion calls for it.",
        icon: "ri-base-station-line",
    },
    {
        title: "One dedicated team",
        description:
            "Your project deserves the same specialists from your first conversation right through to delivery, not a rotating cast of contractors who don’t know the ins and outs of your operation. That’s because continuity matters on a network programme, and engineers who already know your environment spot problems before they turn into expensive ones.",
        icon: "ri-team-line",
    },
];



const coreScope = [
    "Resourcing",
    "Design, build and test engineers",
    "Voice and SIP migration",
    "Regulatory consultancy",
    "Performance optimisation",
];

const vendors = ["Ericsson", "Samsung", "Huawei", "Nokia"];

const delay = (ms: number): CSSProperties =>
    ({ "--d": `${ms}ms` }) as CSSProperties;

const TelecomNetworkServices: FC = () => {
    const rootRef = useRef<HTMLDivElement>(null);

    /* SEO */
    useEffect(() => {
        const previousTitle = document.title;
        const meta = document.querySelector<HTMLMetaElement>(
            'meta[name="description"]'
        );
        const previousDescription = meta?.content;

        document.title = "Telecom Network Services | IPGS";

        if (meta) {
            meta.content =
                "IPGS delivers telecom network services and mobile network operator services, built by engineers with real Tier 1 UK operator experience.";
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
        <div className="js-scroll ipgs-tel-page is-anim" ref={rootRef}>
            {/* ================= OUR TEAM STYLE HERO ================= */}
            <section className="ipgs-tel-hero" aria-labelledby="ipgs-tel-hero-title">
                <div className="ipgs-tel-hero-ring" aria-hidden="true" />
                <div className="ipgs-tel-hero-inner">
                    <h1 id="ipgs-tel-hero-title">
                        Telecom network services built by experts
                        <br className="ipgs-tel-desktop-break" />
                        who&apos;ve worked inside a Tier 1 UK operator
                    </h1>
                    <nav className="ipgs-tel-hero-breadcrumb" aria-label="Breadcrumb">
                        <Link to="/">Home</Link>
                        <span aria-hidden="true"> - </span>
                        <span aria-current="page">Telecom Network Services</span>
                    </nav>
                </div>
            </section>

            {/* ================= CONNECTED TEAM ================= */}
            <section className="ipgs-tel-connected">
                <div className="container">
                    <div className="ipgs-tel-connected-grid">
                        <div>
                            <div className="ipgs-tel-label" data-reveal="up">
                                <span></span>
                                One accountable team
                            </div>

                            <h2 data-reveal="up" style={delay(100)}>
                                Telecom network services{" "}
                                <span>without crossed lines</span>
                            </h2>
                        </div>

                        <div className="ipgs-tel-connected-copy">
                            <p data-reveal="up" style={delay(150)}>
                                Core, RAN, and transport usually come from
                                separate suppliers, so problems get missed
                                between them. IPGS brings all three telecom
                                network services under one team, so nothing
                                falls through the gaps.
                            </p>

                            <p data-reveal="up" style={delay(250)}>
                                Our core network engineers came from inside a
                                Tier 1 UK mobile network operator, so they
                                already know the pressure you're under. That
                                experience carries into RAN and transport work
                                too, backed by teams with genuine operator-side
                                and vendor-side know-how.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= DISCIPLINES ================= */}
            <section className="ipgs-tel-disciplines">
                <div className="container">
                    <div className="ipgs-tel-heading">
                        <div className="ipgs-tel-label" data-reveal="up">
                            <span></span>
                            Our network disciplines
                        </div>

                        <h2 data-reveal="up" style={delay(100)}>
                            Two essential network disciplines,{" "}
                            <span>one accountable team</span>
                        </h2>

                        <p data-reveal="up" style={delay(200)}>
                            Each discipline has its own technical demands, but
                            they’re the responsibility of one united team at
                            IPGS. You get one point of contact for service
                            issues, but a multidisciplinary team delivers the
                            work.
                        </p>
                    </div>

                    {/* CORE */}
                    <article className="ipgs-tel-discipline">
                        <div className="ipgs-tel-scope" data-reveal="panel">
                            <span className="ipgs-tel-tag">Core networks</span>

                            <ul>
                                {coreScope.map((s, i) => (
                                    <li key={s} style={delay(i * 2400)}>
                                        <i className="ri-check-line" aria-hidden="true"></i>
                                        <span>{s}</span>
                                    </li>
                                ))}
                            </ul>

                            <span className="ipgs-tel-scan" aria-hidden="true"></span>
                        </div>

                        <div className="ipgs-tel-discipline-copy">
                            <div className="ipgs-tel-label" data-reveal="up">
                                <span></span>
                                Core network services
                            </div>

                            <h3 data-reveal="up" style={delay(100)}>Core Networks</h3>

                            <p data-reveal="up" style={delay(180)}>
                                Core network engineers at IPGS bring real Tier 1
                                UK operator experience to every migration. You
                                get people who already understand your
                                environment before the first call.
                            </p>

                            <p data-reveal="up" style={delay(260)}>
                                The work we do covers resourcing, design, build,
                                and test engineers, alongside voice and SIP
                                migration, regulatory consultancy, and
                                performance optimisation. And every consultant
                                carries that same operator background into your
                                project.
                            </p>

                            <div data-reveal="up" style={delay(340)}>
                                <Link
                                    to="/telecom-network-services/core-network"
                                    className="ipgs-tel-text-link"
                                >
                                    Learn More About Core Networks
                                    <i className="ri-arrow-right-line" aria-hidden="true"></i>
                                </Link>
                            </div>
                        </div>
                    </article>

                    {/* RAN */}
                    <article className="ipgs-tel-discipline ipgs-tel-discipline-reverse">
                        <div className="ipgs-tel-hub" data-reveal="panel">
                            <span className="ipgs-tel-tag">Radio access networks</span>

                            <div className="ipgs-tel-hub-map">
                                <div className="ipgs-tel-hub-core">
                                    <i className="ri-base-station-line" aria-hidden="true"></i>
                                    <strong>One point of contact</strong>
                                </div>

                                <ul>
                                    {vendors.map((v, i) => (
                                        <li key={v} style={delay(i * 1500)}>
                                            <span aria-hidden="true"></span>
                                            {v}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="ipgs-tel-discipline-copy">
                            <div className="ipgs-tel-label" data-reveal="up">
                                <span></span>
                                Radio access networks
                            </div>

                            <h3 data-reveal="up" style={delay(100)}>RAN</h3>

                            <p data-reveal="up" style={delay(180)}>
                                RAN services from IPGS cover design across
                                Ericsson, Samsung, Huawei, and Nokia, so vendor
                                politics stay out of your project. You get
                                rollout support, testing, and verification, plus
                                managed support once your network is live.
                            </p>

                            <p data-reveal="up" style={delay(260)}>
                                This includes independent, multi-vendor RAN
                                design and fourth-line managed support that sits
                                between your team and vendor research and
                                development. You get one point of contact
                                instead of chasing each vendor separately.
                            </p>

                            <div data-reveal="up" style={delay(340)}>
                                <Link
                                    to="/telecom-network-services/ran"
                                    className="ipgs-tel-text-link"
                                >
                                    Learn More About RAN
                                    <i className="ri-arrow-right-line" aria-hidden="true"></i>
                                </Link>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            {/* ================= WHY IPGS ================= */}
            <section className="ipgs-tel-why">
                <div className="container">
                    <div className="ipgs-tel-why-heading">
                        <div className="ipgs-tel-label" data-reveal="up">
                            <span></span>
                            Why IPGS
                        </div>

                        <div className="ipgs-tel-why-grid">
                            <h2 data-reveal="up" style={delay(100)}>
                                Why operators <span>bring us in</span>
                            </h2>

                            <p data-reveal="up" style={delay(200)}>
                                Our reputation precedes us around the world. Our
                                meticulous planning and attention to detail are
                                just two of the reasons why we’ve experienced
                                exponential growth over the last decade. We have
                                a lot to bring to the table, including:
                            </p>
                        </div>
                    </div>

                    <div className="ipgs-tel-strengths">
                        {strengths.map((item, i) => (
                            <article
                                className="ipgs-tel-strength"
                                key={item.title}
                                data-reveal="up"
                                style={delay(i * 100)}
                            >
                                <div className="ipgs-tel-strength-icon" aria-hidden="true">
                                    <i className={item.icon}></i>
                                </div>

                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="ipgs-tel-final">
                <div className="ipgs-tel-signal" aria-hidden="true">
                    <span></span>
                    <span></span>
                    <span></span>
                    <i></i>
                </div>

                <div className="container">
                    <div className="ipgs-tel-final-grid">
                        <div>
                            <div className="ipgs-tel-label" data-reveal="up">
                                <span></span>
                                Let's work together
                            </div>

                            <h2 data-reveal="up" style={delay(100)}>
                                Your network infrastructure is in{" "}
                                <span>safe hands with us</span>
                            </h2>

                            <p data-reveal="up" style={delay(200)}>
                                Get in touch to tell us about your project
                                requirements. Our telecom network services team
                                already speaks your language, so it should be an
                                enjoyable and productive experience.
                            </p>
                        </div>

                        <div className="ipgs-tel-final-action" data-reveal="up" style={delay(300)}>
                            <Link to="/contact" className="ipgs-tel-final-button">
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

export default TelecomNetworkServices;
