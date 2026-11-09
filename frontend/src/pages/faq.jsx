import React from 'react'
import { motion } from "framer-motion"
import { FaqDataOne } from '../utlits/fackData/faqDataOne'
import According from '../components/common/according'
import PageTitle from '../components/common/pageTitle'
import { ScrollRestoration } from 'react-router-dom'
import { slideUp } from '../utlits/slideUp'
import Title from '../components/common/title'

const Faq = () => {
  return (
    <>
      <PageTitle pageName={"FAQs"} link={"faq"} />
      <section className="faqs-area pt-100 pb-75">
        <div className="container">
          <Title sectionName={"FAQs"} sectionTitle={"A Dedication to Supporting All Aspects of Your Life."}/>
          <motion.div className="faq-info"
            initial="offscreen"
            whileInView="onscreen"
            variants={slideUp(1)}
            viewport={{ once: true, amount: 0 }}
          >
            <div className="faq-questions faqs-style">
              <div className="questions-content">
                <div className="accordion" id="accordionExample">
                  {
                    FaqDataOne.map(({ ans, id, question }) => <According key={id} ans={ans} id={id} parentId={"accordionExample"} question={question} showId={"one"} />)
                  }
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <ScrollRestoration />
    </>
  )
}

export default Faq