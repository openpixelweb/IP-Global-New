import React from 'react'
import Title from '../common/title'

const ContactForm = () => {
    return (
        <div className="contact-form-area pb-75">
            <div className="container">
                <Title sectionName={"Send Us A Message"} sectionTitle={"Get in Touch With Us Today."}/>

                <div className="contact-form-info" data-cue="slideInUp">
                    <form>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Name" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Phone" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Subject" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control textarea" placeholder="Enter Your Comments" rows="3"></textarea>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Save my name, email, and website in this browser for the next time I comment.
                            </label>
                        </div>
                        <button type="submit">Send A Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm