import React, {useState} from 'react';
import './App.css';
import Definitions from "./Definitions.js";
import Map from "./Map.js";
import { Chart } from "./Chart";
import {ReactComponent as Illustration} from "./Wheelchair frame.svg";
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
      <div className='scrolly'>
            <Illustration />
            <Scrollama offset={0.5} onStepEnter={onStepEnter}>
<Step data={1} key={1}>
      <header className="App-header">
        <h1>Invisible Disability</h1>
        <p>How government surveilance by local councils is restricting people's life online</p>
        <a href='#intro'><button>Scroll Down</button></a>
      </header>
      </Step>
      <Step data={2} key={2}>
      <div className='subheader'>
      <p className='mapText'><a name="intro">M</a> goes to an art group once a week. It’s a close-knit community of regular attendees who often see each other outside of workshops; the atmosphere is jovial and collaborative. Some attendees are photographers and will snap photos of people’s work and portraits of group members. But M catches one of them towards the end of the workshop as people pack up. “Please don’t post any photos of me on social media,” they ask. This a reasonable request and not unusual as people become more concerned with online privacy. But M isn’t worried about their privacy - they’re worried about their benefits.</p>
      </div></Step>
      </Scrollama>
      </div>
        <p>M was left with limited mobility after an accident a few years ago - they use a wheelchair and need a part-time carer. They qualify for Personal Independence Payment, or PIP, which replaced the Disability Living Allowance in 2013. Through their local council, they also qualify for other kinds of aid, including reduced council tax. PIP is means tested, so to qualify for payments, individuals are regularly assessed to determine their distinct needs. Local councils are within their rights to investigate allegations of fraud in this ecosystem and can report any findings to the DWP to adjust or even deny people’s financial aid. Social media has formed a part of these investigations, and this, coupled with a lack of transparency from the institutions, has created a culture where benefits recipients feel they have to self-censor to keep themselves safe. As M puts it, “If an investigator sees me at this art group, even though I’m only here for a few hours once a week, they might conclude that I don’t need my carer at all from now on, and that would make my life so much harder.”</p>
        <Chart style={{width: '40%'}}/>

      <Definitions />
      <Map />

    </div>

  );
};

export default App;