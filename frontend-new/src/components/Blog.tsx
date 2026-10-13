import { Link } from "react-router-dom";
import blogData from "../data/blogData.json";

// Dynamically import all blog images
const blogImages = import.meta.glob("../assets/images/**/*", {
    eager: true,
    import: "default",
}) as Record<string, string>;

interface BlogProps {
    limit?: number;
}

interface BlogData {
    id: number;
    title: string;
    desc: string;
    link: string;
    date: string;
    Blogimage: string;
    Timeimage: string;
    Dateimage: string;
}

const Blog = ({ limit }: BlogProps) => {
    const filteredBlogs: BlogData[] = limit ? blogData.slice(0, limit) : blogData;

    return (
        <>
            {filteredBlogs.map((blog) => {
                const imgSrc = blogImages[`../assets/images/${blog.Blogimage}`] ?? "";
               
                const imgDate = blogImages[`../assets/images/${blog.Dateimage}`] ?? "";

                return (
                    <div
                        className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                        key={blog.id}
                    >
                        <div className="blog-detail zoom_in">
                            <div className="image-blog">
                                {imgSrc && <img src={imgSrc} alt={blog.title} />}
                            </div>

                            <div className="date-time">
                                <div className="blog-date">
                                    {imgDate && <img src={imgDate} alt="date" />}
                                    <p className="blog-date-font">{blog.date}</p>
                                </div>

                                
                            </div>

                            <div className="blog-line"></div>

                            <Link to={blog.link} className="blog-title">
                                {blog.title}
                            </Link>

                            <p className="blog-desc">{blog.desc}</p>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Blog;
