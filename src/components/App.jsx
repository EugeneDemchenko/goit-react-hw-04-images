import  {useState} from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";
import './App.css'



export default function App() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div>
      <Searchbar submit={setSearchQuery} />
      <ImageGallery
        searchQuery={searchQuery}
      />
    </div>
  );    
}