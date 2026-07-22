import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { menuList } from '../../../utlits/fackData/menuList'
import white_logo from "../../../assets/images/white-logo.png"

const MobileMenu = ({menuActive, setMenuActive}) => {
    const [dropdownActive, setDropDownActive] = useState(null)
    return (
        <div className="mobile-responsive-nav">
            <div className="container">
                <div className="mobile-responsive-menu">
                    <div className="logo">
                        <Link to="/">
                            <img src={white_logo} className="main-logo" alt="logo" />
                        </Link>
                    </div>
                    <div className={`bg-white overflow-hidden mobile-responsive-inner shadow ${menuActive ? "mobile-responsive-active" : ""} `}>
                        <ul className='overflow-y-auto  '>
                            {
                                menuList.map(({ id, label, dropDown, path }) => {
                                    return (
                                        <li key={id} className={`position-relative dropdown-prent $`} onClick={() => dropDown.length && setDropDownActive(dropdownActive ? "" : id)}>
                                            <Link to={path} className='d-flex align-items-center justify-content-between ' onClick={() => dropDown.length ? "" : setMenuActive(false)}>
                                                {label}
                                                <span>{dropDown.length && (dropdownActive === id ? "-" : "+")}</span>
                                            </Link>
                                            {dropDown.length &&
                                                <ul className={`dropdown ${dropdownActive === id ? "dropdown_active" : ""}`}>
                                                    {
                                                        dropDown.map(({ id, path, label }) => {
                                                            return (
                                                                <li key={id}>
                                                                    <Link to={path}>{label}</Link>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            }
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileMenu