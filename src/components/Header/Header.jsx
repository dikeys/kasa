import React from 'react';
import logo from '../../assets/logo.png';
import Navigation from '../Navigation/Navigation';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="logo" className='header__logo'/>
            <Navigation />
        </div>
    );
};

export default Header;