import { Link } from 'react-router-dom';
import ProjectsSec from '../components/ProjectsSec.tsx';

const Projects1: React.FC = () => {
    return (
        <>
            <div className="js-scroll">
                {/* ========================= Hero Section ========================= */}
                <div className="bg-container hero-data-bottom">
                    <div className="services-home-hero testimonial-bg">
                        <div className="title-of-hero">
                            <p>Projects</p>
                            <span>
                                <Link to="/">Home</Link> - Projects
                            </span>
                        </div>
                    </div>
                </div>

                {/* ========================= Projects Section ========================= */}
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
                                <ProjectsSec />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects1;
