import React from "react";
import Modal from "react-modal";

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoUrl: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoUrl }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="YouTube Video"
            className="video-modal"
            overlayClassName="video-overlay"
        >
            <div className="video-wrapper">
                <button className="close-btn-video" onClick={onClose}>✕</button>

                <iframe
                    width="100%"
                    height="100%"
                    src={`${videoUrl}?autoplay=1`}
                    title="YouTube video"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                />
            </div>
        </Modal>
    );
};

export default VideoModal;
