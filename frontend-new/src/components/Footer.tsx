import { Link } from "react-router-dom";

import HeaderLogo from "../assets/images/logo.png";


const Footer = () => {

    return (

        <footer className="ipgs-new-footer">

            <div className="container">


                {/* =====================================================
                    MAIN FOOTER
                ===================================================== */}

                <div className="ipgs-new-footer-main">


                    {/* =================================================
                        BRAND COLUMN
                    ================================================= */}

                    <div className="ipgs-new-footer-brand">

                        <Link
                            to="/"
                            className="ipgs-new-footer-logo"
                        >

                            <img
                                src={HeaderLogo}
                                alt="IP Global Services"
                            />

                        </Link>


                        <p className="ipgs-new-footer-description">
                            Secure, scalable technology solutions across
                            IT, cloud, cybersecurity, data centres and
                            telecom.
                        </p>


                        {/* SOCIAL */}

                        <div className="ipgs-new-footer-social-title">
                            Follow Us
                        </div>


                        <div className="ipgs-new-footer-socials">

                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                            >
                                <i className="ri-linkedin-fill"></i>
                            </a>


                            <a
                                href="https://www.youtube.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="YouTube"
                            >
                                <i className="ri-youtube-fill"></i>
                            </a>


                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Facebook"
                            >
                                <i className="ri-facebook-fill"></i>
                            </a>


                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Instagram"
                            >
                                <i className="ri-instagram-line"></i>
                            </a>

                        </div>

                    </div>



                    {/* =================================================
                        COMPANY
                    ================================================= */}

                    <div className="ipgs-new-footer-column">

                        <h4>
                            Company
                        </h4>


                        <ul>

                            <li>
                                <Link to="/about">
                                    About IPGS
                                </Link>
                            </li>


                            <li>
                                <Link to="/about/how-we-work">
                                    How We Work
                                </Link>
                            </li>


                            <li>
                                <Link to="/about/our-team">
                                    Our Team
                                </Link>
                            </li>


                            <li>
                                <Link to="/about/culture">
                                    Culture
                                </Link>
                            </li>


                            <li>
                                <Link to="/about/careers">
                                    Careers
                                </Link>
                            </li>


                            <li>
                                <Link to="/about/ipgs-academy">
                                    IPGS Academy
                                </Link>
                            </li>

                        </ul>

                    </div>



                    {/* =================================================
                        SERVICES
                    ================================================= */}

                    <div className="ipgs-new-footer-column ipgs-new-footer-services">

                        <h4>
                            Services
                        </h4>


                        <ul>

                            <li>
                                <Link to="/operational-technology">
                                    Operational Technology
                                </Link>
                            </li>


                            <li>
                                <Link to="/telecom-network-services">
                                    Telecom Network Services
                                </Link>
                            </li>


                            <li>
                                <Link to="/enterprise-it-services">
                                    Enterprise IT Services
                                </Link>
                            </li>


                            <li>
                                <Link to="/enterprise-it-services/cybersecurity">
                                    Cybersecurity
                                </Link>
                            </li>


                            <li>
                                <Link to="/enterprise-it-services/infrastructure-cloud">
                                    Infrastructure & Cloud
                                </Link>
                            </li>


                            <li>
                                <Link to="/enterprise-it-services/data-centre-services">
                                    Data Centre Services
                                </Link>
                            </li>

                        </ul>

                    </div>



                    {/* =================================================
                        CONTACT
                    ================================================= */}

                    <div className="ipgs-new-footer-contact">

                        <h4>
                            Contact
                        </h4>


                        {/* EMAIL */}

                        <a
                            href="mailto:info@ipgs.net"
                            className="ipgs-new-footer-contact-item"
                        >

                            <span className="ipgs-new-footer-contact-icon">

                                <i className="ri-mail-line"></i>

                            </span>


                            <span className="ipgs-new-footer-contact-text">

                                <small>
                                    Email
                                </small>

                                <strong>
                                    info@ipgs.net
                                </strong>

                            </span>

                        </a>


                        {/* PHONE */}

                        <a
                            href="tel:+441182066657"
                            className="ipgs-new-footer-contact-item"
                        >

                            <span className="ipgs-new-footer-contact-icon">

                                <i className="ri-phone-line"></i>

                            </span>


                            <span className="ipgs-new-footer-contact-text">

                                <small>
                                    Call us
                                </small>

                                <strong>
                                    +44 (0) 118 206 6657
                                </strong>

                            </span>

                        </a>


                        {/* LOCATIONS */}

                        <div className="ipgs-new-footer-contact-item">

                            <span className="ipgs-new-footer-contact-icon">

                                <i className="ri-map-pin-line"></i>

                            </span>


                            <span className="ipgs-new-footer-contact-text">

                                <small>
                                    Global presence
                                </small>

                                <strong>
                                    United Kingdom · India · UAE ·
                                    Poland · Australia
                                </strong>

                            </span>

                        </div>


                        {/* CONTACT BUTTON */}

                        <Link
                            to="/contact"
                            className="ipgs-new-footer-contact-btn"
                        >

                            <span>
                                Contact IPGS
                            </span>

                            <i className="ri-arrow-right-up-line"></i>

                        </Link>

                    </div>

                </div>



                {/* =====================================================
                    BOTTOM
                ===================================================== */}

                <div className="ipgs-new-footer-bottom">

                    <p>
                        © 2026{" "}

                        <Link to="/">
                            IP Global Services
                        </Link>

                        . All Rights Reserved.
                    </p>


                    <div className="ipgs-new-footer-bottom-right">

                        <span>
                            Technical excellence, delivered.
                        </span>

                    </div>

                </div>

            </div>


            {/* =====================================================
                DECORATION
            ===================================================== */}

            <div className="ipgs-new-footer-decoration"></div>

        </footer>

    );

};


export default Footer;