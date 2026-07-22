import React from 'react'
import { motion } from "framer-motion"
import about_image from "../../../assets/images/about/about-7.png"
import { Link } from 'react-router-dom'
import { slideUp } from '../../../utlits/slideUp'
const AboutFour = () => {
    return (
        <div className="about-area pt-100 pb-75">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <motion.div className="about-image"
                            initial="offscreen"
                            whileInView="onscreen"
                            variants={slideUp(1)}
                            viewport={{ once: true, amount: 0.4 }}
                        >
                            <img src={about_image} alt="about-image" />
                        </motion.div>
                    </div>
                    <div className="col-lg-6">
                        <motion.div className="about-content about-style"
                            initial="offscreen"
                            whileInView="onscreen"
                            variants={slideUp(2)}
                            viewport={{ once: true, amount: 0.4 }}
                        >
                            <div className="title">
                                <span className="d-block">About</span>
                                <h2>The Virtual Realm: A Expansive Guide to Cybersecurity.</h2>
                                <p>Organizations are now compelled to complete comprehensive cybersecurity strategies to safeguard their systems, networks, and data from the relentless onslaught of cyber threats, ensuring the protection of privacy...</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-sm-6">
                                    <div className="about-item">
                                        <div className="point">
                                            4.7+
                                        </div>
                                        <h3>Review Customer</h3>
                                        <p>Organizations are now forced to implement comprehensive cyber security strategies,</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <div className="about-item">
                                        <div className="point">
                                            4K+
                                        </div>
                                        <h3>Project Completed</h3>
                                        <p>Organizations are now forced to implement comprehensive cyber security strategies,</p>
                                    </div>
                                </div>
                            </div>
                            <Link className="demo text-decoration-none" to="/contact">Request A Quote</Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutFour