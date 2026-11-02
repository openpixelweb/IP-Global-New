import { useEffect, useRef, useState } from "react";
import type { CSSProperties, FC } from "react";
import { Link } from "react-router-dom";

import "../assets/css/culture.css";

/* =============================================
   IPGS CULTURE PAGE
============================================= */

const prefersReducedMotion = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Sets a stagger delay used by the CSS transitions. */
const delay = (ms: number): CSSProperties =>
    ({ "--d": `${ms}ms` }) as CSSProperties;

/* ---------- Count-up number (runs once when in view) ---------- */

const CountUp: FC<{ to: number }> = ({ to }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const [value, setValue] = useState(0);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
            setValue(to);
            return;
        }

        let raf = 0;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                observer.disconnect();

                const start = performance.now();
                const duration = 1600;

                const tick = (now: number) => {
                    const t = Math.min((now - start) / duration, 1);
                    setValue(Math.round(to * (1 - Math.pow(1 - t, 3))));
                    if (t < 1) raf = requestAnimationFrame(tick);
                };
                raf = requestAnimationFrame(tick);
            },
            { threshold: 0.6 }
        );

        observer.observe(el);
        return () => {
            observer.disconnect();
            cancelAnimationFrame(raf);
        };
    }, [to]);

    return <span ref={ref}>{value}</span>;
};

const specialisms = [
    { label: "Core network migration", icon: "ri-router-line" },
    { label: "Rail signalling", icon: "ri-train-line" },
    { label: "Mobile packet core security", icon: "ri-shield-keyhole-line" },
    { label: "Cloud infrastructure", icon: "ri-cloud-line" },
];

const Culture: FC = () => {
    const rootRef = useRef<HTMLDivElement>(null);

    /* ---------- SEO ---------- */
    useEffect(() => {
        const previousTitle = document.title;
        const metaDescription = document.querySelector<HTMLMetaElement>(
            'meta[name="description"]'
        );
        const previousDescription = metaDescription?.content;

        document.title = "Culture at IPGS | Our Company Culture";

        if (metaDescription) {
            metaDescription.content =
                "Find out what our company culture is really like at IPGS: close-knit specialists, real growth opportunities, and a team that stays collaborative even at 126 people across five countries.";
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

    return (
        <div className="js-scroll ipgs-team-page is-anim" ref={rootRef}>
            {/* ================= HERO BANNER ================= */}
            <div className="hero-data-bottom">
                <div className="services-home-hero desck-about ipgs-team-hero">
                    <div className="title-of-hero">
                        <p>A company that calls you by <br />your name and values your input</p>
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

    
            {/* ================= CLOSE-KNIT TEAM ================= */}
            <section className="ipgs-culture-story-section">
                <div className="container">
                    <div className="ipgs-culture-story-grid">
                        <ul className="ipgs-culture-specialisms" aria-label="Specialisms across IPGS">
                            {specialisms.map((item, i) => (
                                <li
                                    key={item.label}
                                    data-reveal="spec"
                                    style={delay(i * 120)}
                                >
                                    <i className={item.icon} aria-hidden="true"></i>
                                    <strong>{item.label}</strong>
                                </li>
                            ))}
                        </ul>

                        <div className="ipgs-culture-story-content">
                            <div className="ipgs-culture-label" data-reveal="up">
                                <span></span>
                                Connected by purpose
                            </div>

                            <h2 data-reveal="up" style={delay(100)}>
                                A tight-knit team of experts that remains agile
                                and responsive
                            </h2>

                            <p data-reveal="up" style={delay(200)}>
                                Every person here brings a genuine specialism,
                                whether that's core network migration, rail
                                signalling, mobile packet core security, or
                                cloud infrastructure.
                            </p>

                            <p data-reveal="up" style={delay(300)}>
                                Our teams stay small enough to react quickly
                                and decisively when action and speed are
                                essential. It's a workplace culture IT services
                                clients rarely get to see, but it shapes how
                                every project gets delivered.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= CAREER DEVELOPMENT ================= */}
            <section className="ipgs-culture-growth-section">
                <div className="container">
                    <div className="ipgs-culture-growth-grid">
                        <div className="ipgs-culture-growth-content">
                            <div className="ipgs-culture-label" data-reveal="up">
                                <span></span>
                                Developing our people
                            </div>

                            <h2 data-reveal="up" style={delay(100)}>
                                Technical career growth that never stops
                            </h2>

                            <p data-reveal="up" style={delay(200)}>
                                We split architects and implementation
                                engineers, so senior technical staff spend
                                their time on the work that matches their
                                experience.
                            </p>

                            <p data-reveal="up" style={delay(300)}>
                                What really sets us apart is our commitment to
                                learning and development. Put simply, they
                                never stop at IPGS. That's also why people tend
                                to stay, and why the teams they lead tend to
                                deliver better results.
                            </p>

                            <div
                                className="ipgs-culture-growth-detail"
                                data-reveal="up"
                                style={delay(400)}
                            >
                                <i className="ri-seedling-line" aria-hidden="true"></i>
                                <span>
                                    Learning and development are part of how we
                                    work.
                                </span>
                            </div>
                        </div>

                        <div className="ipgs-culture-roles" data-reveal="roles">
                            <div className="ipgs-culture-role" style={delay(0)}>
                                <i className="ri-compass-3-line" aria-hidden="true"></i>
                                <strong>Architects</strong>
                            </div>

                            <span className="ipgs-culture-role-link" aria-hidden="true"></span>

                            <div className="ipgs-culture-role" style={delay(250)}>
                                <i className="ri-tools-line" aria-hidden="true"></i>
                                <strong>Implementation engineers</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= IPGS ACADEMY ================= */}
            <section className="ipgs-culture-academy-section">
                <div className="container">
                    <div
                        className="ipgs-culture-academy-panel"
                        data-reveal="up"
                    >
                        <div className="ipgs-culture-academy-heading">
                            <div className="ipgs-culture-label">
                                <span></span>
                                Continuous learning
                            </div>

                            <h2>A learning culture with a genuine head start</h2>
                        </div>

                        <div className="ipgs-culture-academy-content">
                            <div className="ipgs-culture-academy-icon">
                                <i className="ri-graduation-cap-line" aria-hidden="true"></i>
                            </div>

                            <p>
                                The IPGS Academy brings new talent into the
                                business, built on the belief that technical
                                skill can be built in almost anyone given the
                                right teaching and enough motivation.
                            </p>

                            <p>
                                That same philosophy carries through to how
                                existing staff get trained, with advanced and
                                automation-level upskilling available well
                                beyond entry level.
                            </p>

                            <Link
                                to="/about/ipgs-academy"
                                className="ipgs-culture-text-link"
                            >
                                Discover IPGS Academy
                                <i className="ri-arrow-right-line" aria-hidden="true"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= COLLABORATIVE CULTURE ================= */}
            <section className="ipgs-culture-together-section">
                <div className="container">
                    <div className="ipgs-culture-together-grid">
                        <div className="ipgs-culture-together-left">
                            <div className="ipgs-culture-label" data-reveal="up">
                                <span></span>
                                Collaboration at IPGS
                            </div>

                            <h2 data-reveal="up" style={delay(100)}>
                                The company culture that shows up without being
                                asked
                            </h2>
                        </div>

                        <div className="ipgs-culture-together-right">
                            <p data-reveal="up" style={delay(200)}>
                                When a project needs input from another
                                discipline, colleagues bring each other in
                                without being asked twice. That collaborative
                                work culture is just as real in how the teams
                                behind our work operate day to day.
                            </p>
                        </div>
                    </div>

                    <div
                        className="ipgs-culture-together-line"
                        data-reveal="up"
                        style={delay(200)}
                    >
                        <span>
                            <i className="ri-team-line" aria-hidden="true"></i>
                        </span>
                        <strong>
                            Different specialisms. One connected team.
                        </strong>
                    </div>
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="ipgs-culture-final-section">
                <div className="container">
                    <div className="ipgs-culture-final-inner">
                        <div className="ipgs-culture-final-content">
                            <div className="ipgs-culture-label" data-reveal="up">
                                <span></span>
                                Let's connect
                            </div>

                            <h2 data-reveal="up" style={delay(100)}>
                                Tap into our culture to make a success of your
                                next IT infrastructure project
                            </h2>

                            <p data-reveal="up" style={delay(200)}>
                                Curious what our IT company culture is like on
                                the inside? See current openings on our Careers
                                page, or find out more about the training
                                programme that shapes how we grow on the IPGS
                                Academy page. Or if you're looking for a
                                digital infrastructure partner, reach out for a
                                chat.
                            </p>
                        </div>

                        <div
                            className="ipgs-culture-final-actions"
                            data-reveal="up"
                            style={delay(300)}
                        >
                            <Link to="/about/careers" className="ipgs-culture-btn-primary">
                                Explore careers at IPGS
                                <i className="ri-arrow-right-up-line" aria-hidden="true"></i>
                            </Link>

                            <Link to="/contact" className="ipgs-culture-btn-secondary">
                                Contact us
                                <i className="ri-arrow-right-up-line" aria-hidden="true"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Culture;
