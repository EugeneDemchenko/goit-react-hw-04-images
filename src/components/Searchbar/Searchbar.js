import React, { Component } from "react";
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types'
import './Searchbar.css'

class Searchbar extends Component {
    
    state = {
        searchQuery: '',
    }

    handleSearchChange = e => {
        this.setState({ searchQuery: e.currentTarget.value.toLowerCase().trim() })
    }
    handleSubmit = e => {
        e.preventDefault();
        if (this.state.searchQuery.trim() === '') {
            alert('Empty field')
            return
        }
        this.props.submit(this.state.searchQuery);
        this.setState({ searchQuery: ''})
    }

    render() {
        return (<header className="searchbar">
            <form className="form" onSubmit={this.handleSubmit}>
                <button type="submit" className="searchButton">
                    <BsSearch style={{ height: 20, width: 20, fill: 'red'}} />
                </button>

                <input
                    className="input"
                    type="text"
                    placeholder="Search images and photos"
                    value = {this.state.searchQuery}
                    onChange={this.handleSearchChange}
                />
            </form>
        </header>)
    }
}

export default Searchbar

Searchbar.propTypes = {
    submit: PropTypes.func.isRequired
}