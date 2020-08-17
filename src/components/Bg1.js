import React from 'react';
import '../App.css';
import useWebAnimations from "@wellyshen/use-web-animations";

function Bg1() {
//   const { ref , playState } = useWebAnimations({
//     keyframes:{
//       transform: ['translateY(0)','translateY(-100%)']

//     } 
//     , 
//     timing : {
//       easing: 'steps(7, end)',
//       direction: "reverse",
//       duration: 600,
//       playbackRate: 1,
//       iterations: Infinity
//     }
//   })

  var sceneryFrames =   [
    { transform: 'translateX(100%)' },
    { transform: 'translateX(-100%)' }   
  ];
  
  var sceneryTimingBackground = {
    duration: 36000,
    iterations: Infinity
  };
  
//   var sceneryTimingForeground = {
//     duration: 12000,
//     iterations: Infinity
//   };

  const { ref , playState } = useWebAnimations(sceneryFrames,sceneryTimingBackground

  )




  return (
    <div ref = { ref } className="scenery" id="background1">
    <img id="r_pawn_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" alt=" "></img>
    <img id="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" alt=" "></img>
    <img id="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" alt=" "></img>

  </div>
     

  );
}

export default Bg1;
