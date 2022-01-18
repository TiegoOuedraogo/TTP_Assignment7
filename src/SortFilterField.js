function SortFilterField(props){
    function sortBySize(x){
        if(props.gifData && props.gifData.length>1){
        let arr = props.gifData.sort((a,b)=>x*((a.images.original.width*a.images.original.height) - (b.images.original.width*b.images.original.height)))
        props.setList(arr.map(gif=><img src={gif.images.original.url}style={{margin:"2.5% 1%",borderRadius:"30px",alignSelf:"center"}}height={gif.images.original.height}alt={gif.title}></img>))
          }
        }
    function filterList(){
        if(props.gifData && props.gifData.length>0){
        let arr = props.gifData.filter(a=>a.rating === ("g"))
        props.setList(arr.map(gif=><img src={gif.images.original.url}style={{margin:"2.5% 1%",borderRadius:"30px",alignSelf:"center"}}height={gif.images.original.height}alt={gif.title}></img>))
        props.setData(arr)
          }
        }
    
    
    return(
      <div className="sortSection">
      <label className="sortLabel" >Sort by: </label>
      <select onChange={(event)=>{if(event.target.value)sortBySize(event.target.value);event.target.value=0}}>
        <option value ="0"></option>
        <option value="-1">largest to smallest</option>
        <option value="1">smallest to largest</option>
    </select>
    <button style={{marginLeft:"20px"}}onClick={()=>filterList()}>CHILD FILTER</button>
    </div>
  )
    }
    
    export {SortFilterField}