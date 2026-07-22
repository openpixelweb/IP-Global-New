import React from "react";
import { Link } from "react-router-dom";

const Subscribe = () => {
    return (
        <section className="final-contact-cta-area">
            <div className="container">
                <div className="final-contact-cta">
                    <div className="final-contact-pattern">
                        <span className="pattern-line pattern-line-one"></span>
                        <span className="pattern-line pattern-line-two"></span>
                        <span className="pattern-circle pattern-circle-one"></span>
                        <span className="pattern-circle pattern-circle-two"></span>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <div className="final-contact-content">
                                <span className="final-contact-caption">
                                    LET&apos;S MOVE FORWARD
                                </span>

                                <h2>
                                    Ready to simplify your
                                    <br />
                                    technology journey?
                                </h2>

                                <p>
                                    Talk to the IP Global Services team about your
                                    infrastructure, cloud, network, cybersecurity or
                                    digital transformation requirements.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="final-contact-actions">
                                <Link
                                    to="/contact"
                                    className="final-contact-primary-button text-decoration-none"
                                >
                                    Talk to an Expert
                                </Link>

                                <Link
                                    to="/contact"
                                    className="final-contact-secondary-link text-decoration-none"
                                >
                                    Contact IPGS
                                    <span aria-hidden="true">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;