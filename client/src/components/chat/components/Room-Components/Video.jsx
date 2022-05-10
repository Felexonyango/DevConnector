import React, { useEffect, useRef } from "react";
import FitScreen from "../../assets/fitscreen.svg";

const Video = (props) => {
  let tempStream;
  const peer = props.peer;

  const ref = useRef(null);
  useEffect(() => {
    peer.on("stream", (stream) => {
      ref.current.srcObject = stream;
      ref.current.srcObject.name = peer.userName;
    });
  }, [peer, props.isVideo]);

  const changeStream = () => {
    tempStream = props.myStr.current.srcObject;
    props.myStr.current.srcObject = ref.current.srcObject;
    ref.current.srcObject = tempStream;
  };
  return (
    <div className="hov">
      <div className="Btnx"
       src={FitScreen} onClick={changeStream}>

       </div>
      <video ref={ref} 
      autoPlay
       style={{ width: "100%",
       height: "100%",
       borderTopLeftRadius:"15px",
       borderTopRightRadius:"15px" }} />
    </div>
  );
};

export default Video;

