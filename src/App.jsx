import DisplayNews from "./components/DisplayNews"
import ResponsiveAppBar from "./components/ResponsiveAppBar"
import { useState, useEffect } from 'react'
import Footer from "./components/Footer"



function App() {
  
  const [newsfeed, setNewsFeed] = useState([]);

  let inputValue;
  
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

  useEffect(() =>{ 
        fetchDataWrapper()
  }, [])

  function handleInputfromSearch(footerSearchInput) {
    inputValue = footerSearchInput;
    fetchDataWrapper()
  }
  console.log(inputValue);

    return (
    <>
    <ResponsiveAppBar />
        {newsfeed.map((news, index) => <DisplayNews key={news.story_id} {...news} count ={index+1} /> )}  
        <Footer searchCallbackFn = {handleInputfromSearch}/>
      </>
    )
  }


export default App
