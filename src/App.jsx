import DisplayNews from "./components/DisplayNews"
import ResponsiveAppBar from "./components/ResponsiveAppBar"
import { useState, useEffect } from 'react'
import Footer from "./components/Footer"
import { Pagination } from "@mui/material"


function App() {
  
  const [newsfeed, setNewsFeed] = useState([]);
  const [nbPages, setNbPages] = useState(10);
  const [pageCount, setPageCount] = useState(1)

  let inputValue;
  let hitsPerPage = 9;

  const fetchDataWrapper =  async(pageNumber) =>{
      try {
          const httpResponse = await fetch(`http://hn.algolia.com/api/v1/search?query=${inputValue || ''}&page=${pageNumber}&hitsPerPage=${hitsPerPage}`)
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
          setNbPages(finalResult.nbPages)
          setNewsFeed(finalResult.hits)
          
      
      } catch (error) {
          console.warn(error);
      }
  }

  useEffect(() =>{ 
        fetchDataWrapper(1)
  }, [])

  function handleInputfromSearch(footerSearchInput) {
    inputValue = footerSearchInput;
    fetchDataWrapper(1)
  }

  function indexCount (index, pageCount){
    return index + 1 + ((pageCount -1)*hitsPerPage) 
  }


    return (
      <>
          <ResponsiveAppBar />
          {
          newsfeed.map((news, index) => <DisplayNews key={news.story_id} {...news} count ={indexCount(index, pageCount)} /> )
          }
          <Pagination count={nbPages-1} onChange={(ev, pageNumber) =>{setPageCount(pageNumber)
          fetchDataWrapper(pageNumber) }}/>
          <Footer searchCallbackFn = {handleInputfromSearch}/>
       </>
    )
  }


export default App
