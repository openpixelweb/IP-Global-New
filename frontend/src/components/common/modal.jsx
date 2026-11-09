import React from 'react'

const Modal = () => {
    return (
        <div className="modal search-modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">

                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search" />
                                <button type="submit"><i className="ri-search-2-line"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="ri-close-line"></i></button>
        </div>
    )
}

export default Modal