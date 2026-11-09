import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import Footer from '../components/common/footer'
import Modal from '../components/common/modal'
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeaderOne from '../components/common/headers/headerOne';

const RootLayout = () => {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 600,
            once:true
            // easing: 'ease-i',
            // delay: 100,
        });
    }, [])
    return (
        <>
            <Modal />
            <HeaderOne/>
            <Outlet />
            <Footer />

        </>
    )
}

export default RootLayout