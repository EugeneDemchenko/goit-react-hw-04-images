import React, { Component } from "react";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import Button from "components/Button/Button";
import Loader from "components/Loader/Loader";
import PropTypes from 'prop-types'
import './ImageGallery.css'

class ImageGallery extends Component {
    state = {
        articles: [],
        page: 1,
        isLoading: false,
        totalPages: 1,
        searchQuery: ''
    }
    static getDerivedStateFromProps (nextProps, state) {
        if (nextProps.searchQuery !== state.searchQuery) {
            return { page: 1, searchQuery: nextProps.searchQuery };
        }
        return state;
     }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.searchQuery !== this.props.searchQuery || prevState.page !== this.state.page) {
            this.setState({ isLoading: true })
            setTimeout(() => {
                fetch(`https://pixabay.com/api/?key=30341447-eb158986107312b6bdd4f8895&q=${this.props.searchQuery}&image_type=photo&page=${this.state.page}&per_page=12`)
                    .then(res => res.json())
                    .then(data =>
                        this.setState(prevState => ({
                            articles:
                                this.state.page === 1 ? data.hits : [...prevState.articles, ...data.hits],
                            totalPages: Math.ceil(data.totalHits / 12)
                        }))
                    )
                    .finally(() => this.setState({ isLoading: false }))
                }, 250)
        } 
    }
    loadMore = () => {
        this.setState(prevState => ({
            page: prevState.page + 1
        }))
    }

    render() {
        return (<>
            <ul className="gallery">
                {!this.state.totalPages && <h1 className="errorMsg">can't find images by name '{this.props.searchQuery}'</h1>}
                {this.state.articles.length !== 0 && this.state.articles.map(({ id, webformatURL, tags, largeImageURL }) => (
                    <ImageGalleryItem
                        key={id}
                        src={webformatURL}
                        name={tags}
                        modalSrc={largeImageURL}
                    />
                ))}
            </ul>
            {this.state.isLoading && <Loader/>}
            {this.state.articles.length > 0 && this.state.totalPages > this.state.page && !this.state.isLoading &&(<Button loadMore={this.loadMore} />)}
            
            
        </>
        )
    }
}

export default ImageGallery

ImageGallery.propTypes = {
    searchQuery: PropTypes.string.isRequired,
}