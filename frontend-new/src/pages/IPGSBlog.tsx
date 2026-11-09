
import { useEffect, useMemo, useRef, useState } from "react";
import type { FC } from "react";
import { Link } from "react-router-dom";

import blogData from "../data/blogData.json";
import "../assets/css/ipgs-blog.css";

interface BlogPost {
  id: number;
  title: string;
  desc: string;
  date: string;
  link: string;
}

interface BlogTopic {
  number: string;
  title: string;
  description: string;
  icon: string;
}

const posts: BlogPost[] = blogData.map((post) => ({
  id: post.id,
  title: post.title,
  desc: post.desc,
  date: post.date,
  link: post.link,
}));

const topics: BlogTopic[] = [
  {
    number: "01",
    title: "Telecom Networks",
    description:
      "Technical perspectives on core networks, radio access networks, connectivity and the infrastructure behind modern communications.",
    icon: "ri-base-station-line",
  },
  {
    number: "02",
    title: "Operational Technology",
    description:
      "Ideas on the reliability, security and evolution of networks that support essential industrial operations.",
    icon: "ri-settings-3-line",
  },
  {
    number: "03",
    title: "Enterprise IT",
    description:
      "Practical thinking about cloud infrastructure, data centres, managed services and business-critical technology.",
    icon: "ri-server-line",
  },
  {
    number: "04",
    title: "Cybersecurity",
    description:
      "Insights into network protection, resilience, security architecture and the challenges facing connected organisations.",
    icon: "ri-shield-check-line",
  },
];


/* ==========================================
   MAIN BLOG PAGE
========================================== */

const IPGSBlog: FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) return posts;

    return posts.filter((post) =>
      `${post.title} ${post.desc} ${post.date}`
        .toLowerCase()
        .includes(query)
    );
  }, [searchTerm]);

  /* SEO */

  useEffect(() => {
    const oldTitle = document.title;
    const existingMeta = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]'
    );
    const oldDescription = existingMeta?.content;

    let createdMeta: HTMLMetaElement | null = null;

    document.title =
      "Network Technology Insights | IPGS Blog";

    const description =
      "Read practical insights from IPGS engineers on telecom networks, operational technology, enterprise IT, and cybersecurity. New articles from our team.";

    if (existingMeta) {
      existingMeta.content = description;
    } else {
      createdMeta = document.createElement("meta");
      createdMeta.name = "description";
      createdMeta.content = description;
      document.head.appendChild(createdMeta);
    }

    return () => {
      document.title = oldTitle;

      if (existingMeta && oldDescription !== undefined) {
        existingMeta.content = oldDescription;
      }

      createdMeta?.remove();
    };
  }, []);

  /* Scroll animations */

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;

    const elements = root.querySelectorAll<HTMLElement>(
      "[data-blog-reveal]"
    );

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
      reducedMotion ||
      typeof IntersectionObserver === "undefined"
    ) {
      elements.forEach((element) =>
        element.classList.add("blog-visible")
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("blog-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.07,
        rootMargin: "0px 0px -25px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="js-scroll ipgs-blog-page"
      ref={pageRef}
    >
      {/* ======================================
          01 - EXISTING IPGS HERO BANNER
      ====================================== */}

      <div className="hero-data-bottom">
        <div className="services-home-hero desck-about ipgs-blog-banner">
          <div className="title-of-hero">
            <p>Network technology insights
                from <br />the engineers
                who deliver it</p>

            <span>
              <Link to="/">Home</Link>
              {" - "}
              Blog
            </span>
          </div>
        </div>
      </div>

      

      {/* ======================================
          03 - ARTICLE PREVIEW GRID
      ====================================== */}

      <section
        className="ipgs-blog-articles"
        id="ipgs-blog-articles"
      >
        <div className="container">
          <div
            className="ipgs-blog-articles-heading"
            data-blog-reveal
          >
            <div className="ipgs-blog-label">
              <span></span>
              THE JOURNAL
            </div>

            <div className="ipgs-blog-heading-grid">
              <div>
                <h2>
                  Insights worth
                  <span> exploring</span>
                </h2>

                <p>
                  Explore technology topics drawn
                  from our existing IPGS content library.
                </p>
              </div>

              <div className="ipgs-blog-search">
                <label htmlFor="ipgs-blog-search-input">
                  Search insights
                </label>

                <div className="ipgs-blog-search-field">
                  <i
                    className="ri-search-line"
                    aria-hidden="true"
                  ></i>

                  <input
                    id="ipgs-blog-search-input"
                    type="search"
                    placeholder="Search by keyword..."
                    value={searchTerm}
                    onChange={(event) =>
                      setSearchTerm(event.target.value)
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="ipgs-blog-library-note">
            <i
              className="ri-information-line"
              aria-hidden="true"
            ></i>
            <span>
              Article previews from the existing IPGS
              content file. Full articles are not yet
              linked in the source project.
            </span>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="ipgs-blog-article-grid">
              {filteredPosts.map((post, index) => {
                const hasArticle =
                  post.link.trim() !== "" &&
                  post.link.trim() !== "#";

                return (
                  <article
                    className="ipgs-blog-article"
                    key={post.id}
                    data-blog-reveal
                    style={{
                      animationDelay:
                        `${(index % 3) * 75}ms`,
                    }}
                  >
                    <div className="ipgs-blog-article-top">
                      <span>
                        {String(index + 1).padStart(2, "0")}
                        {" / "}
                        INSIGHT
                      </span>

                      <i
                        className="ri-article-line"
                        aria-hidden="true"
                      ></i>
                    </div>

                    <div className="ipgs-blog-article-date">
                      <i
                        className="ri-calendar-2-line"
                        aria-hidden="true"
                      ></i>
                      <span>{post.date}</span>
                    </div>

                    <h3>{post.title}</h3>
                    <p>{post.desc}</p>

                    <div className="ipgs-blog-article-bottom">
                      {hasArticle ? (
                        <Link
                          to={post.link}
                          className="ipgs-blog-article-link"
                        >
                          Read Article
                          <i
                            className="ri-arrow-right-up-line"
                            aria-hidden="true"
                          ></i>
                        </Link>
                      ) : (
                        <span className="ipgs-blog-article-pending">
                          Full article coming soon
                          <i
                            className="ri-time-line"
                            aria-hidden="true"
                          ></i>
                        </span>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="ipgs-blog-empty">
              <i
                className="ri-search-eye-line"
                aria-hidden="true"
              ></i>

              <h3>No matching insights</h3>

              <p>
                Try another keyword to explore
                the available content previews.
              </p>

              <button
                type="button"
                onClick={() => setSearchTerm("")}
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ======================================
          04 - FOUR EDITORIAL TOPICS
      ====================================== */}

      <section className="ipgs-blog-topics">
        <div className="container">
          <div
            className="ipgs-blog-topics-heading"
            data-blog-reveal
          >
            <div className="ipgs-blog-label">
              <span></span>
              OUR AREAS OF EXPERTISE
            </div>

            <h2>
              The technology
              <span> behind the conversation</span>
            </h2>

            <p>
              Our insights span four disciplines
              at the heart of IPGS delivery.
            </p>
          </div>

          <div className="ipgs-blog-topics-grid">
            {topics.map((topic) => (
              <article
                className="ipgs-blog-topic"
                key={topic.number}
                data-blog-reveal
              >
                <div className="ipgs-blog-topic-top">
                  <span>{topic.number}</span>

                  <i
                    className={topic.icon}
                    aria-hidden="true"
                  ></i>
                </div>

                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================
          05 - FINAL CTA
      ====================================== */}

      <section className="ipgs-blog-final">
        <div className="container">
          <div className="ipgs-blog-final-grid">
            <div data-blog-reveal>
              <div className="ipgs-blog-label">
                <span></span>
                TALK TO THE TEAM
              </div>

              <h2>
                From a useful insight
                to a
                <span> practical solution</span>
              </h2>

              <p>
                Exploring a challenge in telecom,
                operational technology, enterprise
                IT or security? Our team can
                discuss your requirements.
              </p>
            </div>

            <div
              className="ipgs-blog-final-action"
              data-blog-reveal
            >
              <Link
                to="/Contact"
                className="ipgs-blog-final-btn"
              >
                Talk to Our Team
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

export default IPGSBlog;
