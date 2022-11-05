import React, {Component} from "react";
import ImageGallery from "./ImageGalley/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";
import Modal from "./Modal/Modal";
import './App.css'

class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal,
    }))
  }
  render() {
    const {showModal} = this.state
    return (
      <div>
        <Searchbar />
        <ImageGallery openModal={this.toggleModal} />
        {/* <button type="button" onClick={this.toggleModal}>open modal</button> */}
        {showModal && (<Modal onClose={this.toggleModal}>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, corrupti!</p>
          <button type="button" onClick={this.toggleModal}>close</button>
        </Modal>)}
      
      </div>
    );
  }
}


export default App
