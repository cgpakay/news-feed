import React from 'react'

const Footer = () => {
    return (
        <div>
            <ul>
                <a href="https://news.ycombinator.com/newsguidelines.html" target="_blank">Guidelines</a>
                <a href=""> | FAQ</a> 
                <a href=""> | Lists</a>
                <a href=""> | API</a>
                <a href=""> | Security</a>
                <a href=""> | Legal</a>
                <a href=""> | Apply to YC </a>
                <a href=""> | Contact</a>
            </ul>

            <form action="">
                <label htmlFor="" value ="Search:" name ="Search :">
                <input type="text" value= "search"/>
                </label>
            </form>
        </div>
    )
}

export default Footer