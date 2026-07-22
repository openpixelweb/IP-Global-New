import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/common/footer'
import Modal from '../components/common/modal'
import HeaderTwo from '../components/common/headers/headerTwo'

const LayoutTwo = () => {
  return (
    <>
      <Modal />
      <HeaderTwo />
      <Outlet />
      <Footer />
    </>
  )
}

export default LayoutTwo