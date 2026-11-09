import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import { zoomIn } from '../../utlits/zoomIn'
import Title from '../common/title'

const Icon = () => {
    return (
        <div className="icon">
<svg
    xmlns="http://www.w3.org/2000/svg"
    width="86"
    height="86"
    viewBox="0 0 86 86"
    fill="none"
    role="img"
    aria-label="One technology partner"
>
    <defs>
        <linearGradient
            id="ipgsTechnologyGradient"
            x1="10"
            y1="8"
            x2="76"
            y2="78"
            gradientUnits="userSpaceOnUse"
        >
            <stop stopColor="#1769AA" />
            <stop offset="0.5" stopColor="#21B8D5" />
            <stop offset="1" stopColor="#8ED8F8" />
        </linearGradient>

        <linearGradient
            id="ipgsCoreGradient"
            x1="31"
            y1="29"
            x2="57"
            y2="58"
            gradientUnits="userSpaceOnUse"
        >
            <stop stopColor="#0F5D9D" />
            <stop offset="1" stopColor="#27C2D9" />
        </linearGradient>

        <filter
            id="ipgsTechnologyShadow"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
        >
            <feDropShadow
                dx="0"
                dy="5"
                stdDeviation="5"
                floodColor="#1769AA"
                floodOpacity="0.22"
            />
        </filter>
    </defs>

    {/* Outer background */}
    <rect
        x="2"
        y="2"
        width="82"
        height="82"
        rx="24"
        fill="#F2FAFD"
    />

    <rect
        x="2.5"
        y="2.5"
        width="81"
        height="81"
        rx="23.5"
        stroke="url(#ipgsTechnologyGradient)"
        strokeOpacity="0.25"
    />

    {/* Connection lines */}
    <path
        d="M43 29V18"
        stroke="url(#ipgsTechnologyGradient)"
        strokeWidth="3"
        strokeLinecap="round"
    />

    <path
        d="M43 57V68"
        stroke="url(#ipgsTechnologyGradient)"
        strokeWidth="3"
        strokeLinecap="round"
    />

    <path
        d="M29 43H18"
        stroke="url(#ipgsTechnologyGradient)"
        strokeWidth="3"
        strokeLinecap="round"
    />

    <path
        d="M57 43H68"
        stroke="url(#ipgsTechnologyGradient)"
        strokeWidth="3"
        strokeLinecap="round"
    />

    <path
        d="M33 33L24.5 24.5"
        stroke="url(#ipgsTechnologyGradient)"
        strokeWidth="3"
        strokeLinecap="round"
    />

    <path
        d="M53 33L61.5 24.5"
        stroke="url(#ipgsTechnologyGradient)"
        strokeWidth="3"
        strokeLinecap="round"
    />

    <path
        d="M33 53L24.5 61.5"
        stroke="url(#ipgsTechnologyGradient)"
        strokeWidth="3"
        strokeLinecap="round"
    />

    <path
        d="M53 53L61.5 61.5"
        stroke="url(#ipgsTechnologyGradient)"
        strokeWidth="3"
        strokeLinecap="round"
    />

    {/* Outer service nodes */}
    <circle cx="43" cy="15" r="5" fill="#1769AA" />
    <circle cx="71" cy="43" r="5" fill="#20B8D8" />
    <circle cx="43" cy="71" r="5" fill="#43A5C6" />
    <circle cx="15" cy="43" r="5" fill="#1E739F" />

    <circle cx="22" cy="22" r="4.5" fill="#43A5C6" />
    <circle cx="64" cy="22" r="4.5" fill="#8ED8F8" />
    <circle cx="64" cy="64" r="4.5" fill="#20B8D8" />
    <circle cx="22" cy="64" r="4.5" fill="#1769AA" />

    {/* Central technology hub */}
    <circle
        cx="43"
        cy="43"
        r="16"
        fill="url(#ipgsCoreGradient)"
        filter="url(#ipgsTechnologyShadow)"
    />

    {/* Central chip symbol */}
    <rect
        x="36"
        y="36"
        width="14"
        height="14"
        rx="3"
        stroke="white"
        strokeWidth="2"
    />

    <path
        d="M39 32V36M43 32V36M47 32V36"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
    />

    <path
        d="M39 50V54M43 50V54M47 50V54"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
    />

    <path
        d="M32 39H36M32 43H36M32 47H36"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
    />

    <path
        d="M50 39H54M50 43H54M50 47H54"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
    />

    <circle cx="43" cy="43" r="2.5" fill="white" />
</svg>
        </div>
    )
}

const SecurityOne = () => {
    const securityTypes = [
        {
            id: 1,
            icon: <Icon />,
            security_name: "Connect",
            security_description: "Build reliable, high-performance networks that connect your people, systems and locations."
            
        },
        {
            id: 2,
            icon: <Icon />,
            security_name: "Secure",
            security_description: "Protect critical infrastructure, data and operations through security-led design, monitoring and risk management."
            
        },
        {
            id: 3,
            icon: <Icon />,
            security_name: "Transform",
            security_description: "Modernise technology environments with practical consulting, scalable platforms and expert implementation."
            
        },

    ]
    return (
        <section className="security-area style-2 pt-100 pb-75">
            <div className="container">
                <Title sectionName="ONE TECHNOLOGY PARTNER" sectionTitle="Connect. Secure. Transform. " style={"style-2"}/>
                <div className="row justify-content-center" data-cues="fadeIn" >
                    {
                        securityTypes.map(({ icon, id, link, security_name, security_description }) => {
                            return (
                                <motion.div className="col-lg-4 col-md-6" key={id}
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    variants={zoomIn(id)}
                                    viewport={{ once: true, amount: 0.4 }}
                                >
                                    <div className="single-security-item d-flex align-items-center">
                                        {icon}
                                        <div className="content">
                                            <h3>
                                                <Link className="text-decoration-none" href={link}>{security_name}</Link>
                                            </h3>
                                            <p>{security_description}</p>
                                            
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })
                    }

                </div>
            </div>
            <div className="background-ellipse"></div>
        </section>
    )
}

export default SecurityOne




