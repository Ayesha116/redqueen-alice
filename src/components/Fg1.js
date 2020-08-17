import React from 'react';
import '../App.css';
import useWebAnimations from "@wellyshen/use-web-animations";

function Fg1() {


  var sceneryFrames =   [
    { transform: 'translateX(100%)' },
    { transform: 'translateX(-100%)' }   
  ];
  
  var sceneryTimingBackground = {
    duration: 36000,
    iterations: Infinity
  };
  
  var sceneryTimingForeground = {
    duration: 12000,
    iterations: Infinity
  };

  const {ref , playState} = useWebAnimations(sceneryFrames,sceneryTimingForeground

  )




  return (
    <div className = "scenery" id="foreground1">
        <img id="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" alt=" "></img>       
    </div>

  );
}

export default Fg1;
