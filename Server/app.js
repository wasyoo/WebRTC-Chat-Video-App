import express from "express";
import dotenv from 'dotenv';

import { createServer } from 'http';
import { Server } from "socket.io";

dotenv.config()
const app = express();

const PORT = process.env.PORT || 4200;

const httpServer = createServer(app);

// set up socket.io and bind it to our
// http server.
const io = new Server(httpServer, {
  cors: {
    origin: process.env.ALLOWED_ORIGINS,
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  console.log("me " + socket.id);
});

app.get("/health", (req, res) => {
  res.status(200).send("OK! Health check success");
});

httpServer.listen(PORT, () => {
  console.log(`server up and running on port ${PORT}`);
});