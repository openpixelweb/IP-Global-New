import React from 'react'
import { motion } from "framer-motion"
import choose_bg from "../../assets/images/choose/choose-3.png"
import choose_text_logo from "../../assets/images/choose/choose-logo-text.png"
import choose_text_icon from "../../assets/images/choose/choose-logo-icon.jpg"
import top_shap from "../../assets/images/choose/choose-top-shape.png"
import bottom_shap from "../../assets/images/choose/choose-bottom-shape.png"
import { slideUp } from '../../utlits/slideUp'
import { Link } from 'react-router-dom'

const ChooseUsTwo = () => {
    return (
        <section className="choose-area style-3 pt-100 pb-75">
            <div className="container">
                <motion.div className="row"
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={slideUp()}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <div className="col-lg-6">
                        <div className="choose-image style-3">
                            <img src={choose_bg} alt="choose-image" />
                            <div className="logo">
                                <img src={choose_text_logo} alt="text" />
                                <div className="icon">
                                    <img src={choose_text_icon} alt="logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="choose-content style-3">
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
                </motion.div>
            </div>
            <div className="top-shape">
                <img src={top_shap} alt="shape" />
            </div>
            <div className="bottom-shape">
                <img src={bottom_shap} alt="shape" />
            </div>
        </section>
    )
}

export default ChooseUsTwo