import React, { Component } from "react";
import './Button.css'

class Button extends Component {
    loader () { console.log('click') }
        
    
    render() {
        return (
            <button
                className="loadButton"
                type='button'
                onClick={this.props.loadMore}>Load More</button>
        )
    }
}

export default Button
