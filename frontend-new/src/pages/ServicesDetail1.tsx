import { Link } from 'react-router-dom';
import ServicesSvg1 from '../assets/images/services/01.svg';
import DetailImg from '../assets/images/services/detail-image.png';
import DetailImg1 from '../assets/images/services/detail-image-1.png';
import DetailImg2 from '../assets/images/services/detail-image-2.png';
import BtnImage from '../assets/images/hero/btn-image.svg';
import ArrowSvg from '../assets/images/services/arrow.svg';
import UserSvg from '../assets/images/appointment/user.svg';
import MailSvg from '../assets/images/appointment/mail.svg';
import CallSvg from '../assets/images/appointment/call.svg';
import MessageSvg from '../assets/images/appointment/message.svg';
import SuccessSlider from '../components/SuccessSlider.tsx';
import TestimonialSec from '../components/TestimonialSec.tsx';

const ServicesDetail: React.FC = () => {
    return (
        <>
            <div className="js-scroll">
                {/* <!-- ========================= [ hero section all separate start ] ========================= --> */}
                <div className="bg-container hero-data-bottom">
                    <div className="services-home-hero ">
                        <div className="title-of-hero">
                            <p>Service Details</p>
                            <span><Link to="/">Home</Link> - Service Details</span>
                        </div>
                    </div>
                </div>
                {/* <!-- ========================= [ hero section all separate Exit ] ========================= --> */}
                <div className="about-data">
                    <div className="container">
                        <div className="row data-services-detail">
                            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                                <div className="data-detail-services-main">
                                    <div className="ander-data-detail-main zoom_in">
                                        <div className="main-image-ander">
                                            <img src={ServicesSvg1} alt="ServicesSvg1" />
                                        </div>
                                        <p className="services-detail-title">Solar Panel Energy Installation</p>
                                    </div>
                                    <p className="detail-desc zoom_in">Our team of experts provides in-depth consultations to
                                        help you explore the best renewable energy options for your property. We assess energy needs, budget, and location to develop customized, sustainable solutions for homes, businesses, and public institutions. Maximize your energy efficiency with our smart energy management systems. We offer tools.</p>
                                    <div className="main-services-iomages zoom_in">
                                        <img src={DetailImg} alt="DetailImg" />
                                    </div>
                                    <p className="detail-desc zoom_in">We provide turnkey solar solutions, from design and installation
                                        to monitoring and maintenance. Whether for homes, businesses, or communities, our solar energy systems offer sustainable, cost-effective power source that reduces carbon footprints and energy bills. Our advanced energy storage solutions allow you store excess energy generated from renewable sources like solar and wind. This enables a constant, uninterrupted power
                                        supply, providing energy independence and resilience even during outages. Capture the Earth’s natural heat with our geothermal energy systems. We offer expert design, installation, and maintenance of geothermal heating and cooling systems that are energy-efficient,
                                        eco-friendly, and cost-effective over time.</p>
                                    <p className="services-detail-title-sec zoom_in"> Solar Panel Energy Installation</p>
                                    <p className="detail-desc zoom_in">We offer carbon offset services to help individuals and
                                        businesses reduce their carbon footprint. By investing in certified renewable energy projects, you can offset emissions and contribute to a cleaner, more sustainable environment. Support sustainable transportation with our EV charging station installation service. Our team provides home, business, and public charging station solutions powered by renewable energy, promoting greener mobility.</p>
                                    <p className="detail-desc mt-3 zoom_in">We offer carbon offset services to help individuals and
                                        businesses reduce their carbon footprint. By investing in certified renewable energy projects, you can offset emissions and contribute to a cleaner, more sustainable environment.</p>
                                    <div className="image-scroll-services">
                                        <div className="image-services-sec-data zoom_in">
                                            <img src={DetailImg1} alt="DetailImg1" />
                                        </div>
                                        <div className="image-services-sec-data zoom_in">
                                            <img src={DetailImg2} alt="DetailImg2" />
                                        </div>
                                    </div>
                                    <p className="detail-desc zoom_in">Our team of experts provides in-depth consultations to help you
                                        explore the best renewable energy options for your property. We assess energy needs, budget, and location to develop customized, sustainable solutions for homes, businesses, and public institutions. Maximize your energy efficiency with our smart energy management systems.</p>
                                    <div className="row prosess-over-services">
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                            <ul className="service-ul zoom_in">
                                                <li className="services-li zoom_in">
                                                    <img src={ArrowSvg} alt="about" />
                                                    <p>Expertise and Experience</p>
                                                </li>
                                                <li className="services-li zoom_in">
                                                    <img src={ArrowSvg} alt="about" />
                                                    <p>Cost Efficiency</p>
                                                </li>
                                                <li className="services-li zoom_in">
                                                    <img src={ArrowSvg} alt="about" />
                                                    <p>Time Savings</p>
                                                </li>
                                                <li className="services-li zoom_in">
                                                    <img src={ArrowSvg} alt="about" />
                                                    <p>Quality Assurance</p>
                                                </li>
                                                <li className="services-li zoom_in">
                                                    <img src={ArrowSvg} alt="about" />
                                                    <p>Regulatory Compliance</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                            <ul className="service-ul zoom_in">
                                                <li className="services-li zoom_in">
                                                    <img src={ArrowSvg} alt="about" />
                                                    <p>Customization and Flexibility</p>
                                                </li>
                                                <li className="services-li zoom_in">
                                                    <img src={ArrowSvg} alt="about" />
                                                    <p>Post-Solar Support</p>
                                                </li>
                                                <li className="services-li zoom_in">
                                                    <img src={ArrowSvg} alt="about" />
                                                    <p>Single Point of Accountability</p>
                                                </li>
                                                <li className="services-li zoom_in">
                                                    <img src={ArrowSvg} alt="about" />
                                                    <p>Safety Protocols</p>
                                                </li>
                                                <li className="services-li zoom_in">
                                                    <img src={ArrowSvg} alt="about" />
                                                    <p>Innovative Solutions</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="services-detail-title-sec zoom_in"> Work Process</p>
                                    <p className="detail-desc zoom_in">Our commercial solar solutions help businesses save on
                                        energy costs and reduce carbon footprints. We handle complex, large-scale installations tailored to each company’s unique energy needs, helping businesses become more sustainable and
                                        energy-efficient. Solar inverters convert the DC electricity generated by solar panels
                                        into AC power that’s usable in your home or business.</p>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-7">
                                <div className="data-all-services-contact">
                                    <div className="all-services-box zoom_in">
                                        <p className="serives-title-detail-box">All Services</p>
                                        <ul className="all-box-services">
                                            <li>
                                                <Link to="/ServicesDetail1" className="services-box-link">
                                                    <p>Solar Installation</p>
                                                    <i className="ri-arrow-right-s-line"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/ServicesDetail2" className="services-box-link">
                                                    <p>Solar Maintenance</p>
                                                    <i className="ri-arrow-right-s-line"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/ServicesDetail1" className="services-box-link">
                                                    <p>Solar Battery Solution</p>
                                                    <i className="ri-arrow-right-s-line"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/ServicesDetail2" className="services-box-link">
                                                    <p>Solar Energy</p>
                                                    <i className="ri-arrow-right-s-line"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/ServicesDetail1" className="services-box-link">
                                                    <p>Solar Panel</p>
                                                    <i className="ri-arrow-right-s-line"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/ServicesDetail2" className="services-box-link">
                                                    <p>Solar System</p>
                                                    <i className="ri-arrow-right-s-line"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/ServicesDetail1" className="services-box-link">
                                                    <p>Solar Guide</p>
                                                    <i className="ri-arrow-right-s-line"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="all-contact">
                                        <p className="fade_down">Get A Quote</p>
                                        <div className="data-input-service">
                                            <div className="input-appoint fade_down">
                                                <div className="data-max">
                                                    <input type="text" placeholder="Name" autoComplete="name" />
                                                    <div className="property-detail">
                                                        <img src={UserSvg} alt="user" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="input-appoint fade_down">
                                                <div className="data-max">
                                                    <input type="email" id="email" name="email" placeholder="Email Address"
                                                        autoComplete="email" />
                                                    <div className="property-detail">
                                                        <img src={MailSvg} alt="user" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="input-appoint fade_down">
                                                <div className="data-max">
                                                    <input type="tel" id="phone" name="phone" placeholder="Phone number"
                                                        autoComplete="tel" />
                                                    <div className="property-detail">
                                                        <img src={CallSvg} alt="user" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="input-appoint fade_down">
                                                <div className="data-max">
                                                    <textarea placeholder="Write Message..." className="textarea-box service-hight"
                                                    ></textarea>
                                                    <div className="property-detail">
                                                        <img src={MessageSvg} alt="user" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="input-submit fade_down">
                                                <button className="button mt-0">
                                                    <span className="btn-text">Submit Now</span>
                                                    <img src={BtnImage} alt="BtnImage" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="company-pro fade_down">
                                        <p className="data-spect">Company Profile</p>
                                        <p className="data-overan">Lorem ipsum dolor sit amet consectetur. Vitae tristique
                                            gravida tincidunt pellentesque in sit tortor. Condimentum risus
                                            sapien semper urna congue risus turpis volutpat.</p>
                                        <div className="input-submit">
                                            <button className="button">
                                                <span className="btn-text">Download</span>
                                                <img src={BtnImage} alt="BtnImage" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ========================= [ Our Success Section Start ] ========================= --> */}
                <div className="success-data">
                    <div className="container">
                        <div className="success-detail zoom_in">
                            <div className="box-data-design">
                                <div className="dot-data"></div>
                                <p className="title-font">Our Success</p>
                            </div>
                            <h2 className="title-about">
                                Portfolio of <span>Solar Success</span>
                            </h2>
                        </div>
                    </div>
                    <SuccessSlider />
                </div>
                {/* <!-- ========================= [ Our Success Section Exit ] ========================= --> */}
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
            </div>
        </>
    )
}

export default ServicesDetail