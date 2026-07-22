import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";


const PartnersSlider = ({data}) => {
    return (
        <div className="partner-slider-info" data-cue="slideInUp">
            <div className="partner-slider">
                <Swiper
                    spaceBetween={25}
                    slidesPerView={5}
                    speed={1000}
                    autoplay={{
                        delay: 2000,
                    }}
                    loop={true}
                    modules={[ Autoplay]}
                >
                    {
                        data.map(({ id, link, src }) => {
                            return (
                                <SwiperSlide key={id}>
                                    <div className="single-partner-logo">
                                        <img src={src} alt={`partner-${id}`} />
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default PartnersSlider