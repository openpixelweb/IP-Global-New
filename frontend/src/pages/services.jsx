import React from 'react'
import PageTitle from '../components/common/pageTitle'
import ServicesTwo from '../components/sections/services/servicesTwo'
import ServicesFour from '../components/sections/services/servicesFour'
import TestimonialSlider from '../components/sections/testimonialSlider'
import { ScrollRestoration } from 'react-router-dom'

const Services = () => {
  return (
    <>
      <PageTitle link={"Services"} pageName={"Our Services"}/>
      <ServicesFour style={"services-style"}/>
      <ServicesTwo/>
      <TestimonialSlider/>
      <ScrollRestoration />
    </>
  )
}

export default Services