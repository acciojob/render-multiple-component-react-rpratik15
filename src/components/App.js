import React, {Component, useState} from "react";
import '../styles/App.css';
import Title from "./Title";
import Info from "./Info";

const App = () => {
  return (
    <div id="main">
      <Title/>
      <Info/>
    </div>
  )
}


export default App;
