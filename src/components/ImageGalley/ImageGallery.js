import React, {Component} from "react";
// import PropTypes from 'prop-types'
import './ImageGallery.css'

class ImageGallery extends Component {
    render() {
        return (
        <ul className="gallery">
            <li className="gallery-item" onClick={this.props.openModal}>
                <img src="" alt="" className="gallery-image"/>
            </li>
        </ul>
        )
    }
}

// const ImageGallery = () => {
//     return (
//         <ul className="gallery">
//             <li className="gallery-item" onClick={this.props.open}>
//                 <img src="" alt="" className="gallery-image"/>
//             </li>
//         </ul>
//     )
// }

export default ImageGallery