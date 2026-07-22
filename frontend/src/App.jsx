import React from 'react'
import { motion } from "framer-motion"
import { ScrollRestoration } from 'react-router-dom'
import BannerOne from './components/sections/banners/bannerOne'
import SecurityOne from './components/sections/securityOne'
import AboutOne from './components/sections/abouts/aboutOne'
import ServicesOne from './components/sections/services/servicesOne'
import ProjectOne from './components/sections/projectOne'
import Countter from './components/sections/countter'
import Industries from './components/sections/industries'
import { teamData } from './utlits/fackData/teamData'
import TeamCard from './components/sections/teamCard'
import { FaqDataOne } from './utlits/fackData/faqDataOne'
import According from './components/common/according'
import ArrowShap from './assets/icons/arrowShap'
import BlogCard from './components/sections/blogCard'
import { blogData } from './utlits/fackData/blogData'
import PartnersSlider from './components/sections/partnersSlider'
import { partnerDataTwo } from './utlits/fackData/partnerDataTwo'
import { slideUp } from './utlits/slideUp'
import { zoomIn } from './utlits/zoomIn'
import Title from './components/common/title'
const App = () => {

  return (
    <>
      <BannerOne />
      <div className="partner-area style-2">
        <div className="container">
          <PartnersSlider data={partnerDataTwo} />
        </div>
      </div>
      <SecurityOne />
      <ProjectOne />
      

      <Countter />
      <Industries />
      

      {/* ---------- BLog section ----------- */}
      <section className={`blog-area pb-75 style-2`}>
        <div className="container">
          <Title
    sectionName="INSIGHTS"
    sectionTitle={
        <>
            Ideas and perspectives for a more
            <br />
            resilient digital future.
        </>
    }
    style="style-2"
/>
          <div className="row justify-content-center" >
            {
              blogData.slice(0, 3).map(({ author, date, id, link, thumb, title, author_link }) => {
                return (
                  <motion.div key={id} className="col-lg-4 col-md-6"
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={zoomIn(id)}
                    viewport={{ once: true, amount: 0.4 }}
                  >
                    <BlogCard author={author} date={date} author_link={author_link} link={link} style={"style-2"} thumb={thumb} title={title} />
                  </motion.div>
                )
              })
            }
          </div>
        </div>  
      </section>
      {/* ---------- BLog section ----------- */}
      
      <ScrollRestoration />
    </>
  )
}

export default App