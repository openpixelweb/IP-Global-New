import { Link } from 'react-router-dom';
import Services1Svg from '../assets/images/services/services-1.svg';
import Services2Svg from '../assets/images/services/services-2.svg';
import Services3Svg from '../assets/images/services/services-3.svg';
import TracImg from '../assets/images/services/trac.png';
import SuccessSlider from '../components/SuccessSlider.tsx';
import BtnImage from '../assets/images/hero/btn-image.svg';
import CallIconSvg from '../assets/images/prosess/call-icon.svg';
import ArrowChoose from '../assets/images/why-choose/arrow.png';
import ProcessSec from '../components/ProcessSec.tsx';
import Video1 from '../assets/images/why-choose/why-choose.mp4';
import TestimonialSec from '../components/TestimonialSec.tsx';

const Services1: React.FC = () => {
    return (
        <>
            {/* <!-- ========================= [ hero section all separate start ] ========================= --> */}
            <div className="bg-container hero-data-bottom">
                <div className="services-home-hero">
                    <div className="title-of-hero">
                        <p>Services</p>
                        <span><Link to="/">Home</Link> - Services</span>
                    </div>
                </div>
            </div>
            {/* <!-- ========================= [ hero section all separate Exit ] ========================= --> */}
            {/* <!-- ========================= [ our Services separate Start ] ========================= --> */}
            <div className="about-data services-separate">
                <div className="container">
                    <div className="success-detail animation-data">
                        <div className="box-data-design">
                            <div className="dot-data"></div>
                            <p className="title-font">Our Services</p>
                        </div>
                        <h2 className="title-about">
                            Personalized Solar Solutions for <span>Renewable Energy</span>
                        </h2>
                        <p className="separte-desc ">At Sun Star, we believe in the power of renewable energy to create a
                            more sustainable future. With a passion for clean energy and a commitment to our customers, we are dedicated to delivering the best possible solutions.</p>
                    </div>
                    <div className="services-boxe testimonial-main">
                        <div className="container">
                            <div className="row box-services">
                                <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                                    <div className="boxdesign-services zoom_in">
                                        <img src={Services1Svg} alt="Services1Svg" />
                                        <p className="solar-services">Solar Installation</p>
                                        <p className="solar-desc">Eget pellentesque faucibus in nulla felis aliquam amet
                                            rhoncus sed. Libero at morbi viverra purus elementum phasellus.</p>
                                        <Link to="/ServicesDetail1" className="services-btn">
                                            <p>Read More</p>
                                            <img src={TracImg} alt="trac" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                                    <div className="boxdesign-services-center zoom_in">
                                        <img src={Services2Svg} alt="Services2Svg" />
                                        <p className="solar-services-center">Solar Installation</p>
                                        <p className="solar-desc-center">Eget pellentesque faucibus in nulla felis aliquam
                                            amet rhoncus sed. Libero at morbi viverra purus elementum phasellus.</p>
                                        <Link to="/ServicesDetail2" className="services-btn-center">
                                            <p>Read More</p>
                                            <img src={TracImg} alt="trac" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                                    <div className="boxdesign-services zoom_in">
                                        <img src={Services3Svg} alt="Services3Svg" />
                                        <p className="solar-services">Solar Battery Solution</p>
                                        <p className="solar-desc">Sed elementum libero dictumst malesuad platea amet
                                            vitae. In ultrices enim at ac et. Viverra sit odio sed duis pretium sed.</p>
                                        <Link to="/ServicesDetail2" className="services-btn">
                                            <p>Read More</p>
                                            <img src={TracImg} alt="trac" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ========================= [ our Services separate Exit ] ========================= --> */}
            {/* <!-- ========================= [ Our Success Section Start ] ========================= --> */}
            <div className="success-data padding-sucess">
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
                                renewable energy to create a more sustainable future. With a passion for clean
                                energy and a commitment to our customers, we are dedicated to delivering the of best
                                possible solutions.</p>
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
            {/* <!-- ========================= [ Testimonial Section Start ] ========================= --> */}
            <div className="blog-sec">
                <div className="about-data testimonial pt-0" id="testimonial">
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
                            <div className="row">
                                <TestimonialSec />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services1       