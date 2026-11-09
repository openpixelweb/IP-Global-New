import { Link } from 'react-router-dom';
import TestimonialSec from '../components/TestimonialSec.tsx';
import Plan1Img from '../assets/images/plan/plan-1.png';
import Plan2Img from '../assets/images/plan/plan-2.png';
import Plan3Img from '../assets/images/plan/plan-3.png';
import ArrowImg from '../assets/images/plan/arrow.png';

const PricingPlan: React.FC = () => {
    return (
        <>
            <div className="js-scroll">
                {/* <!-- ========================= [ hero section all separate start ] ========================= --> */}
                <div className="bg-container hero-data-bottom">
                    <div className="services-home-hero princing-data">
                        <div className="title-of-hero">
                            <p>Pricing Plan</p>
                            <span><Link to="/">Home</Link> - Pricing Plan</span>
                        </div>
                    </div>
                </div>
                {/* <!-- ========================= [ hero section all separate Exit ] ========================= --> */}
                {/* <!-- ========================= [ Team Members Section Start ] ========================= --> */}
                <div className="about-data pb-0">
                    <div className="container">
                        <div className="success-detail fade_down">
                            <div className="box-data-design">
                                <div className="dot-data"></div>
                                <p className="title-font">Pricing Plan</p>
                            </div>
                            <h2 className="title-about">
                                Choose Your <span>Affordable Price</span>
                            </h2>
                        </div>
                        <div className="row testimonial-main princing-main">
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <div className="princing-detail zoom_in">
                                    <p className="plan-name">Basic Plan</p>
                                    <p className="plan-desc">Our certified technicians expertly install your solar panels,
                                        inverters, and wiring.</p>
                                    <div className="line-plan"></div>
                                    <p className="plan-sub">$99.00<span>/per month</span></p>
                                    <ul className="plan-ul">
                                        <li className="plan-li">
                                            <img src={Plan1Img} alt="Plan1Img" />
                                            <p className="plan-point">Solar Inverter Setup</p>
                                        </li>
                                        <li className="plan-li">
                                            <img src={Plan1Img} alt="Plan1Img" />
                                            <p className="plan-point">Solar Material Financing</p>
                                        </li>
                                        <li className="plan-li">
                                            <img src={Plan2Img} alt="Plan2Img" />
                                            <p className="plan-point point-data-min">Proven Track Record</p>
                                        </li>
                                        <li className="plan-li">
                                            <img src={Plan2Img} alt="Plan2Img" />
                                            <p className="plan-point point-data-min">Battery Storage Solutions</p>
                                        </li>
                                        <li className="plan-li">
                                            <img src={Plan2Img} alt="Plan2Img" />
                                            <p className="plan-point point-data-min">24x7 Call & Chat Support</p>
                                        </li>
                                        <li className="plan-li">
                                            <img src={Plan2Img} alt="Plan2Img" />
                                            <p className="plan-point point-data-min">Customer-Centric Approach</p>
                                        </li>
                                    </ul>
                                    <Link to="/Contact" className="services-btn-center plan-btn">
                                        <p>Choose Plan</p>
                                        <img src={ArrowImg} alt="trac" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <div className="princing-detail zoom_in center-data">
                                    <p className="plan-name center-paln">Standard Plan</p>
                                    <p className="plan-desc">Our certified technicians expertly install your solar panels,
                                        inverters, and wiring.</p>
                                    <div className="line-plan"></div>
                                    <p className="plan-sub sub-palnesd">$199.00<span>/per month</span></p>
                                    <ul className="plan-ul">
                                        <li className="plan-li">
                                            <img src={Plan3Img} alt="Plan3Img" />
                                            <p className="plan-point colo-nam-plan">Solar Inverter Setup</p>
                                        </li>
                                        <li className="plan-li">
                                            <img src={Plan3Img} alt="Plan3Img" />
                                            <p className="plan-point colo-nam-plan">Solar Material Financing</p>
                                        </li>
                                        <li className="plan-li">
                                            <img src={Plan3Img} alt="Plan3Img" />
                                            <p className="plan-point colo-nam-plan">Proven Track Record</p>
                                        </li>
                                        <li className="plan-li">
                                            <img src={Plan3Img} alt="Plan3Img" />
                                            <p className="plan-point colo-nam-plan">Battery Storage Solutions</p>
                                        </li>
                                        <li className="plan-li">
                                            <img src={Plan2Img} alt="Plan2Img" />
                                            <p className="plan-point point-data-min">24x7 Call & Chat Support</p>
                                        </li>
                                        <li className="plan-li">
                                            <img src={Plan2Img} alt="Plan2Img" />
                                            <p className="plan-point point-data-min">Customer-Centric Approach</p>
                                        </li>
                                    </ul>
                                    <Link to="/Contact" className="services-btn plan-btn-sec">
                                        <p>Choose Plan</p>
                                        <img src={ArrowImg} alt="trac" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <div className="princing-detail zoom_in">
                                    <p className="plan-name">Premium Plan</p>
                                    <p className="plan-desc">Our certified technicians expertly install your solar panels,
                                        inverters, and wiring.</p>
                                    <div className="line-plan"></div>
                                    <p className="plan-sub">$249.00<span>/per month</span></p>
                                    <ul className="plan-ul">
                                        <li className="plan-li">
                                            <img src={Plan1Img} alt="Plan1Img" />
                                            <p className="plan-point">Solar Inverter Setup</p>
                                        </li>
                                        <li className="plan-li">
                                            <img src={Plan1Img} alt="Plan1Img" />
                                            <p className="plan-point">Solar Material Financing</p>
                                        </li>
                                        <li className="plan-li">
                                            <img src={Plan1Img} alt="Plan1Img" />
                                            <p className="plan-point">Proven Track Record</p>
                                        </li>
                                        <li className="plan-li">
                                            <img src={Plan1Img} alt="Plan1Img" />
                                            <p className="plan-point">Battery Storage Solutions</p>
                                        </li>
                                        <li className="plan-li">
                                            <img src={Plan1Img} alt="Plan1Img" />
                                            <p className="plan-point">24x7 Call & Chat Support</p>
                                        </li>
                                        <li className="plan-li">
                                            <img src={Plan1Img} alt="Plan1Img" />
                                            <p className="plan-point">Customer-Centric Approach</p>
                                        </li>
                                    </ul>
                                    <Link to="/Contact" className="services-btn-center plan-btn">
                                        <p>Choose Plan</p>
                                        <img src={ArrowImg} alt="trac" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ========================= [ Team Members Section Exit ] ========================= --> */}
                {/* <!-- ========================= [ Testimonial Section Start ] ========================= --> */}
                <div className="blog-sec">
                    <div className="about-data testimonial" id="testimonial">
                        <div className="container">
                            <div className="success-detail zoom_in">
                                <div className="box-data-design">
                                    <div className="dot-data"></div>
                                    <p className="title-font">Our Testimonials</p>
                                </div>
                                <h2 className="title-about">
                                    Our Customers Give <span>Love Feedback</span>
                                </h2>
                            </div>
                            <div className="testimonial-main">
                                <div className="row">
                                    <TestimonialSec />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ========================= [ Testimonial Section Exit ] ========================= --> */}
            </div>
        </>
    )
}

export default PricingPlan