import React, {Component} from "react";
import ImageGallery from "./ImageGalley/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";
// import Modal from "./Modal/Modal";
import './App.css'


class App extends Component {
  state = {
    // showModal: false,
    searchQuery: ''
  };

  // toggleModal = () => {
  //   this.setState(({showModal}) => ({
  //     showModal: !showModal,
  //   }))
  // }
  handleFormSubmit = searchQuery => {
    this.setState({searchQuery})
  }


  render() {
    // const {showModal} = this.state
    return (
      <div>
        <Searchbar submit={this.handleFormSubmit} />
        <ImageGallery
          // openModal={this.toggleModal}
          searchQuery={this.state.searchQuery}
        />
        {/* {showModal && (<Modal onClose={this.toggleModal}>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, corrupti!</p>
          <button type="button" onClick={this.toggleModal}>close</button>
        </Modal>)} */}
        
          
      </div>
    );
  }
}


export default App
