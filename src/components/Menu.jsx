import React, { Component } from 'react';
import '../App.css';
import './Menu.css';

const Menu = () => {
    return (
        <div class="menu">
            <div className='item'>
                <a>Profile</a>
            </div>

            <div className='item'>
                <a>Messages</a>
            </div>

            <div className='item'>
                <a>News</a>
            </div>

            <div className='item'>
                <a>Music</a>
            </div>

            <div className='item'>
                <a>Settings</a>
            </div>

        </div>
    );
}

export default Menu;