import logo from './logo.svg';
import './App.css';
import React,{useState} from "react"
import { SearchField } from './SearchField';

function App(prop) {
  const [gifs, setGif] = useState([]);
  
  function fetchGifs(){
    console.log(prop.searchTerm)

    setGif([]);// Start off with no gifs each search
    fetch(`https://api.giphy.com/v1/gifs/search?q=${prop.searchTerm}&api_key=JDwoSNpqCHUB6d1Ls8W0yuAERZVXUj6L`)
    .then(response => {
          if(!response.ok){
            alert("No gifs found😕");
          }else {
            return response.json()
          }
    }).then(data => {
      //setGif(data.data.map(gif => <img src={gif.images.original.url}></img>))
      setGif(data.data)
    })
  }

  const vids = gifs.map(gif => <img src={gif.images.original.url}></img>);
  return (
    <>
    <center><button className='search-btn' onClick={fetchGifs}>Search</button></center>
    <div className='gifRenders'>
      
      {vids}
      
    </div>
    </>
  )
}

export default App;
