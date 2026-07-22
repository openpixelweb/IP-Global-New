import React from 'react'
import {motion} from "framer-motion"
import PageTitle from '../components/common/pageTitle'
import { testimonialData } from '../utlits/fackData/testimonialData'
import TestimonialCard from '../components/common/testimonialCard'
import { ScrollRestoration } from 'react-router-dom'
import { zoomIn } from '../utlits/zoomIn'
import Title from '../components/common/title'

const Testimonials = () => {
  return (
    <>
      <PageTitle pageName={"Our Testimonials"} link="Testimonials" />
      <div className="testimonial-area pt-100 pb-75">
        <div className="container">
          <Title sectionName={"Testimonial"} sectionTitle={"Our Customer Thought About Us."}/>

          <div className="row" data-cues="fadeIn">
            {
              testimonialData.map(({ id, name, position, rating, review, src }) => {
                return (
                  <motion.div key={id} className="col-lg-6"
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={zoomIn(id)}
                    viewport={{ once: true, amount: 0.1 }}
                  >
                    <TestimonialCard name={name} position={position} rating={rating} review={review} src={src} />
                  </motion.div>
                )
              })
            }
          </div>
        </div>
      </div>
      <ScrollRestoration />
    </>
  )
}

export default Testimonials