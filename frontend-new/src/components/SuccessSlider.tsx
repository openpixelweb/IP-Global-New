import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import ourSuccessData from "../data/ourSuccessData.json";
import BtnImage from "../assets/images/hero/btn-image.svg";

// Import all success images dynamically
const successImages = import.meta.glob(
    "../assets/images/success/*",
    { eager: true, import: "default" }
) as Record<string, string>;

// Helper to safely fetch dynamic image
const getSuccessImage = (fileName: string): string => {
    return successImages[`../assets/images/success/${fileName}`] || "";
};

// Types
interface SuccessItem {
    id: number;
    title: string;
    desc: string;
    image: string;
}

const SuccessSlider: React.FC = () => {

    const settings = {
        modules: [Autoplay],
        autoplay: { delay: 2000, disableOnInteraction: false },
        speed: 1000,
        loop: true,
        slidesPerView: 4,
        spaceBetween: 40,
        breakpoints: {
            1400: { slidesPerView: 4 },
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1, spaceBetween: 0 },
        },
    };

    const successData: SuccessItem[] = ourSuccessData;

    return (
        <div className="design-slick-succes-main">
            <Swiper {...settings}>
                {successData.map((item) => {
                    const imgSrc = getSuccessImage(item.image);

                    return (
                        <SwiperSlide key={item.id}>
                            <div className="success-data-design">
                                <div className="image-data-succes">
                                    {imgSrc && <img src={imgSrc} alt={item.title} />}
                                    <div className="overlay-succes">
                                        <p className="sucess-title">{item.title}</p>
                                        <p className="success-desc">{item.desc}</p>
                                        <div className="data-sucess">
                                            <Link to="/SingleProjects" className="button mt-0">
                                                <span className="btn-text">Read More</span>
                                                <img src={BtnImage} alt="Read More" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};
export default SuccessSlider;