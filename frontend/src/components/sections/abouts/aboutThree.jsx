import React from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import about_1 from "../../../assets/images/about/about-1.jpg"
import about_2 from "../../../assets/images/about/about-2.jpg"
import about_3 from "../../../assets/images/about/about-3.jpg"
import { slideUp } from '../../../utlits/slideUp'
import AboutIconOne from '../../../assets/icons/aboutIconOne'
import AboutIconTwo from '../../../assets/icons/aboutIconTwo'
import AboutIconThree from '../../../assets/icons/aboutIconThree'
import AboutIconFour from '../../../assets/icons/aboutIconFour'
const AboutThree = () => {
    const infoList = [
        {
            id: 1,
            title: "Highly Professional Members",
            details: "Organizations are now forced to implement comprehensive cyber security strategies to protect their systems,",
            icon: <AboutIconOne />
        },
        {
            id: 2,
            title: "Infrastructure Integration Technology",
            details: "Organizations are now forced to implement comprehensive cyber security strategies to protect their systems,",
            icon: <AboutIconTwo />
        },
        {
            id: 3,
            title: "Vulnerability Assessment & Penetration Testing",
            details: "Organizations are now forced to implement comprehensive cyber security strategies to protect their systems,",
            icon: <AboutIconThree />
        },
        {
            id: 4,
            title: "Security Information & Event Management",
            details: "Organizations are now forced to implement comprehensive cyber security strategies to protect their systems,",
            icon: <AboutIconFour />
        },

    ]
    return (
        <div className="about-area pb-75">
            <div className="container">
                <div className="about-title-area">
                    <motion.div className="row align-items-center"
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={slideUp(1)}
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        <div className="col-lg-6">
                            <div className="about-title">
                                <span className="d-block">About Paheli</span>
                                <h2>The Virtual Realm: A Expansive Guide to Cybersecurity.</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-title">
                                <p>Organizations are now compelled to complete comprehensive cybersecurity
                                    strategies to safeguard their systems, networks, and data from the relentless
                                    onslaught of cyber threats, ensuring the protection of privacy...</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <motion.div className="row"
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={slideUp(1)}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <div className="col-lg-6">
                        <div className="about-image">
                            <div className="image-1">
                                <img src={about_1} alt="about-image" />
                            </div>
                            <div className="image-2">
                                <img src={about_2} alt="about-image" />
                            </div>
                            <div className="image-3">
                                <img src={about_3} alt="about-image" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            {
                                infoList.map(({ details, icon, id, title }) => {
                                    return (
                                        <div key={id} className="content-card d-flex align-items-center">
                                            <div className="icon">
                                                {icon}
                                            </div>
                                            <div className="content">
                                                <h3>{title}</h3>
                                                <p>{details}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                            <Link className="default-btn text-decoration-none" to="/about">
                                <i className="ri-arrow-right-line"></i>
                                Know More About
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default AboutThree