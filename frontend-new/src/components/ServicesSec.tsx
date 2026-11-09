import { Link } from "react-router-dom";
import servicesData from "../data/servicesData.json";
import TracImg from "../assets/images/services/trac.png";

// Interface inside the same file
interface ServiceItem {
    id: number;
    title: string;
    desc: string;
    image: string;
    link: string;
    className: string;
    textClass: string;
    descClass: string;
    buttonClass: string;
}
const imageFiles = import.meta.glob("../assets/images/**/*", {
    eager: true,
    import: "default"
}) as Record<string, string>;

const ServicesSec = () => {
    return (
        <div className="services-boxes testimonial-main">
            <div className="container">
                <div className="row box-services">
                    {servicesData.map((service: ServiceItem) => {
                        const imagePath = Object.values(imageFiles).find(img =>
                            img.includes(service.image)
                        );

                        return (
                            <div key={service.id} className="col-xl-4 col-lg-4 col-md-6 col-12">
                                <div className={`${service.className} zoom_in`}>

                                    <img src={imagePath} alt={service.title} />

                                    <p className={service.textClass}>{service.title}</p>
                                    <p className={service.descClass}>{service.desc}</p>

                                    <Link to={service.link} className={service.buttonClass}>
                                        <p>Read More</p>
                                        <img src={TracImg} alt="trac" />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ServicesSec;
