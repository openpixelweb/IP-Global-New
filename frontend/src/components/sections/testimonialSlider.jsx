import React from 'react'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay } from "swiper/modules";
import { testimonialData } from '../../utlits/fackData/testimonialData';
import TestimonialCard from '../common/testimonialCard';
import { slideUp } from '../../utlits/slideUp';
import Title from '../common/title';

const TestimonialSlider = () => {
    return (
        <>
            <div className="testimonial-area pt-100 pb-75">
                <div className="container">
                    <Title sectionName={"Testimonial"} sectionTitle={"Our Customer Thought About Us."}/>

                    <motion.div className="testimonial-slider-info"
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={slideUp(1)}
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        <Swiper
                            spaceBetween={25}
                            slidesPerView={2}
                            speed={1000}
                            pagination={{
                                clickable: true,
                                el: ".swiper-pagination3",
                            }}
                            autoplay={{
                                delay: 2000,
                            }}
                            loop={true}
                            modules={[Pagination, Autoplay]}
                        >
                            {
                                testimonialData.slice(0, 4).map(({ id, name, position, rating, review, src }) => {
                                    return (
                                        <SwiperSlide key={id}>
                                            <TestimonialCard name={name} position={position} rating={rating} review={review} src={src} />
                                        </SwiperSlide>
                                    )
                                })
                            }

                        </Swiper>
                        <div className="swiper-pagination3"></div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default TestimonialSlider