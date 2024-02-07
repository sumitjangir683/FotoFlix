import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import Photos from './Components/Photos';
import Favourites from './Components/Favourites';

import { FaSearch } from 'react-icons/fa';
function App() {
  return (
  <Router>
    <div>
    <nav className='navbar'>
      <div className='navlogo'>
        FotoFlix
      </div>
      <form action='' className='navbar_search-form'>
    <input type='text'className='form-input'placeholder='search'/>
    <buttom type="submit" className='submit-btn'>
      <FaSearch/>
    </buttom>
      </form>
      <div className='navlinks'>
        <Link to="/">Home</Link>
        <Link to="/Favourites">Favourites</Link>
      </div>
    </nav>
    <Routes>
      <Route path="/" element={<Photos/>}/>
      <Route path="/Favourites" element={<Favourites/>}/>
    </Routes>
    </div>
  </Router>
  );
}

export default App;
