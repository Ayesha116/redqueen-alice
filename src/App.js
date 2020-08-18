import React from 'react';
import './App.css';
import { useEffect } from "react"; 
import useWebAnimations from "@wellyshen/use-web-animations";

function App() {
  var playbackAlice = 1;
  var playbackFg = 0;

  const alice = useWebAnimations({
    keyframes:{
      transform: ['translateY(0)','translateY(-100%)']

    } 
    , 
    timing : {
      easing: 'steps(7, end)',
      direction: "reverse",
      duration: 600,
      playbackRate: playbackAlice,
      iterations: Infinity
    }
    
  })

  var sceneryFrames =   [
    { transform: 'translateX(100%)' },
    { transform: 'translateX(-100%)' }   
  ];
  
  var sceneryTimingBackground = {
    duration: 36000,
    iterations: Infinity,
    playbackRate: playbackFg,
  };
  
  var sceneryTimingForeground = {
    duration: 12000,
    iterations: Infinity,
    playbackRate :  playbackFg , 
  };

  const foreground1 = useWebAnimations({keyframes: sceneryFrames , timing : sceneryTimingForeground})
  const foreground2 = useWebAnimations({keyframes: sceneryFrames , timing : sceneryTimingForeground})
  const background1 = useWebAnimations({keyframes :sceneryFrames , sceneryTimingBackground})
  const background2 = useWebAnimations({keyframes: sceneryFrames , timing: sceneryTimingBackground})

  const adjustBackgroundPlayback = () => {
    if (playbackAlice < 0.8) 
    {
			playbackFg = (playbackAlice / 2) * -1;
    } 
    else if (playbackFg > 1.2) 
    {
			playbackFg = playbackAlice / 2;
    } 
    else {
			playbackFg = 0;
		}
		foreground1.getAnimation().playbackRate = playbackFg;
		foreground2.getAnimation().playbackRate = playbackFg;
		background1.getAnimation().playbackRate = playbackFg;
		background2.getAnimation().playbackRate = playbackFg;
  };
  
  useEffect(() => {
		const fganimation = foreground1.getAnimation();
    fganimation.currentTime = 6000
    // fganimation.effect.getTiming().duration / 2;

		const bganimation = background1.getAnimation();
    bganimation.currentTime = 18000
    // bganimation.effect.getTiming().duration / 2;

		setInterval(() => {
			/* Set decay */
			if (playbackAlice > 0.4) {
				playbackAlice *= 0.9;
				alice.getAnimation().playbackRate = playbackAlice;
			}
			adjustBackgroundPlayback();
		}, 4000);

		document.addEventListener("click", () => {
			playbackAlice =playbackAlice*1.1;
			alice.getAnimation().playbackRate = playbackAlice;
			adjustBackgroundPlayback();
		});
	});


  return (
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
