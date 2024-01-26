import React from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom';
import useOnline from './Utils/useOnline';
const loggedInUser = () => {
  // API call to check authentication
  return false;
};

const Title = () => (
  <a href="/">
    <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Krishna_Logo.png" alt="" srcset="" />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
        <li>
          <Link to="/instamart">Instamart </Link>
        </li>
        </ul>
      </div>
      <h1>
        { isOnline ? "✅" : "🔴" }
      </h1>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
