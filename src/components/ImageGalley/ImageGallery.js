import React, { Component } from "react";
import Modal from "components/Modal/Modal";
// import PropTypes from 'prop-types'
import './ImageGallery.css'

class ImageGallery extends Component {
    state = {
        showModal: false,
        articles: [],
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.searchQuery !== this.props.searchQuery) {
            fetch(`https://pixabay.com/api/?key=30341447-eb158986107312b6bdd4f8895&q=${this.props.searchQuery}&image_type=photo`)
                .then(res => res.json())
                .then(articles => this.setState({ articles }))
        }
    }
        toggleModal = () => {
            this.setState(({showModal}) => ({
                showModal: !showModal,
            }))
        }
    render() {
            const {showModal} = this.state

        return (
            <ul className="gallery">
                {this.state.articles.total === 0 && <h1>can't find images by '{this.props.searchQuery}'</h1>}
                {this.state.articles.length !== 0 && this.state.articles.hits.map(({ id, webformatURL, tags, largeImageURL }) => (
                    <li key={id} className="gallery-item" onClick={this.toggleModal}>
                        <img src={webformatURL} alt={tags} className="gallery-image" />
                    </li>
                ))}
                {showModal && (<Modal onClose={this.toggleModal} />)}
            </ul>
        )
    }
}

export default ImageGallery