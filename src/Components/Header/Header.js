import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

const Header = () => {
    return (
        <div>
            <header className='header'>
          <FontAwesomeIcon className='icon' icon={faDumbbell}></FontAwesomeIcon>
      
          <h1>ultra gym club</h1>
            </header>
        </div>
    );
};

export default Header;