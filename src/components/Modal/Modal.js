import React, { Component } from "react";
import { createPortal} from 'react-dom'
import './Modal.css'

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }
    
    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    }
    handleBackdropClick = e => {
        if (e.currentTarget !== e.target) {
            this.props.onClose()
        }
    }

    render() {
          return  createPortal(
        <div className="overlay" onClick={this.handleBackdropClick}>
            <div className="modal">
                {/* {this.props.children} */}
                <img src={this.props.modalSrc} alt={this.props.name} />
                {/* <p>loasfasdfgvszadds df asdf</p> */}
            </div>
              </div>,
              modalRoot,
    )  
    }
}


// const Modal = () => {
//     return (
//         <div className="overlay">
//             <div className="modal">
//                 {this.props.children}
//                 {/* <img src="" alt="" /> */}
//                 {/* <p>loasfasdfgvszadds df asdf</p> */}
//             </div>
//         </div>
//     )
// }

// export default Modal