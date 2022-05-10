import React from 'react';
import Send from '../../assets/send.svg'
import styled from 'styled-components';
const ChatFooter = ({setMsg,msg,SendMsg}) => {
  return (
  <div className="chat-footer">
    <input
    type="text"
    className="chat-input"
     onChange={e=>setMsg(e.target.value)}
      value={msg}
       onKeyUp={SendMsg}/>
    <img src={Send} alt="send" style={{position:"absolute",width:"15px",paddingRight:"8px"}} />
  </div>);
};

export default ChatFooter;




