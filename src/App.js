import React from 'react';
import './App.css';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link, BrowserRouter } from "react-router-dom";
import Nav from "./Nav.js"
import Video from "./Video.js"
import Icons from "./Icons.js"

class App extends React.Component {
  state = {
  };
  render() {
    return (
      <div className="App">
      <>
        <Nav  />
        <Video />
        <Icons />
      </>
      </div>
    );
  }
}

export default App;

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);