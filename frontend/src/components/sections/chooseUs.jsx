import React from 'react'
import { motion } from "framer-motion"
import choose_imag_1 from "../../assets/images/choose/choose-1.png"
import choose_imag_2 from "../../assets/images/choose/choose-2.jpg"
import { Link } from 'react-router-dom'
import { slideUp } from '../../utlits/slideUp'

const ChooseUs = () => {
    return (
        <div className="choose-area pt-100 pb-75">
            <div className="container">
                <motion.div className="row"
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={slideUp(1)}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <div className="col-lg-6">
                        <div className="choose-content">
                            <div className="title">
                                <span className="d-block">Why Choose Us?</span>
                                <h2>Digital Vigilance: Strengthening Cyber Defenses in the Modern.</h2>
                            </div>
                            <div className="choose-value">
                                <i className="ri-check-double-fill"></i>
                                <span>Vulnerability Assessment and Penetration Testing</span>
                            </div>
                            <div className="choose-value">
                                <i className="ri-check-double-fill"></i>
                                <span>Identity and Access Management (IAM)</span>
                            </div>
                            <div className="choose-value">
                                <i className="ri-check-double-fill"></i>
                                <span>Security Information and Event Management</span>
                            </div>
                            <div className="choose-value">
                                <i className="ri-check-double-fill"></i>
                                <span>Security Auditing and Compliance</span>
                            </div>
                            <div className="choose-value">
                                <i className="ri-check-double-fill"></i>
                                <span>This service involves responding to security</span>
                            </div>
                            <div className="choose-button">
                                <Link className="default-btn text-decoration-none" to="/about">
                                    <i className="ri-arrow-right-line"></i>
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="choose-image">
                            <img src={choose_imag_1} alt="choose-image" />
                            <div className="image-2">
                                <img src={choose_imag_2} alt="choose-image" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default ChooseUs