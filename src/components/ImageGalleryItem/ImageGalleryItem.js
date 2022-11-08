import React, { Component } from "react";
import Modal from "../Modal/Modal";
import PropTypes from 'prop-types'
import './ImageGalleryItem.css'

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

ImageGalleryItem.propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    modalSrc: PropTypes.string.isRequired,
}
