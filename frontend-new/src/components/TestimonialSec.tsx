import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import StarSvg from '../assets/images/testimonial/star.svg';
import TestimonialMessageSvg from '../assets/images/testimonial/messge.svg';
import testimonialData from '../data/testimonialData.json';

interface TestimonialItem {
    image: string;
    title: string;
    desc: string;
    name: string;
}

// Type the imported images correctly
const images = import.meta.glob("../assets/images/testimonial/**/*", {
    eager: true,
    import: "default",
}) as Record<string, string>;

const TestimonialSec: React.FC = () => {
    const swiperConfig = {
        modules: [Autoplay],
        autoplay: { delay: 2500 },
        loop: true,
        className: "image-swiper",
    };

    const swiperConfig2 = {
        modules: [Autoplay],
        autoplay: { delay: 2500 },
        loop: true,
        className: "text-swiper",
    };

    return (
        <div className="row testimonial-row">
            {/* Image Slider */}
            <div className="col-xl-4 col-lg-4 col-md-4 col-12">
                <div className="image-testimonail-slide zoom_in">
                    <Swiper {...swiperConfig}>
                        {testimonialData.map((item: TestimonialItem, index: number) => {
                            const imgPath = `../assets/images/testimonial/${item.image}`;
                            const imageSrc = images[imgPath];

                            if (!imageSrc) return null;

                            return (
                                <SwiperSlide key={index}>
                                    <div className="image-data-test">
                                        <img src={imageSrc} alt={`testimonial-${index}`} />
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>

            {/* Content Slider */}
            <div className="col-xl-8 col-lg-8 col-md-8 col-12">
                <div className="client-says zoom_in">
                    <Swiper {...swiperConfig2}>
                        {testimonialData.map((item: TestimonialItem, index: number) => (
                            <SwiperSlide key={index}>
                                <div className="main-testimonail-data">
                                    <div className="star-data">
                                        {[...Array(5)].map((_, i) => (
                                            <img key={i} src={StarSvg} alt="star" />
                                        ))}
                                    </div>

                                    <p className="client-title">{item.title}</p>
                                    <p className="client-desc">“{item.desc}”</p>

                                    <div className="message-data">
                                        <img src={TestimonialMessageSvg} alt="message" />
                                        <p className="message-title">{item.name}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSec;
