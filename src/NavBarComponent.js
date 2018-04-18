import React from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';

let NavBarComponent = () => (
         <div className="navbar-container">
            <div className="navbar-item">
                <Link to="/">Home</Link>
            </div>
            <div className="navbar-item">
                <Link to="/users/:id">Profile</Link>
            </div>
            <div className="navbar-item">
                <Link to="/users">All Sups</Link>
            </div>
        </div>
);


export default NavBarComponent;
