import { Link } from 'react-router-dom';
import ServicesImg1 from '../assets/images/services/image-1.png';
import ServicesImg2 from '../assets/images/services/image-2.png';
import ServicesImg3 from '../assets/images/services/image-3.png';
import ServicesSvg1 from '../assets/images/services/01.svg';
import ServicesSvg2 from '../assets/images/services/02.svg';
import ServicesSvg3 from '../assets/images/services/03.svg';
import BtnImage from '../assets/images/hero/btn-image.svg';
import SuccessSlider from '../components/SuccessSlider.tsx';
import ThirdImg1 from '../assets/images/services/third-image-1.svg';
import ThirdImg2 from '../assets/images/services/third-image-2.svg';
import Video1 from '../assets/images/why-choose/why-choose.mp4';
import ArrowChoose from '../assets/images/why-choose/arrow.png';
import TestimonialSec from '../components/TestimonialSec.tsx';

const Services2: React.FC = () => {
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
                        <p className="separte-desc">At Sun Star, we believe in the power of renewable energy to create a
                            more sustainable future. With a passion for clean energy and a commitment to our customers, we are dedicated to delivering the best possible solutions.</p>
                    </div>
                    <div className="services-second testimonial-main">
                        <div className="container">
                            <div className="row data-sevices-sec">
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                    <div className="services-sec zoom_in">
                                        <div className="services-image">
                                            <img src={ServicesImg1} alt="ServicesImg1" />
                                        </div>
                                        <div className="services-second-text">
                                            <div className="box-data-services">
                                                <img src={ServicesSvg1} alt="ServicesSvg1" />
                                            </div>
                                            <p className="services-sec-title">Solar Installation</p>
                                            <p className="services-sec-desc">Eget pellentesque faucibus in nulla felis
                                                aliquam amet rhoncus sed. Libero at morbi viverra purus elementum.</p>
                                            <Link to="/Services2" className="button d-inline-flex">
                                                <span className="btn-text">Read More</span>
                                                <img src={BtnImage} alt="BtnImage" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                    <div className="services-sec zoom_in">
                                        <div className="services-image">
                                            <img src={ServicesImg2} alt="ServicesImg2" />
                                        </div>
                                        <div className="services-second-text">
                                            <div className="box-data-services">
                                                <img src={ServicesSvg2} alt="ServicesSvg2" />
                                            </div>
                                            <p className="services-sec-title">Solar Maintenance</p>
                                            <p className="services-sec-desc">Viverra mattis elementum mi posuere tristique
                                                accumsan eu sed. In dolor elit tortor rutrum et odio nunc.</p>
                                            <Link to="/Services2" className="button d-inline-flex">
                                                <span className="btn-text">Read More</span>
                                                <img src={BtnImage} alt="BtnImage" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                    <div className="services-sec zoom_in">
                                        <div className="services-image">
                                            <img src={ServicesImg3} alt="ServicesImg3" />
                                        </div>
                                        <div className="services-second-text">
                                            <div className="box-data-services">
                                                <img src={ServicesSvg3} alt="ServicesSvg3" />
                                            </div>
                                            <p className="services-sec-title">Solar Battery Solution</p>
                                            <p className="services-sec-desc">Sed elementum libero dictumst malesuada platea
                                                amet vitae. In ultrices enim at ac et. Viverra sit odio sed duis pretium
                                                sed.</p>
                                            <Link to="/Services2" className="button d-inline-flex">
                                                <span className="btn-text">Read More</span>
                                                <img src={BtnImage} alt="BtnImage" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ========================= [ our Services separate Exit ] ========================= --> */}
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
                                solutions allow you to store excess energy generated from renewable sources like solar and
                                wind. This enables a constant, uninterrupted power supply, providing energy independence.</p>
                            <div className="services-about fade_down">
                                <div className="services-about-image">
                                    <img src={ThirdImg1} alt="ThirdImg1" />
                                </div>
                                <div className="data-detail-service">
                                    <p>Professional Solar Expert</p>
                                    <span>Solar panels, also referred to as solar modules, are made up of multiple solar
                                        cells arranged in a grid. They are installed on rooftops, solar farms, and other suitable.</span>
                                </div>
                            </div>
                            <div className="services-about fade_down">
                                <div className="services-about-image">
                                    <img src={ThirdImg2} alt="ThirdImg2" />
                                </div>
                                <div className="data-detail-service">
                                    <p>24/7 Customer Support</p>
                                    <span>Lorem ipsum dolor sit amet consectetur. Molestie posuere a vel non. Sed quis
                                        molestie vitae viverra et morbi. Pretium
                                        lobortis eu pulvinar molestie facilisi morbi lectus dignissim.</span>
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

export default Services2