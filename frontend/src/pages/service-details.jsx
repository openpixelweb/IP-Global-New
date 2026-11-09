import React from 'react'
import { motion } from "framer-motion"

import ServiceCardFour from '../components/sections/services/serviceCardFour'
import service_bg from "../assets/images/services/services-5.jpg"
import SideBar from '../components/sections/sideBar'
import PageTitle from '../components/common/pageTitle'
import { ScrollRestoration } from 'react-router-dom'
import { zoomIn } from '../utlits/zoomIn'
import { slideUp } from '../utlits/slideUp'
import { servicesDataFour } from '../utlits/fackData/servicesDataFour'

const ServiceDetails = () => {
  return (
    <>
      <PageTitle link={"Services Details"} pageName={"Services Details"} />
      <div className="services-details-area pt-100 pb-75">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <SideBar dActive={false} />
            </div>
            <div className="col-lg-8">
              <motion.div className="services-details-right-sidebar"
                initial="offscreen"
                whileInView="onscreen"
                variants={slideUp(1)}
                viewport={{ once: true, amount: 0 }}
              >
                <h1>Empowering Your Digital Landscape with Our Cybersecurity Services.</h1>
                <p>Cybersecurity is crucial in today's digital age, where many individuals & organizations store a significant amount of sensitive data on computer & other device. This data could be financial information personal information, intellectual property, or other types of data for which unauthorized,</p>
                <p>Cybersecurity measures are put in place to ensure the confidentiality, integrity, and availability of information. These measures involve the use of hardware, software, and protocols to protect data and systems from unauthorized access and attacks.</p>
                <motion.div className="image"
                  initial="offscreen"
                  whileInView="onscreen"
                  variants={zoomIn(1)}
                  viewport={{ once: true, amount: 0 }}
                >
                  <img src={service_bg} alt="services-image" />
                </motion.div>
                <p>Cybersecurity is crucial in today's digital age, where many individuals & organizations store a significant amount of sensitive data on computer & other device. This data could be financial information personal information, intellectual property, or other types of data for which unauthorized,</p>
                <p>Cybersecurity measures are put in place to ensure the confidentiality, integrity, and availability of information. These measures involve the use of hardware, software, and protocols to protect data and systems from unauthorized access and attacks.</p>
                <div className="processing">
                  <h1>Our Processing.</h1>
                  <p>Cybersecurity is crucial in today's digital age, where many individuals & organizations store a significant amount of sensitive data on computer & other device. This data could be financial information personal information, intellectual property, or other types of data for which unauthorized,</p>
                </div>
                <div className="processing-cards">
                  <div className="row">
                    {
                      servicesDataFour.map(({ id, link, service_details, service_name }) => {
                        return (
                          <div key={id} className="col-lg-6 col-md-6">
                            <div className=' service-details'>
                              <ServiceCardFour id={id} link={link} service_details={service_details} service_name={service_name} />
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <ScrollRestoration />
    </>
  )
}

export default ServiceDetails