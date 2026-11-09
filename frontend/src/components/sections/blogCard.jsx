import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({style, link, thumb, author_link, author, title, date={date}}) => {
    return (
        <div className={`single-blog-card ${style}`}>
            <div className="image">
                <Link to={link}>
                    <img src={thumb} alt="blog-image" />
                </Link>
            </div>
            <div className="content">
                <ul className="list-unstyled ps-0 list">
                    <li className="d-inline-block">
                        <i className="ri-user-line"></i>
                        <Link className="text-decoration-none" to={author_link}>{author}</Link>
                    </li>
                    <li className="d-inline-block">
                        <i className="ri-calendar-2-line"></i>
                        {date}
                    </li>
                </ul>
                <h3>
                    <Link className="text-decoration-none" to={link}>{title}</Link>
                </h3>
                <Link className="read-more text-decoration-none" to={link}>
                    Read More
                    <i className="ri-arrow-right-line"></i>
                </Link>
            </div>
        </div>
    )
}

export default BlogCard