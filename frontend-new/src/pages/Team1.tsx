import { Link } from 'react-router-dom';
import Team from "../components/Team.tsx";
import SuccessSlider from '../components/SuccessSlider.tsx';
import TestimonialSec from '../components/TestimonialSec.tsx';


const Team1: React.FC = () => {
    return (
        <>
            <div className="js-scroll">
                {/* <!-- ========================= [ hero section all separate start ] ========================= --> */}
                <div className="bg-container hero-data-bottom">
                    <div className="services-home-hero team-data-bg">
                        <div className="title-of-hero">
                            <p>Our Team</p>
                            <span><Link to="/">Home</Link> - Our Team</span>
                        </div>
                    </div>
                </div>
                {/* <!-- ========================= [ hero section all separate Exit ] ========================= --> */}
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
                            <div className="testimonial-main team-all team-sec-detail row">
                                <Team />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ========================= [ Team Members Section Exit ] ========================= --> */}
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
            </div>
        </>
    )
}

export default Team1