import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Router, Link } from 'react-router-dom';
import './App.css';


function Nav() {
  return (
    <BrowserRouter>
      <nav className="Nav">
      <Link to="/home">
          <img src="https://f4.bcbits.com/img/0017777582_21.jpg" alt="swift tuttle logo" />
        </Link>
        <Link to="/home">
          <h3>
            Home
          </h3>
        </Link>
        
          <a href="https://swifttuttle.bandcamp.com">
              <h3>Music</h3>
          </a>
        
        <Link to="/events">
          <h3>
            Events
          </h3>
        </Link>
        <Link to="/contact">
          <h3>
            Contact
          </h3>
        </Link>
      </nav>
      <hr></hr>
    </BrowserRouter>
  );
}

export default Nav;