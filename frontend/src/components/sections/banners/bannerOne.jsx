import React from "react";
import { motion } from "framer-motion";
import bannerBg from "../../../assets/images/banner-bg.png";
import { slideUp } from "../../../utlits/slideUp";
import { Link } from "react-router-dom";

const BannerOne = () => {
    return (
        <section className="banner-area">
            <div className="container">
                <motion.div
                    className="row align-items-center"
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={slideUp(1)}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <div className="col-lg-6">
                        <div className="banner-content">
                            <div className="title">
                                <h1>
                                    GLOBAL IT, TELECOM &amp; DIGITAL TRANSFORMATION
                                </h1>

                                <p>
                                    IP Global Services helps organisations build secure,
                                    scalable and high-performance technology environments
                                    through expert consulting, infrastructure and managed
                                    services.
                                </p>
                            </div>

                            <div className="banner-button d-flex align-items-center">
                                <Link
                                    className="demo text-decoration-none"
                                    to="/contact"
                                >
                                    Explore Our Solutions
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="shape">
                <div className="shape-2">
                    <img src={bannerBg} alt="" aria-hidden="true" />
                </div>
            </div>
        </section>
    );
};

export default BannerOne;