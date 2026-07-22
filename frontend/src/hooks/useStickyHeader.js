import React, { useEffect } from 'react'

const useStickyHeader = () => {
    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    }, []);

    const isSticky = (e) => {
        const header = document.querySelector(".navbar-area");
        const scrollTop = window.scrollY;

        scrollTop >= 130
            ? header.classList.add("is-sticky")
            : header.classList.remove("is-sticky");
    };
}

export default useStickyHeader