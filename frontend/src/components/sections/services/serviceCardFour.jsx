import React from 'react'
import { Link } from 'react-router-dom'

const ServiceCardFour = ({ id, link, service_name, service_details, }) => {
    return (
        <div className="single-security-info">
            <div className="date">
                {id}
            </div>
            <h3>
                <Link className="text-decoration-none" to={link}>{service_name}</Link>
            </h3>
            <p>{service_details}</p>
            <Link className="read-more text-decoration-none" to={link}>
                Read More
                <i className="ri-arrow-right-line"></i>
            </Link>
        </div>
    )
}

export default ServiceCardFour