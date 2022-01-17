import React, { useState } from 'react';
import App from "./App"
import './App.css';
function SearchField(){
    const [gifSearch, setSearch] = useState("")
    

    return(
      <>
        <form className='searchBar' onSubmit={(event)=>{event.preventDefault()}}>
          <label>Search for GIFS: </label>
          <input onChange={(event)=>setSearch(event.target.value)}name="gifInput"></input>
        </form>

        {console.log(gifSearch)}

        <App 
          searchTerm = {gifSearch}
        />
        </>
    )
}

export {SearchField}