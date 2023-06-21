import React, {useState} from 'react';
import './App.css';
import { Chart } from "./Chart";
import Definitions from "./Definitions.js";
import Map from "./Map.js";

function App() {


  return (
    <div className="App">
      <header className="container App-header">
        <h1>
Which Borough is spying on your Instagram?
        </h1>
        <p>
          Using Freedom of Information requests filed by Privacy International we can see which local boroughs are looking at peoples social media, without regulation or oversight
        </p>
        <p>Scroll Down</p>
      </header>
      <Definitions />
      <Chart />
      <Map />
    </div>
  );
};

export default App;