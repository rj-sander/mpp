import React from 'react';
import './App.css';
import {Intro1, Intro2, Definitions, Context, Solutions} from "./Text.js";
import Map from "./Map.js";
import {BarChart, LineChart} from "./Chart";
import {ReactComponent as Wheelchair} from "./illustrations/Wheelchair.svg";
import {ReactComponent as Badge} from "./illustrations/Badge.svg";
import {ReactComponent as Phone} from "./illustrations/Phone.svg";

const App = () => {

  return (
    <div className="App">
      <div>
            <Wheelchair />
      <header className="App-header">
        <h1>Invisible Disability</h1>
        <p>How government surveilance by local councils is restricting people's life online</p>
        <p>Bex Sander</p>
        <a href='#intro'><button>Scroll Down</button></a>
      </header>
      <Intro1 />
      </div>
      <Intro2 />
      <LineChart />
      <Definitions />
      <BarChart/>
      <Phone />

      <Map />
      <div className='container'>
      <Context />
      <Badge />
      <Solutions />
      </div>
    </div>

  );
};

export default App;