function SearchField(props){


    function fetchGifs(){
      props.setList([])
      fetch(`https://api.giphy.com/v1/gifs/search?q=${props.gifSearch}&api_key=JDwoSNpqCHUB6d1Ls8W0yuAERZVXUj6L`)
        .then(response => response.json())
          .then(data=>{
            props.setData(data.data)
            props.setList(data.data.map(gif=><img src={gif.images.original.url}style={{margin:"2.5% 1%",borderRadius:"30px",alignSelf:"center"}}height={gif.images.original.height}alt={gif.title}></img>))
            props.setSearch("")})
      }
    function fetchTrending(){
      props.setList([])
      fetch(`https://api.giphy.com/v1/gifs/trending?api_key=JDwoSNpqCHUB6d1Ls8W0yuAERZVXUj6L`)
        .then(response => response.json())
          .then(data=>{
            props.setData(data.data)
            props.setList(data.data.map(gif=><img src={gif.images.original.url}style={{margin:"2.5% 1%",borderRadius:"30px",alignSelf:"center"}}height={gif.images.original.height}alt={gif.title}></img>))
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
    
    return(<>
        <form onSubmit={(event)=>{event.preventDefault();fetchGifs()}}>
          <label>Search for GIFS: </label>
          <input onChange={(event)=>props.setSearch(event.target.value)}name="gifInput"value={props.gifSearch}></input>
          <input type="submit" value="SUBMIT"></input>
        </form>
        <button onClick={()=>fetchRandom()}>CLICK HERE FOR A RANDOM GIF</button><br></br>
        <button onClick={()=>fetchTrending()}>GIFS TRENDING RIGHT NOW</button><br></br><br></br>
        </>)
}

export {SearchField}