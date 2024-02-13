import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import RoutesList from './RoutesList';
import Homepage from './Homepage';


function App() {


  return (
    <div>
      <BrowserRouter>
        <RoutesList />
        <Navbar />
        <Homepage />
      </BrowserRouter>
    </div>
  );
}

export default App;
