import React from 'react'
import { Link } from 'react-router-dom'

const PageTitle = ({pageName, link}) => {
  return (
    <section className="page-title-area">
      <div className="container">
        <div className="page-title-content text-center">
          <h1>{pageName}</h1>
          <ul className="list-unstyled ps-0 mb-0 gap-2">
            <li className="d-inline-block">
              <Link className="text-decoration-none" to="/">Home</Link>
            </li>
            <li className="d-inline-block ms-2">{link}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default PageTitle