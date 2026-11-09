import React from 'react'
import { motion } from "framer-motion"
import PageTitle from '../components/common/pageTitle'
import BlogCard from '../components/sections/blogCard'
import { blogData } from '../utlits/fackData/blogData'
import { ScrollRestoration } from 'react-router-dom'
import { zoomIn } from '../utlits/zoomIn'
import Title from '../components/common/title'

const Blog = () => {
  return (
    <>
      <PageTitle link={"Blog"} pageName={"Our Blog"} />
      <section className={`blog-area pb-75 pt-100 style-3`}>
        <div className="container">
          <Title sectionName={"Our Blog"} sectionTitle={"Latest Blog & Articles"} style={"style-3"}/>

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

export default Blog