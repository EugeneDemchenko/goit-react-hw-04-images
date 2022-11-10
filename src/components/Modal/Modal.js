import  { useEffect } from "react";
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import './Modal.css'

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ name, modalSrc, onClose }) {

    const handleKeyDown = e => {
        if (e.code === 'Escape') {
            onClose();
        }
    }
    const handleBackdropClick = e => {
        if (e.currentTarget !== e.target) {
            onClose()
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown)    
        }
    })
    
    return  createPortal(
        <div className="overlay" onClick={handleBackdropClick}>
            <div className="modal">
                <img src={modalSrc} alt={name} />
            </div>
        </div>,
        modalRoot,
    ) 
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    modalSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}