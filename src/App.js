import React, {useState} from 'react';
import './App.css';
import Testmap from './basemap.js';

function App() {
  const [clickIndex, setClickIndex] = useState(0);

function Increase() {
  if (clickIndex<4) {
    setClickIndex(clickIndex + 1);
  }
  else {
    setClickIndex(0);
  }
}

function Decrease() {
  if (clickIndex>0) {
    setClickIndex(clickIndex - 1);
  }
  else {
    setClickIndex(4);
  }
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>
Which Borough is spying on your Instagram?
        </h1>
        <p>
          Using Freedom of Information requests filed by Privacy International [check] we can see which local boroughs are looking at peoples social media, without regulation or oversight
        </p>
        <caption>Scroll Down</caption>
      </header>
      <Testmap clickIndex={clickIndex} />
<button onClick={Decrease}>isbutoon</button>
<button onClick={Increase}>alsobutton</button>
<p>Of 33 London boroughs contacted, 19 responded with answers about social media monitoring.
Of these, 13 said they conduct overt social media monitoring. This is defined differently by different councils but is usually accepted to be one-off searches, for example, looking at the first page of a social media profile.
Five boroughs admit to using covert social media monitoring, encompassing multiple searches across multiple platforms or repeated viewings over an extended period. 
Twelve boroughs say that they have an internal social media policy, including Westminster, despite not participating in surveillance. These policies are developed internally and vary wildly. 
No London Borough has reviewed or audited its policies or activity internally. 
Barnet, Hackney, Islington, Kensington and Chelsea, and Redbridge use social media monitoring but have no policy available. This impacts almost 45,000 people living with disabilities across London who have no indication of whether their social media presence can impact their access to financial aid from their local council.
Redbridge engages in overt and covert social media surveillance but has no guideline or policy on how this should be conducted. Over 9,000 people in Redbridge currently receive PIP.</p>
    </div>
  );
}



export default App;
