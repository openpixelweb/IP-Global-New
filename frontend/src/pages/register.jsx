import React from 'react'
import { motion } from "framer-motion"
import PageTitle from '../components/common/pageTitle'
import { Link, ScrollRestoration } from 'react-router-dom'
import { slideUp } from '../utlits/slideUp'

const Register = () => {
  return (
    <>
      <PageTitle link={"Register"} pageName={"Register"} />
      <div className="login-area ptb-100">
        <div className="container">
          <motion.div className="login-info"
            initial="offscreen"
            whileInView="onscreen"
            variants={slideUp(1)}
            viewport={{ once: true, amount: 0 }}
          >
            <h1>Register Now</h1>
            <form>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Username" />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" placeholder="Your password" />
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Remember me
                </label>
              </div>
              <button className="default-btn border-0" type="submit">
                <i className="ri-arrow-right-line"></i>
                Log In Now
              </button>
              <p>Already have an account? Please <Link className="text-decoration-none" to="/login">Login Here</Link></p>
            </form>
          </motion.div>
        </div>
      </div>
      <ScrollRestoration />
    </>
  )
}

export default Register