import React, { useEffect, useRef } from "react";
import { Link } from 'react-router-dom'
import DetailImage from '../assets/images/team/detail-image.png';
import ExperienceSvg from '../assets/images/team/experience.svg';
import MailSvg from '../assets/images/team/mail.svg';
import CallSvg from '../assets/images/team/call.svg';
import FaxSvg from '../assets/images/team/fax.svg';
import Team from '../components/Team.tsx';


interface BarRefItem {
    bar: HTMLDivElement | null;
    percentText: HTMLSpanElement | null;
    container: HTMLDivElement | null;
    percent: number;
}

const SingleTeam: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const barsRef = useRef<BarRefItem[]>([]);

    const progressItems = [
        { title: "Project Management", percent: 80 },
        { title: "Research and Development", percent: 90 },
        { title: "Communication and Teamwork", percent: 85 },
    ];

    // Check element in viewport
    const isInView = (el: HTMLElement | null): boolean => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    };

    useEffect(() => {
        let animated = false;

        const handleScroll = () => {
            if (!sectionRef.current) return;

            if (!animated && isInView(sectionRef.current)) {
                animated = true;

                barsRef.current.forEach((refObj) => {
                    if (!refObj) return;

                    const { bar, percentText, percent, container } = refObj;
                    if (!bar || !percentText || !container) return;

                    let start = 0;
                    const duration = 1500;
                    const startTime = performance.now();
                    const containerWidth = container.offsetWidth;

                    const animate = (now: number) => {
                        const progress = Math.min((now - startTime) / duration, 1);
                        const value = Math.floor(start + (percent - start) * progress);

                        bar.style.width = `${value}%`;

                        const moveX = (value / 100) * (containerWidth - 30);
                        percentText.style.transform = `translateX(${moveX}px)`;
                        percentText.textContent = `${value}%`;

                        if (progress < 1) requestAnimationFrame(animate);
                    };

                    requestAnimationFrame(animate);
                });
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);
    return (
        <>
            <div className="js-scroll">
                {/* <!-- ========================= [ hero section all separate start ] ========================= --> */}
                <div className="bg-container hero-data-bottom">
                    <div className="services-home-hero team-data-bg">
                        <div className="title-of-hero">
                            <p>Single Member</p>
                            <span><Link to="/">Home</Link> - Single Member</span>
                        </div>
                    </div>
                </div>
                {/* <!-- ========================= [ hero section all separate Exit ] ========================= --> */}
                <div className="about-data data-term-team">
                    <div className="container">
                        <div className="row team-detail-scoot">
                            <div className="col-xl-5 col-lg-5 col-md-12">
                                <div className="detail-image-team">
                                    <img src={DetailImage} alt="DetailImage" />
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-7 col-md-12">
                                <div className="desc-team">
                                    <div className="name-of-all fade_down">
                                        <div className="name-of-expert-detail">
                                            <p>Diana Wagner</p>
                                            <span>Inspection Expert</span>
                                        </div>
                                        <div className="social-icon-team">
                                            <a href="https://facebook.com/" target="_blank">
                                                <i className="ri-facebook-fill"></i>
                                            </a>
                                            <a href="https://twitter.com/" target="_blank">
                                                <i className="ri-twitter-x-fill"></i>
                                            </a>
                                            <a href="https://www.instagram.com" target="_blank">
                                                <i className="ri-instagram-line"></i>
                                            </a>
                                            <a href="https://linkedin.com/" target="_blank">
                                                <i className="ri-linkedin-fill"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <p className="team-about fade_down">Lorem ipsum dolor sit amet consectetur. Libero mauris
                                        enim tellus urna eget varius dolor odio. Tellus commodo at commodo semper. Leo orci enim nulla quis suspendisse dapibus ut ultricies at sagittis nunc. greener future with our
                                        state-of-the-art solar energy solutions. greener future with our state-of-the-art
                                        solar energy solutions.</p>
                                    <div className="info-card zoom_in">
                                        <div className="row g-0">
                                            <div className="col-md-6 data-four border-data d-flex align-items-center">
                                                <div className="design-boder-width">
                                                    <img src={ExperienceSvg} alt="ExperienceSvg" />
                                                </div>
                                                <div className="design-name-of-team">
                                                    <p>Experience</p>
                                                    <span className="doctef">More Than 7 Years</span>
                                                </div>
                                            </div>
                                            <div className="col-md-6 data-four border-data-sec d-flex align-items-center">
                                                <div className="design-boder-width">
                                                    <img src={MailSvg} alt="MailSvg" />
                                                </div>
                                                <div className="design-name-of-team">
                                                    <p>Email</p>
                                                    <a href="mailto:someone@example.com"
                                                        className="doctef">diana@sunstar.com</a>
                                                </div>
                                            </div>
                                            <div className="col-md-6 data-four border-data-right d-flex align-items-center ">
                                                <div className="design-boder-width">
                                                    <img src={CallSvg} alt="CallSvg" />
                                                </div>
                                                <div className="design-name-of-team">
                                                    <p>Phone</p>
                                                    <a href="tel:+911234567890" className="doctef">+1 (234) 567 8899</a>
                                                </div>
                                            </div>
                                            <div className="col-md-6 data-four d-flex align-items-center ">
                                                <div className="design-boder-width">
                                                    <img src={FaxSvg} alt="FaxSvg" />
                                                </div>
                                                <div className="design-name-of-team">
                                                    <p>Fax</p>
                                                    <a href="tel:+911889917788" className="doctef">(234) 8899 7788</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row testimonial-main data-very-team">
                            <div className="col-xl-6 col-lg-6 col-md-12">
                                <div className="data-noial">
                                    <p className="team-title-single fade_down">About <span>Me</span></p>
                                    <p className="dattitle-single fade_down">Lorem ipsum dolor sit amet consectetur. Nisl purus
                                        ut tristique convallis iaculis. Cras ac nisl integer eget integer. Vivamus aliquam quis tempor tellus sollicitudin egestas a nunc molestie. Sem ipsum eros quam leo arcu nec quisque.</p>
                                    <p className="dattitle-single fade_down mt-3">Duis sed at dolor tincidunt purus purus. At vitae
                                        faucibus volutpat rutrum ultricies pellentesque proin in. Fringilla ac nisl viverra lobortis. Vel nunc mattis tincidunt enim luctus ultrices porttitor. Tincidunt tortor sit lacus eu. Mattis
                                        at odio at pellentesque tellus venenatis neque. Sapien ac tortor turpis erat pellentesque neque sit pharetra. Amet venenatis neque mauris maecenas. Vitae in viverra pretium velit. Ut rhoncus lorem arcu sem molestie risus ac praesent commodo. Habitant adipiscing diam nisi id eu. Non viverra senectus sed sed tortor in. Vitae ut egestas lacus sagittis.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12">
                                <div className="data-noial">
                                    <p className="team-title-single fade_down">Professional <span>Skills</span></p>
                                    <p className="dattitle-single fade_down">Lorem ipsum dolor sit amet consectetur. Volutpat etiam
                                        aliquam elementum consectetur. Pellentesque euismod libero in scelerisque et suscipit pellentesque aliquet. Quis adipiscing bibendum lacus nulla tellus turpis sodales ac. Ornare
                                        proin magna bibendum neque lectus.</p>
                                    <div className="data-progress-single-design fade_down" ref={sectionRef}>
                                        {progressItems.map((item, index) => (
                                            <div className="skill-box" key={index}>
                                                <p className="skill-title">
                                                    {item.title}
                                                    <span
                                                        className="skill-percent"
                                                        ref={(el) => {
                                                            barsRef.current[index] = {
                                                                ...(barsRef.current[index] || {}),
                                                                percentText: el,
                                                                percent: item.percent,
                                                                bar: barsRef.current[index]?.bar || null,
                                                                container: barsRef.current[index]?.container || null
                                                            };
                                                        }}
                                                    >
                                                        0%
                                                    </span>
                                                </p>

                                                <div
                                                    className="progress"
                                                    ref={(el) => {
                                                        barsRef.current[index] = {
                                                            ...(barsRef.current[index] || {}),
                                                            container: el,
                                                        };
                                                    }}
                                                >
                                                    <div
                                                        className="progress-bar"
                                                        ref={(el) => {
                                                            barsRef.current[index] = {
                                                                ...(barsRef.current[index] || {}),
                                                                bar: el,
                                                                percent: item.percent,
                                                            };
                                                        }}
                                                        style={{ width: "0%" }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ========================= [ Testimonial Section Start ] ========================= --> */}
                <div className="blog-sec">
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
                                <div className="testimonial-main team-sec-deta row">
                                    <Team limit={4} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleTeam
