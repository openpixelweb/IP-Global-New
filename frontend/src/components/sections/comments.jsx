import React from 'react'
import {motion} from "framer-motion"
import user_1 from "../../assets/images/blog/blog-27.jpg"
import user_2 from "../../assets/images/blog/blog-28.jpg"
import user_3 from "../../assets/images/blog/blog-29.jpg"
import { slideUp } from '../../utlits/slideUp'

const commentList = [
    {
        id: 1,
        name: "Aaron Johnson",
        src: user_1,
        date: "November 6, 2024",
        comment: "This involves outsourcing some or all of a company's safety potency to a service provider. Services may include security monitoring, incident response, & managing security devices and systems. and how to respond to security incidents."
    },
    {
        id: 2,
        name: "Walter Waltrip",
        src: user_2,
        date: "November 6, 2024",
        comment: "This involves outsourcing some or all of a company's safety potency to a service provider. Services may include security monitoring, incident response, & managing security devices and systems. and how to respond to security incidents."
    },
    {
        id: 3,
        name: "Franklin Bowman",
        src: user_3,
        date: "November 6, 2024",
        comment: "This involves outsourcing some or all of a company's safety potency to a service provider. Services may include security monitoring, incident response, & managing security devices and systems. and how to respond to security incidents."
    },

]
const Comments = () => {
    return (
        <div className="comments">
            <h1>3 Comments</h1>
            {
                commentList.map(({ comment, date, id, name, src }) => {
                    return (
                        <motion.div key={id} className="comment-card"
                            initial="offscreen"
                            whileInView="onscreen"
                            variants={slideUp(id)}
                            viewport={{ once: true, amount: 0.4 }}
                        >
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="user d-flex align-items-center">
                                    <div className="image">
                                        <img src={src} alt="" />
                                    </div>
                                    <div className="content">
                                        <h3>{name}</h3>
                                        <p>{date}</p>
                                    </div>
                                </div>
                                <a className="reply text-decoration-none" href="#">Reply</a>
                            </div>
                            <p>{comment}</p>
                        </motion.div>
                    )
                })
            }

        </div>
    )
}

export default Comments