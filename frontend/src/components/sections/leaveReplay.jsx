import React from 'react'
import { motion } from "framer-motion"
import { slideUp } from '../../utlits/slideUp'
const LeaveReplay = () => {
    return (
        <motion.div className="leave-reply"
            initial="offscreen"
            whileInView="onscreen"
            variants={slideUp(1)}
            viewport={{ once: true, amount: 0.4 }}
        >
            <h1>Leave a Reply</h1>
            <p>Your email address will not be published. Required fields are marked *</p>
            <form>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter Name" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter Email" />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter Website" />
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Save my name, email, and website in this browser for the next time I comment.
                    </label>
                </div>
                <div className="form-group">
                    <textarea className="form-control textarea" placeholder="Enter Your Comments" rows="3"></textarea>
                </div>
                <button type="submit">Post A Comment</button>
            </form>
        </motion.div>
    )
}

export default LeaveReplay