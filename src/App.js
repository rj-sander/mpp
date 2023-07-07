import React, {useState} from 'react';
import './App.css';
import {Intro1, Intro2, Definitions, Context, Solutions} from "./Text.js";
import Map from "./Map.js";
import {BarChart, LineChart} from "./Chart";
import {ReactComponent as Wheelchair} from "./illustrations/Wheelchair.svg";
import {ReactComponent as Badge} from "./illustrations/Badge.svg";
import {ReactComponent as Phone} from "./illustrations/Phone.svg";

import { Scrollama, Step } from 'react-scrollama';


const App = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  return (
    <div className="App">
      <div>
            <Wheelchair />
      <header className="App-header">
        <h1>Invisible Disability</h1>
        <p>How government surveilance by local councils is restricting people's life online</p>
        <a href='#intro'><button>Scroll Down</button></a>
      </header>
      <Intro1 />
      </div>
      <div className='container'>
      <LineChart />
      <p>The amount of disabled poeple living in low incomes has double since 1995, and is increasing at a faster rate than non disabled people. According to the most recent available data, 26% of disabled people in England live at a low income.</p>
      </div>
      <Intro2 />
      <BarChart/>
      <Definitions />
      <Phone />
      <Map />
      <Context />
      <Badge />
      <Solutions />

    </div>

  );
};

export default App;