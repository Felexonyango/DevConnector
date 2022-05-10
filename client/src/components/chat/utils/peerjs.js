import Peer from 'simple-peer'
import socket from '../socket/socket';

export const createPeer = (userId,caller,stream) => {
    const peer = new Peer({initiator:true,trickle:false,stream});
    // console.log(stream);
    peer.on('signal',(signal)=>{
        socket.emit('callUser',{usertoCall:userId,from:caller,signal});
    })

    peer.on('disconnect',()=>{
        peer.destroy();
    })

    return peer;
}

// export const findPeer = (userId,users) => {
    
// }

export  const addPeer = (incomingsignal,from,stream) => {
    // console.log(stream);
    const peer = new Peer({initiator:false,trickle:false,stream});
    peer.signal(incomingsignal);
    peer.on('signal',(data)=>{
        socket.emit('acceptCall',{signal:data,to:from})
    })

    peer.on('disconnect',()=>{
        peer.destroy();
    })

    // peer.signal(incomingsignal);
    return peer;
    }