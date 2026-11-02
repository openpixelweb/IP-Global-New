import { useEffect, useRef } from "react";
import type { CSSProperties, FC } from "react";
import { Link } from "react-router-dom";

import StoryImage from "../assets/images/it-training.png";
import LearningImage from "../assets/images/about/image-2.png";

import "../assets/css/ipgs-academy.css";

/* =========================================
   TYPES
========================================= */

interface AcademyItem {
    title: string;
    description: string;
    icon: string;
}

/* =========================================
   FIVE LEARNING BENEFITS
   Approved Academy Content
========================================= */

const learningBenefits: AcademyItem[] = [
    {
        title: "Start from scratch, finish with career-defining skills",
        description:
            "You don't need a technology background to begin. The teaching starts where you are and builds from there.",
        icon: "ri-lightbulb-line",
    },
    {
        title: "Learn at your own pace and in your own way",
        description:
            "Teaching adapts to the individual at IPGS. We’ll work with you to find an approach that works. Fit your learning around your current commitments, and find a way through that suits your learning style.",
        icon: "ri-user-heart-line",
    },
    {
        title: "Step straight into real work",
        description:
            "Training points at a real job from the start, and the Academy helps you take that step. We’re so confident that you’ll succeed, we won’t charge you any Academy fees until you do.",
        icon: "ri-briefcase-4-line",
    },
    {
        title: "Keep growing after your first role",
        description:
            "Advanced and automation-level upskilling is available well beyond entry level. Your skills keep pace with the work and industry changes.",
        icon: "ri-line-chart-line",
    },
    {
        title: "Get started without paying upfront",
        description:
            "You don't pay anything before you begin training. We don’t expect you to pay a penny until you see results.",
        icon: "ri-hand-coin-line",
    },
];

/* =========================================
   ACADEMY GUIDING PRINCIPLES
========================================= */

const academyBeliefs: AcademyItem[] = [
    {
        title: "Real potential matters most",
        description:
            "We look at what you can do and how much you want to learn, and we build from there. Experience or qualifications come later. As long as you’re passionate and have the right attitude, there’s a place for you here.",
        icon: "ri-seedling-line",
    },
    {
        title: "An IT training academy that backs you after day one",
        description:
            "The same belief shapes how people get supported once they're in a role. Training doesn't stop when the placement starts. We’ll be right by your side to support your learning journey and help you climb the career ladder.",
        icon: "ri-shield-check-line",
    },
    {
        title: "Graduates who pass it on",
        description:
            "Graduates truly value their time with the Academy, and that word of mouth brings new talent into the IPGS network. But more importantly, those graduates are often willing to help new students follow in their footsteps.",
        icon: "ri-group-line",
    },
    {
        title: "A lesson that shapes the whole company",
        description:
            "Seeing people from every background succeed influences how IPGS hires and how we work with clients. But more than that, seeing real lives transformed by the training we provide gives us all an incredible sense of pride.",
        icon: "ri-global-line",
    },
];

/** Sets a stagger delay used by the CSS transitions. */
const delay = (ms: number): CSSProperties =>
    ({ "--d": `${ms}ms` }) as CSSProperties;

/* =========================================
   IPGS ACADEMY PAGE
========================================= */

const IPGSAcademy: FC = () => {
    const rootRef = useRef<HTMLDivElement>(null);

    /* ---------- SEO ---------- */
    useEffect(() => {
        const previousTitle = document.title;
        const metaDescription = document.querySelector<HTMLMetaElement>(
            'meta[name="description"]'
        );
        const previousDescription = metaDescription?.content;

        document.title = "IT Training Academy with Job Placement | IPGS Academy";

        if (metaDescription) {
            metaDescription.content =
                "The IPGS Academy trains people from any background for real IT and networking careers, with nothing to pay upfront and placement in mind from day one.";
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
            { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
        );

        items.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="js-scroll ipgs-academy-page is-anim" ref={rootRef}>
            {/* ================= BANNER ================= */}
            <div className="hero-data-bottom">
                <div className="services-home-hero desck-about ipgs-academy-banner">
                    <div className="title-of-hero">
                        <p>An IT training academy that sees <br /> the potential in everyone.</p>
                        <span>
                            <Link to="/">Home</Link>
                            {" - "}
                            <Link to="/AboutUs">About Us</Link>
                            {" - "}
                            IPGS Academy
                        </span>
                    </div>
                </div>
            </div>

            
            {/* ================= ACADEMY STORY ================= */}
            <section className="academy-story-section">
                <div className="container">
                    <div className="academy-story-grid">
                        <div className="academy-story-image">
                            <div className="academy-photo" data-reveal="image">
                                <img
                                    src={StoryImage}
                                    alt="Technology team sharing knowledge and experience"
                                    loading="lazy"
                                />
                            </div>

                            <div
                                className="academy-story-image-caption"
                                data-reveal="up"
                                style={delay(500)}
                            >
                                <span>Our beginning</span>
                                <strong>Built on belief in people.</strong>
                            </div>
                        </div>

                        <div className="academy-story-content">
                            <div className="academy-label" data-reveal="up">
                                <span></span>
                                The story behind IPGS
                            </div>

                            <h2 data-reveal="up" style={delay(100)}>
                                The IT training academy that spawned a global
                                company
                            </h2>

                            <p data-reveal="up" style={delay(200)}>
                                Before IPGS was a company, the Academy was
                                already teaching people new skills. It began
                                with a simple idea that technical ability can
                                be built in almost anyone with good teaching
                                and real motivation.
                            </p>

                            <p data-reveal="up" style={delay(280)}>
                                The first students to enrol had no technology
                                background. A supermarket stock assistant
                                trained alongside coffee-shop staff, and
                                everyone started from the same place.
                            </p>

                            <p data-reveal="up" style={delay(360)}>
                                There's no formal screening involved. Attitude
                                and motivation are the only things we look for.
                                The teaching then adapts to the person in the
                                room.
                            </p>

                            <div
                                className="academy-story-message"
                                data-reveal="up"
                                style={delay(440)}
                            >
                                <i className="ri-double-quotes-l" aria-hidden="true"></i>
                                <p>
                                    Passionate about a career in IT? Need
                                    training and guidance from people who’ve
                                    already taken the journey you’re just
                                    starting? We want to hear from you.
                                </p>
                            </div>

                            <div data-reveal="up" style={delay(520)}>
                                <Link to="/contact" className="academy-text-link">
                                    Talk to us
                                    <i className="ri-arrow-right-line" aria-hidden="true"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= LEARNING BENEFITS (pathway) ================= */}
            <section
                className="academy-benefits-section"
                aria-labelledby="academy-benefits-title"
            >
                <div className="container">
                    <div className="academy-benefits-heading">
                        <div className="academy-label" data-reveal="up">
                            <span></span>
                            Your learning journey
                        </div>

                        <div className="academy-benefits-heading-grid">
                            <h2
                                id="academy-benefits-title"
                                data-reveal="up"
                                style={delay(100)}
                            >
                                Five ways the Academy gets you job-ready
                            </h2>

                            <div data-reveal="up" style={delay(200)}>
                                <p>
                                    Every part of the IT training academy
                                    points to the same outcome, which is a
                                    career you can build on.
                                </p>
                                <p>Here's how it works in practice.</p>
                            </div>
                        </div>
                    </div>

                    {/* The pathway line draws down, then each stage appears */}
                    <ol className="academy-path" data-reveal="track">
                        {learningBenefits.map((item, i) => (
                            <li
                                className="academy-path-item"
                                key={item.title}
                                style={delay(250 + i * 300)}
                            >
                                <div className="academy-path-node">
                                    <i className={item.icon} aria-hidden="true"></i>
                                </div>

                                <div className="academy-path-card">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* ================= BELIEFS ================= */}
            <section className="academy-belief-section">
                <div className="container">
                    <div className="academy-belief-layout">
                        <div className="academy-belief-heading">
                            <div className="academy-label" data-reveal="up">
                                <span></span>
                                What we believe
                            </div>

                            <h2 data-reveal="up" style={delay(100)}>
                                Belief is the bedrock of the IPGS Academy
                            </h2>

                            <p data-reveal="up" style={delay(200)}>
                                Our founder built the Academy on a conviction
                                that education breaks cycles that little else
                                can touch. That belief shapes who gets a chance
                                and how they're supported.
                            </p>

                            <div className="academy-photo academy-belief-image" data-reveal="image">
                                <img
                                    src={LearningImage}
                                    alt="Technology infrastructure and technical learning environment"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        <div className="academy-belief-list">
                            {academyBeliefs.map((item, i) => (
                                <article
                                    className="academy-belief-item"
                                    key={item.title}
                                    data-reveal="up"
                                    style={delay((i % 2) * 140 + Math.floor(i / 2) * 120)}
                                >
                                    <div className="academy-belief-icon">
                                        <i className={item.icon} aria-hidden="true"></i>
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="academy-final-section">
                <span className="academy-final-watermark" aria-hidden="true">
                    Academy
                </span>

                <div className="container">
                    <div className="academy-final-inner">
                        <div className="academy-final-content">
                            <div className="academy-label" data-reveal="up">
                                <span></span>
                                Your next chapter
                            </div>

                            <h2 data-reveal="up" style={delay(100)}>
                                Start your IT career with the IPGS Academy
                            </h2>

                            <p data-reveal="up" style={delay(200)}>
                                Tell us where you're starting from, and we'll
                                show you how our IT training academy gets you
                                to your first role.
                            </p>

                            <p data-reveal="up" style={delay(280)}>
                                Apply this month and take the first step toward
                                a career you can build on.
                            </p>
                        </div>

                        <div
                            className="academy-final-action"
                            data-reveal="up"
                            style={delay(380)}
                        >
                            <Link to="/contact" className="academy-final-button">
                                Enquire about applying
                                <i
                                    className="ri-arrow-right-up-line"
                                    aria-hidden="true"
                                ></i>
                            </Link>

                            <span className="academy-final-small-text">
                                Begin with a conversation.
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IPGSAcademy;
