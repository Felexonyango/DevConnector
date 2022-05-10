import React from 'react'
import {useHistory}   from 'react-router-dom'

const JobItem = ({ job:{title,category, budget,text,date,skill,emails }}) => {
const history = useHistory();

return (
        <> 

          <div className='jobs'>
           
           
             <h4 className="title"> {title}</h4>
           < br />
             
             
             <p>Category : {category}</p>
             
             <p className="large  text-primary"> Ksh{budget}</p>
             < br />
             Job description:
             <p className="text"> {text}</p>
            < br />
            
           
            Skills and experience required:

               <p className="text"> {skill}</p>
            < br />
           
        
            <p className='text'>
            Send Quote and CV to :{emails}
         </p>
       
           
            <p className="text">
            Send Before:
              {date}</p>
              <br />
           </div>
           <br />
        </>
    )
}


export default JobItem
