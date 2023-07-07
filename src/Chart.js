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
            ["Total Population", 218900, 389300, 246500, 339800, 330000, 210100, 8600, 390800, 367100, 330000, 289100, 259200, 183200, 264200, 261300, 262000, 305900, 288200, 216600, 143400, 168000, 317600, 300600, 215200, 351100, 310300, 195200, 307700, 209600, 310300, 278400, 327500, 204300]
          ],
          type: "bar",
        },
        color: {
          pattern: ['#A099D5', '#A8D0DF', "F0BC97"]
        },
        bar: {
        width: 15
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
          ["no-one is disabled", 3.2, 3.6, 3.3, 3.0, 3.3, 3.1, 3.1, 3.3, 3.4, 3.3, 3.6, 3.5, 3.6, 4.0, 3.9, 3.7, 3.8, 3.5, 3.4, 3.5, 3.5, 3.6, 3.7, 3.7, 3.6],
          ["someone is disabled", 1.3, 1.4, 1.7, 1.8, 1.7, 1.8, 1.8, 1.7, 1.7, 1.7, 1.8, 1.8, 1.9, 1.8, 1.8, 1.8, 1.8, 2.0, 1.9, 2.1, 2.2, 2.2, 2.3, 2.4, 2.7],
          ["Total disabled population UK", null, null, 8.8, null, null, null, null, null, null, null, null, null, null, 9.4, null, null, null, null, null, null, null, null, null, null, 9.8]
        ],
        type: "area-spline"
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

  return (<div>
  <h2>Estimated number of working-age adults in relative low income by disability</h2>
  <div id="linechart" />
  </div>);
};