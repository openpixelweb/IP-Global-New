
import { Link } from "react-router-dom";

// import AboutImg3 from "../assets/images/about/image-3.png";

import AboutImage from "../assets/images/abt-01.jpg";

const AboutUs: React.FC = () => {

    return (
        <>
            <div className="js-scroll">
                {/* <!-- ========================= [ hero section all separate start ] ========================= --> */}
<div className="hero-data-bottom">

    <div className="services-home-hero desck-about">

        <div className="title-of-hero">

            <p>
                Technical excellence, built for
                <br />
                mission-critical infrastructure
            </p>

            <span>
                <Link to="/">Home</Link> - About Us
            </span>

        </div>

    </div>

</div>


<section className="ipgs-about-story-section">

    <div className="container">

        <div className="ipgs-about-story-grid">

            {/* LEFT IMAGE */}

            <div className="ipgs-about-story-image">

                <img
    src={AboutImage}
    alt="IPGS team and company journey"
/>

            </div>


            {/* RIGHT CONTENT */}

            <div className="ipgs-about-story-content">

                <div className="ipgs-about-story-label">

                    <span></span>

                    OUR STORY

                </div>


                <h2>
                    The catch-22 that started our journey
                </h2>


                <p>
                    Every company like ours wrestles with the same catch-22.
                    You need clients before you can prove your talent, and
                    you need talent before you can win clients.
                </p>


                <p>
                    Before IPGS had a single account, our founder was
                    personally knocking on doors to find people willing to
                    learn a trade from nothing. That instinct still shapes
                    how the company hires and grows today.
                </p>

            </div>

        </div>

    </div>

</section>





<section className="ipgs-about-mission-section">

    <div className="container">

        <div className="ipgs-about-mission-head">

            <div className="ipgs-about-mission-label">
                <span></span>
                WHAT DRIVES US
            </div>

            <h2>
                Mission-critical infrastructure delivered by people who take it personally
            </h2>

            <p>
                Technical excellence is more than a claim on a website. IPGS treats every rail
                signalling network, mobile core, and corporate firewall as mission-critical,
                because for the client on the other end of it, it is. That standard gets built
                into hiring from day one, and every specialist offers genuine depth in their
                respective discipline. That’s the secret to our global success.
            </p>

        </div>


        <div className="ipgs-about-mission-grid">

            {/* BLOCK 1 */}

            <div className="ipgs-about-mission-card">

                <div className="ipgs-about-mission-card-icon">
                    <i className="ri-stack-line"></i>
                </div>

                <h3>
                    Mission-critical infrastructure, delivered on an end-to-end basis
                </h3>

                <p>
                    One team carries a project from concept to completion. Our multidisciplinary
                    team offers a complete solution, so you’ll never have to look elsewhere
                    for assistance.
                </p>

            </div>


            {/* BLOCK 2 */}

            <div className="ipgs-about-mission-card">

                <div className="ipgs-about-mission-card-icon">
                    <i className="ri-node-tree"></i>
                </div>

                <h3>
                    Edge-to-core delivery offers peace of mind
                </h3>

                <p>
                    Edge-to-core delivery means nobody hands a project off to a different team
                    once the hard part starts. The engineer who scoped it is still there when
                    it goes live. That’s why our clients trust us with their most critical
                    infrastructure projects.
                </p>

            </div>

        </div>

    </div>

</section>



<section className="ipgs-about-growth-section">

    <div className="container">

        {/* =========================================
            SECTION HEADER
        ========================================= */}

        <div className="ipgs-about-growth-head">

            <div className="ipgs-about-growth-label">
                <span></span>
                OUR GROWTH
            </div>

            <h2>
                From a modest beginning in 2016 to a global footprint
            </h2>

            <p>
                Our revenue sat at a modest €8,000 in 2016, and most of the work
                came from word of mouth. What mattered more was that IPGS had
                already become a name people trusted enough to call when
                something went wrong.
            </p>

        </div>


        {/* =========================================
            TIMELINE
        ========================================= */}

        <div className="ipgs-about-growth-timeline">

            {/* ITEM 1 */}

            <div className="ipgs-about-growth-item">

                <div className="ipgs-about-growth-dot"></div>

                <span className="ipgs-about-growth-year">
                    2016
                </span>

                <strong>
                    €8,000
                </strong>

                <p>
                    A modest beginning built primarily through word of mouth
                    and trusted relationships.
                </p>

            </div>


            {/* ITEM 2 */}

            <div className="ipgs-about-growth-item">

                <div className="ipgs-about-growth-dot"></div>

                <span className="ipgs-about-growth-year">
                    2018
                </span>

                <strong>
                    ~£300,000
                </strong>

                <p>
                    Growth accelerated as more organisations trusted IPGS
                    with increasingly complex technical requirements.
                </p>

            </div>


            {/* ITEM 3 */}

            <div className="ipgs-about-growth-item">

                <div className="ipgs-about-growth-dot"></div>

                <span className="ipgs-about-growth-year">
                    2026 / 27
                </span>

                <strong>
                    ~£20 Million
                </strong>

                <p>
                    Heading toward a global-scale operation built on technical
                    expertise, long-term relationships and dependable delivery.
                </p>

            </div>

        </div>


        {/* =========================================
            SUPPORTING CONTENT
        ========================================= */}

        <div className="ipgs-about-growth-bottom">

            <div className="ipgs-about-growth-bottom-line"></div>

            <p>
                While we don’t like to boast about our annual revenues, we point
                to them — and the exceptional growth we’ve delivered in such a
                short time — as evidence of our ability to get the job done.
            </p>

        </div>

    </div>

</section>




<section className="ipgs-about-family-section">

    <div className="container">

        {/* =========================================
            SECTION HEADER
        ========================================= */}

        <div className="ipgs-about-family-head">

            <div className="ipgs-about-family-label">
                <span></span>
                DISCOVER MORE
            </div>

            <h2>
                Learn more about the IPGS family
            </h2>

            <p>
                Take a deep dive into the culture and approach that makes IPGS
                stand out in an increasingly crowded marketplace. And meet some
                of the people making the magic happen on a daily basis.
            </p>

        </div>


        {/* =========================================
            FAMILY GRID
        ========================================= */}

        <div className="ipgs-about-family-grid">


            {/* HOW WE WORK */}

            <Link
                to="/about/how-we-work"
                className="ipgs-about-family-card"
            >

                <div className="ipgs-about-family-icon">
                    <i className="ri-settings-3-line"></i>
                </div>

                <h3>
                    How We Work
                </h3>

                <p>
                    Discover the collaborative, accountable approach that keeps
                    IPGS projects moving from first conversation to successful
                    delivery.
                </p>

                <div className="ipgs-about-family-link">
                    Learn More
                    <i className="ri-arrow-right-line"></i>
                </div>

            </Link>


            {/* OUR TEAM */}

            <Link
                to="/about/our-team"
                className="ipgs-about-family-card"
            >

                <div className="ipgs-about-family-icon">
                    <i className="ri-team-line"></i>
                </div>

                <h3>
                    Our Team
                </h3>

                <p>
                    Meet the specialists whose technical depth, experience and
                    commitment drive IPGS projects around the world.
                </p>

                <div className="ipgs-about-family-link">
                    Learn More
                    <i className="ri-arrow-right-line"></i>
                </div>

            </Link>


            {/* CULTURE */}

            <Link
                to="/about/culture"
                className="ipgs-about-family-card"
            >

                <div className="ipgs-about-family-icon">
                    <i className="ri-heart-3-line"></i>
                </div>

                <h3>
                    Culture
                </h3>

                <p>
                    Explore the values, mindset and working environment that
                    encourage people at IPGS to grow and do their best work.
                </p>

                <div className="ipgs-about-family-link">
                    Learn More
                    <i className="ri-arrow-right-line"></i>
                </div>

            </Link>


            {/* CAREERS */}

            <Link
                to="/about/careers"
                className="ipgs-about-family-card"
            >

                <div className="ipgs-about-family-icon">
                    <i className="ri-briefcase-4-line"></i>
                </div>

                <h3>
                    Careers
                </h3>

                <p>
                    Find opportunities to build your career with a growing
                    international technology team focused on meaningful work.
                </p>

                <div className="ipgs-about-family-link">
                    Learn More
                    <i className="ri-arrow-right-line"></i>
                </div>

            </Link>


            {/* IPGS ACADEMY */}

            <Link
                to="/about/ipgs-academy"
                className="ipgs-about-family-card"
            >

                <div className="ipgs-about-family-icon">
                    <i className="ri-graduation-cap-line"></i>
                </div>

                <h3>
                    IPGS Academy
                </h3>

                <p>
                    Learn how IPGS develops new technical talent and gives
                    people the skills and support needed to build lasting careers.
                </p>

                <div className="ipgs-about-family-link">
                    Learn More
                    <i className="ri-arrow-right-line"></i>
                </div>

            </Link>


            {/* CSR */}

            <Link
                to="/about/csr"
                className="ipgs-about-family-card"
            >

                <div className="ipgs-about-family-icon">
                    <i className="ri-hand-heart-line"></i>
                </div>

                <h3>
                    CSR
                </h3>

                <p>
                    See how IPGS supports people, communities and initiatives
                    beyond day-to-day technology delivery.
                </p>

                <div className="ipgs-about-family-link">
                    Learn More
                    <i className="ri-arrow-right-line"></i>
                </div>

            </Link>

        </div>

    </div>

</section>



<section className="ipgs-about-final-cta">

    <div className="container">

        <div className="ipgs-about-final-cta-inner">

            <div className="ipgs-about-final-cta-content">

                <div className="ipgs-about-final-cta-label">
                    LET'S TALK
                </div>

                <h2>
                    Let’s talk about your mission-critical
                    infrastructure project
                </h2>

                <p>
                    Get in touch and find out what mission-critical
                    infrastructure looks like on your project.
                    Your journey with IPGS starts with a friendly conversation.
                </p>

            </div>


            <div className="ipgs-about-final-cta-action">

                <Link
                    to="/contact"
                    className="ipgs-about-final-cta-button"
                >
                    Get In Touch

                    <i className="ri-arrow-right-up-line"></i>
                </Link>

            </div>

        </div>

    </div>

</section>


 
                {/* <!-- ========================= [ Testimonial Section Exit ] ========================= --> */}
            </div>
        </>
    )
}

export default AboutUs