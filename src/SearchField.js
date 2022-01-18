import './App.css'


function SearchField(props){

  function fetchGifs(){
    props.setList([])
    fetch(`https://api.giphy.com/v1/gifs/search?q=${props.gifSearch}&api_key=JDwoSNpqCHUB6d1Ls8W0yuAERZVXUj6L`)
      .then(response => response.json())
        .then(data=>{
          props.setData(data.data)
          props.setList(data.data.map(gif=><img className="searchFieldImages" src={gif.images.original.url} height={gif.images.original.height} alt={gif.title}></img>))
          props.setSearch("")})
    }
  function fetchTrending(){
    props.setList([])
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=JDwoSNpqCHUB6d1Ls8W0yuAERZVXUj6L`)
      .then(response => response.json())
        .then(data=>{
          props.setData(data.data)
          props.setList(data.data.map(gif=><img className="searchFieldImages" src={gif.images.original.url} height={gif.images.original.height} alt={gif.title}></img>))
          })
    }
  function fetchRandom(){
    props.setList([])
    fetch(`http://api.giphy.com/v1/gifs/random?api_key=JDwoSNpqCHUB6d1Ls8W0yuAERZVXUj6L`)
    .then(response => response.json())
      .then(data=>{
        props.setData([data.data])
        let image = data.data.images.original
        props.setList(<img src={image.url}style={{margin:"2.5% 1%",borderRadius:"30px",alignSelf:"center"}}height={image.height}alt={data.data.title}></img>)})
    }
  
  return(
    <div className="searchSection">
      <form onSubmit={(event)=>{event.preventDefault();fetchGifs()}}>
        <input className="searchField" onChange={(event)=>props.setSearch(event.target.value)}name="gifInput"value={props.gifSearch} placeholder="Search...                    🔎" ></input>
        <input className="search-btn" type="submit" value="Search"></input>
      </form>
      <button className="random-btn" onClick={()=>fetchRandom()}>RANDOM GIF 🔀</button>
      <button className="trendng-btn" onClick={()=>fetchTrending()}>TRENDING🔥</button>
    </div>
  )
}

export {SearchField}