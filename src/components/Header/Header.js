import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='nav-bar'>
                <div className='text-3xl uppercase p-4'>
                    <Link to="/home">Home</Link>
                    <Link to="/reviews">Reviews</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/blogs">Blogs</Link>
                    <Link to="/about">About</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;