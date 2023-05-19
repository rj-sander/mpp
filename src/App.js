import React, {useState} from 'react';
import * as d3 from 'd3';
import './App.css';


function App() {
  const [geojson, setGeojson] = useState(null);
  React.useEffect(() => {
    if (geojson) {
      return
    }
    fetch('/test.geojson')
        .then((response) => response.json())
        .then((geojson) => {
          //  console.log("my_data: ", geojson);
           setGeojson(geojson)

        })

}, [geojson, setGeojson])

if (!geojson) {
  return null
}

  // console.log(geojson)
  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is where my visualisation will go.
        </p>
      </header>
      <Map geojson={geojson}/>
    </div>
  );
}

function Map(props) { 
  var map = React.useRef(null)
  console.log(map)
const geojson = props.geojson
// console.log(geojson)
let projection = d3.geoMercator()
  // .scale(400)
  // .translate([960, 500]);

let geoGenerator = d3.geoPath()
  .projection(projection);

React.useEffect(() => {
  let u = d3.select(map.current)
    .selectAll('g')
    .data(geojson.features);
    // console.log(u)


  u.enter()
    .append('path')
    .attr('d', geoGenerator);
}, [map, geojson]);

  return (
    <div>
    <svg ref={map} id="content" width="900px" height="500px">
      <g className="map"></g>
    </svg>
  </div>
  );
}

export default App;
