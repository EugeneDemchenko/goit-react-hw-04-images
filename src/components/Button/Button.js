import React, { Component } from "react";
import PropTypes from 'prop-types'

import './Button.css'

class Button extends Component {
    render() {
        return (
            <button
                className="loadButton"
                type='button'
                style={{display:'block'}}
                onClick={this.props.loadMore}>Load More</button>
        )
    }
}

export default Button

Button.propTypes = {
    loadMore: PropTypes.func.isRequired,
}