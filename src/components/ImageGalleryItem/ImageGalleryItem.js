import { useState } from "react";
import Modal from "../Modal/Modal";
import PropTypes from 'prop-types'
import './ImageGalleryItem.css'

export default function ImageGalleryItem({ src, modalSrc, name }) {
    const [showModal, setShowModal] = useState(false)

    const toggleModal = () => {
        setShowModal(!showModal)
    }
    return (
        <li className="gallery-item" onClick={toggleModal}>
            <img src={src} alt={name} className="gallery-image" />
            {showModal && (<Modal onClose={toggleModal} modalSrc={modalSrc} name={name} />)}
        </li>
            
    )    
}

ImageGalleryItem.propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    modalSrc: PropTypes.string.isRequired,
}
