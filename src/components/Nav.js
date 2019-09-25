/*
  * @file-description : Nav container, it renders the header
  * @author{Yassine JOUT} yassine jout@gmail.com
*/
import React from 'react'
import  '../css/Nav.css'

const Nav = ({name}) => {
    return (
        <div className="nav">
                <ul>
                    <li className="app-logo">
                        <a href="/Home">{name}</a>
                    </li>
                    <li>
                        <a href="/Home">Home</a>
                    </li>
                    <li>
                        <a href="/Info">Info</a>
                    </li>
                    <li>
                        <a href="/About">About</a>
                    </li>
                </ul>
        </div>
    );
};

export default Nav;