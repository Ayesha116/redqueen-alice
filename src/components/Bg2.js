import React from 'react';
import '../App.css';
import useWebAnimations from "@wellyshen/use-web-animations";

function Bg2() {
//   const { ref , playState } = useWebAnimations({
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

  const {ref , playState } = useWebAnimations(sceneryFrames,sceneryTimingBackground)




  return (
    <div ref = { ref } className="scenery" id="background2">
        <img id="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" alt=" "></img>
        <img id="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x" alt=" "></img>
        <img id="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" alt=" "></img>
      </div>
    
     

  );
}

export default Bg2;
