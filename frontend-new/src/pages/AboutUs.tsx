import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import AboutImg3 from "../assets/images/about/image-3.png";
import AboutOnly from "../assets/images/about/only.png";
import CheckArrowSvg from "../assets/images/services/arrow.svg";
import CreackSvg from "../assets/images/hero/crack.svg";
import MedelSvg from "../assets/images/about/medel.svg";
import ProcessSec from "../components/ProcessSec.tsx";
import thirdImage1 from "../assets/images/services/third-image-1.svg";
import thirdImage2 from "../assets/images/services/third-image-2.svg";
import videoData from '../data/videoData.json';
import VideoModal from "../components/VideoModal.tsx";
import Video1 from "../assets/images/why-choose/why-choose.mp4";
import ArrowChoose from "../assets/images/why-choose/arrow.png";
import BtnImage from "../assets/images/hero/btn-image.svg";
import CallIconSvg from "../assets/images/prosess/call-icon.svg";
import PlayImg from "../assets/images/appointment/play.png";
import Team from "../components/Team.tsx";
import SuccessSlider from "../components/SuccessSlider.tsx";
import TestimonialSec from "../components/TestimonialSec.tsx";
import AppointmentForm from "../components/AppointmentForm.tsx";


const AboutUs: React.FC = () => {
    // small appointment slider index
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    // Yt video PopUp
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="js-scroll">
                {/* <!-- ========================= [ hero section all separate start ] ========================= --> */}
                <div className="bg-container hero-data-bottom">
                    <div className="services-home-hero desck-about">
                        <div className="title-of-hero">
                            <p>About Us</p>
                            <span><Link to="/">Home</Link> - About Us</span>
                        </div>
                    </div>
                </div>
                {/* <!-- ========================= [ hero section all separate Exit ] ========================= --> */}
                {/* <!-- ========================= [ About section all separate Start ] ========================= --> */}
                <div className="about-data">
                    <div className="container">
                        <div className="row about-detail-data">
                            <div className="col-xl-6 col-lg-6 col-md-12">
                                <div className="all-left-about">
                                    <div className="image-data-about mt-0">
                                        <img src={AboutImg3} alt="image" className="position-relative" />
                                        <div className="data-experience">
                                            <div className="font-about-exper">
                                                <p className="font-exper count" data-number="14">14</p>
                                                <div className="rounded-about"></div>
                                                <p className="year-exper">Years of Experience</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="only-image-about">
                                        <img src={AboutOnly} alt=" anu" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12">
                                <div className="all-right-about">
                                    <div className="box-data-design fade_down">
                                        <div className="dot-data"></div>
                                        <p className="title-font">About Us</p>
                                    </div>
                                    <h2 className="title-about fade_down">
                                        We Strive to Lead The Way in <span>Solar Energy Industry</span>
                                    </h2>
                                    <p className="about-detail-desc fade_down">
                                        We're committed to revolutionizing the way you think about energy. Say goodbye to
                                        skyrocketing utility bills and hello
                                        to a brighter, greener future with our state-of-the-art solar energy solutions.
                                    </p>
                                    <p className="about-detail-desc mt-2 fade_down">
                                        Your premier source for sustainable energy solutions. Explore our range of solar
                                        products and services designed to meet
                                        your energy needs. eaque ipsa quae ab illo inventore veritatis et quasi architecto
                                        beatae vitae dicta sunt explicabo.
                                    </p>
                                    <div className="row data-about-ul">
                                        <div className="col-xl-6 col-lg-7 col-md-7 col-sm-6">
                                            <ul className="service-ul zoom_in">
                                                <li className="services-li zoom_in">
                                                    <img src={CheckArrowSvg} alt="about" />
                                                    <p>Solar Inverter Setup</p>
                                                </li>
                                                <li className="services-li zoom_in">
                                                    <img src={CheckArrowSvg} alt="about" />
                                                    <p>Solar Material Financing</p>
                                                </li>
                                                <li className="services-li zoom_in">
                                                    <img src={CheckArrowSvg} alt="about" />
                                                    <p>Proven Track Record</p>
                                                </li>
                                                <li className="services-li zoom_in">
                                                    <img src={CheckArrowSvg} alt="about" />
                                                    <p>Battery Storage Solutions</p>
                                                </li>
                                                <li className="services-li zoom_in">
                                                    <img src={CheckArrowSvg} alt="about" />
                                                    <p>24x7 Call & Chat Support</p>
                                                </li>
                                                <li className="services-li zoom_in">
                                                    <img src={CheckArrowSvg} alt="about" />
                                                    <p>Customer-Centric Approach</p>
                                                </li>
                                            </ul>
                                            <div className="data-about-btn zoom_in">
                                                <Link to="/Services1" className="button stoped-btn-about d-inline-flex">
                                                    <span className="btn-text">Our Services</span>
                                                    <img src={CreackSvg} alt="image" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-5 col-md-5 col-sm-6">
                                            <div className="medal-about zoom_in">
                                                <div className="box-medal">
                                                    <img src={MedelSvg} alt="mailup" />
                                                    <p>We’re Certified Solar Experts</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ========================= [ About section all separate Exit ] ========================= --> */}
                {/* <!-- ========================= [ Working Prosess Section Start ] ========================= --> */}
                <div className="work-data about-data">
                    <div className="container">
                        <div className="success-detail fade_down">
                            <div className="box-data-design">
                                <div className="dot-data"></div>
                                <p className="title-font">Our Working Process</p>
                            </div>
                            <h2 className="title-about">
                                Solar Work Process In <span>Sun Star Energy</span>
                            </h2>
                        </div>
                        <div className="testimonial-main prosess-main-data row">
                            <ProcessSec />
                        </div>
                        <div className="prosess-call testimonial-main zoom_in">
                            <Link to="/Services1" className="button mt-0 ">
                                <span className="btn-text">Explore All Services</span>
                                <img src={BtnImage} alt="image" />
                            </Link>
                            <a href="tel:+911(234)5678899" className="data-call-proses ">
                                <div className="prosess-image">
                                    <img src={CallIconSvg} alt="call" />
                                </div>
                                <div className="prosess-call-detail">
                                    <p className="prog-main">Talk To Us</p>
                                    <p className="mailup">+1 (234) 567 8899</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                {/* <!-- ========================= [ Working Prosess Section Exit ] ========================= --> */}
                {/* <!-- ========================= [ our Services separate-sectond Start ] ========================= --> */}
                <div className="bg-container pb-0">
                    <div className="services-padding-data bihind-the-squre">
                        <div className="row services-main-separate">
                            <div className="col-xl-8 col-lg-12">
                                <div className="over-services-seprate fade_down">
                                    <div className="dovt"></div>
                                    <p>Our Services</p>
                                </div>
                                <h2 className="title-about second-services-data-title fade_down">
                                    Switch to Solar <span>Sustainable, Affordable, & Reliable</span> Energy
                                </h2>
                                <p className="separte-desc second-services-data-title fade_down">Our advanced energy storage
                                    solutions
                                    allow you to store excess energy generated from renewable sources like solar and
                                    wind. This enables a constant, uninterrupted power supply, providing energy
                                    independence.</p>
                                <div className="services-about fade_down">
                                    <div className="services-about-image">
                                        <img src={thirdImage1} alt="thirdImage1" />
                                    </div>
                                    <div className="data-detail-service">
                                        <p>Professional Solar Expert</p>
                                        <span>Solar panels, also referred to as solar modules, are made up of multiple solar
                                            cells arranged in a grid. They are installed on rooftops, solar farms, and other suitable.</span>
                                    </div>
                                </div>
                                <div className="services-about fade_down">
                                    <div className="services-about-image">
                                        <img src={thirdImage2} alt="thirdImage2" />
                                    </div>
                                    <div className="data-detail-service">
                                        <p>24/7 Customer Support</p>
                                        <span>Lorem ipsum dolor sit amet consectetur. Molestie posuere a vel non. Sed quis
                                            molestie vitae viverra et morbi. Pretium lobortis eu pulvinar molestie facilisi morbi lectus dignissim.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ========================= [ Experience sectond Start ] ========================= --> */}
                <div className="exper-sec-data">
                    <div className="container">
                        <div className="design-sec-exper">
                            <div className="over-exper-sec zoom_in">
                                <div className="subscribe-index">
                                    <p className="mega-counter"><span className="counter-js" data-count="46">46</span>K+
                                    </p>
                                    <span className="descr-index">Solar Plate Installed</span>
                                </div>
                            </div>
                            <div className="over-exper-sec zoom_in">
                                <div className="subscribe-index">
                                    <p className="mega-counter"><span className="counter-js" data-count="15">15</span>K+
                                    </p>
                                    <span className="descr-index">Projects Completed</span>
                                </div>
                            </div>
                            <div className="over-exper-sec zoom_in">
                                <div className="subscribe-index">
                                    <p className="mega-counter"><span className="counter-js" data-count="99">99</span>%
                                    </p>
                                    <span className="descr-index">Customers Satisfaction</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ========================= [ Experience sectond Exit ] ========================= --> */}
                {/* <!-- ========================= [ Why Choose Section Start ] ========================= --> */}
                <div className="about-data" id="why-choose">
                    <div className="container">
                        <div className="choose-data fade_down">
                            <div className="box-data-design">
                                <div className="dot-data"></div>
                                <p className="title-font">Why Choose Us</p>
                            </div>
                        </div>
                        <div className="row data-why">
                            <div className="col-xl-6 col-lg-6">
                                <h2 className="title-about fade_down">
                                    Sustainable Care For Your <span>Home and Earth</span>
                                </h2>
                                <p className="tile-data-about fade_down why-choose-desc">At Sun Star, we believe in the power of
                                    renewable energy to create a more sustainable future. With a passion for clean energy and a commitment to our customers, we are dedicated to delivering the of best possible solutions.</p>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="video-data fade_down">
                                    <video autoPlay muted loop playsInline preload="metadata">
                                        <source src={Video1} type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>
                        <div className="row why-choose-data">
                            <div className="col-xl-3 col-lg-6 col-md-6 col-12">
                                <div className="why-detail-area fade_down">
                                    <div className="top-tilte">
                                        <img src={ArrowChoose} alt="about" />
                                        <p className="title-top">Custom Strategies</p>
                                    </div>
                                    <p className="title-desc-why">Lorem ipsum dolor sit amet consectetur. Tellus consectetur
                                        viverra in vitae nullam id a tortor dignissim.</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-12">
                                <div className="why-detail-area fade_down">
                                    <div className="top-tilte">
                                        <img src={ArrowChoose} alt="about" />
                                        <p className="title-top">Professional Setup</p>
                                    </div>
                                    <p className="title-desc-why">Lorem ipsum dolor sit amet consectetur. Adipiscing habitant et
                                        leo malesuada sit a.</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-12">
                                <div className="why-detail-area fade_down">
                                    <div className="top-tilte">
                                        <img src={ArrowChoose} alt="about" />
                                        <p className="title-top">Luxury Panels</p>
                                    </div>
                                    <p className="title-desc-why">Lorem ipsum dolor sit amet consectetur. Sit arcu egestas netus
                                        eu etiam mauris nulla id pretium.</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-12">
                                <div className="why-detail-area fade_down">
                                    <div className="top-tilte">
                                        <img src={ArrowChoose} alt="about" />
                                        <p className="title-top">27/7 Support</p>
                                    </div>
                                    <p className="title-desc-why">Lorem ipsum dolor sit amet consectetur. Porttitor sit iaculis
                                        adipiscing mattis nec elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ========================= [ Why Choose Section Exit ] ========================= --> */}
                {/* <!-- ========================= [ Team Members Section Start ] ========================= --> */}
                <div className="about-data pt-0">
                    <div className="data-team-biggest">
                        <div className="container">
                            <div className="success-detail fade_down">
                                <div className="box-data-design">
                                    <div className="dot-data"></div>
                                    <p className="title-font">Team Members</p>
                                </div>
                                <h2 className="title-about">
                                    Meet Our <span>Amazing Solar Experts</span>
                                </h2>
                            </div>
                            <div className="testimonial-main team-all row">
                                <Team limit={4} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ========================= [ Team Members Section Exit ] ========================= --> */}
                {/* <!-- ========================= [ Appointment Section Start ] ========================= --> */}
                <div className="padding-sucess">
                    <div className="make-appoint bg-container pt-0 " id="make-appoint">
                        <div className="w-apoint">
                            <div className={`main-div-appoint appointbg-${currentIndex}`}>
                                <button className="appoint-video popup-youtube" onClick={() => setIsOpen(true)}>
                                    <img src={PlayImg} alt="play" />
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* ---YT Video Modal --- */}
                    <VideoModal
                        isOpen={isOpen}
                        onClose={() => setIsOpen(false)}
                        videoUrl={videoData.youtubeUrl}
                    />
                    {/* ========== APPOINTMENT FORM ========== */}
                    <AppointmentForm />
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
                                <TestimonialSec />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ========================= [ Testimonial Section Exit ] ========================= --> */}
            </div>
        </>
    )
}

export default AboutUs