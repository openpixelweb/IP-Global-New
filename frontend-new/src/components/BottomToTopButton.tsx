import { useEffect, useState } from "react";

const BottomToTopButton = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <>
            <div className="bottom-line-scotter"></div>
            {show && (
                <button id="scroll" className="scroll-btn" onClick={scrollTop}>
                    <i className="ri-arrow-up-s-line"></i>
                </button>
            )}
        </>
    );
};

export default BottomToTopButton;
