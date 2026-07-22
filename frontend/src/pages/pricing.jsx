import React from 'react'
import PricingGrid from '../components/sections/pricingGrid'
import PageTitle from '../components/common/pageTitle'
import { ScrollRestoration } from 'react-router-dom'

const Pricing = () => {
  return (
    <>
      <PageTitle link={"Pricing Plans"} pageName={"Our Pricing Plans"} />
      <PricingGrid />
      <ScrollRestoration />
    </>
  )
}

export default Pricing