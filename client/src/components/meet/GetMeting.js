import React,{useState,useEffect,Fragment} from 'react'
import MeetItem from './MeetItems';
import { Link } from 'react-router-dom';
const GetMeting = () => {

  const [meetings, setMeeting] =useState([]);

  useEffect(()=>{
  getData()

  },[])

  const getData= async () => {
    const  data = await fetch("api/meet")
    const meeting = await data.json();
    setMeeting(meeting)
       }
   
       return (
         <div>
           <div className="link-event">
          <Link to='/events'>
          <i class="fa  fa-plus-circle"></i>
       
            Post Event
         </Link>
          </div>
        <div>
       
          
      <div className=' large '>
           {
              
                meetings.map(meeting=>(

                  <MeetItem  key={meeting._id} meeting={meeting}/>
                ))
              
            }
          </div>
        
    
    </div>
    
    </div>
  
    );
}

export default GetMeting

