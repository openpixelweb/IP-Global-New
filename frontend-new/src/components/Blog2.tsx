import React from 'react';
import { Link } from 'react-router-dom';
import blogData2 from "../data/blogData2.json";

// Dynamic image imports 
const blogImages = import.meta.glob("../assets/images/blog/**/*", {
    eager: true,
    import: "default",
}) as Record<string, string>;

// Define the props type
interface Blog2Props {
    limit?: number;
}

// Define blog 
interface BlogItem {
    id: number | string;
    title: string;
    author: string;
    comments: number;
    image: string;
}

const Blog2: React.FC<Blog2Props> = ({ limit }) => {
    // Filter blogs based on limit
    const filteredBlogs: BlogItem[] = limit ? blogData2.slice(0, limit) : blogData2;

    return (
        <>
            {filteredBlogs.map((blog) => {
                const imgSrc = blogImages[`../assets/images/blog/${blog.image}`];

                return (
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12" key={blog.id}>
                        <div className="main-sec-blog data-blog-1">
                            <div className="image-data-blog">
                                <img src={imgSrc} alt={blog.title} />
                            </div>
                            <div className="blog-data-sec-detail">
                                <div className="bloger-data">
                                    <div className="bloger-name">
                                        <i className="ri-user-3-line"></i>
                                        <p>{blog.author}</p>
                                    </div>
                                    <div className="bloger-name">
                                        <i className="ri-chat-1-line"></i>
                                        <p>{blog.comments}</p>
                                    </div>
                                </div>
                                <Link to="/BlogDetail" className="bloger-title-data-main">
                                    {blog.title}
                                </Link>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Blog2;
