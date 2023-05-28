import React from 'react';
import logo from '../../assets/logo.png';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <Link to="/"><img src={logo} alt="logo" className='header__logo'/></Link>
            <Navigation />
        </div>
    );
};

export default Header;