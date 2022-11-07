import React, { Component } from "react";
import Modal from "components/Modal/Modal";

class ImageGalleryItem extends Component {
    state = {
        showModal: false,
    }

    toggleModal = () => {
        this.setState(({showModal}) => ({
            showModal: !showModal,
        }))
    }

    render() {
        const {showModal} = this.state
        const { src, name, modalSrc } = this.props
        
        return (
            <li className="gallery-item" onClick={this.toggleModal}>
                <img src={src} alt={name} className="gallery-image" />
                {showModal && (<Modal onClose={this.toggleModal} modalSrc={modalSrc} name={name} />)}
            </li>
            
        )
    }
}

export default ImageGalleryItem