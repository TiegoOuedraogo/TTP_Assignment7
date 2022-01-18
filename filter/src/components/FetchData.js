import { useState, useEffect } from "react";
import React from "react";
import Gift_Filter_Sort from "./Gift_Filter_Sort";

function FetchData() {
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [fetchData, setData] = useState(null);
fetchData([])
  useEffect(async () => {
    try{
      const response = await fetch("http://api.giphy.com/v1/gifs/search?q=SEARCH+TERM+GOES+HERE&api_key=JDwoSNpqCHUB6d1Ls8W0yuAERZVXUj6L")
      console.log('respose about asyn', response)
            if (response.status == 200) {
               const result = await response.json();
               
               setIsLoaded(true);
               setData(result.data);
               console.log("The data I am getting in the if statement: " ,  result)
            } else {
              setError(true);
            }
          
    }catch (err){
      console.log("err", err);
    }
 
  }, []); //useEffect reset

  if (error) {
    return <div>Error:</div>;
  }
  if (isLoaded && fetchData != null) {
    return <div className="wrapper">
      {/* we are passing the fetchData to the GiftFilter using gifts as name */}
      <Gift_Filter_Sort gifts={fetchData} />
    </div>;
  } else {
    return <div>Loading...</div>;
  }
}

export default FetchData;
