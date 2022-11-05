import React, { Component } from "react";
import { createPortal} from 'react-dom'
import './Modal.css'

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', e => {
            if (e.code === 'Escape') {
                this.props.onClose();
            }
        })
    }

    render() {
          return  createPortal(
        <div className="overlay">
            <div className="modal">
                {this.props.children}
                {/* <img src="" alt="" /> */}
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