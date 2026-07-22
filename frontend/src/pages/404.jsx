import React from 'react'

const NotFound = () => {
    return (
        <>
            <div className="error-area pt-100 pb-75">
                <div className="container">
                    <div className="error-content text-center">
                        <h1>4<span>0</span>4</h1>
                        <h3>Oops! Page Not Found</h3>
                        <p>The page you were looking for could not be found.</p>
                        <a className="default-btn text-decoration-none" href="index.html">
                            Return to home page
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotFound