import React, { useState } from 'react';

function SearchField(){
    const [gifSearch, setSearch] = useState("")
    const [gifList, setList] = useState([])
    const [rawGifData, setData] = useState([])


    function fetchGifs(){
      setData([])
      fetch(`https://api.giphy.com/v1/gifs/search?q=${gifSearch}&api_key=JDwoSNpqCHUB6d1Ls8W0yuAERZVXUj6L`)
        .then(response => response.json())
          .then(data=>{
            setData(data)
            setList(data.data.map(gif=><img src={gif.images.original.url}style={{margin:"2.5% 1%",borderRadius:"30px",alignSelf:"center"}}height={gif.images.original.height}></img>))
            })

    }
    return(<>
        <form onSubmit={(event)=>{event.preventDefault();fetchGifs()}}>
          <label>Search for GIFS: </label>
          <input onChange={(event)=>setSearch(event.target.value)}name="gifInput"value={gifSearch}></input>
          <input type="submit" value="SUBMIT"></input>
        </form>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>{gifList}</div>
        </>)
}

export {SearchField}