// import React from 'react'
import './Navbar.css'
import logo from '../materials/sks_logo.jpg'
export default function Navbar() {
    return (
        <div>
            <div className="navbar">
                    <img src={logo} alt="LOGO here" />
                <div className="navbar-content">
                    <li><a href='/'>Home</a></li>
                    <li><a href='/Dashboard'>Dashboard</a></li>
                    <li><a href='/About'>About</a></li>
                </div>
            </div>
            <hr />
        </div>
    )
}