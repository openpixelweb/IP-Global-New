
import { useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties, FC } from "react";
import { Link } from "react-router-dom";

import "../assets/css/our-team.css";

/* =========================================
   TEAM DATA - APPROVED WORD DOCUMENT
========================================= */

type Category =
    | "Networks"
    | "Security"
    | "Infrastructure"
    | "Managed Services"
    | "Operational Technology"
    | "Business & People";

interface TeamMember {
    id: number;
    name: string;
    department: string;
    category: Category;
    description: string;
    initials: string;
}

const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Adrian Hickey",
        department: "Core Networks",
        category: "Networks",
        initials: "AH",
        description:
            "Leads Core Network at IPGS while the department is still in its setup phase. Currently resourcing into a Tier-1 UK operator's core network migration, with early-stage conversations underway at other operators and MVNOs. Prefers to let the results speak once the department has matured, rather than overselling it early.",
    },
    {
        id: 2,
        name: "Bilal Afzal",
        department: "RAN",
        category: "Networks",
        initials: "BA",
        description:
            "Leads RAN at IPGS, covering multi-vendor design across Ericsson, Samsung, Huawei, and Nokia, rollout support, testing and verification, 4th line managed service support, and hardware repair.",
    },
    {
        id: 3,
        name: "Rehan Khan",
        department: "Security",
        category: "Security",
        initials: "RK",
        description:
            "Leads Security at IPGS, covering cybersecurity, infrastructure security, network security, and post-sales SOC-style operations. Has delivered a private cloud build and migration for a telecom client, and large-scale mobile packet core security work.",
    },
    {
        id: 4,
        name: "Farhan Haq",
        department: "Infrastructure Services",
        category: "Infrastructure",
        initials: "FH",
        description: "",
    },
    {
        id: 5,
        name: "Pankaj Sharma",
        department: "Infrastructure Services",
        category: "Infrastructure",
        initials: "PS",
        description: "",
    },
    {
        id: 6,
        name: "Andrew McKeown",
        department: "Data Centre Services",
        category: "Infrastructure",
        initials: "AM",
        description: "",
    },
    {
        id: 7,
        name: "Rajesh More",
        department: "IT Managed Services (Cabling, Field Engineering, EUC)",
        category: "Managed Services",
        initials: "RM",
        description: "",
    },
    {
        id: 8,
        name: "Paul Newton",
        department: "IT Managed Services (Cabling, Field Engineering, EUC)",
        category: "Managed Services",
        initials: "PN",
        description: "",
    },
    {
        id: 9,
        name: "Sukhvinder Singh",
        department: "IT Managed Services (Cabling, Field Engineering, EUC)",
        category: "Managed Services",
        initials: "SS",
        description: "",
    },
    {
        id: 10,
        name: "Sultan Mohammed",
        department: "Product Distribution & Aggregator",
        category: "Business & People",
        initials: "SM",
        description:
            "Leads Product Distribution & Aggregator. Works in business development rather than delivery, so he's asked for the existing site content to be repurposed into brand voice rather than rewritten from scratch, with the existing headings kept as they are.",
    },
    {
        id: 11,
        name: "Sanjay Mistry",
        department:
            "Operational Technology (Rail, Oil & Gas), Transport Networks",
        category: "Operational Technology",
        initials: "SM",
        description:
            "Co-leads Operational Technology, covering rail and critical infrastructure delivery. Pushed for OT to get equal billing on the site rather than sitting under IT as an afterthought, backed by a full capability catalogue covering signalling, FTN/FTNx migration, ETCS readiness, and legacy-to-IP transition.",
    },
    {
        id: 12,
        name: "Foad Mohammadi",
        department:
            "Operational Technology (Rail, Oil & Gas), Transport Networks",
        category: "Operational Technology",
        initials: "FM",
        description:
            "Co-leads Operational Technology alongside Sanjay Mistry, with the same OT positioning and capability set.",
    },
    {
        id: 13,
        name: "Jagdeep Lohan",
        department: "Culture & Vision",
        category: "Business & People",
        initials: "JL",
        description: "",
    },
    {
        id: 14,
        name: "Shradha Sharma",
        department: "HR",
        category: "Business & People",
        initials: "SS",
        description: "",
    },
];

const FILTERS: ("All" | Category)[] = [
    "All",
    "Networks",
    "Security",
    "Infrastructure",
    "Managed Services",
    "Operational Technology",
    "Business & People",
];

const BIO_LIMIT = 190;

/** Sets a stagger delay used by the CSS transitions. */
const delay = (ms: number): CSSProperties =>
    ({ "--d": `${ms}ms` }) as CSSProperties;

/* =========================================
   INDIVIDUAL TEAM PROFILE
========================================= */

const TeamProfile: FC<{
    member: TeamMember;
    index: number;
    visible: boolean;
}> = ({ member, index, visible }) => {
    const [open, setOpen] = useState(false);
    const hasBio = member.description.length > 0;
    const isLong = member.description.length > BIO_LIMIT;

    return (
        <article
            className={`ipgs-team-card${visible ? " is-in" : ""}`}
            style={delay((index % 6) * 80)}
        >
            <div className="ipgs-team-card-head">
                <div className="ipgs-team-avatar" aria-hidden="true">
                    {member.initials}
                </div>

                <div className="ipgs-team-card-id">
                    <h3>{member.name}</h3>
                    <span className="ipgs-team-card-department">
                        {member.department}
                    </span>
                </div>
            </div>

            {hasBio ? (
                <div className="ipgs-team-card-body">
                    <p
                        className={`ipgs-team-bio${
                            isLong && !open ? " is-clamped" : ""
                        }`}
                    >
                        {member.description}
                    </p>

                    {isLong && (
                        <button
                            type="button"
                            className="ipgs-team-more"
                            aria-expanded={open}
                            onClick={() => setOpen((v) => !v)}
                        >
                            {open ? "Show less" : "Read more"}
                            <i
                                className={
                                    open
                                        ? "ri-arrow-up-s-line"
                                        : "ri-arrow-down-s-line"
                                }
                                aria-hidden="true"
                            ></i>
                        </button>
                    )}
                </div>
            ) : (
                <div className="ipgs-team-card-body">
                    <p className="ipgs-team-card-pending">
                        Profile coming soon.
                    </p>
                </div>
            )}
        </article>
    );
};

/* =========================================
   OUR TEAM MAIN PAGE
========================================= */

const OurTeam: FC = () => {
    const rootRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    const [filter, setFilter] = useState<"All" | Category>("All");
    const [gridVisible, setGridVisible] = useState(false);

    const filtered = useMemo(
        () =>
            filter === "All"
                ? teamMembers
                : teamMembers.filter((m) => m.category === filter),
        [filter]
    );

    const countFor = (f: "All" | Category) =>
        f === "All"
            ? teamMembers.length
            : teamMembers.filter((m) => m.category === f).length;

    /* ---------- SEO ---------- */
    useEffect(() => {
        const previousTitle = document.title;
        const metaDescription = document.querySelector<HTMLMetaElement>(
            'meta[name="description"]'
        );
        const oldDescription = metaDescription?.content;

        document.title = "Our Team | IT Services Leadership Team at IPGS";

        if (metaDescription) {
            metaDescription.content =
                "Meet the IT services leadership team behind IPGS, each profile anchored to one real achievement rather than a job title.";
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

    /* ---------- Team grid entrance ---------- */
    useEffect(() => {
        const grid = gridRef.current;
        if (!grid) return;

        if (!("IntersectionObserver" in window)) {
            setGridVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setGridVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.05 }
        );

        observer.observe(grid);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="js-scroll ipgs-team-page is-anim" ref={rootRef}>
            {/* ================= HERO BANNER ================= */}
            <div className="hero-data-bottom">
                <div className="services-home-hero desck-about ipgs-team-hero">
                    <div className="title-of-hero">
                        <p>
                            The IT services leadership team <br />
                            behind every IPGS project
                        </p>
                        <span>
                            <Link to="/">Home</Link>
                            {" - "}
                            <Link to="/AboutUs">About Us</Link>
                            {" - "}
                            Our Team
                        </span>
                    </div>
                </div>
            </div>

            {/* ================= TEAM DIRECTORY ================= */}
            <section
                id="ipgs-team-directory"
                className="ipgs-team-directory-section"
                aria-labelledby="ipgs-team-directory-title"
            >
                <div className="container">
                    <div className="ipgs-team-directory-heading">
                        <div className="ipgs-team-label" data-reveal="up">
                            <span></span>
                            Our specialists
                        </div>

                        <div className="ipgs-team-directory-heading-grid">
                            <h2
                                id="ipgs-team-directory-title"
                                data-reveal="up"
                                style={delay(100)}
                            >
                                Real people with real skills, coming together
                                to deliver technical excellence
                            </h2>

                            <p data-reveal="up" style={delay(200)}>
                                We’re definitely bigger than the sum of our
                                parts at IPGS. But that doesn’t mean that
                                every specialist in our global family doesn’t
                                have a unique and extensive track record of
                                success behind them. Here are just a few of
                                the people who make IPGS what it is.
                            </p>
                        </div>
                    </div>

                    {/* Filter */}
                    <div
                        className="ipgs-team-filters"
                        role="group"
                        aria-label="Filter team by discipline"
                        data-reveal="up"
                    >
                        {FILTERS.map((f) => (
                            <button
                                type="button"
                                key={f}
                                className={`ipgs-team-chip${
                                    filter === f ? " is-active" : ""
                                }`}
                                aria-pressed={filter === f}
                                onClick={() => setFilter(f)}
                            >
                                {f}
                                <span>{countFor(f)}</span>
                            </button>
                        ))}
                    </div>

                    <p className="ipgs-team-result" aria-live="polite">
                        Showing {filtered.length} of {teamMembers.length}{" "}
                        specialists
                    </p>

                    {/* Team grid: cards remount on filter change so they re-animate */}
                    <div className="ipgs-team-grid" ref={gridRef}>
                        {filtered.map((member, i) => (
                            <TeamProfile
                                key={`${filter}-${member.id}`}
                                member={member}
                                index={i}
                                visible={gridVisible}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= APPROACH ================= */}
            <section className="ipgs-team-approach-section">
                <div className="container">
                    <div className="ipgs-team-approach-inner">
                        <div className="ipgs-team-approach-left">
                            <div className="ipgs-team-label" data-reveal="up">
                                <span></span>
                                Working together
                            </div>

                            <h2 data-reveal="up" style={delay(100)}>
                                Different disciplines. One connected team.
                            </h2>
                        </div>

                        <div className="ipgs-team-approach-right">
                            <p data-reveal="up" style={delay(200)}>
                                Discover the collaborative, accountable
                                approach that keeps IPGS projects moving from
                                the first conversation to successful delivery.
                            </p>

                            <div data-reveal="up" style={delay(300)}>
                                <Link
                                    to="/about/how-we-work"
                                    className="ipgs-team-text-link"
                                >
                                    Discover how we work
                                    <i
                                        className="ri-arrow-right-line"
                                        aria-hidden="true"
                                    ></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="ipgs-team-final-cta">
                <div className="container">
                    <div className="ipgs-team-final-inner">
                        <div
                            className="ipgs-team-label ipgs-team-label--center"
                            data-reveal="up"
                        >
                            <span></span>
                            Let's talk
                            <span></span>
                        </div>

                        <h2 data-reveal="up" style={delay(100)}>
                            Let's work together.
                        </h2>

                        <p data-reveal="up" style={delay(200)}>
                            Have a project in mind? Connect with IPGS to
                            discuss your technology and infrastructure
                            requirements.
                        </p>

                        <div data-reveal="up" style={delay(300)}>
                            <Link
                                to="/Contact"
                                className="ipgs-team-final-button"
                            >
                                Get in touch
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

export default OurTeam;
