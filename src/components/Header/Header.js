import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt='not found'></img>
            <div className='menu-list'>
                <a href="/">Order</a>
                <a href="/">Order Review</a>
                <a href="/">Manange Inventory</a>
                <a href="/">Login</a>
            </div>
        </nav>
    );
};

export default Header;