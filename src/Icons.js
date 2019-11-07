import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Router, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faBandcamp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './App.css';

export default function Icons() {
    return (
      <div className="logos">  
          <a href="https://swifttuttle.bandcamp.com/"></a>
          <FontAwesomeIcon icon={faBandcamp} className="Icons" />
          <a href="https://www.instagram.com/swift_tuttle/">
          <FontAwesomeIcon icon={faInstagram} className="Icons" /></a>
          <FontAwesomeIcon icon={faFacebook} className="Icons" />
          
 
      </div>
    );
  }