import React, {useState} from 'react';
import Basemap from './basemap.js';
import { Scrollama, Step } from 'react-scrollama';



function Map() {
    const [currentStepIndex, setCurrentStepIndex] = useState(null);

    // This callback fires when a Step hits the offset threshold. It receives the
    // data prop of the step, which in this demo stores the index of the step.
    const onStepEnter = ({ data }) => {
      setCurrentStepIndex(data);
    };
  
    return (
    <div>
    <div style={{ position: 'sticky', top: 0}}>
         <Basemap currentStepIndex={currentStepIndex} />
         </div>
         <Scrollama offset={0.25} onStepEnter={onStepEnter}>
         <Step data={1} key={1}>
            <div className='container subheader'>

              </div>
          </Step>
           <Step data={2} key={2}>
            <div className='container subheader'>
            <div className='mapText'>
  Of 33 London boroughs contacted, 19 responded with answers about social media monitoring.</div>
              </div>
          </Step>
          <Step data={3} key={3}>
            <div className='container subheader'>
            <div className='mapText'>
            Of these, 13 said they conduct overt social media monitoring. This is defined differently by different councils but is usually accepted to be one-off searches, for example, looking at the first page of a social media profile.</div>
              </div>
          </Step>
          <Step data={4} key={4}>
            <div className='container subheader'>
            <div className='mapText'>
            Five boroughs admit to using covert social media monitoring, encompassing multiple searches across multiple platforms or repeated viewings over an extended period.</div>
              </div>
          </Step>
          <Step data={5} key={5}>
            <div className='container subheader'>
            <div className='mapText'>
            Twelve boroughs say that they have an internal social media policy, including Westminster, despite not participating in surveillance. These policies are developed internally and vary wildly.</div>
              </div>
          </Step>
          <Step data={6} key={6}>
            <div className='container subheader'>
            <div className='mapText'>
            No London Borough has reviewed or audited its policies or activity internally.</div>
              </div>
          </Step>
          <Step data={7} key={7}>
            <div className='container subheader'>
            <div className='mapText'>
            Barnet, Hackney, Islington, Kensington and Chelsea, and Redbridge use social media monitoring but have no policy available. This impacts almost 45,000 people living with disabilities across London who have no indication of whether their social media presence can impact their access to financial aid from their local council.</div>
              </div>
          </Step>
          <Step data={8} key={8}>
            <div className='container subheader'>
            <div className='mapText'>
            Redbridge engages in overt and covert social media surveillance but has no guideline or policy on how this should be conducted. Over 9,000 people in Redbridge currently receive PIP.</div>
              </div>
          </Step>
      </Scrollama>

  
      </div>
    );
  }
  
  export default Map;
  