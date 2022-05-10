import React from 'react';
const Message = ({name,message}) => {
  return(  
  <div className='user-chat'>
    <div className='chat-name'>{name}</div>
    
    <div className='MessageContainer'>
      <div  className='chat-ttex'>{message}</div>
    </div>
 
  </div>);
};

export default Message;




