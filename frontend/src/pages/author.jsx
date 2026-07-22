import React from 'react'
import PageTitle from '../components/common/pageTitle'
import { ScrollRestoration } from 'react-router-dom'
import BlogCard from '../components/sections/blogCard'
import { blogData } from '../utlits/fackData/blogData'

const Author = () => {
    return (
        <>
            <PageTitle link={"Author"} pageName={"Author"} />
            <section className={`blog-area pb-75 pt-100 style-3`}>
                <div className="container">
                    <div className={`section-title text-center style-3`} data-aos="fade-up">
                        <span className="d-block">Our Blog</span>
                        <h2>Latest Blog & Articles</h2>
                    </div>
                    <div className="row justify-content-center" >
                        {
                            blogData.map(({ author, date, id, link, thumb, title, author_link }) => {
                                return (
                                    <div key={id} className="col-lg-4 col-md-6" data-aos="fade-zoom-in" data-aos-delay={`${150 * id}`}>
                                        <BlogCard author={author} date={date} author_link={author_link} link={link} style={"style-3"} thumb={thumb} title={title} />
                                    </div>
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

export default Author