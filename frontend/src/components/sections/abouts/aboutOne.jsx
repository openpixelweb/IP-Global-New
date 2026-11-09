import React from 'react'
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'
import about_4 from "../../../assets/images/about/about-4.jpg"
import about_5 from "../../../assets/images/about/about-5.jpg"
import Members from '../../../assets/icons/members'
import Technology from '../../../assets/icons/technology'
import { slideUp } from '../../../utlits/slideUp'
const AboutOne = () => {
    return (
        <section className="about-area style-2 pb-75">
            <div className="container">
                <motion.div className="row align-items-center"
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={slideUp()}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <div className="col-lg-6">
                        <div className="about-image style-2">
                            <div className="image-1">
                                <img src={about_4} alt="about-image" />
                            </div>
                            <div className="image-two">
                                <img src={about_5} alt="about-image" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content style-2">
                            <div className="title">
                                <span className="d-block">About Paheli</span>
                                <h2>The Comprehensive Solution for Your Needs.</h2>
                                <p>Organizations are now compelled to complete comprehensive cybersecurity
                                    strategies to safeguard their systems, networks, and data from the relentless
                                    onslaught of cyber threats, ensuring the protection of privacy...</p>
                            </div>
                            <div className="content-card d-flex align-items-center">
                                <div className="icon">
                                    <Members />
                                </div>
                                <div className="content">
                                    <h3>Highly Professional Members</h3>
                                    <p>Organizations are now forced to implement comprehensive cyber security strategies to protect their systems,</p>
                                </div>
                            </div>
                            <div className="content-card d-flex align-items-center">
                                <div className="icon">
                                    <Technology />
                                </div>
                                <div className="content">
                                    <h3>Infrastructure Integration Technology</h3>
                                    <p>Organizations are now forced to implement comprehensive cyber security strategies to protect their systems,</p>
                                </div>
                            </div>
                            <Link className="default-btn text-decoration-none" href="/about">
                                <i className="ri-arrow-right-line"></i>
                                Know More About
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default AboutOne


