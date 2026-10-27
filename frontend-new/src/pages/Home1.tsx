
import { Link } from "react-router-dom";
import whyHmImage from "../assets/images/why-hm.jpg";
// import bannerBg from "../assets/images/banner-bg.jpg";
import teamWorkImage from "../assets/images/team-work.jpg";
import indusHmImage1 from "../assets/images/indus-hm-01.jpg";
import indusHmImage2 from "../assets/images/indus-hm-02.jpg";
import indusHmImage3 from "../assets/images/indus-hm-03.jpg";
import indusHmImage4 from "../assets/images/indus-hm-04.jpg";
import indusHmImage5 from "../assets/images/indus-hm-05.jpg";
import indusHmImage6 from "../assets/images/indus-hm-06.jpg";
// import BannerLogoSvg from "../assets/images/banner-icon.png";




// ---- Component ----
const Home1: React.FC = () => {
    return (
        <>

{/* =====================================================
    IPGS HOME HERO
===================================================== */}

{/* <section className="ipgs-home-hero-v2" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bannerBg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", width: "100%", minHeight: "500px" }} > */}
{/* =====================================================
    IPGS HOME HERO - SIMPLE CLIENT VERSION
===================================================== */}

<section className="ipgs-simple-hero">

    <div className="container">

        <div className="ipgs-simple-hero-content">


            {/* =========================================
                EYEBROW
            ========================================= */}

            <div className="ipgs-simple-hero-eyebrow">

                <span className="ipgs-simple-hero-eyebrow-line"></span>

                <span>
                    NETWORK & IT SERVICES
                </span>

            </div>


            {/* =========================================
                MAIN HEADING
            ========================================= */}

            <h1 className="ipgs-simple-hero-title">

                Technical excellence,

                <span>
                    built today for tomorrow’s big ideas
                </span>

            </h1>


            {/* =========================================
                DESCRIPTION
            ========================================= */}

            <p className="ipgs-simple-hero-description">

                IPGS is a network and IT services provider that does it all. We’re an end-to-end partner that designs, builds, and runs
                the infrastructure needed to turn ambition into results.

            </p>


            {/* =========================================
                ACTION
            ========================================= */}

            <div className="ipgs-simple-hero-actions">

                <Link
                    to="/contact"
                    className="ipgs-simple-hero-button"
                >

                    <span>
                        Let’s Talk
                    </span>

                    <i className="ri-arrow-right-line"></i>

                </Link>

            </div>

        </div>


        {/* =================================================
            STATISTICS
        ================================================= */}

        <div className="ipgs-simple-hero-stats">


            {/* STAT 1 */}

            <div className="ipgs-simple-hero-stat">

                <strong>
                    4-hour
                </strong>

                <span>
                    response, 12-hour
                </span>

            </div>


            {/* STAT 2 */}

            <div className="ipgs-simple-hero-stat">

                <strong>
                    80-90%
                </strong>

                <span>
                    of RAN tickets resolved without vendor escalation
                </span>

            </div>


            {/* STAT 3 */}

            <div className="ipgs-simple-hero-stat">

                <strong>
                    5
                </strong>

                <span>
                    global offices
                </span>

            </div>


            {/* STAT 4 */}

            <div className="ipgs-simple-hero-stat">

                <strong>
                    68 / 72
                </strong>

                <span>
                    academy trainees placed into jobs
                </span>

            </div>

        </div>

    </div>

</section>


{/* =====================================================
    WHO CHOOSES IPGS SECTION
===================================================== */}

<section className="ipgs-who-chooses-section">

    <div className="container">

        <div className="ipgs-who-chooses-grid">

            {/* =========================================
                LEFT VISUAL
            ========================================= */}

            <div className="ipgs-who-chooses-visual">

                <div className="ipgs-who-chooses-image-wrap">

                    
<img
  src={whyHmImage}
  alt="IPGS network and infrastructure specialists"
  className="ipgs-who-chooses-image"
/>


                    <div
                        className="ipgs-who-chooses-blue-block"
                        aria-hidden="true"
                    ></div>

                    <div className="ipgs-who-chooses-badge">

                        <span className="ipgs-who-chooses-badge-small">
                            BUILT FOR
                        </span>

                        <strong>
                            Critical
                            Infrastructure
                        </strong>

                    </div>

                </div>

            </div>


            {/* =========================================
                RIGHT CONTENT
            ========================================= */}

            <div className="ipgs-who-chooses-content">

                <div className="ipgs-section-eyebrow">

                    <span></span>

                    <p>
                        WHY ORGANISATIONS CHOOSE IPGS
                    </p>

                </div>


                <h2 className="ipgs-who-chooses-title">

                    Telecoms operators, rail networks and
                    public sector bodies all choose IPGS
                    for the same reason

                </h2>


                <div className="ipgs-who-chooses-copy">

                    <p>
                        Mobile network operators bring us in for core
                        network and RAN programmes. Rail and critical
                        infrastructure clients turn to us for signalling
                        and control network delivery when downtime isn’t
                        an option. Energy, oil and gas, and public sector
                        organisations approach our team for bespoke
                        solutions built from the ground up.
                    </p>


                    <p>
                        All our clients are guaranteed the expertise and
                        dedication of a team that builds safety and
                        security into every solution. Scalability promises
                        future-proof solutions that are ready to grow as
                        your operation grows. That’s central to everything
                        we do at IPGS.
                    </p>


                    <p>
                        With a strong foundation in enterprise networking,
                        cloud, and telecom systems, we enable organisations
                        to stay connected, competitive, and ready to grow.
                    </p>

                </div>


                {/* =========================================
                    SECTOR TAGS
                ========================================= */}

                <div className="ipgs-who-chooses-sectors">

                    <div className="ipgs-sector-item">

                        <span className="ipgs-sector-number">
                            01
                        </span>

                        <span>
                            Telecom
                        </span>

                    </div>


                    <div className="ipgs-sector-item">

                        <span className="ipgs-sector-number">
                            02
                        </span>

                        <span>
                            Rail
                        </span>

                    </div>


                    <div className="ipgs-sector-item">

                        <span className="ipgs-sector-number">
                            03
                        </span>

                        <span>
                            Energy
                        </span>

                    </div>


                    <div className="ipgs-sector-item">

                        <span className="ipgs-sector-number">
                            04
                        </span>

                        <span>
                            Public Sector
                        </span>

                    </div>

                </div>

            </div>

        </div>

    </div>

</section>




{/* =====================================================
    IPGS SERVICES - FLIP CARDS
===================================================== */}

<section className="ipgs-flip-services-section">

    <div className="container">

        {/* =========================================
            SECTION HEADING
        ========================================= */}

        <div className="ipgs-flip-services-heading">

            <div className="ipgs-flip-services-label">

                <span></span>

                <p>
                    OUR SERVICES
                </p>

            </div>


            <div className="ipgs-flip-services-heading-grid">

                <div>

                    <h2>
                        Everything a network and IT services partner
                        brings <strong>under one roof</strong>
                    </h2>

                </div>


                <div>

                    <p>
                        When you come to us, you’ll never have to go
                        anywhere else for fully customised IT, network,
                        and operational technology solutions. We’re
                        immersed in the sectors we serve day in, day out,
                        so we’ll be ready to hit the ground running when
                        you need us.
                    </p>

                </div>

            </div>

        </div>


        {/* =========================================
            FLIP CARDS
        ========================================= */}

        <div className="ipgs-flip-services-grid">


            {/* =====================================
                CARD 01
            ===================================== */}

            <div className="ipgs-flip-card">

                <div className="ipgs-flip-card-inner">


                    {/* FRONT */}

                    <div className="ipgs-flip-card-front">

                        <div className="ipgs-flip-card-top">

                            <span className="ipgs-flip-card-number">
                                01
                            </span>

                            <span className="ipgs-flip-card-arrow">
                                <i className="ri-arrow-right-up-line"></i>
                            </span>

                        </div>


                        <div className="ipgs-flip-card-icon">

                            <i className="ri-train-line"></i>

                        </div>


                        <div className="ipgs-flip-card-front-content">

                            <span>
                                CRITICAL INFRASTRUCTURE
                            </span>

                            <h3>
                                Operational Technology
                            </h3>

                        </div>


                        <div className="ipgs-flip-card-footer">

                           

                            <span className="ipgs-flip-card-line"></span>

                        </div>

                    </div>


                    {/* BACK */}

                    <div className="ipgs-flip-card-back">

                        <div className="ipgs-flip-card-back-top">

                            <span>
                                01
                            </span>

                            <i className="ri-train-line"></i>

                        </div>


                        <h3>
                            Operational Technology
                        </h3>


                        <p>
                            From IP/MPLS networks for rail signalling
                            and control systems to IEC 62443-aligned
                            security for energy, oil and gas
                            environments, safety and availability lead
                            every decision at IPGS.
                        </p>


                        <Link
                            to="#"
                            className="ipgs-flip-card-link"
                        >
                            Learn More

                            <i className="ri-arrow-right-up-line"></i>
                        </Link>

                    </div>

                </div>

            </div>


            {/* =====================================
                CARD 02
            ===================================== */}

            <div className="ipgs-flip-card">

                <div className="ipgs-flip-card-inner">


                    {/* FRONT */}

                    <div className="ipgs-flip-card-front">

                        <div className="ipgs-flip-card-top">

                            <span className="ipgs-flip-card-number">
                                02
                            </span>

                            <span className="ipgs-flip-card-arrow">
                                <i className="ri-arrow-right-up-line"></i>
                            </span>

                        </div>


                        <div className="ipgs-flip-card-icon">

                            <i className="ri-signal-tower-line"></i>

                        </div>


                        <div className="ipgs-flip-card-front-content">

                            <span>
                                MOBILE & NETWORK
                            </span>

                            <h3>
                                Telecom Network Services
                            </h3>

                        </div>


                        <div className="ipgs-flip-card-footer">

                          

                            <span className="ipgs-flip-card-line"></span>

                        </div>

                    </div>


                    {/* BACK */}

                    <div className="ipgs-flip-card-back">

                        <div className="ipgs-flip-card-back-top">

                            <span>
                                02
                            </span>

                            <i className="ri-signal-tower-line"></i>

                        </div>


                        <h3>
                            Telecom Network Services
                        </h3>


                        <p>
                            IPGS resources core network services,
                            designs multi-vendor RAN rollouts, and
                            provides 4th-line RAN support for mobile
                            operators and MVNOs across five countries.
                        </p>


                        <Link
                            to="#"
                            className="ipgs-flip-card-link"
                        >
                            Learn More

                            <i className="ri-arrow-right-up-line"></i>
                        </Link>

                    </div>

                </div>

            </div>


            {/* =====================================
                CARD 03
            ===================================== */}

            <div className="ipgs-flip-card">

                <div className="ipgs-flip-card-inner">


                    {/* FRONT */}

                    <div className="ipgs-flip-card-front">

                        <div className="ipgs-flip-card-top">

                            <span className="ipgs-flip-card-number">
                                03
                            </span>

                            <span className="ipgs-flip-card-arrow">
                                <i className="ri-arrow-right-up-line"></i>
                            </span>

                        </div>


                        <div className="ipgs-flip-card-icon">

                            <i className="ri-server-line"></i>

                        </div>


                        <div className="ipgs-flip-card-front-content">

                            <span>
                                ENTERPRISE TECHNOLOGY
                            </span>

                            <h3>
                                Enterprise IT Services
                            </h3>

                        </div>


                        <div className="ipgs-flip-card-footer">

                           

                            <span className="ipgs-flip-card-line"></span>

                        </div>

                    </div>


                    {/* BACK */}

                    <div className="ipgs-flip-card-back">

                        <div className="ipgs-flip-card-back-top">

                            <span>
                                03
                            </span>

                            <i className="ri-server-line"></i>

                        </div>


                        <h3>
                            Enterprise IT Services
                        </h3>


                        <p>
                            Enterprise clients turn to IPGS for managed
                            network security and SOC-style operations,
                            private and public cloud infrastructure
                            services, data centres, managed IT and
                            product distribution.
                        </p>


                        <Link
                            to="#"
                            className="ipgs-flip-card-link"
                        >
                            Learn More

                            <i className="ri-arrow-right-up-line"></i>
                        </Link>

                    </div>

                </div>

            </div>

        </div>

    </div>

</section>









{/* =====================================================
    IPGS CULTURE SECTION
===================================================== */}

<section className="ipgs-culture-section">

    <div className="container">

        <div className="ipgs-culture-layout">

            {/* =========================================
                LEFT IMAGE
            ========================================= */}

            <div className="ipgs-culture-visual">

                <div className="ipgs-culture-image-wrap">

                    <img
    src={teamWorkImage}
    alt="IPGS team working together"
    className="ipgs-culture-image"
/>

                    <div
                        className="ipgs-culture-image-block"
                        aria-hidden="true"
                    ></div>

                    <div className="ipgs-culture-image-label">

                        <span>
                            PEOPLE
                        </span>

                        <strong>
                            One team.
                            <br />
                            Five countries.
                        </strong>

                    </div>

                </div>

            </div>


            {/* =========================================
                RIGHT CONTENT PANEL
            ========================================= */}

            <div className="ipgs-culture-panel">

                <div className="ipgs-culture-label">

                    <span></span>

                    <p>
                        OUR CULTURE
                    </p>

                </div>


                <h2>
                    A culture where nobody hides
                    <span> behind a job title</span>
                </h2>


                <div className="ipgs-culture-copy">

                    <p>
                        Even with 126 people across five countries,
                        IPGS stays close-knit on purpose. Every
                        specialist here keeps genuine depth in one
                        discipline, whether that's core network
                        engineering or rail signalling, and colleagues
                        bring in help from other teams without being
                        asked twice.
                    </p>


                    <p>
                        As far as we’re concerned, we’re not succeeding
                        until everyone at IPGS is fulfilling their true
                        potential.
                    </p>

                </div>


                <div className="ipgs-culture-bottom">

                    <Link
                        to="#"
                        className="ipgs-culture-button"
                    >
                        Visit Our Culture Page

                        <span>
                            <i className="ri-arrow-right-up-line"></i>
                        </span>
                    </Link>


                    <div
                        className="ipgs-culture-detail"
                        aria-hidden="true"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                </div>

            </div>

        </div>

    </div>

</section>







{/* =====================================================
    IPGS CULTURE STRIP SECTION
===================================================== */}

<section className="ipgs-culture-strip">

    <div className="container">

        <div className="ipgs-culture-strip-inner">

            {/* SMALL LABEL */}

            <div className="ipgs-culture-strip-label">

                <span></span>

                <p>
                    OUR CULTURE
                </p>

                <span></span>

            </div>


            {/* MAIN HEADING */}

            <h2>
                A culture where nobody hides
                <span> behind a job title</span>
            </h2>


            {/* CONTENT */}

            <div className="ipgs-culture-strip-content">

                <p>
                    Even with 126 people across five countries,
                    IPGS stays close-knit on purpose. Every
                    specialist here keeps genuine depth in one
                    discipline, whether that's core network
                    engineering or rail signalling, and colleagues
                    bring in help from other teams without being
                    asked twice.
                </p>

                <p>
                    As far as we’re concerned, we’re not succeeding
                    until everyone at IPGS is fulfilling their true
                    potential.
                </p>

            </div>


            {/* BUTTON */}

            <div className="ipgs-culture-strip-action">

                <Link
                    to="#"
                    className="ipgs-culture-strip-button"
                >
                    Visit Our Culture Page

                    <i className="ri-arrow-right-up-line"></i>
                </Link>

            </div>

        </div>

    </div>

</section>






{/* =====================================================
    WHY IPGS - CLEAN ACCORDION
===================================================== */}

<section className="ipgs-why-clean-section">

    <div className="container">

        {/* =========================================
            SECTION HEADER
        ========================================= */}

        <div className="ipgs-why-clean-header">

            <div className="ipgs-why-clean-label">

                <span></span>

                <p>
                    WHY IPGS
                </p>

            </div>


            <div className="ipgs-why-clean-header-grid">

                <div>

                    <h2>
                        Why we’re your perfect network
                        and IT services
                        <span> partner</span>
                    </h2>

                </div>


                <div>

                    <p>
                        Once you can see what we’re capable of, we’re
                        confident you’ll stick with us. But just in case
                        you’re not sure, here are five reasons why we’re
                        one of the world’s most respected network, IT
                        services and operational technology specialists:
                    </p>

                </div>

            </div>

        </div>


        {/* =========================================
            ACCORDION
        ========================================= */}

        <div className="ipgs-why-clean-accordion">


            {/* =====================================
                ITEM 1
            ===================================== */}

            <div className="ipgs-why-clean-item">

                <input
                    type="radio"
                    name="ipgs-why-accordion"
                    id="ipgs-why-one"
                    defaultChecked
                />

                <label
                    htmlFor="ipgs-why-one"
                    className="ipgs-why-clean-question"
                >

                    <span className="ipgs-why-clean-title">
                        Full accountability. Always
                    </span>


                    <span className="ipgs-why-clean-icon">

                        <span></span>

                        <span></span>

                    </span>

                </label>


                <div className="ipgs-why-clean-answer">

                    <div className="ipgs-why-clean-answer-inner">

                        <p>
                            Every engagement runs on a RACI matrix from
                            day one, backed by a live risk register that
                            tracks every identified risk through to
                            resolution.
                        </p>

                    </div>

                </div>

            </div>


            {/* =====================================
                ITEM 2
            ===================================== */}

            <div className="ipgs-why-clean-item">

                <input
                    type="radio"
                    name="ipgs-why-accordion"
                    id="ipgs-why-two"
                />

                <label
                    htmlFor="ipgs-why-two"
                    className="ipgs-why-clean-question"
                >

                    <span className="ipgs-why-clean-title">
                        Everyone at IPGS is ready to help
                    </span>


                    <span className="ipgs-why-clean-icon">

                        <span></span>

                        <span></span>

                    </span>

                </label>


                <div className="ipgs-why-clean-answer">

                    <div className="ipgs-why-clean-answer-inner">

                        <p>
                            You get one named contact for the whole life
                            of the project, who brings in any other
                            specialist directly when a question needs
                            one. But whoever you talk to, you’re
                            guaranteed a fast and effective response.
                        </p>

                    </div>

                </div>

            </div>


            {/* =====================================
                ITEM 3
            ===================================== */}

            <div className="ipgs-why-clean-item">

                <input
                    type="radio"
                    name="ipgs-why-accordion"
                    id="ipgs-why-three"
                />

                <label
                    htmlFor="ipgs-why-three"
                    className="ipgs-why-clean-question"
                >

                    <span className="ipgs-why-clean-title">
                        A network and IT services partner that shares
                        the risk
                    </span>


                    <span className="ipgs-why-clean-icon">

                        <span></span>

                        <span></span>

                    </span>

                </label>


                <div className="ipgs-why-clean-answer">

                    <div className="ipgs-why-clean-answer-inner">

                        <p>
                            Every engagement carries a RACI matrix and
                            a live risk register, so responsibility is
                            explicit from the first meeting onward to
                            final delivery and ongoing monitoring.
                        </p>

                    </div>

                </div>

            </div>


            {/* =====================================
                ITEM 4
            ===================================== */}

            <div className="ipgs-why-clean-item">

                <input
                    type="radio"
                    name="ipgs-why-accordion"
                    id="ipgs-why-four"
                />

                <label
                    htmlFor="ipgs-why-four"
                    className="ipgs-why-clean-question"
                >

                    <span className="ipgs-why-clean-title">
                        A three-party model built for Tier 1 speed
                    </span>


                    <span className="ipgs-why-clean-icon">

                        <span></span>

                        <span></span>

                    </span>

                </label>


                <div className="ipgs-why-clean-answer">

                    <div className="ipgs-why-clean-answer-inner">

                        <p>
                            IPGS partners directly with large Tier 1
                            organisations, guaranteeing specialist
                            delivery and competitive pricing. You’re
                            guaranteed exceptional infrastructure,
                            delivered by a team that turns up on time.
                        </p>

                    </div>

                </div>

            </div>


            {/* =====================================
                ITEM 5
            ===================================== */}

            <div className="ipgs-why-clean-item">

                <input
                    type="radio"
                    name="ipgs-why-accordion"
                    id="ipgs-why-five"
                />

                <label
                    htmlFor="ipgs-why-five"
                    className="ipgs-why-clean-question"
                >

                    <span className="ipgs-why-clean-title">
                        Talent that stays long enough to matter
                    </span>


                    <span className="ipgs-why-clean-icon">

                        <span></span>

                        <span></span>

                    </span>

                </label>


                <div className="ipgs-why-clean-answer">

                    <div className="ipgs-why-clean-answer-inner">

                        <p>
                            We take staff retention and job satisfaction
                            every bit as seriously as any client-facing
                            metric. This ensures the kind of retention
                            and loyalty that guarantees technical
                            excellence from our team.
                        </p>

                    </div>

                </div>

            </div>

        </div>

    </div>

</section>





{/* =====================================================
    INDUSTRIES WE SERVE - INTERACTIVE GRID
===================================================== */}

<section className="ipgs-industries-showcase">

    <div className="container">

        {/* =========================================
            SECTION HEADER
        ========================================= */}

        <div className="ipgs-industries-showcase-header">

            <div className="ipgs-industries-showcase-label">

                <span></span>

                <p>
                    INDUSTRIES WE SERVE
                </p>

            </div>


            <div className="ipgs-industries-showcase-head-grid">

                <h2>
                    Industries we serve
                </h2>

                <p>
                    Every sector IPGS works in gets the same treatment,
                    no watered-down version for smaller budgets and no
                    over-engineered version for the big logos.
                </p>

            </div>

        </div>


        {/* =========================================
            GRID
        ========================================= */}

        <div className="ipgs-industries-showcase-grid">


            {/* =====================================
                TELECOM - CONTENT FIRST
            ===================================== */}

            <article className="ipgs-industry-showcase-card is-content-first">

                <div className="ipgs-industry-showcase-face ipgs-industry-showcase-content">

                    <div className="ipgs-industry-showcase-icon">
                        <i className="ri-signal-tower-line"></i>
                    </div>

                    <h3>
                        Telecom
                    </h3>

                    <p>
                        Dropped calls and buffering wheels aren't IPGS's
                        idea of connectivity. We build the infrastructure
                        that keeps networks humming and customers off hold.
                    </p>

                </div>


                <div className="ipgs-industry-showcase-face ipgs-industry-showcase-image">

                    <img
    src={indusHmImage1}
    alt="Telecom infrastructure"
/>

                    <div className="ipgs-industry-showcase-image-title">
                        Telecom
                    </div>

                </div>

            </article>


            {/* =====================================
                ENTERPRISE - IMAGE FIRST
            ===================================== */}

            <article className="ipgs-industry-showcase-card is-image-first">

                <div className="ipgs-industry-showcase-face ipgs-industry-showcase-image">

                    
                    <img
    src={indusHmImage2}
    alt="Enterprise IT infrastructure"
/>

                    <div className="ipgs-industry-showcase-image-title">
                        Enterprise Organisations
                    </div>

                </div>


                <div className="ipgs-industry-showcase-face ipgs-industry-showcase-content">

                    <div className="ipgs-industry-showcase-icon">
                        <i className="ri-building-4-line"></i>
                    </div>

                    <h3>
                        Enterprise Organisations
                    </h3>

                    <p>
                        Legacy IT systems age faster than ever these days,
                        making fast and cost-effective replacements more
                        important than ever. IPGS modernises them and
                        builds in room to grow, so nobody's stuck
                        explaining a 2009 server rack to the board.
                    </p>

                </div>

            </article>


            {/* =====================================
                RETAIL - CONTENT FIRST
            ===================================== */}

            <article className="ipgs-industry-showcase-card is-content-first">

                <div className="ipgs-industry-showcase-face ipgs-industry-showcase-content">

                    <div className="ipgs-industry-showcase-icon">
                        <i className="ri-store-2-line"></i>
                    </div>

                    <h3>
                        Retail
                    </h3>

                    <p>
                        IPGS builds retail technology that works as hard
                        as the shop floor does, whether it’s a Black
                        Friday stampede or the random Tuesday nobody
                        expected to be so busy.
                    </p>

                </div>


                <div className="ipgs-industry-showcase-face ipgs-industry-showcase-image">

                    
                    <img
    src={indusHmImage3}
    alt="Retail technology"
/>

                    <div className="ipgs-industry-showcase-image-title">
                        Retail
                    </div>

                </div>

            </article>


            {/* =====================================
                BANKING - IMAGE FIRST
            ===================================== */}

            <article className="ipgs-industry-showcase-card is-image-first">

                <div className="ipgs-industry-showcase-face ipgs-industry-showcase-image">

                   
                                        <img
    src={indusHmImage4}
    alt="Banking technology"
/>

                    <div className="ipgs-industry-showcase-image-title">
                        Banking & Finance
                    </div>

                </div>


                <div className="ipgs-industry-showcase-face ipgs-industry-showcase-content">

                    <div className="ipgs-industry-showcase-icon">
                        <i className="ri-bank-line"></i>
                    </div>

                    <h3>
                        Banking & Finance
                    </h3>

                    <p>
                        Money moves fast, and mistakes get expensive.
                        IPGS builds secure IT systems that keep financial
                        services running without a single dropped
                        transaction.
                    </p>

                </div>

            </article>


            {/* =====================================
                TRANSPORT - CONTENT FIRST
            ===================================== */}

            <article className="ipgs-industry-showcase-card is-content-first">

                <div className="ipgs-industry-showcase-face ipgs-industry-showcase-content">

                    <div className="ipgs-industry-showcase-icon">
                        <i className="ri-train-line"></i>
                    </div>

                    <h3>
                        Transport
                    </h3>

                    <p>
                        Signal failures don't wait for a good time to
                        happen. IPGS builds secure, resilient networks
                        for rail and transport operators, so control
                        rooms stay live even when a level crossing
                        decides to cause problems.
                    </p>

                </div>


                <div className="ipgs-industry-showcase-face ipgs-industry-showcase-image">

                    
                    <img
    src={indusHmImage5}
    alt="Rail and transport infrastructure"
/>

                    <div className="ipgs-industry-showcase-image-title">
                        Transport
                    </div>

                </div>

            </article>


            {/* =====================================
                OIL & GAS - IMAGE FIRST
            ===================================== */}

            <article className="ipgs-industry-showcase-card is-image-first">

                <div className="ipgs-industry-showcase-face ipgs-industry-showcase-image">

                    
                    <img
    src={indusHmImage6}
    alt="Oil and gas infrastructure"
/>

                    <div className="ipgs-industry-showcase-image-title">
                        Oil & Gas
                    </div>

                </div>


                <div className="ipgs-industry-showcase-face ipgs-industry-showcase-content">

                    <div className="ipgs-industry-showcase-icon">
                        <i className="ri-oil-line"></i>
                    </div>

                    <h3>
                        Oil & Gas
                    </h3>

                    <p>
                        Remote sites and hostile environments don't excuse
                        weak infrastructure. IPGS builds IEC 62443-aligned
                        networks that keep energy, oil and gas operations
                        secure, whether that's an onshore plant or a rig
                        in the middle of nowhere.
                    </p>

                </div>

            </article>

        </div>

    </div>

</section>





{/* =====================================================
    PROOF / RESULTS SECTION
===================================================== */}

<section className="ipgs-proof-section">

    <div className="container">

        {/* =========================================
            SECTION HEADING
        ========================================= */}

        <div className="ipgs-proof-header">

            <div className="ipgs-proof-label">

                <span></span>

                <p>
                    PROOF / RESULTS
                </p>

            </div>


            <div className="ipgs-proof-header-grid">

                <div>

                    <h2>
                        Proof that isn't recycled from a
                        <span> case-study template</span>
                    </h2>

                </div>


                <div>

                    <p>
                        Real outcomes, real delivery and measurable
                        business impact from the work IPGS carries out
                        with clients.
                    </p>

                </div>

            </div>

        </div>


        {/* =========================================
            RESULTS GRID
        ========================================= */}

        <div className="ipgs-proof-grid">


            {/* =====================================
                RESULT 01
            ===================================== */}

            <article className="ipgs-proof-card ipgs-proof-card-dark">

                <div className="ipgs-proof-card-top">

                    <span className="ipgs-proof-tag">
                        UK MOBILE NETWORK
                    </span>

                    <i className="ri-signal-tower-line"></i>

                </div>


                <div className="ipgs-proof-card-body">

                    <p>
                        A major UK mobile network operator's sister
                        company recorded the highest growth of any
                        sister concern across its parent's global
                        network in 2025.
                    </p>


                    <h3>
                        IPGS was the single largest contributor
                        to that result.
                    </h3>

                </div>


                <div className="ipgs-proof-card-footer">

                    <span>
                        DELIVERY IMPACT
                    </span>

                    <span></span>

                </div>

            </article>


            {/* =====================================
                RESULT 02
            ===================================== */}

            <article className="ipgs-proof-card ipgs-proof-card-light">

                <div className="ipgs-proof-card-top">

                    <span className="ipgs-proof-tag">
                        INDIA IT INFRASTRUCTURE
                    </span>

                    <i className="ri-server-line"></i>

                </div>


                <div className="ipgs-proof-card-body">

                    <p>
                        During another major IT infrastructure project,
                        IPGS supplied the technical expertise that
                        helped a major Indian IT firm win a significant
                        piece of business, and that relationship still
                        brings repeat work today.
                    </p>


                    <h3>
                        Technical expertise that continues to
                        create repeat business.
                    </h3>

                </div>


                <div className="ipgs-proof-card-footer">

                    <span>
                        LONG-TERM VALUE
                    </span>

                    <span></span>

                </div>

            </article>

        </div>

    </div>

</section>



        

{/* =====================================================
    CLIENT REVIEWS - FINAL AUTO SLIDER
===================================================== */}

<section className="ipgs-review-slider-section">

    <div className="container">

        {/* =========================================
            HEADER
        ========================================= */}

        <div className="ipgs-review-slider-header">

            <div className="ipgs-review-slider-label">

                <span></span>

                <p>
                    CLIENT REVIEWS
                </p>

            </div>


            <div className="ipgs-review-slider-heading">

                <div>

                    <h2>
                        Real results for
                        <span> real clients</span>
                    </h2>

                </div>


                <div>

                    <p>
                        Nothing speaks to our ability to deliver technical
                        excellence on time more than the kind words of our
                        satisfied, longstanding clients.
                    </p>

                </div>

            </div>

        </div>


        {/* =========================================
            RATING SUMMARY
        ========================================= */}

        <div className="ipgs-review-rating-bar">

            <div className="ipgs-review-rating-main">

                <strong>
                    5.0
                </strong>


                <div>

                    <div className="ipgs-review-rating-stars">

                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>

                    </div>

                    <span>
                        Client satisfaction
                    </span>

                </div>

            </div>



        </div>


        {/* =========================================
            AUTO SLIDER
        ========================================= */}

        <div className="ipgs-review-auto-wrapper">

            <div className="ipgs-review-auto-track">


                {/* =================================
                    ORIGINAL REVIEW GROUP
                ================================= */}

                <div className="ipgs-review-auto-group">


                    {/* REVIEW 1 */}

                    <article className="ipgs-review-slide">

                        <div className="ipgs-review-slide-top">

                            <div className="ipgs-review-profile">

                                <div className="ipgs-review-avatar">
                                    A
                                </div>

                                <div>

                                    <h4>
                                        Alex M
                                    </h4>

                                    <span>
                                        2 weeks ago
                                    </span>

                                </div>

                            </div>


                            <div className="ipgs-review-google-icon">
                                G
                            </div>

                        </div>


                        <div className="ipgs-review-stars">

                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>

                        </div>


                        <p>
                            IPGS delivered exactly what we needed with
                            excellent professionalism. Their team
                            understood the technical requirements quickly
                            and supported the project from planning
                            through delivery without delays.
                        </p>


                        <div className="ipgs-review-verified">

                            <i className="ri-checkbox-circle-fill"></i>

                            <span>
                                Client Review
                            </span>

                        </div>

                    </article>


                    {/* REVIEW 2 */}

                    <article className="ipgs-review-slide">

                        <div className="ipgs-review-slide-top">

                            <div className="ipgs-review-profile">

                                <div className="ipgs-review-avatar">
                                    R
                                </div>

                                <div>

                                    <h4>
                                        Rachel T
                                    </h4>

                                    <span>
                                        1 month ago
                                    </span>

                                </div>

                            </div>


                            <div className="ipgs-review-google-icon">
                                G
                            </div>

                        </div>


                        <div className="ipgs-review-stars">

                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>

                        </div>


                        <p>
                            We were impressed by the responsiveness and
                            technical depth of the IPGS team.
                            Communication was clear, timelines were well
                            managed, and the final outcome gave us
                            confidence to continue working with them.
                        </p>


                        <div className="ipgs-review-verified">

                            <i className="ri-checkbox-circle-fill"></i>

                            <span>
                                Client Review
                            </span>

                        </div>

                    </article>


                    {/* REVIEW 3 */}

                    <article className="ipgs-review-slide">

                        <div className="ipgs-review-slide-top">

                            <div className="ipgs-review-profile">

                                <div className="ipgs-review-avatar">
                                    D
                                </div>

                                <div>

                                    <h4>
                                        Daniel P
                                    </h4>

                                    <span>
                                        3 weeks ago
                                    </span>

                                </div>

                            </div>


                            <div className="ipgs-review-google-icon">
                                G
                            </div>

                        </div>


                        <div className="ipgs-review-stars">

                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>

                        </div>


                        <p>
                            A dependable technology partner with strong
                            delivery capability. The team was proactive,
                            solution-focused, and easy to work with
                            throughout the engagement.
                        </p>


                        <div className="ipgs-review-verified">

                            <i className="ri-checkbox-circle-fill"></i>

                            <span>
                                Client Review
                            </span>

                        </div>

                    </article>

                </div>


                {/* =================================
                    DUPLICATE GROUP FOR LOOP
                ================================= */}

                <div
                    className="ipgs-review-auto-group"
                    aria-hidden="true"
                >


                    {/* REVIEW 1 DUPLICATE */}

                    <article className="ipgs-review-slide">

                        <div className="ipgs-review-slide-top">

                            <div className="ipgs-review-profile">

                                <div className="ipgs-review-avatar">
                                    A
                                </div>

                                <div>

                                    <h4>
                                        Alex M
                                    </h4>

                                    <span>
                                        2 weeks ago
                                    </span>

                                </div>

                            </div>


                            <div className="ipgs-review-google-icon">
                                G
                            </div>

                        </div>


                        <div className="ipgs-review-stars">

                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>

                        </div>


                        <p>
                            IPGS delivered exactly what we needed with
                            excellent professionalism. Their team
                            understood the technical requirements quickly
                            and supported the project from planning
                            through delivery without delays.
                        </p>


                        <div className="ipgs-review-verified">

                            <i className="ri-checkbox-circle-fill"></i>

                            <span>
                                Client Review
                            </span>

                        </div>

                    </article>


                    {/* REVIEW 2 DUPLICATE */}

                    <article className="ipgs-review-slide">

                        <div className="ipgs-review-slide-top">

                            <div className="ipgs-review-profile">

                                <div className="ipgs-review-avatar">
                                    R
                                </div>

                                <div>

                                    <h4>
                                        Rachel T
                                    </h4>

                                    <span>
                                        1 month ago
                                    </span>

                                </div>

                            </div>


                            <div className="ipgs-review-google-icon">
                                G
                            </div>

                        </div>


                        <div className="ipgs-review-stars">

                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>

                        </div>


                        <p>
                            We were impressed by the responsiveness and
                            technical depth of the IPGS team.
                            Communication was clear, timelines were well
                            managed, and the final outcome gave us
                            confidence to continue working with them.
                        </p>


                        <div className="ipgs-review-verified">

                            <i className="ri-checkbox-circle-fill"></i>

                            <span>
                                Client Review
                            </span>

                        </div>

                    </article>


                    {/* REVIEW 3 DUPLICATE */}

                    <article className="ipgs-review-slide">

                        <div className="ipgs-review-slide-top">

                            <div className="ipgs-review-profile">

                                <div className="ipgs-review-avatar">
                                    D
                                </div>

                                <div>

                                    <h4>
                                        Daniel P
                                    </h4>

                                    <span>
                                        3 weeks ago
                                    </span>

                                </div>

                            </div>


                            <div className="ipgs-review-google-icon">
                                G
                            </div>

                        </div>


                        <div className="ipgs-review-stars">

                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>

                        </div>


                        <p>
                            A dependable technology partner with strong
                            delivery capability. The team was proactive,
                            solution-focused, and easy to work with
                            throughout the engagement.
                        </p>


                        <div className="ipgs-review-verified">

                            <i className="ri-checkbox-circle-fill"></i>

                            <span>
                                Client Review
                            </span>

                        </div>

                    </article>

                </div>

            </div>

        </div>




    </div>

</section>


 
 



 {/* =====================================================
    FINAL CTA SECTION
===================================================== */}

<section className="ipgs-final-cta-section">

    <div className="container">

        <div className="ipgs-final-cta-inner">

            {/* =========================================
                LEFT CONTENT
            ========================================= */}

            <div className="ipgs-final-cta-content">

                <div className="ipgs-final-cta-label">

                    <span></span>

                    <p>
                        LET'S WORK TOGETHER
                    </p>

                </div>


                <h2>
                    Digital transformation for your
                    enterprise
                    <span> starts here</span>
                </h2>


                <p>
                    Stop juggling specialists for cybersecurity, cloud,
                    core network, and control systems separately. Start
                    with the network and IT services partner that already
                    has all four covered.
                </p>

            </div>


            {/* =========================================
                RIGHT ACTION
            ========================================= */}

            <div className="ipgs-final-cta-action">

                <a
                    href="#"
                    className="ipgs-final-cta-button"
                >

                    <span>
                        Let's Talk
                    </span>

                    <i className="ri-arrow-right-up-line"></i>

                </a>

            </div>

        </div>

    </div>

</section>





        </>
    );
};
export default Home1;
