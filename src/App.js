import React from 'react';
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";

function App() {

  const alice = useWebAnimations({
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

  const foreground1 = useWebAnimations(sceneryFrames,sceneryTimingForeground

  )
  const foreground2 = useWebAnimations(sceneryFrames , sceneryTimingForeground)
  const background1 = useWebAnimations(sceneryFrames , sceneryTimingBackground)
  const background2 = useWebAnimations(sceneryFrames , sceneryTimingBackground)


  return (
    // <div>hello</div>
  
    <div className= "wrapper">
      <div className = "rq">
      <div className="sky">   
      </div>
      <div className="earth">
        <div id = "red-queen_and_alice">
          <img ref = { alice.ref } id = "red-queen_and_alice_sprite" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 0x" alt="Alice and the Red Queen running to stay in place." ></img>
        </div>
        </div>
    </div>
    <div ref = { foreground1.ref } className = "scenery" id="foreground1">
        <img id="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" alt=" "></img>       
    </div>
    <div  ref = { foreground2.ref } className="scenery" id="foreground2">
        <img id="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" alt=" "></img>
        <img id="w_rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" alt=" " ></img>
    </div>
    <div ref = { background1.ref } className="scenery" id="background1">
        <img id="r_pawn_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" alt=" "></img>
        <img id="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" alt=" "></img>
        <img id="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" alt=" "></img>

    </div>
    <div ref = { background2.ref } className="scenery" id="background2">
        <img id="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" alt=" "></img>
        <img id="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x" alt=" "></img>
        <img id="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" alt=" "></img>
      </div>

      
    </div>
      
        );
}

export default App;
