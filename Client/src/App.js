import './App.css';
import VideoStream from './components/VideoStream'
import {SocketCtxProvider} from './context/socket.context';

function App() {
  return (
    <div className="App">
      <SocketCtxProvider>
        <VideoStream />
      </SocketCtxProvider>
    </div>
  );
}

export default App;
