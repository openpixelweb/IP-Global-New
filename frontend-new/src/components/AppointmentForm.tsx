import React, { useState } from "react";
import UserSvg from "../assets/images/appointment/user.svg";
import MailSvg from "../assets/images/appointment/mail.svg";
import CallSvg from "../assets/images/appointment/call.svg";
import DateSvg from "../assets/images/appointment/date.svg";
import HomeSvg from "../assets/images/appointment/home.svg";
import DownSvg from "../assets/images/appointment/down.svg";
import BillSvg from "../assets/images/appointment/bill.svg";
import BtnImage from "../assets/images/hero/btn-image.svg";
import MessageSvg from "../assets/images/appointment/message.svg";

interface FormData {
    name: string;
    email: string;
    phone: string;
    date: string;
    propertyType: string;
    number: string;
    message: string;
}

const AppointmentForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        date: "",
        propertyType: "",
        number: "",
        message: "",
    });

    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [submitted, setSubmitted] = useState(false);

    // -------------------- HANDLE CHANGE --------------------
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // -------------------- VALIDATION --------------------
    const validate = () => {
        let newErrors: Partial<FormData> = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address";

        if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
        else if (formData.phone.length < 10) newErrors.phone = "Phone number must be 10 digits";

        if (!formData.date.trim()) newErrors.date = "Select a date";
        if (!formData.propertyType.trim()) newErrors.propertyType = "Select property type";
        if (!formData.number.trim()) newErrors.number = "Enter number";
        if (!formData.message.trim()) newErrors.message = "Message is required";

        return newErrors;
    };

    // -------------------- FORM SUBMIT --------------------
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setSubmitted(true);

            console.log("Form Submitted Successfully:", formData);

            // OPTIONAL: Reset form
            setFormData({
                name: "",
                email: "",
                phone: "",
                date: "",
                propertyType: "",
                number: "",
                message: "",
            });
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="appoint-ment-data">
                    <div className="appoit-detail">
                        <h2 className="title-about mt-0">
                            Make an <span>Appointment</span>
                        </h2>
                        <p className="title-desc">
                            Lorem ipsum dolor sit amet consectetur. Luctus id id turpis dictum. Imperdiet risus pharetra viverra tincidunt mauris faucibus gravida dui. Morbi rhoncus sit placerat cursus cursus id eget venenatis sodales luctus.
                        </p>

                        <div className="main-appointment row">

                            {/* NAME */}
                            <div className="col-lg-6 col-md-6 input-appoint">
                                <div className="data-max">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                    <div className="property-detail">
                                        <img src={UserSvg} alt="user" />
                                    </div>
                                </div>
                                {errors.name && <small className="error">{errors.name}</small>}
                            </div>

                            {/* EMAIL */}
                            <div className="col-lg-6 col-md-6 input-appoint">
                                <div className="data-max">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    <div className="property-detail">
                                        <img src={MailSvg} alt="mail" />
                                    </div>
                                </div>
                                {errors.email && <small className="error">{errors.email}</small>}
                            </div>

                            {/* PHONE */}
                            <div className="col-lg-6 col-md-6 input-appoint">
                                <div className="data-max">
                                    <input
                                        type="tel"
                                        placeholder="Phone number"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                    <div className="property-detail">
                                        <img src={CallSvg} alt="call" />
                                    </div>
                                </div>
                                {errors.phone && <small className="error">{errors.phone}</small>}
                            </div>

                            {/* DATE */}
                            <div className="col-lg-6 col-md-6 input-appoint">
                                <div className="data-max name-class">
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                    />
                                    <div className="property-detail">
                                        <img src={DateSvg} alt="date" />
                                    </div>
                                </div>
                                {errors.date && <small className="error">{errors.date}</small>}
                            </div>

                            {/* PROPERTY TYPE */}
                            <div className="col-lg-6 col-md-6 input-appoint">
                                <div className="data-max">
                                    <select className="select-home"
                                        name="propertyType"
                                        value={formData.propertyType}
                                        onChange={handleChange}
                                    >
                                        <option value="">Property Type</option>
                                        <option value="Residential">Residential</option>
                                        <option value="Commercial">Commercial</option>
                                        <option value="Industrial">Industrial</option>
                                    </select>

                                    <div className="property-detail">
                                        <img src={HomeSvg} alt="home" />
                                    </div>
                                    <div className="down-btn">
                                        <img src={DownSvg} alt="down" />
                                    </div>
                                </div>
                                {errors.propertyType && <small className="error">{errors.propertyType}</small>}
                            </div>

                            {/* NUMBER */}
                            <div className="col-lg-6 col-md-6 input-appoint">
                                <div className="data-max">
                                    <input
                                        type="number"
                                        name="number"
                                        placeholder="Enter a number"
                                        value={formData.number}
                                        onChange={handleChange}
                                        min={1}
                                        max={100}
                                    />
                                    <div className="property-detail">
                                        <img src={BillSvg} alt="bill" />
                                    </div>
                                </div>
                                {errors.number && <small className="error">{errors.number}</small>}
                            </div>

                            {/* MESSAGE */}
                            <div className="col-12 input-appoint-data">
                                <div className="data-max">
                                    <textarea
                                        placeholder="Write Message..."
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="textarea-box"
                                    />
                                    <div className="property-detail">
                                        <img src={MessageSvg} alt="message" />
                                    </div>
                                </div>
                                {errors.message && <small className="error">{errors.message}</small>}
                            </div>

                            {/* SUBMIT BUTTON */}
                            <div className="butn-submit">
                                <button type="submit" className="button mt-0">
                                    <span className="btn-text">Submit Now</span>
                                    <img src={BtnImage} alt="btn" />
                                </button>
                            </div>

                            {submitted && (
                                <p className="success-message">Form submitted successfully!</p>
                            )}
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AppointmentForm;
