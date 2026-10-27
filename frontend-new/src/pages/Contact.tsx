import React, { useState } from "react";
import { Link } from "react-router-dom";


const Contact: React.FC = () => {

    const [form, setForm] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        location: "",
        message: "",
    });


    const [errors, setErrors] = useState<Record<string, string>>({});

    const [submitted, setSubmitted] = useState(false);


    /* =====================================================
       FORM CHANGE
    ===================================================== */

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement |
            HTMLSelectElement |
            HTMLTextAreaElement
        >
    ) => {

        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));

        setSubmitted(false);
    };


    /* =====================================================
       VALIDATION
    ===================================================== */

    const validate = () => {

        const newErrors: Record<string, string> = {};

        if (!form.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!form.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!form.message.trim()) {
            newErrors.message = "Please enter your project details";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };


    /* =====================================================
       SUBMIT
    ===================================================== */

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault();

        if (!validate()) {
            return;
        }

        console.log("IPGS Contact Form:", form);

        setSubmitted(true);

        /*
            Connect your backend / EmailJS / API here.
        */
    };


    return (
        <>

            <div className="js-scroll">


                {/* =====================================================
                    HERO
                ===================================================== */}

                <div className="hero-data-bottom">

                    <div className="services-home-hero desck-about">

                        <div className="title-of-hero">

                            <p>
                                Contact IP Global Services
                                <br />
                                and talk to the team that
                                <br />
                                keeps your network running
                            </p>

                            <span>
                                <Link to="/">Home</Link>
                                {" "} - Contact Us
                            </span>

                        </div>

                    </div>

                </div>


                {/* =====================================================
                    HERO INTRO
                ===================================================== */}

                <section className="ipgs-contact-doc-intro">

                    <div className="container">

                        <div className="ipgs-contact-doc-intro-inner">

                            <div className="ipgs-contact-doc-label">
                                <span></span>
                                CONTACT IPGS
                            </div>


                            <div className="ipgs-contact-doc-intro-grid">

                                <h1>
                                    Tell us what you need,
                                    <span> wherever you are.</span>
                                </h1>


                                <div className="ipgs-contact-doc-intro-right">

                                    <p>
                                        We have offices in five countries, and someone
                                        from the IPGS family will reach out as soon
                                        as possible.
                                    </p>


                                    <a
                                        href="#ipgs-contact-form"
                                        className="ipgs-contact-doc-primary-button"
                                    >
                                        Send us a message

                                        <i className="ri-arrow-down-line"></i>
                                    </a>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    OFFICES
                ===================================================== */}

                <section className="ipgs-contact-offices-section">

                    <div className="container">


                        {/* HEADER */}

                        <div className="ipgs-contact-offices-head">

                            <div className="ipgs-contact-doc-label">
                                <span></span>
                                OUR LOCATIONS
                            </div>

                            <h2>
                                Find your nearest IPGS office
                            </h2>

                            <p>
                                We have a global footprint, although our main
                                bases are in the UK and India.
                            </p>

                        </div>


                        {/* =============================================
                            FEATURED UK OFFICE
                        ============================================= */}

                        <div className="ipgs-contact-featured-office">

                            <div className="ipgs-contact-office-number">
                                01
                            </div>


                            <div className="ipgs-contact-featured-main">

                                <div className="ipgs-contact-office-country">
                                    UNITED KINGDOM
                                </div>

                                <h3>
                                    IP Global Services
                                </h3>

                                <p className="ipgs-contact-office-description">
                                    Our UK headquarters and the first call for
                                    clients across the UK.
                                </p>


                                <div className="ipgs-contact-office-address">

                                    <i className="ri-map-pin-2-line"></i>

                                    <p>
                                        1F02 West Wing, Arena Business Centre,
                                        100 Berkshire Place, Wharfdale Road,
                                        Winnersh – RG41 5RD, United Kingdom
                                    </p>

                                </div>

                            </div>


                            <div className="ipgs-contact-featured-details">

                                <a href="mailto:info@ipgs.net">

                                    <i className="ri-mail-line"></i>

                                    <div>
                                        <span>Email</span>
                                        <strong>info@ipgs.net</strong>
                                    </div>

                                </a>


                                <a href="tel:+441182066657">

                                    <i className="ri-phone-line"></i>

                                    <div>
                                        <span>Phone</span>
                                        <strong>
                                            +44(0) 118 206 6657
                                        </strong>
                                    </div>

                                </a>


                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=1F02+West+Wing+Arena+Business+Centre+100+Berkshire+Place+Wharfdale+Road+Winnersh+RG41+5RD+United+Kingdom"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="ipgs-contact-map-button"
                                >
                                    View map

                                    <i className="ri-arrow-right-up-line"></i>
                                </a>

                            </div>

                        </div>


                        {/* =============================================
                            OTHER OFFICES
                        ============================================= */}

                        <div className="ipgs-contact-office-grid">


                            {/* INDIA */}

                            <div className="ipgs-contact-office-card">

                                <div className="ipgs-contact-office-card-top">

                                    <span>
                                        02
                                    </span>

                                    <div className="ipgs-contact-office-marker">
                                        <i className="ri-map-pin-line"></i>
                                    </div>

                                </div>


                                <div className="ipgs-contact-office-country">
                                    INDIA
                                </div>

                                <h3>
                                    IPGST India Private Limited
                                </h3>

                                <p className="ipgs-contact-office-description">
                                    Our New Delhi office, home to engineers who
                                    support projects around the clock.
                                </p>


                                <div className="ipgs-contact-office-line"></div>


                                <div className="ipgs-contact-office-address">

                                    <i className="ri-map-pin-2-line"></i>

                                    <p>
                                        207, Pearls Best Heights-1, Netaji Subhash
                                        Place, Pitampura, New Delhi-110034
                                    </p>

                                </div>


                                <div className="ipgs-contact-office-contact">

                                    <a href="mailto:info@ipgs.net">
                                        <i className="ri-mail-line"></i>
                                        info@ipgs.net
                                    </a>

                                    <a href="tel:+911146548309">
                                        <i className="ri-phone-line"></i>
                                        +91 11 4654 8309
                                    </a>

                                </div>


                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=207+Pearls+Best+Heights-1+Netaji+Subhash+Place+Pitampura+New+Delhi+110034"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="ipgs-contact-office-map-link"
                                >
                                    View map
                                    <i className="ri-arrow-right-up-line"></i>
                                </a>

                            </div>


                            {/* UAE */}

                            <div className="ipgs-contact-office-card">

                                <div className="ipgs-contact-office-card-top">

                                    <span>
                                        03
                                    </span>

                                    <div className="ipgs-contact-office-marker">
                                        <i className="ri-map-pin-line"></i>
                                    </div>

                                </div>


                                <div className="ipgs-contact-office-country">
                                    UAE
                                </div>

                                <h3>
                                    IP Global Services, FZCO
                                </h3>

                                <p className="ipgs-contact-office-description">
                                    Our Dubai office, serving clients across
                                    the Middle East.
                                </p>


                                <div className="ipgs-contact-office-line"></div>


                                <div className="ipgs-contact-office-address">

                                    <i className="ri-map-pin-2-line"></i>

                                    <p>
                                        DSO-IZFA, Dubai Digital Park,
                                        Dubai Silicon Oasis, UAE, Dubai
                                    </p>

                                </div>


                                <div className="ipgs-contact-office-contact">

                                    <a href="mailto:info@ipgs.net">
                                        <i className="ri-mail-line"></i>
                                        info@ipgs.net
                                    </a>

                                    <a href="tel:+971506322300">
                                        <i className="ri-phone-line"></i>
                                        +971 50 632 2300
                                    </a>

                                </div>


                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=DSO-IZFA+Dubai+Digital+Park+Dubai+Silicon+Oasis+UAE"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="ipgs-contact-office-map-link"
                                >
                                    View map
                                    <i className="ri-arrow-right-up-line"></i>
                                </a>

                            </div>


                            {/* POLAND */}

                            <div className="ipgs-contact-office-card">

                                <div className="ipgs-contact-office-card-top">

                                    <span>
                                        04
                                    </span>

                                    <div className="ipgs-contact-office-marker">
                                        <i className="ri-map-pin-line"></i>
                                    </div>

                                </div>


                                <div className="ipgs-contact-office-country">
                                    POLAND
                                </div>

                                <h3>
                                    IP Global Services Sp. z o.o.
                                </h3>

                                <p className="ipgs-contact-office-description">
                                    Our Kraków office, supporting clients
                                    across Europe.
                                </p>


                                <div className="ipgs-contact-office-line"></div>


                                <div className="ipgs-contact-office-address">

                                    <i className="ri-map-pin-2-line"></i>

                                    <p>
                                        ul. Pawła Wyodkowica No. 8,
                                        LU101, Kraków, 31-452, Poland
                                    </p>

                                </div>


                                <div className="ipgs-contact-office-contact">

                                    <a href="mailto:info@ipgs.net">
                                        <i className="ri-mail-line"></i>
                                        info@ipgs.net
                                    </a>

                                    <a href="tel:+48791612715">
                                        <i className="ri-phone-line"></i>
                                        +48-791612715
                                    </a>

                                </div>


                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=ul+Pawla+Wyodkowica+8+Krakow+31-452+Poland"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="ipgs-contact-office-map-link"
                                >
                                    View map
                                    <i className="ri-arrow-right-up-line"></i>
                                </a>

                            </div>


                            {/* AUSTRALIA */}

                            <div className="ipgs-contact-office-card">

                                <div className="ipgs-contact-office-card-top">

                                    <span>
                                        05
                                    </span>

                                    <div className="ipgs-contact-office-marker">
                                        <i className="ri-map-pin-line"></i>
                                    </div>

                                </div>


                                <div className="ipgs-contact-office-country">
                                    AUSTRALIA
                                </div>

                                <h3>
                                    IP Global Services Pty Ltd
                                </h3>

                                <p className="ipgs-contact-office-description">
                                    Our Melbourne-area office, serving clients
                                    in Australia and New Zealand.
                                </p>


                                <div className="ipgs-contact-office-line"></div>


                                <div className="ipgs-contact-office-address">

                                    <i className="ri-map-pin-2-line"></i>

                                    <p>
                                        Unit 1, 22 Graeme Ave,
                                        Montmorency VIC 3094, Australia
                                    </p>

                                </div>


                                <div className="ipgs-contact-office-contact">

                                    <a href="mailto:info@ipgs.net">
                                        <i className="ri-mail-line"></i>
                                        info@ipgs.net
                                    </a>

                                    <a href="tel:+61421381415">
                                        <i className="ri-phone-line"></i>
                                        +61 421 381 415
                                    </a>

                                </div>


                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Unit+1+22+Graeme+Ave+Montmorency+VIC+3094+Australia"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="ipgs-contact-office-map-link"
                                >
                                    View map
                                    <i className="ri-arrow-right-up-line"></i>
                                </a>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    UK MAP
                ===================================================== */}

                <section className="ipgs-contact-map-section">

                    <div className="container">

                        <div className="ipgs-contact-map-heading">

                            <div>

                                <div className="ipgs-contact-doc-label ipgs-contact-doc-label-light">
                                    <span></span>
                                    UK HEADQUARTERS
                                </div>

                                <h2>
                                    Visit our UK headquarters
                                </h2>

                            </div>


                            <a
                                href="https://www.google.com/maps/search/?api=1&query=1F02+West+Wing+Arena+Business+Centre+100+Berkshire+Place+Wharfdale+Road+Winnersh+RG41+5RD+United+Kingdom"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Open in Google Maps

                                <i className="ri-arrow-right-up-line"></i>
                            </a>

                        </div>

                    </div>


                    <div className="ipgs-contact-map-frame">

                        <iframe
                            title="IP Global Services UK Headquarters"
                            src="https://www.google.com/maps?q=1F02%20West%20Wing%20Arena%20Business%20Centre%20100%20Berkshire%20Place%20Wharfdale%20Road%20Winnersh%20RG41%205RD%20United%20Kingdom&output=embed"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>

                    </div>

                </section>


                {/* =====================================================
                    WHAT HAPPENS NEXT
                ===================================================== */}

                <section className="ipgs-contact-process-section">

                    <div className="container">


                        <div className="ipgs-contact-process-head">

                            <div className="ipgs-contact-doc-label">
                                <span></span>
                                SIMPLE PROCESS
                            </div>

                            <h2>
                                What happens when you get in touch
                            </h2>

                        </div>


                        <div className="ipgs-contact-process-grid">


                            {/* STEP 1 */}

                            <div className="ipgs-contact-process-card">

                                <div className="ipgs-contact-process-top">

                                    <span>
                                        01
                                    </span>

                                    <i className="ri-message-3-line"></i>

                                </div>


                                <h3>
                                    You tell us what you need
                                </h3>

                                <p>
                                    Share your project, site or problem in a few
                                    lines, and tell us where you're based, so the
                                    right office picks it up.
                                </p>

                            </div>


                            {/* STEP 2 */}

                            <div className="ipgs-contact-process-card">

                                <div className="ipgs-contact-process-top">

                                    <span>
                                        02
                                    </span>

                                    <i className="ri-user-voice-line"></i>

                                </div>


                                <h3>
                                    A named contact replies
                                </h3>

                                <p>
                                    You hear from a person who knows your area,
                                    not a shared inbox, so you never explain your
                                    project twice.
                                </p>

                            </div>


                            {/* STEP 3 */}

                            <div className="ipgs-contact-process-card">

                                <div className="ipgs-contact-process-top">

                                    <span>
                                        03
                                    </span>

                                    <i className="ri-arrow-right-circle-line"></i>

                                </div>


                                <h3>
                                    We agree on the next step
                                </h3>

                                <p>
                                    We suggest a call, a survey, or a proposal,
                                    so you know what happens next and when it
                                    will happen.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    CONTACT FORM
                ===================================================== */}

                <section
                    className="ipgs-contact-message-section"
                    id="ipgs-contact-form"
                >

                    <div className="container">

                        <div className="ipgs-contact-message-layout">


                            {/* LEFT */}

                            <div className="ipgs-contact-message-content">

                                <div className="ipgs-contact-doc-label ipgs-contact-doc-label-light">
                                    <span></span>
                                    CONTACT FORM
                                </div>


                                <h2>
                                    Send us a message
                                </h2>


                                <p>
                                    Tell us a little about your project,
                                    and a member of our team will come
                                    back to you.
                                </p>


                                <div className="ipgs-contact-message-mini">

                                    <i className="ri-mail-send-line"></i>

                                    <div>
                                        <span>
                                            Prefer email?
                                        </span>

                                        <a href="mailto:info@ipgs.net">
                                            info@ipgs.net
                                        </a>
                                    </div>

                                </div>

                            </div>


                            {/* FORM */}

                            <div className="ipgs-contact-message-form">

                                <form
                                    onSubmit={handleSubmit}
                                    noValidate
                                >

                                    <div className="ipgs-contact-message-grid">


                                        {/* NAME */}

                                        <div className="ipgs-contact-form-field">

                                            <label htmlFor="name">
                                                Full Name *
                                            </label>

                                            <div className="ipgs-contact-form-control">

                                                <i className="ri-user-3-line"></i>

                                                <input
                                                    id="name"
                                                    type="text"
                                                    name="name"
                                                    placeholder="Your full name"
                                                    value={form.name}
                                                    onChange={handleChange}
                                                />

                                            </div>

                                            {errors.name && (
                                                <p className="ipgs-contact-form-error">
                                                    {errors.name}
                                                </p>
                                            )}

                                        </div>


                                        {/* COMPANY */}

                                        <div className="ipgs-contact-form-field">

                                            <label htmlFor="company">
                                                Company
                                            </label>

                                            <div className="ipgs-contact-form-control">

                                                <i className="ri-building-line"></i>

                                                <input
                                                    id="company"
                                                    type="text"
                                                    name="company"
                                                    placeholder="Company name"
                                                    value={form.company}
                                                    onChange={handleChange}
                                                />

                                            </div>

                                        </div>


                                        {/* EMAIL */}

                                        <div className="ipgs-contact-form-field">

                                            <label htmlFor="email">
                                                Email Address *
                                            </label>

                                            <div className="ipgs-contact-form-control">

                                                <i className="ri-mail-line"></i>

                                                <input
                                                    id="email"
                                                    type="email"
                                                    name="email"
                                                    placeholder="name@company.com"
                                                    value={form.email}
                                                    onChange={handleChange}
                                                />

                                            </div>

                                            {errors.email && (
                                                <p className="ipgs-contact-form-error">
                                                    {errors.email}
                                                </p>
                                            )}

                                        </div>


                                        {/* PHONE */}

                                        <div className="ipgs-contact-form-field">

                                            <label htmlFor="phone">
                                                Phone Number
                                            </label>

                                            <div className="ipgs-contact-form-control">

                                                <i className="ri-phone-line"></i>

                                                <input
                                                    id="phone"
                                                    type="tel"
                                                    name="phone"
                                                    placeholder="Phone number"
                                                    value={form.phone}
                                                    onChange={handleChange}
                                                />

                                            </div>

                                        </div>


                                        {/* LOCATION */}

                                        <div className="ipgs-contact-form-field ipgs-contact-form-field-full">

                                            <label htmlFor="location">
                                                Your Location
                                            </label>

                                            <div className="ipgs-contact-form-control">

                                                <i className="ri-map-pin-line"></i>

                                                <select
                                                    id="location"
                                                    name="location"
                                                    value={form.location}
                                                    onChange={handleChange}
                                                >

                                                    <option value="">
                                                        Select your nearest office
                                                    </option>

                                                    <option value="United Kingdom">
                                                        United Kingdom
                                                    </option>

                                                    <option value="India">
                                                        India
                                                    </option>

                                                    <option value="UAE">
                                                        UAE
                                                    </option>

                                                    <option value="Poland">
                                                        Poland
                                                    </option>

                                                    <option value="Australia">
                                                        Australia
                                                    </option>

                                                    <option value="Other">
                                                        Other
                                                    </option>

                                                </select>

                                                <i className="ri-arrow-down-s-line ipgs-contact-select-icon"></i>

                                            </div>

                                        </div>


                                        {/* MESSAGE */}

                                        <div className="ipgs-contact-form-field ipgs-contact-form-field-full">

                                            <label htmlFor="message">
                                                Project / Message *
                                            </label>

                                            <div className="ipgs-contact-form-control ipgs-contact-form-textarea">

                                                <i className="ri-message-3-line"></i>

                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    rows={6}
                                                    placeholder="Tell us a little about your project..."
                                                    value={form.message}
                                                    onChange={handleChange}
                                                ></textarea>

                                            </div>

                                            {errors.message && (
                                                <p className="ipgs-contact-form-error">
                                                    {errors.message}
                                                </p>
                                            )}

                                        </div>

                                    </div>


                                    {/* SUCCESS */}

                                    {submitted && (

                                        <div className="ipgs-contact-form-success">

                                            <i className="ri-checkbox-circle-line"></i>

                                            <span>
                                                Thank you. Your message has been submitted.
                                            </span>

                                        </div>

                                    )}


                                    {/* BUTTON */}

                                    <button
                                        type="submit"
                                        className="ipgs-contact-message-button"
                                    >
                                        Send message

                                        <i className="ri-arrow-right-line"></i>
                                    </button>

                                </form>

                            </div>

                        </div>

                    </div>

                </section>

            </div>

        </>
    );
};


export default Contact;