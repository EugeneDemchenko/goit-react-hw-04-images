import  { useState } from "react";
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types'
import './Searchbar.css'

export default function Searchbar({submit}) {
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearchChange = e => {
        setSearchQuery(e.currentTarget.value.toLowerCase().trim() )
    }    

    const handleSubmit = e => {
        e.preventDefault();
        if (searchQuery.trim() === '') {
            alert('Empty field')
            return
        }
        submit(searchQuery);
        setSearchQuery('')
    }

    return (<header className="searchbar">
        <form className="form" onSubmit={handleSubmit}>
            <button type="submit" className="searchButton">
                <BsSearch style={{ height: 20, width: 20, fill: 'red'}} />
            </button>

            <input
                className="input"
                type="text"
                placeholder="Search images and photos"
                value = {searchQuery}
                onChange={handleSearchChange}
            />
        </form>
    </header>
    )
}

Searchbar.propTypes = {
    submit: PropTypes.func.isRequired
}