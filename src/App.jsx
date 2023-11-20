import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Red from './components/Red';
import Blue from './components/Blue';

function App() {
  return (
    <>
      <div>
        <div id='navbar'>
          <Link className='home' to='/'>
            Home
          </Link>
          <Link className='blue' to='/blue'>
            Blue
          </Link>
          <Link className='red' to='/red'>
            Red
          </Link>
        </div>
        <div id='main-section'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blue' element={<Blue />} />
            <Route path='/red' element={<Red />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
