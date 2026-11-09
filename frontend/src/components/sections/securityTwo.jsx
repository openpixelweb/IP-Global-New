import React from 'react'
import {motion} from "framer-motion"
import Memory from '../../assets/icons/memory'
import Lock from '../../assets/icons/lock'
import Security from '../../assets/icons/security'
import { Link } from 'react-router-dom'
import { zoomIn } from '../../utlits/zoomIn'
import Title from '../common/title'

const SecurityTwo = () => {
    const securityTypes = [
        {
            id: 1,
            icon: <Memory />,
            security_name: "Security Management",
            details: "These services collectively help organization establish a comprehensive cybersecurity framework and protect their digital.",
            link: "/service-details"
        },
        {
            id: 2,
            icon: <Lock />,
            security_name: "Data Privacy",
            details: "These services collectively help organization establish a comprehensive cybersecurity framework and protect their digital.",
            link: "/service-details"
        },
        {
            id: 3,
            icon: <Security />,
            security_name: "Network Security",
            details: "These services collectively help organization establish a comprehensive cybersecurity framework and protect their digital.",
            link: "/service-details"
        },

    ]
    return (
        <section className="security-area pt-100 pb-75">
            <div className="container">
                <Title sectionName={"What We Do"} sectionTitle={"Introducing Our Cyber Security Services."}/>

                <div className="row justify-content-center" data-cues="fadeIn">
                    {
                        securityTypes.map(({ id, details, icon, link, security_name }) => {
                            return (
                                <motion.div key={id} className="col-lg-4 col-sm-6"
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    variants={zoomIn(id)}
                                    viewport={{ once: true, amount: 0.4 }}
                                >
                                    <div className="single-security-card text-center">
                                        <div className="icon">
                                            {icon}
                                        </div>
                                        <h3>{security_name}</h3>
                                        <p>{details}</p>
                                        <Link className="read-more text-decoration-none" to={link}>
                                            Read More
                                            <i className="ri-arrow-right-line"></i>
                                        </Link>
                                    </div>
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default SecurityTwo