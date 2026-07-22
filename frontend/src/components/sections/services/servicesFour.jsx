import React from 'react'
import { motion } from "framer-motion"
import ServiceCardFour from './serviceCardFour'
import { servicesDataFour } from '../../../utlits/fackData/servicesDataFour'
import { zoomIn } from '../../../utlits/zoomIn'

const ServicesFour = ({ style }) => {
  return (
    <div className={`security-area ${style}`}>
      <div className="container-fluid">
        <div className="row">
          {
            servicesDataFour.map(({ id, link, service_details, service_name }) => {
              return (
                <motion.div key={id} className="col-lg-3 col-sm-6"
                  initial="offscreen"
                  whileInView="onscreen"
                  variants={zoomIn(id)}
                  viewport={{ once: true, amount: 0.4 }}
                >
                  <ServiceCardFour  id={id} link={link} service_details={service_details} service_name={service_name} />
                </motion.div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ServicesFour