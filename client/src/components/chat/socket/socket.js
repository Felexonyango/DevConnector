import io  from "socket.io-client";

const SERVER = 'http://localhost:5000';

//  const SERVER = 'https://devconector.herokuapp.com';

const socket = io(SERVER);

export default socket;