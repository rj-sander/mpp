import React from "react";
import c3 from "c3";
import 'c3/c3.css';


export const BarChart = () => {
    React.useEffect(() => {
      c3.generate({
        bindto: "#barchart",
        data: {
          columns: [
            ["Pip Recipients", 9687, 13210, 9305, 13191, 10295, 10619, 160, 15488, 11939, 14911, 12874, 13704, 6840, 12146, 7646, 9038, 10144, 9713, 12445, 5305, 4364, 13205, 13319, 6130, 13272, 9949, 4521, 13254, 6819, 13314, 10686, 9905, 9362],
            // ["Total Population", 218900, 389300, 246500, 339800, 330000, 210100, 8600, 390800, 367100, 330000, 289100, 259200, 183200, 264200, 261300, 262000, 305900, 288200, 216600, 143400, 168000, 317600, 300600, 215200, 351100, 310300, 195200, 307700, 209600, 310300, 278400, 327500, 204300],
            ["Total Disabled Population", 69700,	35100,	52400,	48600,	30100,	1600,	46200,	58100,	48200,	44300,	45900,	35200,	41000,	43400,	34600,	46900,	42400,	32100,	34300,	43600,	43300,	37500,	38100,	49600,	54400,	28500,	18500,	54200,	32100,	62400,	46500,	48500,	32300]
          ],
          type: "bar",
        },
        color: {
          pattern: ['#A099D5', '#A8D0DF', "F0BC97"]
        },
        axis: {
            rotated: true,
            x: {
                type: 'category',
                categories: ['Barking and Dagenham', 'Barnet', 'Bexley', 'Brent', 'Bromley', 'Camden', 'City of London', 'Croydon', 'Ealing', 'Enfield', 'Greenwich', 'Hackney', 'Hammersmith and Fulham', 'Haringey', 'Harrow', 'Havering', 'Hillingdon', 'Hounslow', 'Islington', 'Kensington and Chelsea', 'Kingston upon Thames', 'Lambeth', 'Lewisham', 'Merton', 'Newham', 'Redbridge', 'Richmond upon Thames', 'Southwark', 'Sutton', 'Tower Hamlets', 'Waltham Forest', 'Wandsworth', 'Westminster'],
                tick: {
                  multiline: false
              }}
        },
      });
    }, []);
    
    return (<div className="container">
        <h2>PIP Recipients by London Local Authority</h2>
        <div id="barchart" />
        </div>);
  };

  export const LineChart = () => {
    React.useEffect(() => {
      c3.generate({
      bindto: "#linechart",
      data: {
        x: 'x',
        xFormat: '%Y',
        columns: [
          ["x", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"],
          ["no-one is disabled", 6.5, 7.3,	6.7,	6.5,	6.8,	6.3,	6.3,	6.4,	6.6,	6.2,	6.5,	6.6,	6.7,	7.0,	6.7,	6.3,	6.4,	6.0,	5.9,	6.0,	6.2,	6.2,	6.6,	6.4,	6.5],
          ["someone is disabled", 3.5,	3.5,	4.1,	4.3,	3.9,	4.1,	4.0,	3.9,	3.7,	3.7,	3.9,	4.1,	4.2,	3.9,	3.7,	3.6,	3.5,	3.7,	3.7,	4.0,	4.3,	4.2,	4.5,	4.6,	5.2],
          ["Total disabled population UK", null, null, 8.8, null, null, null, null, null, null, null, null, null, null, 9.4, null, null, null, null, null, null, null, null, null, null, 9.8],
          ["Total Population", 55.5,	55.6,	55.7,	55.9,	56.1,	56.2,	56.4,	58.3,	58.6,	58.9,	59.3,	59.7,	60.2,	60.7,	61.2,	61.6,	62.5,	62.9,	63.0,	63.5,	64.0,	64.4,	64.9,	65.6,	65.6]
        ],
        type: "area-spline",
        groups: [["no-one is disabled", "someone is disabled"]]
    },
    color: {
      pattern: ['#A099D5', '#A8D0DF', "F0BC97"]
    },
    line: {
      connectNull: true,
  },
      axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y'
            }
        }
    }
    });
  }, []);

  return (
          <div className='container'>
          <h2>Estimated Population in relative low income by disability</h2>

      <p>The amount of disabled people living at low income has almost doubled since 1995, and is increasing at a faster rate than non disabled people. In 2020, 23% of working age adults lived at a low income and in a family with someone who is disabled. </p>
  <div id="linechart" />
  </div>);
};