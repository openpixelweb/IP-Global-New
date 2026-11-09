import React from 'react'

const According = ({ id, question, ans, parentId, showId }) => {
    return (
        <>
            <div className="accordion-item">
                <h2 className="accordion-header" id={id}>
                    <button className={`accordion-button ${id === showId ? "" : ""} `} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${id}`} aria-expanded={id === showId ? "true" : "false"} aria-controls={`collapse${id}`}>
                        <span>{question}</span>
                    </button>
                </h2>
                <div id={`collapse${id}`} className={`accordion-collapse collapse ${id === showId ? "show" : ""} `} aria-labelledby={id} data-bs-parent={`#${parentId}`}>
                    <div className="accordion-body">
                        {ans}
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default According