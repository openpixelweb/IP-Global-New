import React from 'react'
import { motion } from "framer-motion"
import { ScrollRestoration } from 'react-router-dom'
import { zoomIn } from '../utlits/zoomIn'
import { blogData } from '../utlits/fackData/blogData'
import PageTitle from '../components/common/pageTitle'
import BlogCard from '../components/sections/blogCard'

const Categories = () => {
    return (
        <>
            <PageTitle link={"Blog"} pageName={"Our Blog"} />
            <section className={`blog-area pb-75 pt-100 style-3`}>
                <div className="container">
                    <div className={`section-title text-center style-3`}>
                        <span className="d-block">Our Blog</span>
                        <h2>Latest Blog & Articles</h2>
                    </div>
                    <div className="row justify-content-center" >
                        {
                            blogData.map(({ author, date, id, link, thumb, title, author_link }) => {
                                return (
                                    <motion.div key={id} className="col-lg-4 col-md-6"
                                        initial="offscreen"
                                        whileInView="onscreen"
                                        variants={zoomIn(id)}
                                        viewport={{ once: true, amount: 0.1 }}
                                    >
                                        <BlogCard author={author} date={date} author_link={author_link} link={link} style={"style-3"} thumb={thumb} title={title} />
                                    </motion.div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <ScrollRestoration />
        </>
    )
}

export default Categories