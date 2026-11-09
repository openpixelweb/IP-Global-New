
import { useEffect, useRef } from "react";
import type { FC } from "react";
import { Link } from "react-router-dom";

import "../assets/css/industries.css";

/* ==========================================
   IPGS INDUSTRIES
   React + TypeScript / frontend-new
========================================== */

interface Industry {
    number: string;
    title: string;
    description: string;
    icon: string;
}

/* ==========================================
   ALL 12 APPROVED INDUSTRIES
========================================== */

const industries: Industry[] = [
    {
        number: "01",
        title: "Telecoms",
        description:
            "Mobile operators rely on us for network design, rollout, and specialist engineers, including at a Tier-1 UK operator. Upgrades and migrations finish on time, and customers stay connected.",
        icon: "ri-base-station-line",
    },
    {
        number: "02",
        title: "Enterprise organisations",
        description:
            "Growing businesses get networks that scale with them. Brambles did just that with our help, starting with a first batch of 14 sites before handing us their entire programme. We repaid their faith by scaling our solution up without compromising quality, safety, or reliability.",
        icon: "ri-building-4-line",
    },
    {
        number: "03",
        title: "Retail",
        description:
            "Busy shops and shopping centres need Wi-Fi that just works. To make this happen, we survey, design, and set up networks that keep customers and staff connected during even the busiest traffic days.",
        icon: "ri-store-2-line",
    },
    {
        number: "04",
        title: "Banking & financial services",
        description:
            "Financial firms need systems that protect sensitive data and meet compliance demands. To deliver these necessities, we build secure, dependable networks. One of our success stories is the WiFi system we installed at Berkeley Square House, home to various major banks.",
        icon: "ri-bank-line",
    },
    {
        number: "05",
        title: "Government & public sector",
        description:
            "Councils rely on secure, dependable technology to serve residents and deliver essential services. We provide expertise and technical support to local authorities in Southwark, Brent, and Lewisham. And we’re currently delivering a major library network project.",
        icon: "ri-government-line",
    },
    {
        number: "06",
        title: "Healthcare",
        description:
            "Patient data and healthcare systems depend on infrastructure that is secure and always available. To strike the right balance between data protection and accessibility, we build reliable networks that protect sensitive records and keep digital health services running.",
        icon: "ri-hospital-line",
    },
    {
        number: "07",
        title: "Education",
        description:
            "Universities and colleges need connections that give students reliable access to information. At the University of Reading, we're replacing 622 Wi-Fi access points across 15 buildings. Students and staff stay connected throughout, and the campus keeps running while the upgrade happens.",
        icon: "ri-graduation-cap-line",
    },
    {
        number: "08",
        title: "Manufacturing",
        description:
            "Production lines run best on networks built for industrial control. To keep factories efficient and safe, we secure and connect operational systems to the IEC 62443 standard for industrial security. The result is a network that is as reliable as it is robust.",
        icon: "ri-settings-3-line",
    },
    {
        number: "09",
        title: "Logistics & transportation",
        description:
            "Reliable connections keep goods and people moving. For Brambles (CHEP), we've delivered a global programme of site surveys, designs, and upgrades. On the railways, we support the networks behind signalling for Network Rail to keep people safe and on the move.",
        icon: "ri-truck-line",
    },
    {
        number: "10",
        title: "Energy & utilities",
        description:
            "Power and utility networks must stay safe and switched on. To protect energy distribution from disruption, we secure and connect control and monitoring systems to industrial security standards. The result is infrastructure that keeps supplying when it matters most.",
        icon: "ri-flashlight-line",
    },
    {
        number: "11",
        title: "Media & entertainment",
        description:
            "Audiences expect streaming and digital media to run smoothly during periods of high demand. To make that happen, we build the high-performance infrastructure behind your platforms. Content reaches viewers faster, and the busiest moments pass without a stutter.",
        icon: "ri-live-line",
    },
    {
        number: "12",
        title: "Real estate & infrastructure",
        description:
            "Tenants judge a building by its connection. To keep Berkeley Square House in Mayfair running smoothly, we manage its backbone network for Colliers. The work we did earned us another prestigious referral.",
        icon: "ri-community-line",
    },
];


/* ==========================================
   MAIN PAGE
========================================== */

const Industries: FC = () => {
    const pageRef = useRef<HTMLDivElement>(null);

    /* ======================================
       SEO
    ====================================== */

    useEffect(() => {
        const previousTitle = document.title;

        const meta = document.querySelector<HTMLMetaElement>(
            'meta[name="description"]'
        );

        const previousDescription = meta?.content;

        let createdMeta: HTMLMetaElement | null = null;

        document.title =
            "IT and Network Services Across Industries | IPGS";

        const description =
            "IPGS delivers IT and network services across industries, from telecom and banking to education, energy, and government. Talk to us about your sector.";

        if (meta) {
            meta.content = description;
        } else {
            createdMeta = document.createElement("meta");
            createdMeta.name = "description";
            createdMeta.content = description;
            document.head.appendChild(createdMeta);
        }

        return () => {
            document.title = previousTitle;

            if (meta && previousDescription !== undefined) {
                meta.content = previousDescription;
            }

            createdMeta?.remove();
        };
    }, []);

    /* ======================================
       ONE-TIME SCROLL REVEAL
    ====================================== */

    useEffect(() => {
        const root = pageRef.current;

        if (!root) return;

        const elements = root.querySelectorAll<HTMLElement>(
            "[data-industries-reveal]"
        );

        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (
            reducedMotion ||
            typeof IntersectionObserver === "undefined"
        ) {
            elements.forEach((element) =>
                element.classList.add("ind-visible")
            );

            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("ind-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.06,
                rootMargin: "0px 0px -20px 0px",
            }
        );

        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={pageRef}
            className="js-scroll ipgs-industries-page"
        >
            {/* ======================================
                SECTION 01 - ORIGINAL IPGS HERO
                KEEP EXISTING BANNER DESIGN
            ====================================== */}

            <div className="hero-data-bottom">
                <div className="services-home-hero desck-about ipgs-ind-banner">
                    <div className="title-of-hero">
                        <p>IT and network services for
                                industries <br />where
                                downtime isn’t an option</p>

                        <span>
                            <Link to="/">Home</Link>
                            {" - "}
                            Industries
                        </span>
                    </div>
                </div>
            </div>

            

            {/* ======================================
                SECTION 03 - OPENING STATEMENT
            ====================================== */}

            <section className="ipgs-ind-statement">
                <div className="container">
                    <div className="ipgs-ind-statement-layout">

                        <div data-industries-reveal>
                            <div className="ipgs-ind-label">
                                <span></span>
                                THE IPGS APPROACH
                            </div>

                            <h2>
                                IT solutions built to
                                keep things
                                <span> running smoothly</span>
                            </h2>
                        </div>

                        <div
                            className="ipgs-ind-statement-copy"
                            data-industries-reveal
                        >
                            <p>
                                Every sector runs on a network,
                                and every sector feels it when
                                that network slips. A slow campus,
                                a dropped signal, or a stalled
                                control system all have the
                                potential to cost you time,
                                customers, and trust.
                            </p>

                            <p>
                                We build and look after the
                                connections your industry depends
                                on. The work we do allows your
                                people to get on with their work
                                without worrying about the
                                technical stuff that keeps
                                things moving.
                            </p>

                            <p>
                                Our in-house engineers cover
                                networks, security, cloud, and
                                infrastructure, so you deal
                                with one team that understands
                                your sector and stays with you
                                from first survey to final handover.
                            </p>

                            <div className="ipgs-ind-statement-highlight">
                                <i
                                    className="ri-shield-check-line"
                                    aria-hidden="true"
                                ></i>

                                <strong>
                                    We haven't lost a client since
                                    2016, because we measure ourselves
                                    on whether you come back.
                                </strong>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* ======================================
                SECTION 04 - INDUSTRY DIRECTORY
                ALL 12 APPROVED SECTORS
            ====================================== */}

            <section
                className="ipgs-ind-directory"
                id="ipgs-industry-sectors"
                aria-labelledby="ipgs-ind-directory-title"
            >
                <div className="container">
                    <div
                        className="ipgs-ind-directory-heading"
                        data-industries-reveal
                    >
                        <div className="ipgs-ind-label">
                            <span></span>
                            SECTORS WE SUPPORT
                        </div>

                        <div className="ipgs-ind-directory-heading-grid">
                            <h2 id="ipgs-ind-directory-title">
                                Technology solutions for
                                <span> diverse industries</span>
                            </h2>

                            <p>
                                Every industry has its own
                                technology demands and pressures.
                                Our expertise in IT infrastructure,
                                network solutions, and operational
                                technology is focused on critical
                                industries and infrastructure.
                                It’s built for purpose from the
                                ground up, so your teams spend
                                less time on technology and more
                                time on the work.
                            </p>
                        </div>
                    </div>

                    <div className="ipgs-ind-directory-topline">
                        <span>INDUSTRY DIRECTORY</span>
                        <span>12 SECTORS</span>
                    </div>

                    <div className="ipgs-industry-grid">
                        {industries.map((industry, index) => (
                            <article
                                key={industry.number}
                                className="ipgs-industry-item"
                                data-industries-reveal
                                style={{
                                    animationDelay:
                                        `${(index % 3) * 80}ms`,
                                }}
                            >
                                <div className="ipgs-industry-top">
                                    <span className="ipgs-industry-number">
                                        {industry.number}
                                    </span>

                                    <div className="ipgs-industry-icon">
                                        <i
                                            className={industry.icon}
                                            aria-hidden="true"
                                        ></i>
                                    </div>
                                </div>

                                <h3>{industry.title}</h3>

                                <p>{industry.description}</p>

                                <span
                                    className="ipgs-industry-bottomline"
                                    aria-hidden="true"
                                ></span>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ======================================
                SECTION 05 - CLOSING CTA
            ====================================== */}

            <section className="ipgs-ind-final">
                <div className="container">
                    <div className="ipgs-ind-final-layout">

                        <div data-industries-reveal>
                            <div className="ipgs-ind-label">
                                <span></span>
                                LET'S WORK TOGETHER
                            </div>

                            <h2>
                                Whatever your industry,
                                <span> we’ve probably served it</span>
                            </h2>

                            <p>
                                Whatever your sector, we’d like
                                to show you how our IT and network
                                services across industries keep
                                your people, sites, and systems
                                running.
                            </p>
                        </div>

                        <div
                            className="ipgs-ind-final-action"
                            data-industries-reveal
                        >
                            <Link
                                to="/Contact"
                                className="ipgs-ind-final-btn"
                            >
                                Talk to Us About Your Industry

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

export default Industries;
