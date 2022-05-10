import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import socket from "../socket/socket";
import Hero from "./Hero";
const Home = () => {
  
  const history = useHistory();
  const Id = useRef();
  const Name = useRef();

  //Results of UserExsist from socket.io
  useEffect(() => {
    socket.on("userExsist", ({ error }) => {
      if (error) {
        alert("user exsist");
        return;
      } else {
        const roomId = Id.current.value;
        const name = Name.current.value;
        sessionStorage.setItem("user", name);
        
        history.push(`/${roomId}`)
      
      }
    });
   
  }, []);

  const checkRoom = () => {
    const roomId = Id.current.value;
    const userName = Name.current.value;
    if (roomId === "" || userName === "") {
      alert("enter fields");
      return;
    }
    //check if same username is already exsist in Room or not
    socket.emit("checkUserExsist", { roomId, userName });
  };

  return (
    <div>
    
      <Hero 
      textref={Name}
       roomref={Id}
        check={checkRoom} />
    </div>
  );
};

export default Home;
