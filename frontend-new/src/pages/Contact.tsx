import React, { useState } from "react";
import { Link } from 'react-router-dom';
import ConatctImg1 from '../assets/images/contact/image-1.png';
import ContactCallSvg from '../assets/images/contact/call.png';
import ContactMailSvg from '../assets/images/contact/mail.png';
import userSvg from '../assets/images/appointment/user.svg';
import MailSvg from '../assets/images/appointment/mail.svg';
import CallSvg from '../assets/images/appointment/call.svg';
import DateSvg from '../assets/images/appointment/date.svg';
import HomeSvg from '../assets/images/appointment/home.svg';
import DownSvg from '../assets/images/appointment/down.svg';
import BillSvg from '../assets/images/appointment/bill.svg';
import MessageSvg from '../assets/images/appointment/message.svg';
import BtnImage from '../assets/images/hero/btn-image.svg';

const Contact: React.FC = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        property: "",
        number: "",
        message: "",
    });

    const [errors, setErrors] = useState<any>({});

    // Handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    // Validate function
    const validate = () => {
        const newErrors: any = {};

        if (!form.name.trim()) newErrors.name = "Name is required";

        if (!form.email.trim()) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(form.email))
            newErrors.email = "Invalid email format";

        if (!form.phone.trim()) newErrors.phone = "Phone number is required";
        else if (!/^\d{10}$/.test(form.phone))
            newErrors.phone = "Phone must be 10 digits";

        if (!form.date.trim()) newErrors.date = "Select a date";

        if (!form.property.trim()) newErrors.property = "Select property type";

        if (!form.number.trim()) newErrors.number = "Enter number";

        if (!form.message.trim()) newErrors.message = "Message is required";

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    // Submit handler
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!validate()) {
            console.log("Validation Failed");
            return;
        }

        alert("Form submitted successfully!");
        console.log("Submitted Data:", form);
    };
    return (
        <>
            <div className="js-scroll">
                {/* <!-- ========================= [ hero section all separate start ] ========================= --> */}
                <div className="bg-container hero-data-bottom">
                    <div className="services-home-hero contact-det">
                        <div className="title-of-hero">
                            <p>Contact Us</p>
                            <span><Link to="/">Home</Link> - Contact Us</span>
                        </div>
                    </div>
                </div>
                {/* <!-- ========================= [ hero section all separate Exit ] ========================= --> */}
                {/* <!-- ========================= [ Error section all separate Start ] ========================= --> */}
                <div className="about-data">
                    <div className="container">
                        <div className="row contact-sperow">
                            <div className="col-xl-4 col-lg-4 col-md-12">
                                <div className="left-contact">
                                    <p className="contatc-title">Contact Us For Any Queries?</p>
                                    <p className="contact-desc">Our goal is clear: offer the most competitive pricing with
                                        certified electricians.</p>
                                    <div className="contact-data-image">
                                        <img src={ConatctImg1} alt="ConatctImg1" />
                                    </div>
                                    <div className="data-contact-left">
                                        <p className="contatc-name">Contact Us</p>
                                        <div className="name-contact">
                                            <a href="tel:+919876543210" className="contact-anchor">
                                                <img src={ContactCallSvg} alt="ContactCallSvg" />
                                                <p>+1 (234) 567 8899</p>
                                            </a>
                                            <a href="mailto:info@example.com" className="contact-anchor">
                                                <img src={ContactMailSvg} alt="ContactMailSvg" />
                                                <p>hello@sunstar.com</p>
                                            </a>
                                            <a href="https://www.google.com/maps?q=New+York,+USA" target="_blank"
                                                className="contact-anchor">
                                                <img src={ContactCallSvg} alt="ContactCallSvg" />
                                                <p>121 Parkview Square St, NY 10012</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-12">
                                <div className="right-contact">
                                    <p className="contatc-title">How can we help you today?</p>
                                    <p className="right-contact-desc">Let us know who you are and what you’re looking for below.
                                    </p>
                                    <form onSubmit={handleSubmit}>
                                        <div className="contact-rowed row">

                                            <div className="col-xl-6 col-lg-6 col-md-12 input-appoint-beat">
                                                <div className="data-max">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        placeholder="Name"
                                                        autoComplete="name"
                                                        value={form.name}
                                                        onChange={handleChange}
                                                    />
                                                    <div className="property-detail">
                                                        <img src={userSvg} alt="user" />
                                                    </div>
                                                </div>
                                                {errors.name && <p className="error">{errors.name}</p>}
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-12 input-appoint-beat">
                                                <div className="data-max">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        placeholder="Email Address"
                                                        autoComplete="email"
                                                        value={form.email}
                                                        onChange={handleChange}
                                                    />
                                                    <div className="property-detail">
                                                        <img src={MailSvg} alt="user" />
                                                    </div>
                                                </div>
                                                {errors.email && <p className="error">{errors.email}</p>}
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-12 input-appoint-beat">
                                                <div className="data-max">
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        placeholder="Phone number"
                                                        autoComplete="tel"
                                                        value={form.phone}
                                                        onChange={handleChange}
                                                    />
                                                    <div className="property-detail">
                                                        <img src={CallSvg} alt="user" />
                                                    </div>
                                                </div>
                                                {errors.phone && <p className="error">{errors.phone}</p>}
                                            </div>
                                            <div className="col-lg-6 col-md-6 input-appoint-beat">
                                                <div className="data-max name-class">
                                                    <input
                                                        type="text"
                                                        name="date"
                                                        placeholder="Select Date"
                                                        value={form.date}
                                                        onChange={handleChange}
                                                    />
                                                    <div className="property-detail">
                                                        <img src={DateSvg} alt="user" />
                                                    </div>
                                                </div>
                                                {errors.date && <p className="error">{errors.date}</p>}
                                            </div>
                                            <div className="col-lg-6 col-md-6 input-appoint-beat">
                                                <div className="data-max">
                                                    <select className="select-home"
                                                        name="property"
                                                        value={form.property}
                                                        onChange={handleChange}
                                                    >
                                                        <option defaultValue="Property Type">Property Type</option>
                                                        <option defaultValue="Home 1">Home 1</option>
                                                        <option defaultValue="Home 2">Home 2</option>
                                                        <option defaultValue="Home 3">Home 3</option>
                                                    </select>
                                                    <div className="property-detail">
                                                        <img src={HomeSvg} alt="user" />
                                                    </div>
                                                    <div className="down-btn">
                                                        <img src={DownSvg} alt="user" />
                                                    </div>
                                                </div>
                                                {errors.property && <p className="error">{errors.property}</p>}
                                            </div>
                                            <div className="col-lg-6 col-md-6 input-appoint-beat">
                                                <div className="data-max">
                                                    <input
                                                        type="number"
                                                        name="number"
                                                        placeholder="Enter a number"
                                                        value={form.number}
                                                        onChange={handleChange}

                                                    />
                                                    <div className="property-detail">
                                                        <img src={BillSvg} alt="user" />
                                                    </div>
                                                </div>
                                                {errors.number && <p className="error">{errors.number}</p>}
                                            </div>
                                            <div className="col-12 input-appoint-data">
                                                <div className="data-max">
                                                    <textarea
                                                        name="message"
                                                        placeholder="Write Message..."
                                                        value={form.message}
                                                        onChange={handleChange}
                                                        className="textarea-box"
                                                    ></textarea>
                                                    <div className="property-detail">
                                                        <img src={MessageSvg} alt="user" />
                                                    </div>
                                                </div>
                                                {errors.message && <p className="error">{errors.message}</p>}
                                            </div>
                                            <div className="butn-submit-left">
                                                <button type="submit" className="button d-inline-flex mt-0">
                                                    <span className="btn-text">Submit Now</span>
                                                    <img src={BtnImage} alt="image" />
                                                </button>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ========================= [ Error section all separate Exit ] ========================= --> */}
                <div className="bg-container">
                    <div className="main-location">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193597.13828382973!2d-74.2913111195153!3d40.69698241526669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sau!4v1738663272509!5m2!1sen!2sau"
                            width="1880" height="600" allowFullScreen loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact        