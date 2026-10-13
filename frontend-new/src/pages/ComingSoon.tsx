import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import LogoSvg from "../assets/images/header/Logo.svg";
import ComingSoonImg1 from "../assets/images/coming-soon/image-1.png";
import ComingSoonImg2 from "../assets/images/coming-soon/image-2.png";
import ComingSoonImg3 from "../assets/images/coming-soon/image-3.png";
import ComingSoonImg4 from "../assets/images/coming-soon/image-4.png";
import ComingSoonImg5 from "../assets/images/coming-soon/image-5.png";

interface Time {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

interface Animate {
    days: boolean;
    hours: boolean;
    minutes: boolean;
    seconds: boolean;
}

const ComingSoon: React.FC = () => {
    const comingSoonSlider = {
        draggable: true,
        arrows: false,
        dots: false,
        fade: true,
        speed: 1200,
        infinite: true,
        cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: false,
    };

    const sliderImages = [
        ComingSoonImg1,
        ComingSoonImg2,
        ComingSoonImg3,
        ComingSoonImg4,
        ComingSoonImg5,
    ];

    // Countdown target date → 1 April 2026
    const targetDate = new Date(Date.UTC(2026, 3, 1));

    const calculateTime = (): Time => {
        const now = new Date();
        const diff = targetDate.getTime() - now.getTime();

        return {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / (1000 * 60)) % 60),
            seconds: Math.floor((diff / 1000) % 60),
        };
    };

    const [time, setTime] = useState<Time>(calculateTime());
    const [animate, setAnimate] = useState<Animate>({
        days: false,
        hours: false,
        minutes: false,
        seconds: false,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prevTime) => {
                const newTime = calculateTime();

                (Object.keys(newTime) as (keyof Time)[]).forEach((key) => {
                    if (newTime[key] !== prevTime[key]) {
                        setAnimate((prev) => ({ ...prev, [key]: true }));

                        setTimeout(() => {
                            setAnimate((prev) => ({ ...prev, [key]: false }));
                        }, 900);
                    }
                });

                return newTime;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const pad = (num: number): string => ("0" + num).slice(-2);

    return (
        <div className="js-scroll">
            <div className="bg-container coming-data data-gap row">
                {/* Left Content */}
                <div className="col-lg-12 col-md-12 col-12 data-hero-sport main-skot">
                    <div className="left-slide-coming">
                        <Link to="/" className="logo-coming">
                            <img src={LogoSvg} alt="Logo" />
                        </Link>

                        <p className="comming-title">
                            The Future of Energy <span>Coming Soon</span>
                        </p>

                        <p className="comming-desc">
                            We’re bringing the power of the sun to your doorstep with
                            cutting-edge solar solutions. Stay tuned for a brighter, cleaner,
                            and sustainable future.
                        </p>

                        {/* Countdown */}
                        <div className="wrapper">
                            <div id="countdown-container" className="countdown-container">
                                <div id="js-countdown" className="countdown">
                                    <div id="js-days" className="number">
                                        <span className={animate.days ? "new" : "current"}>
                                            {pad(time.days)}
                                        </span>
                                    </div>
                                    <div id="js-hours" className="number">
                                        <span className={animate.hours ? "new" : "current"}>
                                            {pad(time.hours)}
                                        </span>
                                    </div>
                                    <div id="js-minutes" className="number">
                                        <span className={animate.minutes ? "new" : "current"}>
                                            {pad(time.minutes)}
                                        </span>
                                    </div>
                                    <div id="js-seconds" className="number">
                                        <span className={animate.seconds ? "new" : "current"}>
                                            {pad(time.seconds)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Email Subscribe */}
                        <div className="comming-input">
                            <input
                                id="email"
                                name="email"
                                className="email-input"
                                type="email"
                                placeholder="Your Email Address"
                                required
                            />
                            <Link to="/" className="button data-comming-soon-btn">
                                <span className="btn-text">Subscribe Now</span>
                            </Link>
                        </div>

                        <p className="comming-desc">
                            We are working hard to bring you the next generation of solar
                            energy solutions.
                        </p>

                        <div className="line-comming"></div>

                        {/* Footer Social */}
                        <div className="social-coming">
                            <p className="copy-comming mt-0">
                                Copyright {new Date().getFullYear()} © Design by{" "}
                                <a
                                    href="https://1.envato.market/website-portfolio"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Solar-Energy
                                </a>
                            </p>

                            <div className="social-main-data">
                                <a
                                    href="http://dribbble.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="social-design-comming"
                                >
                                    <i className="ri-dribbble-line"></i>
                                </a>
                                <a
                                    href="https://www.instagram.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="social-design-comming"
                                >
                                    <i className="ri-instagram-line"></i>
                                </a>
                                <a
                                    href="https://www.youtube.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="social-design-comming"
                                >
                                    <i className="ri-youtube-line"></i>
                                </a>
                                <a
                                    href="https://web.whatsapp.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="social-design-comming"
                                >
                                    <i className="ri-whatsapp-line"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Slider */}
                <div className="col-lg-12 col-md-12 col-12 data-hero-sport-two main-skot">
                    <div className="coming-image-data">
                        <Slider {...comingSoonSlider} className="slider-coming">
                            {sliderImages.map((img, i) => (
                                <div className="coming-slider" key={i}>
                                    <img src={img} alt={`coming-${i}`} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;
