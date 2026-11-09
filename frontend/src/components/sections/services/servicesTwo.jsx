import React from 'react'
import { motion } from "framer-motion"
import shap_bg from "../../../assets/images/services/services-box-shape.png"

import { Link } from 'react-router-dom'
import { zoomIn } from '../../../utlits/zoomIn'
import Title from '../../common/title'
import { servicesDataTwo } from '../../../utlits/fackData/servicesDataTwo'
import ServiceIconOne from '../../../assets/icons/serviceIconOne'
const ServicesTwo = () => {

  return (
    <div className="services-area style-3 pt-100 pb-75">
      <div className="container">
        <Title sectionName={"Our Services"} sectionTitle={"From Your Cyber Security Services."}/>
        <div className="row">
          {
            servicesDataTwo.map(({ id, link, service_details, service_name, src }) => {
              return (
                <div key={id} className="col-lg-4 col-sm-6">
                  <motion.div className="single-security-services text-center"
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={zoomIn(id)}
                    viewport={{ once: true, amount: 0.4 }}
                  >
                    <div className="icon">
                      {src()}
                    </div>
                    <span className="d-block">{service_name}</span>
                    <h3>
                      <Link className="text-decoration-none" to={link}>{service_details}</Link>
                    </h3>
                  </motion.div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="services-box-shape" data-cue="slideInUp">
        <img src={shap_bg} alt="shape" />
      </div>
    </div>
  )
}

export default ServicesTwo