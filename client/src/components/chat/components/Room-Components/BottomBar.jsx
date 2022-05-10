import React from "react";
import styled from "styled-components";
import Videocam from "../../assets/videocam.svg";
import Mic from "../../assets/mic.svg";
import Screen from "../../assets/desktop.svg";
import Chat from "../../assets/chat.svg";
import MicOff from "../../assets/micoff.svg";
import Videooff from "../../assets/videooff.svg";
import HangUp from "../../assets/phonedisabled.svg";

const BottomBar = ({
  isOpen,
  setisOpen,
  hang,
  onShare,
  toggleMicVideo,
  userMedia,
}) => {
  let isVideoOn = userMedia["localUser"].video;
  let isAudioOn = userMedia["localUser"].audio;
  return (
    <div className="BBar">
      {isVideoOn ? (
        <IconButton onClick={toggleMicVideo} data-switch="video">
          <img src={Videocam} alt="videobtn" data-switch="video" />
        </IconButton>
      ) : (
        <IconButton onClick={toggleMicVideo} data-switch="video" danger>
          <img src={Videooff} alt="videobtn" data-switch="video" />
        </IconButton>
      )}
      {isAudioOn ? (
        <IconButton onClick={toggleMicVideo} data-switch="audio">
          <img src={Mic} alt="audiobtn" data-switch="audio" />
        </IconButton>
      ) : (
        <IconButton onClick={toggleMicVideo} data-switch="audio" danger>
          <img src={MicOff} alt="audiobtn" data-switch="audio" />
        </IconButton>
      )}
      <IconButton onClick={onShare}>
        <img src={Screen} alt="videobtn" />
      </IconButton>
      <div className="SideOpener"
        onClick={() => {
          setisOpen(!isOpen);
        }}
      >
        <img src={Chat} alt="videobtn" />
      </div>
      <IconButton onClick={hang} danger>
        <img src={HangUp} alt="disabledphone" />
      </IconButton>
    </div>
  );
};

export default BottomBar;


const IconButton = styled.button`
  padding: 12px;
  
  margin-left:${(props)=>(props.danger ? "auto" : "0")}
  display: block;
  color: #fff;
  border: none;
  background-color: ${(props) => (props.danger ? "red" : "#17a2b8")};
  border-radius: 5px;
  margin-right: 5px;
  cursor: pointer;
  transition: 0.5s all;
`;

