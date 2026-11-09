import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import DetailImg from '../assets/images/services/detail-image.png';
import AboutDetail1 from '../assets/images/about/about-detail-1.png';
import AboutDetail2 from '../assets/images/about/about-detail-2.png';
import AboutDetail3 from '../assets/images/about/about-detail-3.png';
import AboutDetail4 from '../assets/images/about/about-detail-4.png';
import AboutDetail5 from '../assets/images/about/about-detail-5.png';
import ArrowImg from '../assets/images/services/arrow.svg';
import UserSvg from '../assets/images/appointment/user.svg';
import MailSvg from '../assets/images/appointment/mail.svg';
import CallSvg from '../assets/images/appointment/call.svg';
import MessageSvg from '../assets/images/appointment/message.svg';
import BtnImage from '../assets/images/hero/btn-image.svg';
import ctctSvg from '../assets/images/header/ctct.svg';
import ProjectsSec from '../components/ProjectsSec.tsx';

const SingleProjects: React.FC = () => {

    const derightSlider = {
        modules: [Autoplay],
        autoplay: { delay: 2000, disableOnInteraction: false },
        speed: 1000,
        loop: true,
        slidesPerView: 4,
        spaceBetween: 20,
        breakpoints: {
            1290: { slidesPerView: 4 },
            1140: { slidesPerView: 4 },
            992: { slidesPerView: 3 },
            960: { slidesPerView: 3 },
            768: { slidesPerView: 3 },
            576: { slidesPerView: 2 },
            0: { slidesPerView: 2 },
        },
    };
    return (
        <>
            <div className="js-scroll">
                {/* <!-- ========================= [ hero section all separate start ] ========================= --> */}
                <div className="bg-container hero-data-bottom">
                    <div className="services-home-hero pro-detail-bg">
                        <div className="title-of-hero">
                            <p>Rooftop Solar Installations</p>
                            <span><Link to="/">Home</Link>- Projects - Rooftop Solar Installations</span>
                        </div>
                    </div>
                </div>
                {/* <!-- ========================= [ hero section all separate Exit ] ========================= --> */}
                {/* <!-- ========================= [ About detail section all separate Start ] ========================= --> */}
                <div className="about-data pb-0">
                    <div className="container">
                        <div className="row about-seprate-detail">
                            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                                <p className="services-detail-title zoom_in">About The Project</p>
                                <p className="detail-desc separte-about zoom_in">We offer customized solar systems for homes of
                                    all sizes, helping households reduce electricity bills and environmental impact. Our team handles every step, from planning and permitting to installation and post-installation support. Combine
                                    wind energy with other renewable sources like solar or hydropower for a balanced, reliable energy mix tailored to your needs. Comprehensive wind turbine installation services, including site preparation,
                                    turbine assembly, and connection to the power grid.</p>
                                <div className="main-services-iomages mb-0 zoom_in">
                                    <img src={DetailImg} alt="DetailImg" />
                                </div>
                                <Swiper {...derightSlider} className="deright-sport">
                                    <SwiperSlide>
                                        <div className="about-slider-design">
                                            <img src={AboutDetail1} alt="AboutDetail1" />
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="about-slider-design">
                                            <img src={AboutDetail2} alt="AboutDetail2" />
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="about-slider-design">
                                            <img src={AboutDetail3} alt="AboutDetail3" />
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="about-slider-design">
                                            <img src={AboutDetail4} alt="AboutDetail4" />
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="about-slider-design">
                                            <img src={AboutDetail5} alt="AboutDetail5" />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <p className="detail-desc separte-about zoom_in">Detailed analysis of wind conditions at your
                                    site using advanced tools and data modeling. This service helps determine
                                    the feasibility and potential energy output of wind power systems.</p>
                                <p className="detail-desc separte-about zoom_in">In the global shift toward renewable energy,
                                    wind turbines play a critical role in diversifying the energy mix.
                                    Harnessing the power of the wind is not only sustainable but also increasingly
                                    cost-effective, making it a popular
                                    choice for residential, commercial, and utility-scale applications. This blog explores
                                    the process of wind turbine
                                    installation and its importance in achieving a cleaner, greener future.</p>
                                <p className="services-detail-title-sec mb-0 zoom_in"> Solar Panel Installation</p>
                                <p className="detail-desc foren-about zoom_in">We offer carbon offset services to help
                                    individuals and businesses reduce their carbon footprint. By investing in
                                    certified renewable energy projects, you can offset emissions and contribute to a
                                    cleaner, more sustainable environment.
                                    Support sustainable transportation with our EV charging station installation service.
                                    Our team provides home, business,
                                    and public charging station solutions powered by renewable energy, promoting greener
                                    mobility.</p>
                                <p className="detail-desc foren-about zoom_in">Our team of experts provides in-depth
                                    consultations to help you explore the best renewable energy options for your
                                    property. We assess energy needs, budget, and location to develop customized,
                                    sustainable solutions for homes,
                                    businesses, and public institutions. Maximize your energy efficiency with our smart
                                    energy management systems.</p>
                                <div className="row data-about-setedf">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <ul className="service-ul zoom_in">
                                            <li className="services-li zoom_in">
                                                <img src={ArrowImg} alt="about" />
                                                <p>Renewable Energy Source</p>
                                            </li>
                                            <li className="services-li zoom_in">
                                                <img src={ArrowImg} alt="about" />
                                                <p>Environmentally Friendly</p>
                                            </li>
                                            <li className="services-li zoom_in">
                                                <img src={ArrowImg} alt="about" />
                                                <p>Increases Property Value</p>
                                            </li>
                                            <li className="services-li zoom_in">
                                                <img src={ArrowImg} alt="about" />
                                                <p>Reduces Electricity Bills</p>
                                            </li>
                                            <li className="services-li zoom_in">
                                                <img src={ArrowImg} alt="about" />
                                                <p>Energy Independence</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <ul className="service-ul zoom_in">
                                            <li className="services-li zoom_in">
                                                <img src={ArrowImg} alt="about" />
                                                <p>Government Incentives</p>
                                            </li>
                                            <li className="services-li zoom_in">
                                                <img src={ArrowImg} alt="about" />
                                                <p>Low Maintenance Costs</p>
                                            </li>
                                            <li className="services-li zoom_in">
                                                <img src={ArrowImg} alt="about" />
                                                <p>Diverse Applications</p>
                                            </li>
                                            <li className="services-li zoom_in">
                                                <img src={ArrowImg} alt="about" />
                                                <p>Adaptable to Varied Locations</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <p className="services-detail-title-sec mb-0 zoom_in"> The Challenge Of Project</p>
                                <p className="detail-desc foren-about zoom_in">We provide turnkey solar solutions, from design
                                    and installation to monitoring and maintenance. Whether for homes,
                                    businesses, or communities, our solar energy systems offer a sustainable, cost-effective
                                    power source that reduces
                                    carbon footprints and energy bills. Harness the power of the wind with our customized
                                    wind energy solutions. From site
                                    assessment to turbine installation, we offer end-to-end services, including maintenance,
                                    to ensure reliable and
                                    efficient wind energy production for residential and commercial clients.</p>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-7">
                                <div className="data-all-services-contact">
                                    <div className="all-services-box zoom_in">
                                        <p className="serives-title-detail-box">Project Information</p>
                                        <ul className="all-box-about">
                                            <li className="lock-about">
                                                <span>Project Date</span>
                                                <p>19 November,2025</p>
                                            </li>
                                            <li className="lock-about">
                                                <span>Client Name</span>
                                                <p>Michel Miller</p>
                                            </li>
                                            <li className="lock-about">
                                                <span>Energy Generation</span>
                                                <p>50,000 KWh / year</p>
                                            </li>
                                            <li className="lock-about">
                                                <span>Project Location</span>
                                                <p>42 Hanston, NY, USA</p>
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
                                                    <textarea placeholder="Write Message..."
                                                        className="textarea-box service-hight"
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
                                        <p className="data-spect">Contact For Inquiry</p>
                                        <p className="data-overan about-text-spotry">Need Help? We Are Here To Help You</p>
                                        <div className="input-submit">
                                            <Link to="/Contact" className="button">
                                                <span className="btn-text">Contact Us</span>
                                                <img src={ctctSvg} alt="ctctSvg" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ========================= [ About detail section all separate Start ] ========================= --> */}
                {/* <!-- ========================= [ FAQs section all separate Start ] ========================= --> */}
                <div className="blog-sec">
                    <div className="about-data">
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
                            <div className="testimonial-main row testimonial-seprate">
                                <ProjectsSec limit={3} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProjects