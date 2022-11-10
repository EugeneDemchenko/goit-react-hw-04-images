// import React, { Component } from "react";
import  { useEffect } from "react";
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import './Modal.css'

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ name, modalSrc, onClose }) {
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown)    
        }
    },[])

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

    return  createPortal(
        <div className="overlay" onClick={handleBackdropClick}>
            <div className="modal">
                <img src={modalSrc} alt={name} />
            </div>
        </div>,
        modalRoot,
    ) 
}



// class Modal extends Component {

//     componentDidMount() {
//         window.addEventListener('keydown', this.handleKeyDown)
//     }
//     componentWillUnmount() {
//         window.removeEventListener('keydown', this.handleKeyDown)
//     }
    
//     handleKeyDown = e => {
//         if (e.code === 'Escape') {
//             this.props.onClose();
//         }
//     }
//     handleBackdropClick = e => {
//         if (e.currentTarget !== e.target) {
//             this.props.onClose()
//         }
//     }

//     render() {
//         const {modalSrc, name} = this.props
//           return  createPortal(
//         <div className="overlay" onClick={this.handleBackdropClick}>
//             <div className="modal">
//                 <img src={modalSrc} alt={name} />
//             </div>
//         </div>,
//               modalRoot,
//     )  
//     }
// }

// export default Modal

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    modalSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}