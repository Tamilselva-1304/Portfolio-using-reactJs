import React, { Component } from 'react';
import { useRef } from 'react';
import './Navbar.css'; // Create a separate CSS file for styling
import {FaBars, FaTimes} from 'react-icons/fa';
// import Home from './pages/home';
// import About from './pages/about';
// import Contact from './pages/contact';
// import Project from './pages/project'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function Navbar(){

    const navRef = useRef();

    const showNavbar =() =>{
      navRef.current.classList.toggle("responsive_nav")
    }


    return(
      <header>
        <h3>Tamil Selvan</h3>
        <nav ref={navRef}>
          {/* <a href=''>Home</a>
          <a href=''>About</a>
          <a href=''>Projects</a>
          <a href=''>Contact Us</a> */}

          <Link to="/" className="linkss">Home</Link>
          <Link to="/about" className="linkss">About</Link>
          <Link to="/project" className="linkss">Project</Link>
          <Link to="/contact" className="linkss">Contact</Link>

          <button className='nav-btn nav-close-btn closing' onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className='nav-btn ' onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    )
  };