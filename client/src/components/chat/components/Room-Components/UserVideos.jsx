import React from "react";
import Video from "./Video";
import Mic from "../../assets/mic.svg";
import VideoCam from "../../assets/videocam.svg";
import MicOff from '../../assets/micoff.svg';
import VideoCamoff from '../../assets/videooff.svg'
const UserVideos = ({ peers, usersMedia, myStream}) => {

  
  return (
    <div className="VideoContainer">
      {peers &&
        peers.map((peer, idx) => {
          return (
            <div className="image2" 
            key={idx}>
              <Video
                peer={peer}
                key={peer.peerId}
                userV={usersMedia}
                myStr={myStream}
              />
              <div className='InfoCard'>
                {usersMedia[peer.userName]?.audio ? 
                <img src={Mic} alt="mic" 
                style={{ padding: "1px" }} /> : 
                <img src={MicOff} alt="mic"
                 style={{ padding: "1px" }} />}
                <div className="names">
                  {peer.name}
                </div>
    
                {usersMedia[peer.userName]?.video ? <img src={VideoCam} alt="video" style={{ padding: "2px" }} /> : <img src={VideoCamoff} alt="video" style={{ padding: "2px" }} />}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default UserVideos;




