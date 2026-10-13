import { Link } from 'react-router-dom'
import Blog2 from '../components/Blog2.tsx';

const Blogs2: React.FC = () => {
    return (
        <>
            {/* <!-- ========================= [ hero section all separate start ] ========================= --> */}
            <div className="bg-container hero-data-bottom">
                <div className="services-home-hero testimonial-bg">
                    <div className="title-of-hero">
                        <p>Blogs</p>
                        <span><Link to="/">Home</Link> - Blogs</span>
                    </div>
                </div>
            </div>
            {/* <!-- ========================= [ hero section all separate Exit ] ========================= --> */}
            {/* <!-- ========================= [ FAQs section all separate Start ] ========================= --> */}
            <div className="blog-sec">
                <div className="about-data">
                    <div className="container">
                        <div className="success-detail fade_down">
                            <div className="box-data-design">
                                <div className="dot-data"></div>
                                <p className="title-font">Latest Blog Post</p>
                            </div>
                            <h2 className="title-about">
                                Read Our <span>Latest Solar Insights</span>
                            </h2>
                        </div>
                        <div className="testimonial-main row testimonial-seprate">
                            <Blog2 />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogs2            