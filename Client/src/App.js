import './App.css';
import {SocketCtxProvider} from './context/socket.context';

function App() {
  return (
    <div className="App">
      <SocketCtxProvider>
        <header className="App-header">
          HELLO WORLD!!
        </header>
      </SocketCtxProvider>
    </div>
  );
}

export default App;
