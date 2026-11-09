import React from 'react'
import PageTitle from '../components/common/pageTitle'
import ContactInfo from '../components/sections/contactInfo'
import ContactForm from '../components/sections/contactForm'
import { ScrollRestoration } from 'react-router-dom'

const Contact = () => {
    return (
        <>
            <PageTitle pageName="Contact Us" link={"Contact"} />
            <ContactInfo />
            <ContactForm />
            <ScrollRestoration />
        </>
    )
}

export default Contact