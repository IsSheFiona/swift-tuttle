import React from 'react';
import './App.css';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link, BrowserRouter } from "react-router-dom";
import Nav from "./Nav.js"

class App extends React.Component {
  state = {
  };
  render() {
    return (
      <div className="App">
      <>
        <Nav  />
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