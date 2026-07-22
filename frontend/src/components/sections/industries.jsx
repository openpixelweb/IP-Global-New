import React from "react";
import { motion } from "framer-motion";
import {
    FiRadio,
    FiDollarSign,
    FiHeart,
    FiShoppingCart,
    FiShield,
    FiBriefcase,
} from "react-icons/fi";

import { zoomIn } from "../../utlits/zoomIn";

const Industries = () => {
    const industries = [
        {
            id: 1,
            icon: <FiRadio />,
            title: "Telecommunications",
            description:
                "Network, infrastructure and managed technology solutions for reliable, high-performance communication environments.",
        },
        {
            id: 2,
            icon: <FiDollarSign />,
            title: "Banking & Finance",
            description:
                "Secure and resilient infrastructure designed to support critical systems, compliance and business continuity.",
        },
        {
            id: 3,
            icon: <FiHeart />,
            title: "Healthcare",
            description:
                "Dependable technology environments that help healthcare organisations protect data and maintain essential operations.",
        },
        {
            id: 4,
            icon: <FiShoppingCart />,
            title: "Retail & E-commerce",
            description:
                "Scalable connectivity, cloud and security solutions that support customers, stores and digital platforms.",
        },
        {
            id: 5,
            icon: <FiShield />,
            title: "Public Sector",
            description:
                "Secure infrastructure and transformation services designed for complex public-sector requirements.",
        },
        {
            id: 6,
            icon: <FiBriefcase />,
            title: "Enterprise",
            description:
                "Integrated IT, cloud, network and managed services that improve productivity and operational performance.",
        },
    ];

    return (
        <section className="industry-experience-area pb-75">
            <div className="container">
                <div className="industry-section-heading text-center">
                    <span className="industry-subtitle">
                        INDUSTRY EXPERIENCE
                    </span>

                    <h2>
                        Technology shaped around
                        <br />
                        the way your industry works.
                    </h2>
                </div>

                <div className="row justify-content-center">
                    {industries.map((industry) => (
                        <motion.div
                            className="col-xl-4 col-lg-4 col-md-6"
                            key={industry.id}
                            initial="offscreen"
                            whileInView="onscreen"
                            variants={zoomIn(industry.id)}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className="single-industry-card">
                                <div className="industry-icon">
                                    {industry.icon}
                                </div>

                                <div className="industry-content">
                                    <h3>{industry.title}</h3>
                                    <p>{industry.description}</p>
                                </div>

                                <span className="industry-number">
                                    {String(industry.id).padStart(2, "0")}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="industry-background-shape"></div>
        </section>
    );
};

export default Industries;