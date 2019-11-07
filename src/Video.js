import React from "react";
// import ReactDOM from "react-dom";
// import {BrowserRouter, Router, Link } from 'react-router-dom';
import './App.css';

function Video() {
    return (
      <div className="Video">
        <iframe
          src={"https://www.youtube.com/embed/ta7URehXqAI"}
          frameBorder="0"
          height="393"
          width="700"
        />
      </div>
    );
  };

  export default Video;