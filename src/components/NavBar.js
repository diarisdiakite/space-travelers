import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/planet.png';
import '../assets/css/navbar.css';

const NavBar = () => (
  <div className="container">
    <div className="title">
      <img src={logo} className="logo" alt="logo" />
      <h2>Space travelers</h2>
    </div>
    <nav className="nav-container">
      <NavLink to="/Rockets" className="nav-item">Rockets</NavLink>
      <NavLink to="/Rockets" className="nav-item">Missions</NavLink>
      <NavLink to="/Rockets" className="nav-item">My Profile</NavLink>
    </nav>
  </div>
);

export default NavBar;
