// import React, { Component } from "react";
// import { useState } from "react";
import PropTypes from 'prop-types'

import './Button.css'

export default function Button({loadMore}) {
    return (
        <button
            className="loadButton"
            type='button'
            style={{display:'block'}}
            onClick={loadMore}>
                Load More
        </button>
    )
}

Button.propTypes = {
    loadMore: PropTypes.func.isRequired,
}