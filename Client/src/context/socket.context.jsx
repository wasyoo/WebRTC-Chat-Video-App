import React, {createContext, useState, useEffect, useRef} from 'react';
import { io } from 'socket.io-client';

export const SocketContext = createContext();
const socket = io(process.env.REACT_APP_URL_SOCKET_SERVER)
console.log("🚀 socket: ", socket);

export const SocketCtxProvider = ({ children }) => {
    const [stream, setStream] = useState(null);
    console.log("🚀  stream", stream)
    const myVideo = useRef();
    useEffect(() => {
        navigator.mediaDevices.getUserMedia({video: true, audio: true})
            .then((mediaStream) => {
                /* use the stream */
                setStream(mediaStream);
                myVideo.current.srcObject = mediaStream;
            }).catch((err) => {
                /* handle the error */
                console.log("stream-error: ", err)
            });
    }, [])
    return (
        <SocketContext.Provider value={{myVideo}}>
            {children}
        </SocketContext.Provider>
    )
}