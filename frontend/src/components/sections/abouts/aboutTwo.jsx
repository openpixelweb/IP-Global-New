import React from 'react'
import { motion } from "framer-motion"
import about_bg from "../../../assets/images/about/about-6.png"
import { slideUp } from '../../../utlits/slideUp'
const AboutTwo = () => {
  return (
    <div className="about-area pb-75">
      <div className="container">
        <div className="row align-items-center" data-cue="slideInUp">
          <div className="col-lg-8">
            <motion.div className="about-content style-3"
              initial="offscreen"
              whileInView="onscreen"
              variants={slideUp(1)}
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="title">
                <span className="d-block">About Cyber</span>
                <h2>Unveiling the Essence of Pure Visibility.</h2>
                <p>Cybersecurity is crucial in today's digital age, where many individuals and organizations store a significant amount of sensitive data on computers and other devices. This data could be financial information, personal information,</p>
              </div>
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <div className="content-item">
                    <h3>Our Mission & Vision</h3>
                    <p>We pride ourselves on working to an extent of your marketing team and tailored to your industry, and security goals.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="content-item">
                    <h3>Our Purpose</h3>
                    <p>We pride ourselves on working to an extent of your marketing team and tailored to your industry, and security goals.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-4">
            <motion.div className="about-image style-3"
              initial="offscreen"
              whileInView="onscreen"
              variants={slideUp(2)}
              viewport={{ once: true, amount: 0.4 }}
            >
              <img src={about_bg} alt="about-image" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutTwo