import React from 'react'
import { motion } from "framer-motion"
import PageTitle from '../components/common/pageTitle'
import SideBar from '../components/sections/sideBar'
import Comments from '../components/sections/comments'
import LeaveReplay from '../components/sections/leaveReplay'
import { Link, ScrollRestoration } from 'react-router-dom'
import { slideUp } from '../utlits/slideUp'
import blog_bg from "../assets/images/blog/blog-26.jpg"

const SearchResult = () => {
  return (
    <>
      <PageTitle link={"Blog Details"} pageName={"Blog Details"} />
      <div className="blog-details-area pt-100 pb-75">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <SideBar dActive={true} />
            </div>
            <div className="col-lg-8">
              <div className="blog-details-right-sidebar">
                <motion.div className="blog-info"
                  initial="offscreen"
                  whileInView="onscreen"
                  variants={slideUp(1)}
                  viewport={{ once: true, amount: 0 }}
                >
                  <ul className="list-unstyled ps-0">
                    <li className="d-inline-block">
                      <i className="ri-calendar-2-line"></i>
                      By <Link className="text-decoration-none" to="/author">Admin</Link>
                    </li>
                    <li className="d-inline-block">
                      <i className="ri-calendar-2-line"></i>
                      November 6, 2024
                    </li>
                  </ul>
                  <h1>Beyond Boundaries Safeguard Tomorrow with Expert Cybersecurity Services.</h1>
                  <p>Cybersecurity is crucial in today's digital age, where many individuals & organizations store a significant amount of sensitive data on computer & other device. This data could be financial information personal information, intellectual property, or other types of data for which unauthorized,</p>
                  <p>Cybersecurity measures are put in place to ensure the confidentiality, integrity, and availability of information. These measures involve the use of hardware, software, and protocols to protect data and systems from unauthorized access and attacks.</p>
                  <motion.div className="image"
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={slideUp(1)}
                    viewport={{ once: true, amount: 0 }}
                  >
                    <img src={blog_bg} alt="blog-image" />
                  </motion.div>
                  <p>Cybersecurity is crucial in today's digital age, where many individuals & organizations store a significant amount of sensitive data on computer & other device. This data could be financial information personal information, intellectual property, or other types of data for which unauthorized,</p>
                  <p>Cybersecurity measures are put in place to ensure the confidentiality, integrity, and availability of information. These measures involve the use of hardware, software, and protocols to protect data and systems from unauthorized access and attacks.</p>
                  <motion.blockquote
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={slideUp(1)}
                    viewport={{ once: true, amount: 0.4 }}
                  >
                    “Cybersecurity is crucial in today's digital age, where many individuals & organizations
                    store a significant amount of sensitive data on computer & other device. This data could be
                    financial information personal information, intellectual property,”
                  </motion.blockquote>
                  <p>Cybersecurity is crucial in today's digital age, where many individuals & organizations store a significant amount of sensitive data on computer & other device. This data could be financial information personal information, intellectual property, or other types of data for which unauthorized,</p>
                  <p>Cybersecurity measures are put in place to ensure the confidentiality, integrity, and availability of information. These measures involve the use of hardware, software, and protocols to protect data and systems from unauthorized access and attacks.</p>
                </motion.div>
                <Comments />
                <LeaveReplay />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollRestoration />
    </>
  )
}

export default SearchResult