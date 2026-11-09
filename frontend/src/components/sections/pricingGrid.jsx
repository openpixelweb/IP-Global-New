import React from 'react'
import { motion } from "framer-motion"
import { PricingData } from '../../utlits/fackData/pricingData'
import { Link } from 'react-router-dom'
import { slideUp } from '../../utlits/slideUp'
import Title from '../common/title'

const PricingGrid = () => {
  return (
    <div className="pricing-area pt-100 pb-75">
      <div className="container">
        <Title sectionName={"Awesome Pricing Plans"} sectionTitle={"Uncovering the Ideal Plan for Your Needs."}/>

        <motion.div className="row justify-content-center"
          initial="offscreen"
          whileInView="onscreen"
          variants={slideUp(1)}
          viewport={{ once: true, amount: 0.4 }}
        >
          {
            PricingData.map(({ id, features, link, plan_details, plan_name, price, time }) => {
              return (
                <div key={id} className="col-lg-4 col-md-6">
                  <div className="single-pricing-card">
                    <h3>{plan_name}</h3>
                    <p>{plan_details}</p>
                    <h1>${price} <sub>/ {time}</sub></h1>
                    <ul className="list-unstyled ps-0 list">
                      {
                        features.map((feature, index) => {
                          return (
                            <li key={index} className="d-flex align-items-center">
                              <i className="ri-check-double-fill"></i>
                              {feature}
                            </li>
                          )
                        })
                      }
                    </ul>
                    <Link className="demo text-decoration-none" to={link}>
                      <i className="ri-arrow-right-line"></i>
                      Get Started Today
                    </Link>
                  </div>
                </div>
              )
            })
          }
        </motion.div>
      </div>
    </div>
  )
}

export default PricingGrid