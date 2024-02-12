import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import RoutesList from './RoutesList';


function App() {


  return (
    <div>
      <BrowserRouter>
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
