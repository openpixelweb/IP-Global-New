
import { useEffect, useRef } from "react";
import type { FC } from "react";
import { Link } from "react-router-dom";

import "../assets/css/ip-connectivity.css";

/* =============================================
   IPGS - IP CONNECTIVITY SERVICES
   React 19 + TypeScript + Vite
   No images / No additional dependencies
============================================= */

interface ServiceItem {
  number: string;
  title: string;
  description: string;
  icon: string;
}

/* =============================================
   FIVE APPROVED IP CONNECTIVITY SERVICES
============================================= */

const connectivityServices: ServiceItem[] = [
  {
    number: "01",
    title: "Get connected with the right providers",
    description:
      "We handle ISP provisioning, caching, peering, and private interconnects, all matched to your traffic patterns and application needs.",
    icon: "ri-links-line",
  },
  {
    number: "02",
    title: "Size your bandwidth with confidence",
    description:
      "We size your bandwidth and monitor utilisation, while managing your committed information rate so you pay for what you need.",
    icon: "ri-speed-up-line",
  },
  {
    number: "03",
    title: "Stay online when a link fails",
    description:
      "Dual-ISP failover, routing resilience, circuit diversity reviews, and continuity design keep your service going when one provider has a bad day.",
    icon: "ri-git-branch-line",
  },
  {
    number: "04",
    title: "Hand supplier headaches to us",
    description:
      "Our SLA-backed management covers supplier coordination, outage escalation, service reporting, and performance reviews.",
    icon: "ri-customer-service-2-line",
  },
  {
    number: "05",
    title: "Reach the cloud by the quickest route",
    description:
      "We plan low-latency paths to cloud platforms, content providers, data centres, and SaaS applications wherever the route is technically and commercially available.",
    icon: "ri-cloud-line",
  },
];

/* =============================================
   FOUR TRANSPORT STRENGTHS
============================================= */

const transportStrengths: ServiceItem[] = [
  {
    number: "01",
    title: "Trusted by VodafoneThree",
    description:
      "We support VodafoneThree, our key transport client, with connectivity between their services and the customers who use them.",
    icon: "ri-shield-star-line",
  },
  {
    number: "02",
    title: "Secure by design",
    description:
      "Security is built into every transport link we deliver, so traffic between your services and your customers stays protected.",
    icon: "ri-shield-check-line",
  },
  {
    number: "03",
    title: "Built for mobile and fixed networks",
    description:
      "Our team supports mobile and fixed operators alike, so you get the same standard of connectivity whichever network carries your customers.",
    icon: "ri-base-station-line",
  },
  {
    number: "04",
    title: "One team from design to support",
    description:
      "The engineers who plan your transport connectivity stay with you through delivery and ongoing service management.",
    icon: "ri-team-line",
  },
];

/* =============================================
   FOUR REASONS TO CHOOSE IPGS
============================================= */

const advantages: ServiceItem[] = [
  {
    number: "01",
    title: "Carrier and access expertise",
    description:
      "Our engineers know leased lines, broadband, fibre, Ethernet, dedicated internet access, and backup links, so they can recommend diverse carrier options that fit your needs.",
    icon: "ri-global-line",
  },
  {
    number: "02",
    title: "Routing know-how",
    description:
      "We bring deep experience with BGP, public IP addressing, DNS, NAT, peering, and traffic path optimisation, so your traffic takes the best route available.",
    icon: "ri-route-line",
  },
  {
    number: "03",
    title: "Suppliers managed for you",
    description:
      "We manage circuit delivery and carrier escalations, then report on SLA performance, so you never have to chase a supplier yourself.",
    icon: "ri-file-chart-line",
  },
  {
    number: "04",
    title: "Performance you can prove",
    description:
      "We analyse bandwidth, latency, packet loss, and failover behaviour, then keep clear records of IP allocations, escalation paths, test evidence, and service reports.",
    icon: "ri-pulse-line",
  },
];

/* =============================================
   NO-IMAGE DUAL ISP DIAGRAM
============================================= */


/* =============================================
   MAIN PAGE
============================================= */

const IPConnectivity: FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  /* =========================================
     SEO METADATA
  ========================================= */

  useEffect(() => {
    const previousTitle = document.title;

    const existingMeta =
      document.querySelector<HTMLMetaElement>(
        'meta[name="description"]'
      );

    const previousDescription = existingMeta?.content;

    let createdMeta: HTMLMetaElement | null = null;

    document.title =
      "IP Connectivity Services for Business and Operators | IPGS";

    const description =
      "IPGS delivers IP connectivity services with dual-ISP failover, SLA-backed supplier management, and secure transport for mobile and fixed operators.";

    if (existingMeta) {
      existingMeta.content = description;
    } else {
      createdMeta = document.createElement("meta");
      createdMeta.name = "description";
      createdMeta.content = description;
      document.head.appendChild(createdMeta);
    }

    return () => {
      document.title = previousTitle;

      if (
        existingMeta &&
        previousDescription !== undefined
      ) {
        existingMeta.content = previousDescription;
      }

      createdMeta?.remove();
    };
  }, []);

  /* =========================================
     SCROLL REVEAL ANIMATIONS
  ========================================= */

  useEffect(() => {
    const root = pageRef.current;

    if (!root) return;

    const elements =
      root.querySelectorAll<HTMLElement>(
        "[data-conn-reveal]"
      );

    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (
      reducedMotion ||
      typeof IntersectionObserver === "undefined"
    ) {
      elements.forEach((element) => {
        element.classList.add("conn-visible");
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "conn-visible"
            );

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.07,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="js-scroll ipgs-conn-page"
      ref={pageRef}
    >
      {/* =====================================
          01 - ORIGINAL IPGS HERO BANNER
          NO ADDITIONAL IMAGE
      ===================================== */}

      <div className="hero-data-bottom">
        <div className="services-home-hero desck-about ipgs-conn-banner">
          <div className="title-of-hero">
            <p>IP connectivity services,
                 fine-tuned <br />for your productivity</p>

            <span>
              <Link to="/">Home</Link>
              {" - "}
              IP Connectivity
            </span>
          </div>
        </div>
      </div>

      

      {/* =====================================
          03 - INTERNET ACCESS
      ===================================== */}

      <section className="ipgs-conn-access">
        <div className="container">
          <div className="ipgs-conn-access-grid">
            <div data-conn-reveal>
              <div className="ipgs-conn-label">
                <span></span>
                INTERNET ACCESS & DESIGN
              </div>

              <h2>
                Internet access that earns
                <span> its place in your network</span>
              </h2>

              <div className="ipgs-conn-access-foot">
                <span>CONNECTIVITY STRATEGY</span>
              </div>
            </div>

            <div
              className="ipgs-conn-access-copy"
              data-conn-reveal
            >
              <p>
                We match your connectivity to
                the way you really work.
                Bandwidth demand, application
                importance, traffic patterns,
                and budget all shape the
                design we recommend.
              </p>

              <p>
                Dedicated circuits, shared
                circuits, carrier diversity,
                and private interconnects all
                sit in our toolkit, so we
                choose the mix that suits
                your goals.
              </p>

              <p>
                Once your service is live,
                we manage the suppliers
                and handle escalations for
                you. Your people get a
                consistent experience,
                and you get one team to
                call for expert assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          04 - FIVE SERVICES
      ===================================== */}

      <section className="ipgs-conn-services">
        <div className="container">
          <div
            className="ipgs-conn-services-heading"
            data-conn-reveal
          >
            <div className="ipgs-conn-label">
              <span></span>
              OUR CONNECTIVITY CAPABILITIES
            </div>

            <h2>
              IP connectivity services
              <span> that keep you moving</span>
            </h2>

            <p>
              Each service below can stand
              alone or combine with the others,
              depending on how your traffic
              behaves and where your priorities
              sit.
            </p>
          </div>

          <div className="ipgs-conn-services-grid">
            {connectivityServices.map((service) => (
              <article
                className="ipgs-conn-service"
                key={service.number}
                data-conn-reveal
              >
                <div className="ipgs-conn-service-top">

                  <i
                    className={service.icon}
                    aria-hidden="true"
                  ></i>
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <span
                  className="ipgs-conn-service-line"
                  aria-hidden="true"
                ></span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================
          05 - SECURE TRANSPORT
      ===================================== */}

      <section className="ipgs-conn-transport">
        <div className="container">
          <div
            className="ipgs-conn-transport-heading"
            data-conn-reveal
          >
            <div className="ipgs-conn-label">
              <span></span>
              MOBILE & FIXED OPERATORS
            </div>

            <h2>
              Secure transport that connects
              your network
              <span> to every customer</span>
            </h2>

            <p>
              Transport is one of our main
              IP connectivity services for
              mobile and fixed operators.
              We provide the secure transport
              that carries traffic between
              the services inside your network
              and the services your customers
              use every day.
            </p>

            <p>
              Every call and every data session
              depends on it, so we build it
              to stay dependable and secure.
            </p>
          </div>

          <div className="ipgs-conn-transport-grid">
            {transportStrengths.map((item) => (
              <article
                className="ipgs-conn-transport-item"
                key={item.number}
                data-conn-reveal
              >
                <div className="ipgs-conn-transport-top">

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

      {/* =====================================
          06 - WHY IPGS
      ===================================== */}

      <section className="ipgs-conn-why">
        <div className="container">
          <div
            className="ipgs-conn-why-heading"
            data-conn-reveal
          >
            <div className="ipgs-conn-label">
              <span></span>
              THE IPGS DIFFERENCE
            </div>

            <h2>
              Why operators and businesses
              choose IPGS
              <span> for connectivity</span>
            </h2>

            <p>
              Our biggest strengths define
              our IP connectivity services
              team, and each one comes from
              the skills our engineers
              use every day.
            </p>
          </div>

          <div className="ipgs-conn-why-list">
            {advantages.map((item) => (
              <article
                className="ipgs-conn-why-item"
                key={item.number}
                data-conn-reveal
              >

                <div className="ipgs-conn-why-copy">
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

      {/* =====================================
          07 - AVAILABILITY & FAILOVER
      ===================================== */}

      <section className="ipgs-conn-assurance">
        <div className="container">
          <div
            className="ipgs-conn-assurance-heading"
            data-conn-reveal
          >
            <div className="ipgs-conn-label">
              <span></span>
              CONNECTIVITY ASSURANCE
            </div>

            <h2>
              Resilience backed by
              <span> measurable expectations</span>
            </h2>
          </div>

          <div className="ipgs-conn-assurance-grid">
            <article
              className="ipgs-conn-assurance-item"
              data-conn-reveal
            >
              <div className="ipgs-conn-assurance-top">
                <i
                  className="ri-pulse-line"
                  aria-hidden="true"
                ></i>

                <span>AVAILABILITY</span>
              </div>

              <h3>
                IP connectivity services
                with measured availability
              </h3>

              <strong className="ipgs-conn-availability">
                99.5% – 99.95%
              </strong>

              <p>
                Our availability target sits
                between 99.5% and 99.95%,
                depending on circuit type,
                carrier SLA, redundancy design,
                and last-mile conditions.
              </p>
            </article>

            <article
              className="ipgs-conn-assurance-item"
              data-conn-reveal
            >
              <div className="ipgs-conn-assurance-top">
                <i
                  className="ri-git-branch-line"
                  aria-hidden="true"
                ></i>

                <span>CONTINUITY</span>
              </div>

              <h3>
                Failover and reporting
                you can see
              </h3>

              <div
                className="ipgs-conn-failover-track"
                aria-hidden="true"
              >
                <span></span>
                <span></span>
                <span></span>
              </div>

              <p>
                Failover happens automatically
                or under management, based on
                the dual-provider or backup-link
                design we agree with you.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================
          08 - FINAL CTA
      ===================================== */}

      <section className="ipgs-conn-final">
        <div className="container">
          <div className="ipgs-conn-final-grid">
            <div data-conn-reveal>
              <div className="ipgs-conn-label">
                <span></span>
                LET'S WORK TOGETHER
              </div>

              <h2>
                Start your connectivity
                <span> project with IPGS</span>
              </h2>

              <p>
                Tell us about your traffic
                and your uptime goals,
                and our team will design
                the right IP connectivity
                services around them.
                Get in touch this week
                to start the conversation.
              </p>
            </div>

            <div
              className="ipgs-conn-final-action"
              data-conn-reveal
            >
              <Link
                to="/Contact"
                className="ipgs-conn-final-btn"
              >
                Speak to Our Connectivity Team

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

export default IPConnectivity;
