import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <nav className='menubar'>
      <div className='flex'>
        <div className='tamano'>
            <img className='logoHenry' src={Logo} alt="logo de henry"/>
        </div>
      </div>
      <span className='colorspan'> Henry - Weather App</span>
      <SearchBar onSearch={onSearch}/>
    </nav>
  );
};

export default Nav;
