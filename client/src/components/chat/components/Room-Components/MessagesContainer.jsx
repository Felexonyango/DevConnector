import React from 'react';
import Message from './Message'
const MessagesContainer = ({allmsg}) => {
  return( 
  <div className="chats">
    {allmsg && allmsg.map((ele,idx)=>{
      return <Message name={ele.sendedBy} message={ele.message} key={idx}/>
    })}
  </div>);
};

export default MessagesContainer;

