import React, { Component } from "react";
import './Button.css'

class Button extends Component {
    loader () { console.log('click') }
        
    
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
