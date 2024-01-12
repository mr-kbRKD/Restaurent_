import React from 'react'

const Title = () => {
  return (
    
    <a href="/">
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Krishna_Logo.png" alt="" srcset="" />
    </a>
  )
}


// Functional compo

const Header = () =>
(
        <div className="header">
        <Title />
        <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
        </ul>

        </div>
        </div>
);


export default Header

 