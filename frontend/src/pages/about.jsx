import React from 'react'
import PageTitle from '../components/common/pageTitle'
import AboutFour from '../components/sections/abouts/aboutFour'
import ServicesThree from '../components/sections/services/servicesThree'
import { ScrollRestoration } from 'react-router-dom'

const About = () => {
  return (
    <>
      <PageTitle link={"About"} pageName={"About Us"} />
      <AboutFour/>
      <ServicesThree/>
      <ScrollRestoration />
    </>
  )
}

export default About