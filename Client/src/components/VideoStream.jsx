import React, { useContext } from 'react';
import { SocketContext } from '../context/socket.context';

const VideoStream = () => {
    const { myVideo } = useContext(SocketContext);
    return (
        <div>
            <video playsInline muted ref={myVideo} autoPlay />
        </div>
    )
}

export default VideoStream;
