import './App.css';
import { Router } from '@reach/router';
import AllSneakers from './components/AllSneakers';
import SneakerDetails from './components/SneakerDetails';
import AddSneaker from './components/NewSneaker';
import EditSneaker from './components/EditSneaker';
import Login from './components/Login';
import Checkout from './components/Checkout';
import Signup from './components/Signin';

function App() {
  return (
    <div className="App">
      <Router>
        <Login default />
        <Signup path='/signup' />
        <AllSneakers path='/sneakers/all' />
        <AddSneaker path='/sneakers/add' />
        <SneakerDetails path='/sneakers/:sneaker_id' />
        <EditSneaker path='/sneakers/:id/edit' />
        <Checkout path='/checkout' />
      </Router>
    </div>
  );
}

export default App;