import React, {useState} from 'react';
import './App.css';
import {ReactComponent as Testmap} from './basemap.js';
var clickIndex = 0;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is where my visualisation will go.
        </p>
      </header>
      <Testmap />
<button onClick={Increase}>isbutoon</button>
<button onClick={Decrease}>alsobutton</button>
    </div>
  );
}

function Increase() {
  if (clickIndex<4) {
    clickIndex++;
  }
  else {
    clickIndex = 0
  }
  console.log(clickIndex)
}

function Decrease() {
  if (clickIndex>0) {
    clickIndex--;
  }
  else {
    clickIndex = 4
  }
  console.log(clickIndex)
}

export default App;
