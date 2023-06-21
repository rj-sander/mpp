import React from "react";
import c3 from "c3";

export const Chart = () => {
    React.useEffect(() => {
      c3.generate({
        bindto: "#chart",
        data: {
          columns: [
            ["Pip Recipients", 9687, 13210, 9305, 13191, 10295, 10619, 160, 15488, 11939, 14911, 12874, 13704, 6840, 12146, 7646, 9038, 10144, 9713, 12445, 5305, 4364, 13205, 13319, 6130, 13272, 9949, 4521, 13254, 6819, 13314, 10686, 9905, 9362],
          ],
          type: "bar",
        },
        axis: {
            x: {
                type: 'category',
                categories: ['Barking and Dagenham', 'Barnet', 'Bexley', 'Brent', 'Bromley', 'Camden', 'City of London', 'Croydon', 'Ealing', 'Enfield', 'Greenwich', 'Hackney', 'Hammersmith and Fulham', 'Haringey', 'Harrow', 'Havering', 'Hillingdon', 'Hounslow', 'Islington', 'Kensington and Chelsea', 'Kingston upon Thames', 'Lambeth', 'Lewisham', 'Merton', 'Newham', 'Redbridge', 'Richmond upon Thames', 'Southwark', 'Sutton', 'Tower Hamlets', 'Waltham Forest', 'Wandsworth', 'Westminster']
            }
        }
      });
    }, []);
    
    return (<div className="container">
        <h2>PIP Recipients by London Local Authority</h2>
        <div id="chart" />
        </div>);
  };

  