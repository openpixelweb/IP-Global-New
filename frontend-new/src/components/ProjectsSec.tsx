import { Link } from "react-router-dom";
import ourSuccessData from "../data/ourSuccessData.json";
import BtnImage from "../assets/images/hero/btn-image.svg";

// Type for each success project
interface SuccessItem {
    id: number | string;
    title: string;
    desc: string;
    image: string;
}

// Props for the component
interface ProjectsSecProps {
    limit?: number;
}

// Dynamic image loader
const images = import.meta.glob("../assets/images/success/**/*", {
    eager: true,
    import: "default",
}) as Record<string, string>;

const ProjectsSec: React.FC<ProjectsSecProps> = ({ limit }) => {
    const filteredProjects: SuccessItem[] =
        limit ? (ourSuccessData as SuccessItem[]).slice(0, limit) : (ourSuccessData as SuccessItem[]);

    return (
        <>
            {filteredProjects.map((item) => {
                // safely resolve image
                const imgSrc = images[`../assets/images/success/${item.image}`] || "";

                return (
                    <div
                        className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
                        key={item.id}
                    >
                        <div className="success-data-design data-project-1">
                            <div className="image-data-succes">
                                <img src={imgSrc} alt={item.title} />

                                <div className="overlay-succes">
                                    <p className="sucess-title">{item.title}</p>
                                    <p className="success-desc">{item.desc}</p>

                                    <div className="data-sucess">
                                        <Link to="/SingleProjects" className="button mt-0">
                                            <span className="btn-text">Read More</span>
                                            <img src={BtnImage} alt="Button Icon" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default ProjectsSec;