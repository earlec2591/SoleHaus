import './App.css';
import { Router } from '@reach/router';
import AllSneakers from './components/AllSneakers';
import SneakerDetails from './components/SneakerDetails';
import AddSneaker from './components/NewSneaker';
import EditSneaker from './components/EditSneaker';
import Home from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Home default />
        <Signup path='/signup' />
        <AllSneakers path='/sneakers/all' />
        <AddSneaker path='/sneakers/add' />
        <SneakerDetails path='/sneakers/:id' />
        <EditSneaker path='/sneakers/:id/edit' />
      </Router>
    </div>
  );
}

export default App;
