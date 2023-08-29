import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/planet.png';

const NavBar = () => (
  <div>
    <div className="nav-title">
      <image src={logo} alt="logo image" />
    </div>
    <nav>
      <NavLink to="/Rockets">Rockets</NavLink>
      <NavLink to="/Rockets">Missions</NavLink>
      <NavLink to="/Rockets">My Profile</NavLink>
    </nav>
  </div>
);

export default NavBar;
