
import { useEffect, useRef } from "react";
import type { FC } from "react";
import { Link } from "react-router-dom";

import "../assets/css/it-hardware-distribution.css";

interface ContentItem {
  title: string;
  description: string;
  icon: string;
}

const supplyCapabilities: ContentItem[] = [
  {
    title: "Network equipment that fits the design",
    description:
      "We supply switches, routers, and wireless equipment that’s perfectly suited to the job in hand. Everything is matched to the design we agree on with you, so your network performs as planned, and nothing needs replacing after installation. It’s also a great way to keep your costs down.",
    icon: "ri-router-line",
  },
  {
    title: "Cabling and Wi-Fi ready to install",
    description:
      "We supply the cabling and access points for the sites we survey and design, so our engineers install on the day and your people are back online sooner.",
    icon: "ri-wifi-line",
  },
  {
    title: "Security hardware from trusted sources",
    description:
      "Let us source firewalls and other protective equipment through our established supplier relationships, so what protects your network is genuine, properly supported, and ready when your project needs it.",
    icon: "ri-shield-check-line",
  },
  {
    title: "Data centre and device supply",
    description:
      "Get the equipment you need for data centres and end-user devices, delivered where and when your team needs it. This full-service solution means rollouts can be executed without waiting on orders from third parties.",
    icon: "ri-server-line",
  },
];

const catalogue: ContentItem[] = [
  {
    title: "IT, telecom, & installation supplies",
    description:
      "IPGS provides the products, cabling, connectivity components, and installation materials required for IT, network, telecom, and data centre deployments.",
    icon: "ri-stack-line",
  },
  {
    title: "Structured copper & fibre optic cabling",
    description:
      "From copper to fibre, our cabling covers enterprise, network, telecom, and data centre sites, so your installation starts with the right cable and runs reliably for years.",
    icon: "ri-links-line",
  },
  {
    title: "Fibre optic products & accessories",
    description:
      "Our fibre products and accessories are built for high-performance networks, so your connections stay fast and dependable and your deployment isn't held up by missing or mismatched parts.",
    icon: "ri-share-forward-line",
  },
  {
    title: "Patch panels, patch cords & connectivity",
    description:
      "Patch panels, patch cords, and connectivity components keep your network organised and scalable, and they make life easier for the engineers who maintain it as you grow.",
    icon: "ri-node-tree",
  },
  {
    title: "Racks, cabinets & cable management",
    description:
      "Racks, cabinets and cable management from us keep network rooms, servers, and data centres organised, protected, and easy to reach.",
    icon: "ri-server-line",
  },
  {
    title: "Network & telecom installation materials",
    description:
      "Your engineers finish on schedule when the materials for professional network and telecom installations are on site from day one, and we make sure they are.",
    icon: "ri-tools-line",
  },
  {
    title: "Data centre-related products",
    description:
      "When your data centre deployment needs modern connectivity, our infrastructure products make it happen smoothly, keeping your systems connected and protected as you scale.",
    icon: "ri-database-2-line",
  },
  {
    title: "Installation accessories & consumables",
    description:
      "Small items cause big delays, so we make sure the accessories and consumables are on hand, helping your team finish efficiently and on budget.",
    icon: "ri-settings-3-line",
  },
  {
    title: "Power & battery solutions",
    description:
      "Backup power matters most when something goes wrong, so our power and battery solutions for telecom, network and data centre sites keep your services running.",
    icon: "ri-battery-charge-line",
  },
];

const reasons: ContentItem[] = [
  {
    title: "One IT hardware supplier from order to install",
    description:
      "The people who choose your equipment also design and install it, so nothing falls between suppliers, and you deal with one named contact from order to handover.",
    icon: "ri-user-follow-line",
  },
  {
    title: "Supplier relationships built over many years",
    description:
      "We buy through the same trusted supplier relationships that support the rest of our work, so you get dependable products and clear answers if something changes.",
    icon: "ri-links-line",
  },
  {
    title: "Delivery you can plan your project around",
    description:
      "We manage supply with the same discipline as our projects, so equipment arrives in step with your installation, and your team isn't left waiting or chasing.",
    icon: "ri-calendar-check-line",
  },
];





const ITHardwareDistribution: FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previousTitle = document.title;
    const previousMeta = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]'
    );
    const previousDescription = previousMeta?.content;
    let createdMeta: HTMLMetaElement | null = null;

    document.title =
      "IT Hardware Supplier for Businesses | IPGS";

    const description =
      "IPGS is an IT hardware supplier that also designs and installs your network. One source, one point of contact, equipment on time. Talk to us today.";

    if (previousMeta) {
      previousMeta.content = description;
    } else {
      createdMeta = document.createElement("meta");
      createdMeta.name = "description";
      createdMeta.content = description;
      document.head.appendChild(createdMeta);
    }

    return () => {
      document.title = previousTitle;

      if (
        previousMeta &&
        previousDescription !== undefined
      ) {
        previousMeta.content = previousDescription;
      }

      createdMeta?.remove();
    };
  }, []);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;

    const targets = root.querySelectorAll<HTMLElement>(
      "[data-hd-reveal]"
    );

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
      reducedMotion ||
      typeof IntersectionObserver === "undefined"
    ) {
      targets.forEach((element) =>
        element.classList.add("hd-visible")
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("hd-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.07,
        rootMargin: "0px 0px -25px 0px",
      }
    );

    targets.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="js-scroll ipgs-hd-page"
      ref={pageRef}
    >
      {/* ======================================
          01 - SAME EXISTING IPGS HERO
          NO NEW HERO BACKGROUND
      ====================================== */}

      <div className="hero-data-bottom">
        <div className="services-home-hero desck-about ipgs-hd-banner">
          <div className="title-of-hero">
            <p>
              We are the IT hardware supplier
                that delivers <br />equipment
                when your project needs it
            </p>
            <span>
              <Link to="/">Home</Link>
              {" - "}
              IT Hardware Supply and Distribution
            </span>
          </div>
        </div>
      </div>

      

      {/* ======================================
          03 - SUPPLY AND INSTALL
      ====================================== */}

      <section className="ipgs-hd-overview">
        <div className="container">
          <div className="ipgs-hd-overview-grid">
            <div data-hd-reveal>
              <div className="ipgs-hd-label">
                <span></span>
                WHY INTEGRATED SUPPLY MATTERS
              </div>

              <h2>
                An IT hardware supplier
                that also
                <span> designs and installs</span>
              </h2>
            </div>

            <div
              className="ipgs-hd-overview-copy"
              data-hd-reveal
            >
              <p>
                Buying equipment from one company
                and paying another to fit it usually
                means delays and blame when something
                doesn't match. We supply the products
                and deliver the project, so what
                arrives does the job and minimises
                your lead times.
              </p>

              <div className="ipgs-hd-overview-note">
                <i
                  className="ri-checkbox-circle-line"
                  aria-hidden="true"
                ></i>
                <strong>
                  The right equipment, aligned
                  with the design and installation.
                </strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================
          04 - FOUR SUPPLY CAPABILITIES
      ====================================== */}

      <section className="ipgs-hd-supply">
        <div className="container">
          <div
            className="ipgs-hd-section-heading"
            data-hd-reveal
          >
            <div className="ipgs-hd-label">
              <span></span>
              WHAT WE SUPPLY
            </div>

            <h2>
              Hardware that belongs
              <span> in your project</span>
            </h2>

            <p>
              Procurement and deployment are
              coordinated around your technical
              requirements and project schedule.
            </p>
          </div>

          <div className="ipgs-hd-supply-grid">
            {supplyCapabilities.map((item) => (
              <article
                className="ipgs-hd-supply-item"
                key={item.title}
                data-hd-reveal
              >
                <div className="ipgs-hd-supply-top">
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
          05 - NINE CATALOGUE CATEGORIES
      ====================================== */}

      <section
        className="ipgs-hd-catalogue"
        id="hardware-catalogue"
      >
        <div className="container">
          <div
            className="ipgs-hd-catalogue-heading"
            data-hd-reveal
          >
            <div className="ipgs-hd-label">
              <span></span>
              PRODUCT CATALOGUE
            </div>

            <div className="ipgs-hd-catalogue-heading-grid">
              <h2>
                Our catalogue of
                <span> premium IT hardware supplies</span>
              </h2>

              <p>
                Products and installation materials
                for network, telecom, data centre
                and enterprise infrastructure
                projects.
              </p>
            </div>
          </div>

          <div className="ipgs-hd-catalogue-index">
            <span>PRODUCT CATEGORY</span>
            <span>09 GROUPS</span>
          </div>

          <div className="ipgs-hd-catalogue-list">
            {catalogue.map((item) => (
              <article
                className="ipgs-hd-catalogue-row"
                key={item.title}
                data-hd-reveal
              >
                <div className="ipgs-hd-catalogue-icon">
                  <i
                    className={item.icon}
                    aria-hidden="true"
                  ></i>
                </div>

                <div className="ipgs-hd-catalogue-copy">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <i
                  className="ri-arrow-right-up-line ipgs-hd-catalogue-arrow"
                  aria-hidden="true"
                ></i>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================
          06 - WHY BUY FROM IPGS
      ====================================== */}

      <section className="ipgs-hd-why">
        <div className="container">
          <div
            className="ipgs-hd-why-heading"
            data-hd-reveal
          >
            <div className="ipgs-hd-label">
              <span></span>
              THE IPGS DIFFERENCE
            </div>

            <h2>
              Why buy IT hardware
              <span> from IPGS</span>
            </h2>

            <p>
              Who better to source and procure
              the IT hardware your project needs
              than the experts tasked with
              installing it?
            </p>
          </div>

          <div className="ipgs-hd-why-grid">
            {reasons.map((item) => (
              <article
                className="ipgs-hd-why-item"
                key={item.title}
                data-hd-reveal
              >
                <div className="ipgs-hd-why-top">
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
          07 - FINAL CONTACT CTA
      ====================================== */}

      <section className="ipgs-hd-final">
        <div className="container">
          <div className="ipgs-hd-final-grid">
            <div data-hd-reveal>
              <div className="ipgs-hd-label">
                <span></span>
                LET'S WORK TOGETHER
              </div>

              <h2>
                Talk to us about your project,
                and let us
                <span> take care of procurement</span>
              </h2>

              <p>
                Share your list or your project,
                and we'll show you how a single
                IT hardware supplier keeps
                everything moving.
              </p>
            </div>

            <div
              className="ipgs-hd-final-action"
              data-hd-reveal
            >
              <Link
                to="/Contact"
                className="ipgs-hd-final-btn"
              >
                Talk to Our Supply Team Today
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

export default ITHardwareDistribution;
