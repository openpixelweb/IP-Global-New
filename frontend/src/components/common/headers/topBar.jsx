import React from 'react'

const TopBar = () => {
    return (
        <div className="top-header-area top-bar">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <div className="top-header-content">
                            <ul className="list-unstyled ps-0 mb-0 list">
                                <li>
                                    <i className="ri-home-5-line"></i>
                                    Welcome to Paheli. <strong>Need Help?</strong> <a href="#">Get in Touch</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="top-header-list text-end">
                            <ul className="list-unstyled ps-0 mb-0 list">
                                <li className="d-inline-block">
                                    <i className="ri-map-pin-line"></i>
                                    521684 Majadra Street, New York.
                                </li>
                                <li className="d-inline-block">
                                    <i className="ri-mail-open-line"></i>
                                    <a className="text-decoration-none" href="mailto:support.Paheli@gmail.com">support.Paheli@gmail.com</a>
                                </li>
                                <li className="d-inline-block">
                                    <i className="ri-phone-line"></i>
                                    <a className="text-decoration-none" href="tel:55472543526">+5-547-254-3526</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar