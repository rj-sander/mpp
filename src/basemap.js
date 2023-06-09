import cx from "classnames";
function Testmap(props) {
  const clickIndex = props.clickIndex
  const inJourney = props.clickIndex != 0;
  return (
<div>
<svg id="Base_Map" data-name="Base Map" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 806.45 626">
  <path id="Westminster" className={`${colourClasses({1: "response", 4: "policy"}, clickIndex)} base`} d="m369.44,307.3c-18.84,47.56-32.73-24.51-49.35-4.48-12.43-13.72-38.9-38.55-37.97-51.43,24.85,9.38,23.77-22.99,55.24-9.93-3.11,44.71,60.77,21.23,33.08,52.36-.61,4.48-.43,9.02-1.01,13.48Z"/>
  <path id="Wandsworth" className={`${colourClasses(inJourney, clickIndex)} base`} d="m244.26,399.4c25-14.32-30.03-48.96,19.11-45.66,6.77-19.06,53.43,18.49,62.76-26.18,32.89-15.88,48.58,4.32,24.59,17.56-20.23,29.4,29.99,61.33-3.38,79.29-26.71,3.99-38.87-22.62-47.47-31.13-15.08-1.69-52.59,18.86-55.6,6.12h0Z"/>
  <path 
    id="Waltham_Forest" 
    data-name="Waltham Forest" 
    className={   
      `base ${colourClasses({1: "response", 2: "overt", 3: "covert", 4: "policy"}, clickIndex)}`} d="m502.33,127.01c-11.42,45.94,21.11,107.51-33.7,84.9-16.21-8.14-58.78-24.58-34.62-51.71,8.06-27.5,35.54-78.19,42.36-87.05,33.41-7.34,32.61,30.79,17.18,38.09,8.33,2.06,13.36,9.88,8.77,15.77h0Z"/>
  <path id="Tower_Hamlets" data-name="Tower Hamlets" className={`${colourClasses(inJourney, clickIndex)} base`} d="m459.44,305.64c10.45-43.71-63.65,6.05-43.79-30.86-20.38-24.43,57.35-61.91,52.45-33.29,12.73,25.97,24.24,30.95,28.72,43.34-19.15-.89-7.84,62.42-37.27,21.63l-.08-.66s-.03-.15-.03-.15Z"/>
  <path id="Sutton" className={`${colourClasses(inJourney, clickIndex)} base`} d="m343.48,576.94c-11.56-18.62-45.89-45.84-64.21-13.19,4.77-19.05-1.45-53.01-23.5-63.64-4.85-39.63,15.16-14.43,30.01-19.6,15.6-6,36.17-10.76,55.91-9.08,44.32-11.66,29.08,53.33,35.74,67.31-35.61-9.76-12.86,32.81-33.95,38.2h0Z"/>
  <path id="Southwark" className={`${colourClasses(inJourney, clickIndex)} base`} d="m415.63,421.04c-19.35-17.1-23.56-61.86-18.02-76.87-14.82-13.82-20.28-57.75-6.59-61.01,25.31,14.9,48.63.53,68.32,6.08-2.79,30.85-40.18,22.15-15.14,62.17,10.7,37.99-8.24.37-28.56,69.63Z"/>
  <path id="Richmond_upon_Thames" data-name="Richmond upon Thames" className={`${colourClasses({1: "response", 2: "overt", 4: "policy"}, clickIndex)} base`} d="m242.1,400.91c-23.49,40.86-47.96-5.21-51.39,17.37,15.36,49.75-21.39,62.9-47.61,22.93-37.62,16.42-26.96-15.56-28.58-25.4,44.88-25.05-21.33-20.99,14.11-44.76,35.83-2.2,40.98,8.78,56.16-25.13,19.24-63.14,56.93,39.43,64.32-22.06,22.96-19.29,29.22,27.93,14.08,26.74-27.46,5.18-22.09,21.11-11.18,43.49-2.88,2.19-7.75,5.07-9.92,6.83h0Z"/>
  <path id="Redbridge" className={`${colourClasses({1: "response", 2: "overt", 3: "covert"}, clickIndex)} base`} d="m502.33,127.01c-9.67-10.26-5.85-26.78,4.67-29.81,9.61,22.02,32.11,8.71,25.71,21.92,37.93,26.68,42.3-7.95,72.09-12.18,36.99-14.75,17.44,51.49,3.88,57.46,12.07,27.96-20.37,56.22-52.67,61.64-10.18-28.43-23.71-32.12-39.23-15.97-24.12-5.72-14.07-42.18-18.44-72.91.75-3.74,4.21-7.53,4-10.14h0Z"/>
  <path id="Newham" className={`${colourClasses(inJourney, clickIndex)} base`} d="m516.66,300.96c-27.83-22.83-21.75-21.29-37.25-41.47-18.77-18.86-13.6-56.89,14.61-43.38,12.46-8.21,35.6-9.96,44.12-16.02,19.17,14.16,9.97,51.92,38.78,57.73,15.87,26.11-29.45,47.28-60.27,43.14h0Z"/>
  <path id="Merton" className={`${colourClasses({1: "response", 2: "overt", 4: "policy"}, clickIndex)} base`} d="m362.4,468.54c-32.49,4.53-52.73,2.43-76.39,10.8-33.8,14.15-32.41-38.11-41.33-66.75,18.04-21.36,66.62-22.34,66.45-7.67,7.7,27.41,49.93,12.61,42.89,29.35,10.33-7.48,23.37,24.94,8.38,34.27Z"/>
  <path id="Lewisham" className={`${colourClasses(inJourney, clickIndex)} base`} d="m445.36,363.73c-18.77-27.76-3.09-78.29,19.14-44.08,11.79,8.72-4.35,33.26,24.67,19.77,26.99-14.66,5.6,26.41,15.9,33.47,13.03,17.65,17.97,19.94,22.88,40.52-27.97-19.17-46.01,42.62-64.04-.35-30.3,11.11-57.74-1.48-29.87-38.11,4.99,5.88,23.15-6.78,11.32-11.22h0Z"/>
  <path id="Lambeth" className={`${colourClasses({1: "response"}, clickIndex)} base`} d="m415.63,421.04c-24.35-12.09-43.01,11-57.9,15.07-14.82-7.17,12.33-44.46-7.8-56.81-13.68-32.9,25.49-49.28,23.97-93.76,23.66,8.69.93,52.07,28.42,65.68-19.78,23.23,2.68,51.99,13.3,69.81Z"/>
  <path id="Kingston_upon_Thames" data-name="Kingston upon Thames" className={`${colourClasses({1: "response", 2: "overt", 4: "policy"}, clickIndex)} base`} d="m173.73,569.36c-4.97-39.36,30.45-78.88,11.32-101.97,21.02-24.39-10.11-75.65,21.4-51.39,7.49,21.48,46.68-41.89,41.55,7.78,2.13,29.84,26.77,64.69-10.98,70.4-32.59,14.74-29.09,78.06-63.29,75.18h0Z"/>
  <path id="Kensington_and_Chelsea" data-name="Kensington and Chelsea" className={`${colourClasses({1: "response"}, clickIndex)} base`} d="m303.94,326.63c-19.25-21.49-43.52-55.58-31.55-70.9,31.74,10.81,34.19,52.58,64.66,47.39,18.46,16.18-22.02,41.77-33.11,23.51h0Z"/>
  <path id="Islington" className={`${colourClasses({1: "response"}, clickIndex)} base`} d="m351.86,210.86c-9.85-51.48,43.08-13.36,53.65,5.95,3.19,14.5-12.43,37.98-3.94,50.74-29.17,1.98-27-22.53-49.71-56.69Z"/>
  <path id="Hounslow" className={`${colourClasses(inJourney, clickIndex)} base`} d="m80.12,357.63c14.94-13.15-6.32-68.7,40.68-46.96,9.26,12.01,38.98-14.39,60.08.17,14.73,4.63,27.78-21.24,55.19-.47,31.52-32.99,5.05,82.99-26.88,12.49-33.03,13.27-31.45,62.85-56.55,48.24-30.02-10.8-46.63,23.67-19.9,25.44-18.39,19.18-16.63,43.11-42,19.57-22.56.49-58.46-18.32-41.13-40.49,15.64,9.71,16.3-12.98,30.51-17.99h0Z"/>
  <path id="Hillingdon" className={`${colourClasses(inJourney, clickIndex)} base`} d="m44.97,374.29c-52.98-.88-52.83-37.46-30.71-65.09,10.22-13.8-7.88-34.63-3.91-56.51-4.14-23.59,23.07-35.38,4.86-60.58C-5.09,166.67,3.73,132.72,1.08,103.54c19.88,14.61,40.56,30.85,63.68,18.48,43.31,6.12,44.47,69.02,51.36,100.87-20.44,14.43-59.52,27.46-3.66,34.8,19.48,23.77-45.47,62.53-25.04,96.18-22.07,6.86-20.72,32.84-42.44,20.43Z"/>
  <path id="Havering" className={`${colourClasses(inJourney, clickIndex)} base`} d="m692.92,304.94c-19.61,30.33-51.89-25.79-49.07-43.59,6.88-27.26,45.46-70.57,6.29-70.01-44.49,3.86-5.97-63.01-31.83-91.34,45.54,4.98,92.65-32.13,119.96,21.5-18.24,10.84,25.93,33.84,27.3,62.7,23.15-6.86,69.63,51.26,15.26,42.29-25.62,3.05-34.43,21.61-45.41,34.51-20.82-36.82.15,19.14-27.33,17.95,9.43,22.44-13.91,6.67-15.17,25.99Z"/>
  <path id="Harrow" className={`${colourClasses(inJourney, clickIndex)} base`} d="m164.87,208.05c-18.41,12.2-55.64,22.46-54.82-18.69-8.95-30.63-33.68-67.55,18.55-72.66,32.48-24.78,62.73-45.5,82.65,10.8,35.73,27.04-19.94,21.84-1.48,42.64-38-13.35-38.81,23.07-44.9,37.92h0Z"/>
  <path id="Haringey" className={`${colourClasses({1: "response", 2: "overt", 3: "covert", 4: "policy"}, clickIndex)} base`} d="m347.5,191.92c-48.28-4.94-9.03-23.88-15.12-55.6,11.05,18.83,20.86-20.03,48.9-6.36,27.65-1.91,73.21-10.3,52.42,29.76-8.24,28.4-47.02,19.7-55.13,32.5-9.31-13.96-15.67-11.04-31.07-.29Z"/>
  <path id="Hammersmith_and_Fulham" data-name="Hammersmith and Fulham" className={`${colourClasses(inJourney, clickIndex)} base`} d="m298.21,356.43c-27.89-3.3-32.84-41.04-47.28-45.74-10.87-13.15-5.05-28.89-3.21-56.62,32.53-1.78,27.47,67.33,69.24,82.14-2,9.91-5.71,22.44-18.75,20.23h0Z"/>
  <path id="Hackney" className={`${colourClasses({1: "response"}, clickIndex)} base`} d="m390.64,183.76c26.03-10.7,38.62,1.01,54.65,17.53,36.33,2.02,22.77,32.94-1.12,38.94-30.16-1.09-38.12,45.77-47.73,4.5,42.8-25.4-22.93-33.74-5.81-60.97Z"/>
  <path id="Greenwich" className={`${colourClasses(inJourney, clickIndex)} base`} d="m476.9,344.27c-10.48-4.42-13.57-30.04-2.04-24.23,22.92-3.54-1.15-59.18,33.64-20.1,41.51,16.27,66.05-36.05,96.32-22.74,13.48,56.04-3.98,47.14-33.61,66.61,4.08,26.23,3.6,60.01-24.98,65.08-24.92-38.33-38.25-19.7-46.8-55.24,16.25-21.32-10.48-21.57-22.52-9.37Z"/>
  <path id="Enfield" className={`${colourClasses({1: "response", 2: "overt", 4: "policy"}, clickIndex)} base`} d="m377.99.3c32.23,10.16,70.08,8.53,92.63,22.38,3.71,36.39-3.8,89.81-29.67,109.27-30.22-13.74-110.34,18.69-87.1-29.24-2.92-18.86-16.53-40.9-38.98-51.08-22.88-20.84,14.84-52.9,50.1-46.41,4.26-.94,8.17-5.5,13.02-4.92h0Z"/>
  <path id="Ealing" className={`${colourClasses({1: "response", 2: "overt", 4: "policy"}, clickIndex)} base`} d="m163.2,309.69c-31.62-6.35-32.38,15.51-61.28-.73-15.56-11.39,52.47-57.16-5.03-54.81-41.87-13.53,26.53-28.43,43.09-40.17,34.48-11.01,50.41,32.64,58.06,35.89,31.47-16.52-.69,22.28,33.67,1.52,24.7-17.06,12.06,38.41,12.99,43.28-.65,23.02-23.91,10.02-41.35,5.73-12.55,17.73-15.07,11.68-40.15,9.28h0Z"/>
  <path id="Croydon" className={`${colourClasses(inJourney, clickIndex)} base`} d="m433.7,579.1c-27.6-7.01-28.85,59.45-61.19,44.43-15.31-18.9-51.32-30.86-18.41-49.95-5.39-44.74,41.32-31.44,18.3-78.43-9.99-21.69-17.59-90.45,38.36-72.52,11.19,19.07,27.01,33.63,41.58,46.19,17.29,14.92,12.44,32.14,35.77,54.04,9.8,29.12,12.37,35.65-6.85,37.01-25.68-37.66-29.71,13.89-47.56,19.24Z"/>
  <path id="City_of_London" data-name="City of London" className={`${colourClasses(inJourney, clickIndex)} base`} d="m379.47,274.71c11.02-32.8,64.48,17.57,13.72,8.66-6.2.44-16.47,2.88-13.72-8.66Z"/>
  <path id="Camden" className={`${colourClasses({1: "response", 2: "overt", 4: "policy"}, clickIndex)} base`} d="m347.5,191.92c8.94,38.21,60.27,98.37,10.31,79.83-14.52-26.62-34.91-35.41-58.82-30.65-34.09-27.71-1.95-31.26,15.45-49.82,6.33-5.92,21.97-6.28,33.06.64Z"/>
  <path id="Bromley" className={`${colourClasses({1: "response", 2: "overt"}, clickIndex)} ${clickIndex === 3 && "cover "} base`} d="m576.57,616.85c-25.75,6.94-39-.88-45.41-21.03-15.39,11.91-20.87,33.33-25.96-2.82.43-37.06-26.71-76.09-37.5-107.56-16.51.77-21.13-39.9-41.97-38.59-19.59-18.09-7.7-46.26,15.56-30.16,28.12-15.52,40.64,33.17,58.71-1.52,17.01-12.17,42.04-1,19.17-20.05-6.45-42.25,33.42,41.72,43.25,4.57,16.5,16.05,40.23,29.85,66.25,30.09,32.92,16.29,4.76,29.17,11.62,48.72-1.03,11.01-2.48,51.86-17.35,54.07-19.23,9.41-10,32.13-42.08,44.2-11.41,15.04,13.24,32.61-4.3,40.08Z"/>
  <path id="Brent" className={`${colourClasses({1: "response", 2: "overt", 3: "covert", 4: "policy"}, clickIndex)} base`} d="m164.87,208.05c-3.74-23.98,28.94-43.08,44.93-45.03,4.7-34.76,36.45,7.12,34.82,32.33,9.22-33.81,83.08,76.09,38.73,55.49-20.32,7.86-49.66-7.21-73.79,5.73,23.98-23.28-26.92,7.98-19.34-16.75,3.88-15.78-36.77-19.39-25.34-31.77h0Z"/>
  <path id="Bexley" className={`${colourClasses({1: "response"}, clickIndex)} base`} d="m607.48,427.15c-38.86-7.69-47.47-38.14-32.78-57.24-26.02-36.21,33.36-34.76,32.83-49.97-26.86-55.54,31.61-65.7,52.81-22.61,14.72,30.7,54.12,5.64,34.34,40.85-3.84,33.43-39.2,37.13-48.28,62.38-13.88,15.82,3.28,43.26-33.92,24.66-1.54.92-3.25,1.56-5,1.93Z"/>
  <path id="Barnet" className={`${colourClasses({1: "response"}, clickIndex)} base`} d="m240.71,59.4c41.36-5.76,45.99-35.83,74.16-7.77,21.47,11.91,40.31,31.71,38.28,54.53-12.61,19.89-3.54,46.21-22.74,34.93,5.92,33.61-20.28,56.04-44.2,72.15-18.61-13.87-34.31-30.13-44.96-22.06,10.69-34.11-52.21-72.35-48.59-99.1,23.82-7.68,48.3-8.65,48.06-32.68Z"/>
  <path id="Barking_and_Dagenham" data-name="Barking and Dagenham" className={`${colourClasses({1: "response", 2: "overt", 3: "covert", 4: "policy"}, clickIndex)} base`} d="m584.48,274.47c1.16-23.14-54.98-37.03-21.96-49.85,33.57-6.67,57.16-39.91,47.81-68.19,36.8-46.48.24,30.81,31.6,38.62,41.8-18.03,22.36,33.65,4.22,55.52-3.68,50.75-27.11,4.61-61.67,23.9Z"/>
</svg>
</div>
  )
}
export default Testmap;

function colourClasses(classes, clickIndex) {
  const activeClass = classes[clickIndex]
  if (!activeClass && clickIndex != 0) {
    return "faded"
  } else if (!activeClass) {
    return null
  }
  return activeClass
}