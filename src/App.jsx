import DisplayNews from "./components/DisplayNews"
import ResponsiveAppBar from "./components/ResponsiveAppBar"
import { useState, useEffect } from 'react'
import Footer from "./components/Footer"



function App() {
  const [newsfeed, setNewsFeed] = useState([]);
  const [inputValue] = useState()
  
  useEffect(() =>{ 
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
              console.log(finalResult.hits[0].title)
              
              setNewsFeed(finalResult.hits)
          
          } catch (error) {
              console.warn(error);
          }
      }    
        fetchDataWrapper()
  }, [])

    return (
    <>
    <ResponsiveAppBar />
      <p>Hello from App.jsx</p>
        {newsfeed.map((news) => <DisplayNews key={news.story_id} {...news} /> )}  
        <hr />
        <Footer/>
      </>
    )
  }


export default App
