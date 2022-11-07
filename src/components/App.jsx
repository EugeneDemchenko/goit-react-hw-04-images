import React, {Component} from "react";
import ImageGallery from "./ImageGalley/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";
import './App.css'


class App extends Component {
  state = {
    searchQuery: ''
  };

  handleFormSubmit = searchQuery => {
    this.setState({searchQuery})
  }


  render() {

    return (
      <div>
        <Searchbar submit={this.handleFormSubmit} />
        <ImageGallery
          searchQuery={this.state.searchQuery}
        />
      </div>
    );
  }
}


export default App
