import React from "react";
import "./header.css";
import logo from "./logo.svg";

export const Header = () => (
  <div className="header">
    <img src={logo} className="logo" alt="logo" />
    <h1>Cálculo de salário com React.js</h1>
  </div>
);
