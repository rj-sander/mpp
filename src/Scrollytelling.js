import './App.css';
import { gsap } from "gsap";


const Component = () => {
  return (
    <Scrollytelling.Root>
      <div className='container'>
        <Scrollytelling.Animation
        tween={{start: 0, end: 30, from: {opacity: 0, scale: 0.9}}}
        >
          <h1 className='title'>Hello World</h1>
        </Scrollytelling.Animation>
        <Scrollytelling.Animation
          tween={[
            {start: 30, end: 80, to: {rotate: 360}},
            {start: 80, end: 100, to: {y:100}},
          ]}
        >
          <div className='box' />
        </Scrollytelling.Animation>}
      </div>
    </Scrollytelling.Root>
  );
};