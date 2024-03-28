
import { Typography } from "@mui/material"


const DisplayNews = ({title, url, points, author, created_at, num_comments}) => {
  return (
    <div className="body" >
        <Typography variant="subtitle2"  > 
          {title}  ({ url})
        </Typography>
        <Typography variant="caption">
              {points} points by {author} {created_at} | hide | {num_comments} comments
        </Typography> 
        
          {/* <p>{title} ({url})</p> */}
       <div>

       </div>
    </div>   
    )
}

export default DisplayNews