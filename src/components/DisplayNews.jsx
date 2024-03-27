
// import { Typography } from "@mui/material"

const DisplayNews = ({title, url, points, author, created_at, num_comments}) => {
  return (
    <div>
        <p>hello from DisplayNews</p>
        <p>{title}{url}</p>
        <div>
            {points} points by {author} {created_at} | hide | {num_comments} comments
        </div>  
      </div>    
  )
}

export default DisplayNews