//contains navigation links to the different pages of the website

import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { useSession } from '../contexts/SessionContext';

const Header = () => {
  const navigate = useNavigate();


  return (
    <header>
      <div ><img className="logo"/></div>
      <nav>
        <div className="header-login">
       
        (
          <>
            <Link className="header-login" to="/bio">About Me</Link>
            <Link className="header-login" to="/projects">My Projects</Link>
          </>
        )
        </div>
      </nav>
    </header>
  );
};

export default Header;