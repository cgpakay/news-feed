import React from 'react'
import { useState } from 'react'
import { TextField } from '@mui/material'

const Footer = ({searchCallbackFn}) => {
    const[searchInput, setSearchInput] = useState('')
    let searchInputValue ;

    console.log(searchCallbackFn)

    const handleSubmit = (event) => {
        event.preventDefault();
        searchCallbackFn(searchInputValue)
        setSearchInput('')
    }


    return (
        <div className='footer'>
            <hr />
            <ul>
                <a href="https://news.ycombinator.com/newsguidelines.html" target="_blank">Guidelines</a>
                <a href="">  FAQ</a> 
                <a href="">  Lists</a>
                <a href="">  API</a>
                <a href="">  Security</a>
                <a href="">  Legal</a>
                <a href="">  Apply to YC </a>
                <a href="">  Contact</a>
            </ul>

            <form action="" onSubmit={handleSubmit} className='search'>
                <div className='search-box'>
                    <p>Search: </p>
                    <input type="text" value={searchInput} onChange={e =>( searchInputValue = e.target.value  )} />
                    {/* <TextField id="outlined-basic" variant="outlined" onChange={e =>setSearchInput(e.target.value)} /> */}
                </div>
            </form>
        </div>
    )
}

export default Footer