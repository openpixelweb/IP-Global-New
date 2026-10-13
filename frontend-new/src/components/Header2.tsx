import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import LogoSvg from "../assets/images/header/Logo.svg";
import BtnImageTwo from "../assets/images/hero/btn-image-two.svg";
import MenuSvg from "../assets/images/hero/menu.svg";
import CloseWhiteSvg from "../assets/images/header/close-white.svg";
import CloseSvg from "../assets/images/header/close.svg";

interface DropdownItem {
    label: string;
    link: string;
}

interface MenuItem {
    title: string;
    paths: readonly string[];
    dropdown: readonly DropdownItem[];
}

const menuItems: readonly MenuItem[] = [
    {
        title: "Home",
        paths: ["/", "/Home2", "/Home3", "/Home4"],
        dropdown: [
            { label: "Home Slider", link: "/" },
            { label: "Home Solid", link: "/Home2" },
            { label: "Home Image", link: "/Home3" },
            { label: "Home Video", link: "/Home4" }
        ]
    },
    {
        title: "Services",
        paths: ["/Services1", "/Services2", "/ServicesDetail1", "/ServicesDetail2"],
        dropdown: [
            { label: "Services 1", link: "/Services1" },
            { label: "Services 2", link: "/Services2" },
            { label: "Services Detail 1", link: "/ServicesDetail1" },
            { label: "Services Detail 2", link: "/ServicesDetail2" }
        ]
    },
    {
        title: "Pages",
        paths: [
            "/AboutUs", "/Team1", "/Team2", "/SingleTeam",
            "/PricingPlan", "/Testimonial", "/Faq",
            "/NotFound", "/ComingSoon"
        ],
        dropdown: [
            { label: "About Us", link: "/AboutUs" },
            { label: "Team 1", link: "/Team1" },
            { label: "Team 2", link: "/Team2" },
            { label: "Single Team", link: "/SingleTeam" },
            { label: "Pricing Plan", link: "/PricingPlan" },
            { label: "Testimonials", link: "/Testimonial" },
            { label: "FAQs", link: "/Faq" },
            { label: "404 Error", link: "/NotFound" },
            { label: "Coming Soon", link: "/ComingSoon" }
        ]
    },
    {
        title: "Project",
        paths: ["/Projects1", "/SingleProjects", "/SingleProjects2"],
        dropdown: [
            { label: "Projects 1 - Grid", link: "/Projects1" },
            { label: "Project Details 1", link: "/SingleProjects" },
            { label: "Project Details 2", link: "/SingleProjects2" }
        ]
    },
    {
        title: "Blog",
        paths: ["/Blogs1", "/Blogs2", "/BlogDetail", "/BlogDetail2"],
        dropdown: [
            { label: "Blog 1", link: "/Blogs1" },
            { label: "Blog 2", link: "/Blogs2" },
            { label: "Blog Detail 1", link: "/BlogDetail" },
            { label: "Blog Detail 2", link: "/BlogDetail2" }
        ]
    }
];

const Header2: React.FC = () => {
    const { pathname } = useLocation();

    const [openDropdown, setOpenDropdown] = useState<number | null>(null);
    const [openMobileDropdown, setOpenMobileDropdown] = useState<number | null>(null);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [scrollActive, setScrollActive] = useState<boolean>(false);

    const navRef = useRef<HTMLDivElement | null>(null);

    const isActive = (path: string): string => (pathname === path ? "active" : "");
    const isGroupActive = (paths: readonly string[]): string =>
        paths.includes(pathname) ? "active" : "";

    // Scroll active class
    useEffect(() => {
        const handleScroll = () => setScrollActive(window.scrollY > 0);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close dropdown when clicked outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <>
            <div className="header header2" id="header">
                <div
                    className={`design-data ${scrollActive ? "active" : ""}`}
                    data-header
                    ref={navRef}
                >
                    <div className="logo-nav">
                        <Link to="/" className="logo-data">
                            <img src={LogoSvg} alt="logo" />
                        </Link>

                        <ul className="ul-nav">
                            {menuItems.map((item) => (
                                <li className="li-nav" key={item.title}>
                                    <button
                                        className={`navbar-anchor ${isGroupActive(item.paths)}`}
                                        onClick={() =>
                                            setOpenDropdown(
                                                openDropdown === menuItems.indexOf(item)
                                                    ? null
                                                    : menuItems.indexOf(item)
                                            )
                                        }
                                    >
                                        {item.title} <i className="ri-arrow-down-s-line"></i>
                                    </button>

                                    <ul
                                        className={`ul-design ${openDropdown === menuItems.indexOf(item) ? "show" : ""
                                            }`}
                                    >
                                        {item.dropdown.map((sub) => (
                                            <li className="li-design" key={sub.label}>
                                                <Link
                                                    to={sub.link}
                                                    className={`anchor-design ${isActive(sub.link)}`}
                                                    onClick={() => setOpenDropdown(null)}
                                                >
                                                    {sub.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Menu Button */}
                    <div className="contact-data">
                        <Link to="/Contact" className="button-design">
                            <span className="btn-text">Contact Us</span>
                            <img src={BtnImageTwo} alt="BtnImageTwo" />
                        </Link>
                        <button className="menu-design" onClick={() => setMenuOpen(true)}>
                            <img src={MenuSvg} alt="menu" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`menu ${menuOpen ? "active" : ""}`}>
                <div className="left-design">
                    <div className="d-flex justify-content-between">
                        <Link to="/" className="logo-data">
                            <img src={LogoSvg} alt="logo" />
                        </Link>

                        <button className="close-btn docts-responsive" onClick={() => setMenuOpen(false)}>
                            <span className="data-closed">close</span>
                            <img src={CloseWhiteSvg} alt="close" />
                        </button>
                    </div>

                    <div className="data-page">
                        <ul className="menu-ul">
                            {menuItems.map((item) => (
                                <li className="menu-li" key={item.title}>
                                    <button
                                        className={`menu-anhor ${isGroupActive(item.paths)}`}
                                        onClick={() =>
                                            setOpenMobileDropdown(
                                                openMobileDropdown === menuItems.indexOf(item)
                                                    ? null
                                                    : menuItems.indexOf(item)
                                            )
                                        }
                                    >
                                        <p className="text-menu">{item.title}</p>
                                        <i
                                            className={`ri-add-line ${openMobileDropdown === menuItems.indexOf(item)
                                                ? "open"
                                                : ""
                                                }`}
                                        ></i>
                                    </button>

                                    <div
                                        className={`under-menu-li ${openMobileDropdown === menuItems.indexOf(item)
                                            ? "open"
                                            : ""
                                            }`}
                                    >
                                        {item.dropdown.map((sub) => (
                                            <Link
                                                key={sub.label}
                                                to={sub.link}
                                                className={`ander-li-achor ${isActive(sub.link)}`}
                                                onClick={() => setMenuOpen(false)}
                                            >
                                                {sub.label}
                                            </Link>
                                        ))}
                                    </div>
                                </li>
                            ))}

                            <li className="menu-li">
                                <Link
                                    to="/Contact"
                                    className={`menu-anhor ${isActive("/Contact")}`}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <p className="text-menu">Contact</p>
                                </Link>
                            </li>
                        </ul>

                        {/* Mobile Contact Info */}
                        <div className="data-main-contact">
                            <p className="mex-tilte">Get In Touch</p>
                            <div className="design-call-left">
                                <p>Phone</p>
                                <a href="tel:+911234567890" className="call-data-left">
                                    +1 (234) 567 8899
                                </a>
                            </div>

                            <div className="design-call-left">
                                <p>Email</p>
                                <a href="mailto:example@gmail.com" className="call-data-left">
                                    hello@sunstar.com
                                </a>
                            </div>

                            <div className="design-call-left">
                                <p>Address</p>
                                <a
                                    href="https://www.google.com/maps"
                                    target="_blank"
                                    className="call-data-left"
                                >
                                    121 Parkview Square St, NY 10012
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right static design */}
                <div className="right-design">
                    <button className="close-btn" onClick={() => setMenuOpen(false)}>
                        <span className="data-closed">close</span>
                        <img src={CloseSvg} alt="close" />
                    </button>

                    <div className="data-contact">
                        <p className="title-get-data">Get In Touch</p>

                        <div className="design-call">
                            <p>Phone</p>
                            <a href="tel:+1234567890" className="call-data">
                                +1 (234) 567 8899
                            </a>
                        </div>

                        <div className="design-call">
                            <p>Email</p>
                            <a href="mailto:hello@sunstar.com" className="call-data">
                                hello@sunstar.com
                            </a>
                        </div>

                        <div className="design-call">
                            <p>Address</p>
                            <a href="https://www.google.com/maps" target="_blank" className="call-data">
                                121 Parkview Square St, NY 10012
                            </a>
                        </div>

                        <div className="design-call">
                            <p>Follow us</p>

                            <div className="social-data-design">
                                <a href="http://dribbble.com/" target="_blank" className="social-design">
                                    <i className="ri-dribbble-line"></i>
                                </a>
                                <a href="https://www.instagram.com/" target="_blank" className="social-design">
                                    <i className="ri-instagram-line"></i>
                                </a>
                                <a href="https://www.youtube.com/" target="_blank" className="social-design">
                                    <i className="ri-youtube-line"></i>
                                </a>
                                <a href="https://web.whatsapp.com/" target="_blank" className="social-design">
                                    <i className="ri-whatsapp-line"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header2;
