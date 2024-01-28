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
    <img className='h-28' src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Krishna_Logo.png" alt="" srcset="" />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  return (
    <div className="flex justify-between bg-gray-100 shadow-lg">
      <Title />
      <div className="nav-items">
        <ul className="py-8 flex">
          <li className="">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>

          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">Cart</li>
          <li className="px-4">
            <Link to="/instamart">Instamart </Link>
          </li>
        </ul>
      </div>
      <div className="mt-6 -ml-16">
        {isOnline ? "✅" : "🔴"}
      </div>
      {isLoggedIn ? (
        <button className='h-16 mt-5 w-20 bg-slate-600 p-2 text-white rounded-xl -ml-24 mr-12' onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button className='h-16 mt-5 w-20 bg-slate-600 p-2 text-white rounded-xl -ml-24 mr-12' onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
