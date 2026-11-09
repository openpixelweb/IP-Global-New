import React from 'react'
import { motion } from "framer-motion"
import { blogData } from '../../utlits/fackData/blogData'
import { Link } from 'react-router-dom'
import { zoomIn } from '../../utlits/zoomIn'
import { slideUp } from '../../utlits/slideUp'

const tags = [
    {
        id: 1,
        link: "/tags",
        tag: "Application"
    },
    {
        id: 2,
        link: "/tags",
        tag: "Management"
    },
    {
        id: 3,
        link: "/tags",
        tag: "Cloud"
    },
    {
        id: 4,
        link: "/tags",
        tag: "Cyber Attack"
    },
    {
        id: 5,
        link: "/tags",
        tag: "Data Storage"
    },
    {
        id: 6,
        link: "/tags",
        tag: "Cyber Security"
    },
    {
        id: 7,
        link: "/tags",
        tag: "Network Security"
    },

]
const categories = [
    {
        id: 1,
        link: "/categories",
        categorie: "Application Security"
    },
    {
        id: 2,
        link: "/categories",
        categorie: "Infrastructure Security"
    },
    {
        id: 3,
        link: "/categories",
        categorie: "Cloud-Native Security"
    },
    {
        id: 4,
        link: "/categories",
        categorie: "Network Security"
    },
    {
        id: 5,
        link: "/categories",
        categorie: "Endpoint Security"
    },
    {
        id: 6,
        link: "/categories",
        categorie: "Security Consulting"
    },
    {
        id: 7,
        link: "/categories",
        categorie: "Threat Intelligence Services"
    },
    {
        id: 8,
        link: "/categories",
        categorie: "Security Training and Awareness"
    },
    {
        id: 9,
        link: "/categories",
        categorie: "Security Awareness Training"
    },
    {
        id: 10,
        link: "/categories",
        categorie: "Application Security Testing"
    },

]
const SideBar = ({ dActive }) => {
    return (
        <div className="blog-details-left-sidebar">
            <motion.div className="single-pages-widget form"
                initial="offscreen"
                whileInView="onscreen"
                variants={slideUp(1)}
                viewport={{ once: true, amount: 0 }}
            >
                <h3>Search Here</h3>
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Searching..." />
                        <button type="submit"><i className="ri-search-2-line"></i></button>
                    </div>
                </form>
            </motion.div>
            {dActive &&
                <motion.div className="single-pages-widget latest-posts"
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={slideUp(1)}
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <h3>Latest Posts</h3>
                    {
                        blogData.slice(0, 4).map(({ author, author_link, date, id, link, thumb, title }) => {
                            return (
                                <div key={id} className="post-card d-flex align-items-center">
                                    <div className="image">
                                        <Link href={link}><img src={thumb} alt="blog-image" /></Link>
                                    </div>
                                    <div className="content">
                                        <ul className="list-unstyled ps-0 mb-0">
                                            <li className="d-inline-block">
                                                <i className="ri-calendar-2-line"></i>
                                                {date}
                                            </li>
                                        </ul>
                                        <h4>
                                            <Link className="text-decoration-none" to={link}>{title.length > 40 ? title.slice(0, 40) + '...' : title}</Link>
                                        </h4>
                                    </div>
                                </div>
                            )
                        })
                    }
                </motion.div>
            }
            <motion.div className="single-pages-widget services"
                initial="offscreen"
                whileInView="onscreen"
                variants={slideUp(1)}
                viewport={{ once: true, amount: 0.3 }}
            >
                <h3>Categories</h3>
                <ul className="list-unstyled ps-0 mb-0">
                    {
                        categories.map(({ categorie, id, link }) => <li key={id}><Link className="text-decoration-none" to={link}>{categorie}</Link></li>)
                    }
                </ul>
            </motion.div>
            {
                dActive &&
                <motion.div className="single-pages-widget tags"
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={slideUp(1)}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <h3>Tags</h3>
                    <ul className="list-unstyled ps-0 mb-0">
                        {
                            tags.map(({ id, link, tag }) => {
                                return (
                                    <li key={id} className="d-inline-block">
                                        <Link className="text-decoration-none" href={link}>{tag}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </motion.div>
            }
            <div className="single-pages-widget text-center questions" data-cue="slideInUp">
                <h4>Any Questions?</h4>
                <a href="#">Let’s Talk</a>
            </div>
        </div>
    )
}

export default SideBar