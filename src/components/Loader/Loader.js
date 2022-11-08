import React, { Component } from "react";
import { Dna } from 'react-loader-spinner'


class Loader extends Component {
    render() {
        return (
            <Dna
                visible={true}
                height="200"
                width="200"
                ariaLabel="dna-loading"
                wrapperStyle={{    display: 'block',
                    marginLeft: 'auto',
                marginRight: 'auto'}}
                wrapperClass="dna-wrapper"

            />
        )
    }
}


export default Loader