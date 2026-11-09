import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import PowerBattery from '../assets/images/hero/power-battry.png';
import BtnImage from '../assets/images/hero/btn-image.svg';
import AboutImage1 from '../assets/images/about/image-1.png';
import AboutImage2 from '../assets/images/about/image-2.png';
import PlayImg from '../assets/images/appointment/play.png';
import videoData from '../data/videoData.json';
import VideoModal from "../components/VideoModal.tsx";
import Video1 from '../assets/images/why-choose/why-choose.mp4';
import ArrowChoose from '../assets/images/why-choose/arrow.png';
import CallIconSvg from '../assets/images/prosess/call-icon.svg';
import SuccessSlider from "../components/SuccessSlider.tsx";
import TestimonialSec from '../components/TestimonialSec.tsx';
import ProcessSec from "../components/ProcessSec.tsx";
import Team from "../components/Team.tsx";
import FaqSec from "../components/FaqSec.tsx";
import Blog from "../components/Blog.tsx";
import ServicesSec from "../components/ServicesSec.tsx";
import AppointmentForm from "../components/AppointmentForm.tsx";

const Home4: React.FC = () => {
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
            {/* <!-- ========================= [ hero Section Start ] ========================= --> */}
            <div className="bg-container data-gap m-0">
                <div className="data-video">
                    <video className="bg-video" autoPlay muted loop playsInline>
                        <source src={Video1} type="video/mp4" />
                    </video>
                    <div className="image-home video-home">
                        <div className="container">
                            <div className="data-hero-home">
                                <div className="home-made-services animation-data">
                                    <img src={PowerBattery} alt="image" />
                                    <p className="home-made-title">Eco-Friendly Energy</p>
                                </div>
                                <h1 className="home-hero-title animation-data">Brightening Your Future with <span>Sun Star
                                    Solar Energy</span>
                                </h1>
                                <p className="home-desc-made animation-data">At Sun Star, we’re dedicated to transforming
                                    how you power your life. Wave goodbye to rising energy costs and welcome a
                                    cleaner, brighter tomorrow with our cutting-edge solar solutions.</p>
                                <Link to="/Services1" className="button d-inline-flex">
                                    <span className="btn-text">Our Services</span>
                                    <img src={BtnImage} alt="BtnImage" />
                                </Link>
                            </div>
                        </div>
                        <div className="text-relable-data">
                            <p className="home-renewable">Renewable</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ========================= [ Services Section Start ] ========================= --> */}
            <div className="bg-container pt-0 pb-0" id="services">
                <div className="data-box-services">
                    <div className="services">
                        <div className="overlay-data"></div>
                        <div className="data-design-margin">
                            <div className="container">
                                <div className="main-box fade_down">
                                    <div className="box-design">
                                        <div className="dot"></div>
                                        <p className="title-font">Our Services</p>
                                    </div>
                                </div>
                                <div className="max-width-data fade_down">
                                    <h2 className="title-font-sec">Customized Solar Solutions for
                                        <span> Sustainable Energy</span>
                                    </h2>
                                </div>
                                <p className="desc-title fade_down">At Sun Star, we harness renewable energy to power a
                                    sustainable tomorrow. With passion for clean solutions and dedication to our customers, we strive to deliver excellence in every step.</p>
                            </div>
                        </div>
                    </div>
                    <ServicesSec />
                </div>
            </div>
            {/* <!-- ========================= [ Services Section Exit ] ========================= --> */}
            {/* <!-- ========================= [ About Section Start ] ========================= --> */}
            <div className="about-data bihind-the-squre" id="about-data">
                <div className="container">
                    <div className="about-detail row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="box-data-design">
                                <div className="dot-data"></div>
                                <p className="title-font">About Us</p>
                            </div>
                            <h2 className="title-about">
                                We Aim to Shine Bright in the <span>Solar Energy Industry</span>
                            </h2>
                            <p className="tile-data-about fade_down">We're committed to revolutionizing the way you think
                                about energy. Say goodbye to skyrocketing utility bills and hello to a brighter,green future with our state-of-art solar energy solutions.</p>
                            <p className="tile-data-about margin-about fade_down">We're committed to revolutionizing the way
                                you think about energy. Say goodbye to skyrocketing utility bills and hello to a brighter,green future with our state-of-art solar energy solutions.</p>
                            <Link to="/AboutUs" className="button d-inline-flex fade_down">
                                <span className="btn-text">Discover More</span>
                                <img src={BtnImage} alt="BtnImage" />
                            </Link>
                            <div className="image-data-about zoom_in">
                                <img src={AboutImage1} alt="AboutImage1" className="position-relative" />
                                <div className="data-experience">
                                    <div className="font-about-exper">
                                        <p className="font-exper count" data-number="14">14</p>
                                        <div className="rounded-about"></div>
                                        <p className="year-exper">Years of Experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="deta-right-design">
                                <div className="experience-top zoom_in">
                                    <div className="data-tpo">
                                        <div className="palate-exper-left">
                                            <div className="subscribe-index">
                                                <p className="mega-counter">
                                                    <span className="counter-js" data-count="46">46</span>+
                                                </p>
                                                <span className="descr-index">Solar Plate Installed</span>
                                            </div>
                                        </div>
                                        <div className="palate-exper-right">
                                            <div className="subscribe-index">
                                                <p className="mega-counter">
                                                    <span className="counter-js" data-count="15">15</span>K+
                                                </p>
                                                <span className="descr-index">Projects Completed</span>
                                            </div>
                                        </div>
                                        <div className="palate-exper-bottom">
                                            <div className="subscribe-index">
                                                <p className="mega-counter">
                                                    <span className="counter-js" data-count="99">99</span>%
                                                </p>
                                                <span className="descr-index">Customers Satisfaction</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="data-bto zoom_in">
                                    <img src={AboutImage2} alt="AboutImage2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ========================= [ About Section Exit ] ========================= --> */}
            {/* <!-- ========================= [ Appointment Section Start ] ========================= --> */}
            <div className="make-appoint bg-container pt-0 pb-0" id="make-appoint">
                <div className="w-apoint">
                    <div className={`main-div-appoint appointbg-${currentIndex}`}>
                        <button className="appoint-video popup-youtube" onClick={() => setIsOpen(true)}>
                            <img src={PlayImg} alt="play" />
                        </button>
                    </div>
                </div>
            </div>
            <VideoModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                videoUrl={videoData.youtubeUrl}
            />
            {/* ========== APPOINTMENT FORM ========== */}
            <AppointmentForm />
            {/* <!-- ========================= [ Appointment Section Exit ] ========================= --> */}
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
            {/* <!-- ========================= [ Our Success Section Start ] ========================= --> */}
            <div className="success-data">
                <div className="container">
                    <div className="success-detail fade_down">
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
            <div className="about-data testimonial" id="testimonial">
                <div className="container">
                    <div className="success-detail fade_down">
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
            </div>                                                                                            {/* <!-========================= [ Working Prosess Section Start ] ===================== --> */}
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
            {/* <!-- ========================= [ Team Members Section Start ] ========================= --> */}
            <div className="about-data">
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
            {/* <!-- ========================= [ FAQ Section Start ] ========================= --> */}
            <div className="faq-setarted work-data about-data">
                <div className="container">
                    <div className="fact-data fade_down">
                        <div className="box-data-design">
                            <div className="dot-data"></div>
                            <p className="title-font">FAQs</p>
                        </div>
                    </div>
                    <div className="falq-all row">
                        <div className="col-xl-5 col-lg-5 col-md-12">
                            <h2 className="title-about data-flow  fade_down">
                                Everything You Need To Know About <span>Our Services Solution</span>
                            </h2>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-12">
                            <FaqSec />
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ========================= [ FAQ Section Exit ] ========================= --> */}
            {/* <!-- ========================= [ Blog Section Start ] ========================= --> */}
            <div className="blog-sec">
                <div className="about-data">
                    <div className="container">
                        <div className="success-detail ">
                            <div className="box-data-design zoom_in">
                                <div className="dot-data"></div>
                                <p className="title-font">Latest Blog Post</p>
                            </div>
                            <h2 className="title-about zoom_in">
                                Read Our <span>Latest Solar Insights</span>
                            </h2>
                        </div>
                        <div className="row justify-content-center blog-data testimonial-main">
                            <Blog limit={3} />
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ========================= [ Blog Section Exit ] ========================= --> */}
        </>
    )
}

export default Home4