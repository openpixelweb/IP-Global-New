import React, { useEffect, useState } from 'react'
import white_logo from "../../../assets/images/logo.png"
import { Link } from 'react-router-dom'
import useStickyHeader from '../../../hooks/useStickyHeader'
import { menuList } from '../../../utlits/fackData/menuList'
import MobileMenu from './mobileMenu'



const HeaderOne = ({ }) => {
    useStickyHeader()
    const [othersOption, setOtherOption] = useState(false)
    const [menuActive, setMenuActive] = useState(false)

    return (
        <>
            
<div className="navbar-area style-2">
    <MobileMenu menuActive={menuActive} setMenuActive={setMenuActive} />

    <div className="desktop-nav style-2">
        <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-light">
                <div className="row align-items-center w-100 m-0">

                    {/* Logo Column */}
                    <div className="col-md-2">
                        <Link className="navbar-brand me-0" to="/">
                            <img
                                src={white_logo}
                                className="black-logo"
                                alt="logo"
                            />
                        </Link>
                    </div>

                    {/* Menu and Get A Quote Column */}
                    <div className="col-md-10">
                        <div
                            className="collapse navbar-collapse mean-menu"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav m-auto">
                                {menuList.map(({ id, dropDown, label, path }) => {
                                    return (
                                        <li key={id} className="nav-item">
                                            <Link
                                                to={path}
                                                className={`nav-link ${
                                                    dropDown.length
                                                        ? "dropdown-toggle"
                                                        : ""
                                                }`}
                                            >
                                                {label}
                                            </Link>

                                            {dropDown.length ? (
                                                <ul className="dropdown-menu">
                                                    {dropDown.map(
                                                        ({ id, path, label }) => {
                                                            return (
                                                                <li
                                                                    key={id}
                                                                    className="nav-item"
                                                                >
                                                                    <Link
                                                                        to={path}
                                                                        className="nav-link"
                                                                    >
                                                                        {label}
                                                                    </Link>
                                                                </li>
                                                            )
                                                        }
                                                    )}
                                                </ul>
                                            ) : null}
                                        </li>
                                    )
                                })}
                            </ul>

                            <div className="others-options">
                                <ul>
                                    

                                    <li>
                                        <Link
                                            className="default-btn text-decoration-none"
                                            to="/contact"
                                        >
                                            <i className="ri-arrow-right-line"></i>
                                            Talk to an Expert
                                        </Link>

                                        <Link
                                            className="quote d-none text-decoration-none"
                                            to="/contact"
                                        >
                                            <i className="ri-chat-quote-line"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    </div>

    <div className="others-option-for-responsive">
        <div className="container">
            <div
                className="dot-menu"
                onClick={() => setOtherOption(!othersOption)}
            >
                <div className="inner">
                    <div className="circle circle-one"></div>
                    <div className="circle circle-two"></div>
                    <div className="circle circle-three"></div>
                </div>
            </div>

            <div className="menu-icon">
                <i
                    className={`ri-menu-line ${
                        menuActive ? "d-none" : "d-block"
                    }`}
                    onClick={() => setMenuActive(true)}
                ></i>

                <i
                    className={`ri-close-line ${
                        menuActive ? "d-block" : "d-none"
                    }`}
                    onClick={() => setMenuActive(false)}
                ></i>
            </div>

            <div className={`container ${othersOption ? "active" : ""}`}>
                <div className="option-inner">
                    <div className="others-options justify-content-center d-flex align-items-center">
                        <ul>
                            <li>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                >
                                    <i className="ri-search-2-line"></i>
                                </button>
                            </li>

                            <li>
                                <Link
                                    className="quote text-decoration-none"
                                    to="/contact"
                                >
                                    <i className="ri-chat-quote-line"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </>
    )
}

export default HeaderOne