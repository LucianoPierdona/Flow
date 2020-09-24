import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from './style';

const Landing = () => {
  return (
    <NavBar>
      <div>
        <div className="navbar-left animate__animated animate__fadeInLeft">
          Flow
        </div>
        <div className="navbar-right">
          <Link to="/login">Login</Link>
          or
          <Link to="/register">Register</Link>
        </div>
      </div>
    </NavBar>
  );
}

export default Landing;