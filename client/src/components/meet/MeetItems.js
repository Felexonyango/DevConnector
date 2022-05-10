import React from 'react'
import {Link} from 'react-router-dom'
const MeetItem = ({ meeting:{topic,technology,selfintro,summary,room,duration,day }}) => {

return (
  <div>
        <div> 

  <div className='jobs'>
           
           
        <h4 className="title"> {topic}</h4>
           < br />

           <p className="text"> {selfintro}</p>
             <br />

             <p className="text"> {summary}</p>
             <br />
           <p className="text"> Tools: {technology}</p>
               
         < br/>
               
         <p className="text">
       Room Number: {room}
            </p>
        
          
           <br />
           <p className="text"> {day}</p>
          
           <p className="text"> {duration}</p>
          
           </div>
           <br />
        </div>
        
        </div>
    )
}


export default MeetItem
