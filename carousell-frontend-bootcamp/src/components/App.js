import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import logo from "../logo.png";

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />

      <Outlet />
    </header>
  </div>
);

export default App;
