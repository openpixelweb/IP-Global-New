import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoSvg from "../assets/images/logo.png";

type MenuItem = {
    title: string;
    link: string;
    children?: MenuItem[];
};

const menuItems: MenuItem[] = [
    {
        title: "Home",
        link: "/",
    },

    {
        title: "About IPGS",
        link: "#",
        children: [
            {
                title: "How We Work",
                link: "#",
            },
            {
                title: "Our Team",
                link: "#",
            },
            {
                title: "Culture",
                link: "#",
            },
            {
                title: "Careers",
                link: "#",
            },
            {
                title: "IPGS Academy",
                link: "#",
            },
            {
                title: "CSR",
                link: "#",
            },
        ],
    },

    {
        title: "Operational Technology",
        link: "#",
        children: [
            {
                title: "Rail & Transport",
                link: "#",
            },
            {
                title: "Energy, Oil & Gas",
                link: "#",
            },
        ],
    },

    {
        title: "Telecom Network Services",
        link: "#",
        children: [
            {
                title: "Core Network",
                link: "#",
            },
            {
                title: "RAN",
                link: "#",
            },
        ],
    },

    {
        title: "Enterprise IT Services",
        link: "#",
        children: [
            {
                title: "Cybersecurity",
                link: "#",
            },
            {
                title: "Infrastructure & Cloud",
                link: "#",
            },
            {
                title: "Data Centre Services",
                link: "#",
            },
            {
                title: "IT Managed Services",
                link: "#",
            },
            {
                title: "Product Distribution & Aggregator",
                link: "#",
            },
        ],
    },

    {
        title: "Industries",
        link: "#",
    },

    {
        title: "Blog",
        link: "#",
    },
];

const Header1: React.FC = () => {
    const { pathname } = useLocation();

    const [menuOpen, setMenuOpen] = useState(false);

    const [scrollActive, setScrollActive] = useState(false);

    const [openMobileMenu, setOpenMobileMenu] =
        useState<string | null>(null);

    /*
    ==================================================
    CHECK ACTIVE MENU
    ==================================================
    */

    const isActive = (path: string) => {
        if (path === "/") {
            return pathname === "/";
        }

        return (
            pathname === path ||
            pathname.startsWith(`${path}/`)
        );
    };

    /*
    ==================================================
    STICKY HEADER SCROLL
    ==================================================
    */

    useEffect(() => {
        const handleScroll = () => {
            setScrollActive(window.scrollY > 24);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );
        };
    }, []);

    /*
    ==================================================
    CLOSE MOBILE MENU AFTER ROUTE CHANGE
    ==================================================
    */

    useEffect(() => {
        setMenuOpen(false);

        setOpenMobileMenu(null);
    }, [pathname]);

    /*
    ==================================================
    STOP BODY SCROLL WHEN MOBILE MENU IS OPEN
    ==================================================
    */

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    return (
        <header
            className={`ipgs-site-header ${
                scrollActive
                    ? "is-scrolled"
                    : ""
            }`}
        >

            {/* ==============================
                HEADER INNER
            ============================== */}

            <div className="ipgs-header-inner">

                {/* LOGO */}

                <Link
                    to="/"
                    className="ipgs-header-logo"
                    aria-label="IPGS Home"
                >
                    <img
                        src={LogoSvg}
                        alt="IPGS"
                    />
                </Link>


                {/* =========================
                    DESKTOP MENU
                ========================= */}

                <nav
                    className="ipgs-desktop-nav"
                    aria-label="Main navigation"
                >
                    <ul className="ipgs-nav-list">

                        {menuItems.map((item) => (

                            <li
                                key={item.title}
                                className={`
                                    ipgs-nav-item
                                    ${
                                        item.children
                                            ? "has-dropdown"
                                            : ""
                                    }
                                    ${
                                        isActive(item.link)
                                            ? "is-active"
                                            : ""
                                    }
                                `}
                            >

                                <Link
                                    to={item.link}
                                    className="ipgs-nav-link"
                                >
                                    <span>
                                        {item.title}
                                    </span>

                                    {item.children && (
                                        <i
                                            className="ri-arrow-down-s-line"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Link>


                                {/* DESKTOP DROPDOWN */}

                                {item.children && (

                                    <ul className="ipgs-dropdown">

                                        {item.children.map(
                                            (child) => (

                                                <li
                                                    key={
                                                        child.title
                                                    }
                                                >

                                                    <Link
                                                        to={
                                                            child.link
                                                        }
                                                        className={
                                                            isActive(
                                                                child.link
                                                            )
                                                                ? "is-active"
                                                                : ""
                                                        }
                                                    >
                                                        {
                                                            child.title
                                                        }
                                                    </Link>

                                                </li>

                                            )
                                        )}

                                    </ul>

                                )}

                            </li>

                        ))}

                    </ul>
                </nav>


                {/* =========================
                    RIGHT SIDE BUTTONS
                ========================= */}

                <div className="ipgs-header-actions">

                    {/* CONTACT BUTTON */}

                    <Link
                        to="#"
                        className="ipgs-contact-btn"
                    >
                        Contact Us

                        <i
                            className="ri-arrow-right-up-line"
                            aria-hidden="true"
                        />
                    </Link>


                    {/* MOBILE HAMBURGER */}

                    <button
                        type="button"
                        className="ipgs-menu-toggle"
                        onClick={() =>
                            setMenuOpen(true)
                        }
                        aria-label="Open navigation menu"
                        aria-expanded={menuOpen}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                </div>

            </div>


            {/* ==================================================
                MOBILE MENU
            ================================================== */}

            <div
                className={`ipgs-mobile-menu ${
                    menuOpen
                        ? "is-open"
                        : ""
                }`}
                aria-hidden={!menuOpen}
            >

                {/* BACKGROUND */}

                <button
                    type="button"
                    className="ipgs-mobile-backdrop"
                    onClick={() =>
                        setMenuOpen(false)
                    }
                    aria-label="Close navigation menu"
                />


                {/* MOBILE PANEL */}

                <div className="ipgs-mobile-panel">

                    {/* MOBILE HEADER */}

                    <div className="ipgs-mobile-head">

                        <Link
                            to="/"
                            className="ipgs-mobile-logo"
                            onClick={() =>
                                setMenuOpen(false)
                            }
                        >
                            <img
                                src={LogoSvg}
                                alt="IPGS"
                            />
                        </Link>


                        <button
                            type="button"
                            className="ipgs-mobile-close"
                            onClick={() =>
                                setMenuOpen(false)
                            }
                            aria-label="Close navigation menu"
                        >
                            <i
                                className="ri-close-line"
                                aria-hidden="true"
                            />
                        </button>

                    </div>


                    {/* =========================
                        MOBILE NAVIGATION
                    ========================= */}

                    <nav
                        className="ipgs-mobile-nav"
                        aria-label="Mobile navigation"
                    >

                        <ul>

                            {menuItems.map(
                                (item) => {

                                    const expanded =
                                        openMobileMenu ===
                                        item.title;

                                    return (

                                        <li
                                            key={
                                                item.title
                                            }
                                            className={
                                                isActive(
                                                    item.link
                                                )
                                                    ? "is-active"
                                                    : ""
                                            }
                                        >

                                            <div className="ipgs-mobile-link-row">

                                                <Link
                                                    to={
                                                        item.link
                                                    }
                                                >
                                                    {
                                                        item.title
                                                    }
                                                </Link>


                                                {/* SUB MENU BUTTON */}

                                                {item.children && (

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setOpenMobileMenu(
                                                                expanded
                                                                    ? null
                                                                    : item.title
                                                            )
                                                        }
                                                        aria-label={`${
                                                            expanded
                                                                ? "Close"
                                                                : "Open"
                                                        } ${
                                                            item.title
                                                        } submenu`}
                                                        aria-expanded={
                                                            expanded
                                                        }
                                                    >

                                                        <i
                                                            className={`ri-arrow-down-s-line ${
                                                                expanded
                                                                    ? "rotate"
                                                                    : ""
                                                            }`}
                                                            aria-hidden="true"
                                                        />

                                                    </button>

                                                )}

                                            </div>


                                            {/* MOBILE SUBMENU */}

                                            {item.children && (

                                                <ul
                                                    className={`ipgs-mobile-submenu ${
                                                        expanded
                                                            ? "is-open"
                                                            : ""
                                                    }`}
                                                >

                                                    {item.children.map(
                                                        (
                                                            child
                                                        ) => (

                                                            <li
                                                                key={
                                                                    child.title
                                                                }
                                                            >

                                                                <Link
                                                                    to={
                                                                        child.link
                                                                    }
                                                                >
                                                                    {
                                                                        child.title
                                                                    }
                                                                </Link>

                                                            </li>

                                                        )
                                                    )}

                                                </ul>

                                            )}

                                        </li>

                                    );

                                }
                            )}

                        </ul>

                    </nav>


                    {/* MOBILE CONTACT BUTTON */}

                    <Link
                        to="/contact"
                        className="ipgs-mobile-contact-btn"
                    >
                        Contact Us

                        <i
                            className="ri-arrow-right-up-line"
                            aria-hidden="true"
                        />
                    </Link>

                </div>

            </div>

        </header>
    );
};

export default Header1;