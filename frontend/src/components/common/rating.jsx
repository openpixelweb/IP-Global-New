import React from "react";


const Rating = ({ star }) => {
    const starRating = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
        return (
            <li key={index}>
                {star >= index + 1 ? (
                    <i className="ri-star-fill"></i>
                ) : star >= number ? (
                    <i className="ri-star-half-line"></i>
                ) : (
                    <i className="ri-star-line"></i>
                )}
            </li>
        );
    });
    return <ul className="d-flex mb-40 align-items-center gap-2">{starRating}</ul>;
};

export default Rating;
