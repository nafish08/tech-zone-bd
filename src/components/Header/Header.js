import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <div className='mb-10'>
            <nav className='nav-bar flex justify-center '>
                <div className='text-3xl uppercase p-4 lg:flex'>
                    <CustomLink to="/home">Home</CustomLink>
                    <CustomLink to="/reviews">Reviews</CustomLink>
                    <CustomLink to="/dashboard">Dashboard</CustomLink>
                    <CustomLink to="/blogs">Blogs</CustomLink>
                    <CustomLink to="/about">About</CustomLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;