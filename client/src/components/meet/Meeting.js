import React, { useState } from "react";
import { connect } from "react-redux";
import { addmeet} from "../../actions/meet";
import { Link } from "react-router-dom";


const Meeting = ({ addmeet }) => {
  const [topic, setTopic] = useState("");
   const [technology,setTechnology]=useState("")
   const[ selfintro,seTselfintro]=useState("")
  const[summary,setSummary]=useState("")
   const [room,setTroom]=useState("")
   const [duration,setDuration]=useState('')
   const [day,setDay]=useState("")
 


  return (
    <div className='post-form'>
      <div className='bg-primary p'>
        <h3>Webinar Meeting </h3>
      </div>
      <form
        className='form my-1'
        onSubmit={e => {
          e.preventDefault();
          addmeet({ topic,technology,selfintro,summary,room,duration,day});
          setTopic("");
           setTechnology('')
           seTselfintro('')
           setSummary("")
           setTroom("")
           setDuration("")
           setDay("")
         
          
        }}
      >
                <div className='form-group'>
        <label htmlFor="title">Topic</label>
          <input
            type='text'
            name='title'
            value={topic}
            required
            onChange={e => setTopic(e.target.value)}/>
</div>
        <div>
<label htmlFor="summary"> Introduce yourself</label>
        <textarea
          name='text'
          cols='30'
          rows='5'
          value={selfintro}
          onChange={e => seTselfintro(e.target.value)}
          required
        >

        </textarea>

        </div>

 
          
<div className='form-group'>
        <label htmlFor="technology">Technology</label>
          <input
            type='text'
            name='title'
            value={technology}
            required
            onChange={e => setTechnology(e.target.value)}/>
</div>
        

<div>
<label htmlFor="summary">Summary of the topic</label>
        <textarea
          name='text'
          cols='30'
          rows='5'
          value={summary}
          onChange={e => setSummary(e.target.value)}
          required
        >

        </textarea>

        </div>


        
        <div className='form-group'>
<label htmlFor="link">Room Number</label>
          <input
            type='text'
            name='room'
            value={room}
            required
            onChange={e => setTroom(e.target.value)}/>
</div>
<div className='form-group'>
<label htmlFor="day">Day</label>
          <input
            type='date'
            name='date'
            value={day}
            required
            onChange={e => setDay(e.target.value)}/>
</div>
 
 

         <div className='form-group'>
    <label htmlFor="Duration">Duration</label>
          <input
            type='text'
            name='text'
            value={duration}
            required
            onChange={e => setDuration(e.target.value)}/>
         </div> 
        <input type='submit' className='btn btn-dark my-1' value='Submit' />
      </form>
    
    </div>
  );
};



export default connect(null, { addmeet })(Meeting);
