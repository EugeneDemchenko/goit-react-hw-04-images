import  { useState, useEffect } from "react";
// import  React, { Component} from "react";
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
        setIsLoading(true)
        if (requestImg === searchQuery) {
            fetch(`https://pixabay.com/api/?key=30341447-eb158986107312b6bdd4f8895&q=${searchQuery}&image_type=photo&page=${page}&per_page=12`)
                .then(res => res.json())
                .then(data => {
                    setArticles(prevState => page === 0 ? [data.hits] : [...prevState, ...data.hits]);
                    setTotalPages(Math.ceil(data.totalHits / 12));
                })
                .finally(() => setIsLoading(false))

        
        }
},[searchQuery, page])
    
    
    // useEffect ((prevProps, prevState) => {
    //     if (prevProps.request !== searchQuery || prevState.page !== page) {
    //         setIsLoading(true)
    //             fetch(`https://pixabay.com/api/?key=30341447-eb158986107312b6bdd4f8895&q=${request}&image_type=photo&page=${page}&per_page=12`)
    //                 .then(res => res.json())
    //                 .then(data =>
    //                     setArticles(prevState => (page === 1 ? data.hits : [...prevState, ...data.hits])),
    //                     setTotalPages(Math.ceil(data.totalHits / 12))
    //                 )
    //                 .finally(() => setIsLoading(false))

    //     } 
    // },[])
    
    
    
    // useEffect(() => {
    //     fetch(`https://pixabay.com/api/?key=30341447-eb158986107312b6bdd4f8895&q=${request}&image_type=photo&page=${page}&per_page=12`)
    //         .then(res => res.json())
    //         .then(data =>
    //             setArticles(prevState => (page === 1 ? data.hits : [...prevState, ...data.hits])),
    //             setTotalPages( Math.ceil(data.totalHits / 12) )
    //         )
    //         .finally(() => setIsLoading(false))

    // },[])

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


// class ImageGallery extends Component {
//     state = {
//         articles: [],
//         page: 1,
//         isLoading: false,
//         totalPages: 1,
//         searchQuery: ''
//     }
//     static getDerivedStateFromProps (nextProps, state) {
//         if (nextProps.searchQuery !== state.searchQuery) {
//             return { page: 1, searchQuery: nextProps.searchQuery };
//         }
//         return state;
//      }

//     componentDidUpdate(prevProps, prevState) {
//         if (prevProps.searchQuery !== this.props.searchQuery || prevState.page !== this.state.page) {
//             this.setState({ isLoading: true })
//             setTimeout(() => {
//                 fetch(`https://pixabay.com/api/?key=30341447-eb158986107312b6bdd4f8895&q=${this.props.searchQuery}&image_type=photo&page=${this.state.page}&per_page=12`)
//                     .then(res => res.json())
//                     .then(data =>
//                         this.setState(prevState => ({
//                             articles:
//                                 this.state.page === 1 ? data.hits : [...prevState.articles, ...data.hits],
//                             totalPages: Math.ceil(data.totalHits / 12)
//                         }))
//                     )
//                     .finally(() => this.setState({ isLoading: false }))
//                 }, 250)
//         } 
//     }
//     loadMore = () => {
//         this.setState(prevState => ({
//             page: prevState.page + 1
//         }))
//     }

//     render() {
//         return (<>
//             <ul className="gallery">
//                 {!this.state.totalPages && <h1 className="errorMsg">can't find images by name '{this.props.searchQuery}'</h1>}
//                 {this.state.articles.length !== 0 && this.state.articles.map(({ id, webformatURL, tags, largeImageURL }) => (
//                     <ImageGalleryItem
//                         key={id}
//                         src={webformatURL}
//                         name={tags}
//                         modalSrc={largeImageURL}
//                     />
//                 ))}
//             </ul>
//             {this.state.isLoading && <Loader/>}
//             {this.state.articles.length > 0 && this.state.totalPages > this.state.page && !this.state.isLoading &&(<Button loadMore={this.loadMore} />)}
            
            
//         </>
//         )
//     }
// }

// export default ImageGallery

ImageGallery.propTypes = {
    requestImg: PropTypes.string.isRequired,
}