import React from 'react';
import '../App.css';
import useWebAnimations from "@wellyshen/use-web-animations";

function Alice() {
  const { ref , playState } = useWebAnimations({
    keyframes:{
      transform: ['translateY(0)','translateY(-100%)']

    } 
    , 
    timing : {
      easing: 'steps(7, end)',
      direction: "reverse",
      duration: 600,
      playbackRate: 1,
      iterations: Infinity
    }
  })

  // var sceneryFrames =   [
  //   { transform: 'translateX(100%)' },
  //   { transform: 'translateX(-100%)' }   
  // ];
  
  // var sceneryTimingBackground = {
  //   duration: 36000,
  //   iterations: Infinity
  // };
  
  // var sceneryTimingForeground = {
  //   duration: 12000,
  //   iterations: Infinity
  // };

  // const {bg1_ref , bg1playState} = useWebAnimations(sceneryFrames,sceneryTimingBackground

  // )




  return (
    <div className = "wrapper">
      <div className="sky">   
      </div>
      <div className="earth">
        <div id = "red-queen_and_alice">
          <img ref = { ref } id = "red-queen_and_alice_sprite" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 0x" alt="Alice and the Red Queen running to stay in place." ></img>
        </div>
        </div>
    </div>
     

  );
}

export default Alice;
