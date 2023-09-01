import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/planet.png';
import '../assets/css/navbar.css';

const NavBar = () => (
  <div className="container">
    <div className="title">
      <img src={logo} className="logo" alt="logo" />
      <h2>Space travelers</h2>
    </div>
    <nav className="nav-container">
      <NavLink to="/rockets" className="nav-item">Rockets</NavLink>
      <NavLink to="/missions" className="nav-item">Missions</NavLink>
      <NavLink to="/users/1" className="nav-item">My Profile</NavLink>
    </nav>
  </div>
);

export default NavBar;
