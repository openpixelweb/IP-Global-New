import { Link } from 'react-router-dom';
import BlogDetail1img from '../assets/images/blog/blog-detail-1.png';
import BlogDetail2img from '../assets/images/blog/blog-detail-2.png';
import ArrowServices from '../assets/images/services/arrow.svg';
import UserSvg from '../assets/images/appointment/user.svg';
import MailSvg from '../assets/images/appointment/mail.svg';
import CallSvg from '../assets/images/appointment/call.svg';
import MessageSvg from '../assets/images/appointment/message.svg';
import BtnImage from '../assets/images/hero/btn-image.svg';
import ctctSvg from '../assets/images/header/ctct.svg';
import Blog from '../components/Blog.tsx';

const BlogDetail2: React.FC = () => {
    return (
        <>
            <div className="js-scroll">
                {/* <!-- ========================= [ hero section all separate start ] ========================= --> */}
                <div className="bg-container hero-data-bottom">
                    <div className="services-home-hero blog-det">
                        <div className="title-of-hero">
                            <p>Blog Detail</p>
                            <span><Link to="/">Home</Link> - Blog Detail</span>
                        </div>
                    </div>
                </div>
                {/* <!-- ========================= [ hero section all separate Exit ] ========================= --> */}
                <div className="about-data">
                    <div className="container">
                        <div className="row data-services-detail data-reverse">
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-7">
                                <div className="data-all-services-contact">
                                    <div className="all-services-box zoom_in">
                                        <p className="serives-title-detail-box">Blog Information</p>
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
                                                <span>Blog Location</span>
                                                <p>42 Hanston, NY, USA</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="all-contact">
                                        <p className="fade_down">Leave A Comment</p>
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
                                                <Link to="/" className="button mt-0">
                                                    <span className="btn-text">send comment</span>
                                                    <img src={BtnImage} alt="BtnImage" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="company-pro fade_down">
                                        <p className="data-spect">Contact For Inquiry</p>
                                        <p className="data-overan about-text-spotry">Need Help? We Are Here To Help You</p>
                                        <div className="input-submit">
                                            <Link to="/" className="button">
                                                <span className="btn-text">Contact Us</span>
                                                <img src={ctctSvg} alt="ctctSvg" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                                <div className="left-blog-data">
                                    <p className="services-detail-title zoom_in mb-3">Exploring the latest innovations in solar
                                        technology</p>
                                    <div className="blog-separate-image zoom_in">
                                        <img src={BlogDetail1img} alt="BlogDetail1img" />
                                    </div>
                                    <div className="blog-comment-bloger zoom_in">
                                        <div className="bloge-date-sep">
                                            <i className="ri-calendar-line"></i>
                                            <p>July 14, 2025</p>
                                        </div>
                                        <div className="bloge-date-sep">
                                            <i className="ri-message-3-line"></i>
                                            <p><span>comments :</span>35</p>
                                        </div>
                                        <div className="bloge-date-sep">
                                            <i className="ri-folder-line"></i>
                                            <p><span>Category :</span>sport</p>
                                        </div>
                                    </div>
                                    <p className="detail-desc zoom_in">Solar energy is evolving faster than ever from
                                        breakthroughs in solar panels and energy storage, to new methods of
                                        harnessing and distributing power. In this blog, we dive into the most cutting-edge
                                        solar technologies reshaping our world: ultra-efficient photovoltaic materials, transparent solar windows, perovskite cells, next-generation battery systems, smart grid integration, flexible thin-film solar panels, and more.</p>
                                    <p className="detail-desc zoom_in mt-2">Whether you're a clean energy enthusiast, engineer,
                                        investor, or simply curious about green tech, you’ll find in-depth
                                        coverage, expert insights, and the latest progress driving solar’s role in a
                                        sustainable future.</p>
                                    <div className="quite-box-data zoom_in">
                                        <p className="quiz-text-blog">"Amidst the chaos of modern life, let solar energy turn
                                            your home into a radiant haven where the gentle dance of
                                            sunlight powers your world, creating a sanctuary of possibilities."</p>
                                        <div className="line_client">
                                            <div className="line"></div>
                                            <p className="jordon">By Jordon Smith</p>
                                        </div>
                                    </div>
                                    <p className="detail-desc zoom_in">Discover the latest advancements in photovoltaic cells,
                                        including perovskite solar cells panels that deliver superior energy conversion rates. Learn how researchers are turning ordinary windows into energy-generating surfaces without compromising design or visibility.</p>
                                    <p className="services-detail-title-sec zoom_in mt-3">Powering Solutions with Solar</p>
                                    <div className="blog-separate-image zoom_in mt-3 mb-3">
                                        <img src={BlogDetail2img} alt="BlogDetail2img" />
                                    </div>
                                    <p className="detail-desc zoom_in">Solar energy is evolving faster than ever from
                                        breakthroughs in solar panels and energy storage, to new methods of harnessing and distributing power. In this blog, we dive into the most cutting-edge solar technologies reshaping our
                                        world: ultra-efficient photovoltaic materials, transparent solar windows, perovskite
                                        cells, next-generation battery systems, smart grid integration, flexible thin-film solar panels, and more.</p>
                                    <ul className="service-ul mt-3 zoom_in">
                                        <li className="services-li zoom_in">
                                            <img src={ArrowServices} alt="about" />
                                            <p>Clean and Sustainable Energy</p>
                                        </li>
                                        <li className="services-li zoom_in">
                                            <img src={ArrowServices} alt="about" />
                                            <p>Cost-Effective Power Solution</p>
                                        </li>
                                        <li className="services-li zoom_in">
                                            <img src={ArrowServices} alt="about" />
                                            <p>Innovation for a Brighter Future</p>
                                        </li>
                                        <li className="services-li zoom_in">
                                            <img src={ArrowServices} alt="about" />
                                            <p>Reduces Electricity Bills</p>
                                        </li>
                                        <li className="services-li zoom_in">
                                            <img src={ArrowServices} alt="about" />
                                            <p>Energy Independence</p>
                                        </li>
                                    </ul>
                                    <p className="detail-desc zoom_in mt-3">Whether you're a clean energy enthusiast, engineer,
                                        investor, or simply curious about green tech, you’ll find in-depth coverage, expert insights, and the latest progress driving solar’s role in a sustainable future.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ========================= [ blog post Section Start ] ========================= --> */}
                <div className="blog-sec">
                    <div className="about-data pt-0">
                        <div className="container">
                            <div className="success-detail fade_down">
                                <div className="box-data-design">
                                    <div className="dot-data"></div>
                                    <p className="title-font">Latest Blog Post</p>
                                </div>
                                <h2 className="title-about">
                                    Read Our <span>Latest Solar Insights</span>
                                </h2>
                            </div>
                            <div className="testimonial-main row testimonial-seprate">
                                <Blog limit={3} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogDetail2