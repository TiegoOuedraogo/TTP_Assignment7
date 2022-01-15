import React, { useEffect, useState } from 'react';

function SearchField(){
    const [gifSearch, setSearch] = useState("")
    const [gifList, setList] = useState([])
    const [gifData, setData] = useState(undefined)

    function fetchGifs(){
      setList([])
      fetch(`https://api.giphy.com/v1/gifs/search?q=${gifSearch}&api_key=JDwoSNpqCHUB6d1Ls8W0yuAERZVXUj6L`)
        .then(response => response.json())
          .then(data=>{
            setData(data.data)
            setList(data.data.map(gif=><img src={gif.images.original.url}style={{margin:"2.5% 1%",borderRadius:"30px",alignSelf:"center"}}height={gif.images.original.height}alt={gif.title}></img>))
            setSearch("")})
      }
    function fetchTrending(){
      setList([])
      fetch(`https://api.giphy.com/v1/gifs/trending?api_key=JDwoSNpqCHUB6d1Ls8W0yuAERZVXUj6L`)
        .then(response => response.json())
          .then(data=>{
            setData(data.data)
            setList(data.data.map(gif=><img src={gif.images.original.url}style={{margin:"2.5% 1%",borderRadius:"30px",alignSelf:"center"}}height={gif.images.original.height}alt={gif.title}></img>))
            })
      }
    function fetchRandom(){
      setList([])
      fetch(`http://api.giphy.com/v1/gifs/random?api_key=JDwoSNpqCHUB6d1Ls8W0yuAERZVXUj6L`)
      .then(response => response.json())
        .then(data=>{
          setData(data.data)
          let image = data.data.images.original
          setList(<img src={image.url}style={{margin:"2.5% 1%",borderRadius:"30px",alignSelf:"center"}}height={image.height}alt={data.data.title}></img>)})
      }
    function sortBySize(x){
      if(gifData && gifData.length>0){
      let arr = gifData.sort((a,b)=>x*((a.images.original.width*a.images.original.height) - (b.images.original.width*b.images.original.height)))
      setList(arr.map(gif=><img src={gif.images.original.url}style={{margin:"2.5% 1%",borderRadius:"30px",alignSelf:"center"}}height={gif.images.original.height}alt={gif.title}></img>))
        }
      }
    function filterList(){
      if(gifData && gifData.length>0){
      let arr = gifData.filter(a=>a.rating === ("g"))
      setList(arr.map(gif=><img src={gif.images.original.url}style={{margin:"2.5% 1%",borderRadius:"30px",alignSelf:"center"}}height={gif.images.original.height}alt={gif.title}></img>))
      setData(arr)
        }
      else if(gifData && gifData.rating!=="g")setList([])
      }
    return(<>
        <form onSubmit={(event)=>{event.preventDefault();fetchGifs()}}>
          <label>Search for GIFS: </label>
          <input onChange={(event)=>setSearch(event.target.value)}name="gifInput"value={gifSearch}></input>
          <input type="submit" value="SUBMIT"></input>
        </form>
        <button onClick={()=>fetchRandom()}>CLICK HERE FOR A RANDOM GIF</button><br></br>
        <button onClick={()=>fetchTrending()}>GIFS TRENDING RIGHT NOW</button><br></br><br></br>
        <label>Sort by: </label>
        <select onChange={(event)=>{if(event.target.value)sortBySize(event.target.value);event.target.value=0}}>
          <option value ="0"></option>
          <option value="-1">largest to smallest</option>
          <option value="1">smallest to largest</option>
        </select>
        <button style={{marginLeft:"20px"}}onClick={()=>filterList()}>CHILD FILTER</button>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>{gifList}</div>
        </>)
}

export {SearchField}