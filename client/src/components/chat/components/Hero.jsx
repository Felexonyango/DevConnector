import React,{useState} from "react";
import styled from "styled-components";
import images from '../assets/zoom.jpeg'
const Hero = ({ textref, roomref, check }) => {
  const submitHandler = (e) => {
     e.preventDefault();
  }
  return (
      <div className="hero">
              <h2 className='hero-chat'>
                DevConnector enables you to organize and broadcast exceptional   events with DevLive to facillitate virtual  interactions
                 </h2>
              <div className="hero-staff">
              <img src={images} alt="imge" className="hero-image"/>

     <p>DevLive is your all-in-one solution to create an outstanding and interactive online event for Webinars meetings
       by just joining the room of your choice specified by event organizer
     </p>

</div>
<h2 className="hero-chat">Let's meet</h2>
<div className="hero-form">
<form onSubmit={submitHandler} className='form'>
<div className='form-group'>
  <input type="text"placeholder="Enter username"ref={textref} name="username"/>
  </div>
  <div className='form-group'>
  <input type="number"
  placeholder="Enter Room Number"
  ref={roomref} 
  name="room"/>
  </div>
<button type="submit" 
onClick={check} 
className='btn btn-primary'>
  Join Room
</button>

  </form>
  </div>
   </div>

       
       
     

  );
};

export default Hero;

