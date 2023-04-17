import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowAltCircleLeft, FaMicrophone } from 'react-icons/fa';
import { SlSettings } from 'react-icons/sl';
import '../App.css';
// import logo from '../assets/logo.avif';

const Nav = () => (
  <nav className="main-nav">
    <div className="nav-left">
      <NavLink to="/">
        <FaArrowAltCircleLeft className="icons" />
      </NavLink>
      <p> 2023</p>
    </div>
    <div className="nav-center">
      <img src="" alt="Crypto logo" width="50px" />
      <p> Crypto Tracker App</p>
    </div>
    <div className="nav-right">
      <NavLink to="/"><FaMicrophone className="icons" /></NavLink>
      <NavLink to="/"><SlSettings className="icons" /></NavLink>
    </div>
  </nav>
);

export default Nav;