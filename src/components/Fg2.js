import React from 'react';
import '../App.css';
import useWebAnimations from "@wellyshen/use-web-animations";

function Fg2() {
  

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

  const { ref , playState } = useWebAnimations(sceneryFrames,sceneryTimingForeground

  )

  return (
    <div  ref = { ref } className="scenery" id="foreground2">
        <img id="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" alt=" "></img>
        <img id="w_rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" alt=" " ></img>
    </div>
     

  );
}

export default Fg2;
