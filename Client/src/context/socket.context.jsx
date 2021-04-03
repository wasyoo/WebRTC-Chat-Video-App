import React, {createContext, useState, useEffect, useRef} from 'react';
import { io } from 'socket.io-client';

export const SocketContext = createContext();
const socket = io(process.env.REACT_APP_URL_SOCKET_SERVER)
console.log("🚀 socket: ", socket)

export const SocketCtxProvider = ({ children }) => {
    return (
        <SocketContext.Provider value={{}}>
            {children}
        </SocketContext.Provider>
    )
}