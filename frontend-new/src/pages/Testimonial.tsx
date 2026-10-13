import { Link } from "react-router-dom";
import StarSvg from "../assets/images/testimonial/star.svg";
import SunSvg from "../assets/images/testimonial/sun.svg";
import testimonialData from "../data/testimonialData.json";

const Testimonial: React.FC = () => {
    return (
        <>
            <div className="js-scroll">
                {/* ========================= Hero Section ========================= */}
                <div className="bg-container hero-data-bottom">
                    <div className="services-home-hero testimonial-bg">
                        <div className="title-of-hero">
                            <p>Testimonials</p>
                            <span>
                                <Link to="/">Home</Link> - Testimonials
                            </span>
                        </div>
                    </div>
                </div>

                {/* ========================= Testimonial Section ========================= */}
                <div className="blog-sec">
                    <div className="about-data">
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

                            <div className="testimonial-main row testimonial-seprate">
                                {testimonialData.map((item, index) => (
                                    <div
                                        className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
                                        key={index}
                                    >
                                        <div className="seprate-test zoom_in">
                                            <div className="review-data">
                                                <div className="star-data">
                                                    {[...Array(5)].map((_, i) => (
                                                        <img key={i} src={StarSvg} alt="star" />
                                                    ))}
                                                </div>
                                            </div>

                                            <p className="title-seprate">{item.title}</p>
                                            <p className="desc-title-testimonial">“{item.desc}”</p>

                                            <div className="last-ntesti">
                                                <img src={SunSvg} alt="SunSvg" />
                                                <p>{item.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonial;
