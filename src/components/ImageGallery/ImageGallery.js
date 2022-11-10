import  { useState, useEffect } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import PropTypes from 'prop-types'
import './ImageGallery.css'

export default function ImageGallery({requestImg}) {

    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');


    useEffect(() => {
        if (requestImg !== searchQuery) {
            setArticles([])
            setPage(1);
            setSearchQuery(requestImg);
    }},[requestImg, searchQuery])
    

    useEffect(() => {
        function findImg() {
            setIsLoading(true)
            fetch(`https://pixabay.com/api/?key=30341447-eb158986107312b6bdd4f8895&q=${searchQuery}&image_type=photo&page=${page}&per_page=12`)
                .then(res => res.json())
                .then(data => {
                    setArticles(prevState => page === 0 ? [data.hits] : [...prevState, ...data.hits]);
                    setTotalPages(Math.ceil(data.totalHits / 12));
                })
                .finally(() => setIsLoading(false))
        }
        searchQuery && findImg()
    },[searchQuery, page])
    
    const loadMore = () => {
        setPage(prevState => prevState + 1)
        }

    return (
        <>
        <ul className="gallery">
            {!totalPages && <h1 className="errorMsg">can't find images by name '{searchQuery}'</h1>}
            {articles.length !== 0 && articles.map(({ id, webformatURL, tags, largeImageURL }) => (
                <ImageGalleryItem
                    key={id}
                    src={webformatURL}
                    name={tags}
                    modalSrc={largeImageURL}
                />
            ))}
        </ul>
        {isLoading && <Loader/>}
        {articles.length > 0 && totalPages > page && !isLoading &&(<Button loadMore={loadMore} />)}   
        </>
    )

}

ImageGallery.propTypes = {
    requestImg: PropTypes.string.isRequired,
}