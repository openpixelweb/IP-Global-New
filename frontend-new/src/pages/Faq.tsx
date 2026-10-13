import { Link } from 'react-router-dom';
import FaqSec from '../components/FaqSec.tsx';
import Plan1 from '../assets/images/plan/plan-1.png';
import Plan3 from '../assets/images/plan/plan-3.png';
import Video1 from '../assets/images/why-choose/why-choose.mp4';
import ArrowChoose from '../assets/images/why-choose/arrow.png';
import TestimonialSec from '../components/TestimonialSec.tsx';

const Faq: React.FC = () => {
    return (
        <div>
            <div className="js-scroll">
                {/* <!-- ========================= [ hero section all separate start ] ========================= --> */}
                <div className="bg-container hero-data-bottom">
                    <div className="services-home-hero fax-bg">
                        <div className="title-of-hero">
                            <p>FAQs</p>
                            <span><Link to="/">Home</Link> - FAQs</span>
                        </div>
                    </div>
                </div>
                {/* <!-- ========================= [ hero section all separate Exit ] ========================= --> */}
                {/* <!-- ========================= [ FAQs section all separate Start ] ========================= --> */}
                <div className="about-data">
                    <div className="container">
                        <div className="success-detail fade_down">
                            <div className="box-data-design">
                                <div className="dot-data"></div>
                                <p className="title-font">FAQs</p>
                            </div>
                            <h2 className="title-about">
                                Have Any Questions for <span>Solar Energy or Sun Star</span>
                            </h2>
                        </div>
                        <div className="row testimonial-main faq-data-main">
                            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                                <div className="question-design">
                                    <Link to="/Faq" className="question-design-li fade_down">
                                        <div className="image-data-faq">
                                            <img src={Plan1} alt="Plan1" className="first-faq-image" />
                                            <img src={Plan3} alt="Plan3" className="sec-faq-image" />
                                        </div>
                                        <p>General Questions</p>
                                    </Link>
                                    <Link to="/Faq" className="question-design-li fade_down">
                                        <div className="image-data-faq">
                                            <img src={Plan1} alt="Plan1" className="first-faq-image" />
                                            <img src={Plan3} alt="Plan3" className="sec-faq-image" />
                                        </div>
                                        <p>Installation Questions</p>
                                    </Link>
                                    <Link to="/Faq" className="question-design-li fade_down">
                                        <div className="image-data-faq">
                                            <img src={Plan1} alt="Plan1" className="first-faq-image" />
                                            <img src={Plan3} alt="Plan3" className="sec-faq-image" />
                                        </div>
                                        <p>Maintenance Questions</p>
                                    </Link>
                                    <Link to="/Faq" className="question-design-li fade_down">
                                        <div className="image-data-faq">
                                            <img src={Plan1} alt="Plan1" className="first-faq-image" />
                                            <img src={Plan3} alt="Plan3" className="sec-faq-image" />
                                        </div>
                                        <p>Costs & Savings Questions</p>
                                    </Link>
                                    <Link to="/Faq" className="question-design-li fade_down">
                                        <div className="image-data-faq">
                                            <img src={Plan1} alt="Plan1" className="first-faq-image" />
                                            <img src={Plan3} alt="Plan3" className="sec-faq-image" />
                                        </div>
                                        <p>Policy Questions</p>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12">
                                <div className="faq-container faq-container-seprate">
                                    <FaqSec />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ========================= [ FAQs section all separate Exit ] ========================= --> */}
                {/* <!-- ========================= [ Why Choose Section Start ] ========================= --> */}
                <div className="about-data pt-0" id="why-choose">
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
                                        viverra in vitae nullam id
                                        a tortor dignissim.</p>
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
            </div>
        </div>
    )
}

export default Faq