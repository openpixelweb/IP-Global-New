import React from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo.png"
import Subscribe from './subscribe'
import { slideUp } from '../../utlits/slideUp'
import {
  FiMapPin,
  FiMail,
  FiPhone
} from "react-icons/fi";
const Footer = () => {
  const footerLink = [

    {
      id: 2,
      name: "Solutions",
      links: [
        {
          id: 1,
          link: "#",
          label: "IT Consulting & Transformation"
        },
        {
          id: 2,
          link: "#",
          label: "Network & Cybersecurity"
        },
        {
          id: 3,
          link: "#",
          label: "Cloud Infrastructure"
        },
        {
          id: 4,
          link: "#",
          label: "Data Centre Services"
        },
        {
          id: 5,
          link: "#",
          label: "Telecom Solutions"
        },
        {
          id: 6,
          link: "#",
          label: "Managed IT Services"
        },

      ]
    },
  ]
  return (
    <footer>
      <Subscribe />
      {/* -------- footer info */}
      <div className="footer-area">
        <div className="container">
          <motion.div className="footer-info-area"
            initial="offscreen"
            whileInView="onscreen"
            variants={slideUp(1)}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="row">
              <div className="col-lg-4">
                <div className="single-footer-info ms-0">
                  <Link className="text-decoration-none logo" to="/">
                    <img src={logo} alt="logo" />
                  </Link>
                  <p>IP Global Services delivers IT infrastructure, cloud, network, cybersecurity, telecom and managed technology solutions that help organisations operate securely, efficiently and confidently.</p>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-6 col-md-6">
  <div className="single-footer-info">
    <h3>Contact Us</h3>

    <ul className="footer-contact-list list-unstyled ps-0 mb-0">
      <li>
        <span className="footer-contact-icon">
          <FiMapPin />
        </span>

        <address className="footer-contact-text mb-0">
          1F02 West Wing, Arena Business Centre,
          <br />
          100 Berkshire Place, Wharfdale Road,
          <br />
          Winnersh – RG41 5RD, United Kingdom
        </address>
      </li>

      <li>
        <span className="footer-contact-icon">
          <FiMail />
        </span>

        <div className="footer-contact-text">
          <a
            className="text-decoration-none"
            href="mailto:info@ipgs.net"
          >
            info@ipgs.net
          </a>
        </div>
      </li>

      <li>
        <span className="footer-contact-icon">
          <FiPhone />
        </span>

        <div className="footer-contact-text">
          <a
            className="text-decoration-none"
            href="tel:+441182066657"
          >
            +44 (0) 118 206 6657
          </a>
        </div>
      </li>
    </ul>
  </div>
</div>
                  {
                    footerLink.map(({ id, links, name }) => {
                      return (
                        <div key={id} className="col-lg-4 col-sm-6 col-md-4">
                          <div className="single-footer-info">
                            <h3>{name}</h3>
                            <ul className="list-unstyled ps-0 mb-0">
                              {
                                links.map(({ id, label, link }) => {
                                  return (
                                    <li key={id}>
                                      <Link className="text-decoration-none" to={link}>{label}</Link>
                                    </li>
                                  )
                                })
                              }
                            </ul>
                          </div>
                        </div>
                      )
                    })
                  }

                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* ---------- copy right area */}
      <div className="copyright-area">
        <div className="container">
          <div className="copyright-content text-center" data-cue="slideInUp">
            <p>Copyright © 2026 IP Global Services. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer