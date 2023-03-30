import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

const Header = () => {
    return (
        <div>
            <header className='header'>
          <FontAwesomeIcon className='icon' icon={faCoffee}></FontAwesomeIcon>
          <h1>UtRA-Active-club</h1>
            </header>
        </div>
    );
};

export default Header;