import DisplayNews from "./components/DisplayNews"
import ResponsiveAppBar from "./components/ResponsiveAppBar"
import { useState, useEffect } from 'react'
import Footer from "./components/Footer"



function App() {
  
  const [newsfeed, setNewsFeed] = useState([]);
  // const[count, setCount] =useState(0)

  let inputValue;
  // let countResult;
  
  const fetchDataWrapper =  async() =>{
      try {
          const httpResponse = await fetch(`http://hn.algolia.com/api/v1/search?query=${inputValue || ''}`)
          console.log(httpResponse)
          if(!httpResponse.ok){
              throw new Error(
                  `API responded with ${httpResponse.status}`
              );
          } 
          const finalResult = await httpResponse.json();
          if(finalResult.hits.lenght === 0){
            alert('not a valid input')
            return;
          }
          setNewsFeed(finalResult.hits)
      
      } catch (error) {
          console.warn(error);
      }
  }
      // countResult= count+countResult;

  useEffect(() =>{ 
        fetchDataWrapper()
        // setCount(countResult)
        // countResult = count + countResult
  }, [])

  function handleInputfromSearch(footerSearchInput) {
    inputValue = footerSearchInput;
    fetchDataWrapper()
  }
  console.log(inputValue);

    return (
    <>
    <ResponsiveAppBar />
        {newsfeed.map((news) => <DisplayNews key={news.story_id} {...news} /> )}  
        <Footer searchCallbackFn = {handleInputfromSearch}/>
      </>
    )
  }


export default App
