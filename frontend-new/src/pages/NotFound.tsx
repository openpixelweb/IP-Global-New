import { Link } from 'react-router-dom'
import Number4Img from '../assets/images/error/4-number.png';
import ErrorImg from '../assets/images/error/error-image.png';
import HomeSvg from '../assets/images/header/home.svg';

const NotFound: React.FC = () => {
    return (
        <>
            <div className="js-scroll">
                {/* <!-- ========================= [ hero section all separate start ] ========================= --> */}
                <div className="bg-container hero-data-bottom">
                    <div className="services-home-hero error-bg">
                        <div className="title-of-hero">
                            <p>Page Not Found</p>
                            <span><Link to="/">Home</Link> - 404 Error</span>
                        </div>
                    </div>
                </div>
                {/* <!-- ========================= [ hero section all separate Exit ] ========================= --> */}
                {/* <!-- ========================= [ Error section all separate Start ] ========================= --> */}
                <div className="blog-sec">
                    <div className="about-data text-center">
                        <div className="container">
                            <div className="error-text">
                                <div className="image-four rotate-error-1">
                                    <img src={Number4Img} alt="Number4Img" />
                                </div>
                                <div className="round-image">
                                    <img src={ErrorImg} alt="ErrorImg" />
                                </div>
                                <div className="image-four rotate-error-2">
                                    <img src={Number4Img} alt="Number4Img" />
                                </div>
                            </div>
                            <h2 className="title-about mt-0 text-center testimonial-main ">
                                Oops! Sorry, We Could <span>Not Find The Page</span>
                            </h2>
                            <p className="error-text-desxc">It looks like nothing was found at this location. Maybe try one of
                                the links below or a search?</p>
                            <div className="testimonial-main text-center">
                                <Link to="/" className="button d-inline-flex error-btn">
                                    <span className="btn-text">Back To Home</span>
                                    <img src={HomeSvg} alt="HomeSvg" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotFound