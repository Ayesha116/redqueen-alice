import useWebAnimations from '@wellyshen/use-web-animations'
import React from 'react'
import './Queen.css';

export default function RedQueen() {
    const {ref, playState, getAnimation} = useWebAnimations({
        keyframes:[
            {transform:'translateY(0%)' },
            {transform:'translateY(-100%)' }],
        timing:{
            duration:600,
            iterations:Infinity,
            easing: 'steps(7,end)',
            direction: "reverse",
            playbackRate: 1,
        }
    })

    return (
        <div>
            <div className="wrapper">
                <div className="sky"></div>
                <div class="earth">
                <div className="red-queen_and_alice">
                    <img ref = {ref} className="red-queen_and_alice_sprite" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x" alt="Alice and the Red Queen running to stay in place."/>
                </div>
                </div>

                <div className="scenery" id="foreground1">
                    <img className="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" alt=" "/>
                </div>
                <div className="scenery" id="foreground2" style = {{transform: 'translateX(100%)' }}>    
                    <img className="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" alt=" "/>
                    <img className="w_rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" alt=" "/>
                </div>
                <div className="scenery" id="background1" >
                    <img className="r_pawn_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" alt=" "/>
                    <img className="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" alt=" "/>
                    <img className="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" alt=" "/>
                </div>
                <div className="scenery" id="background2" style = {{transform: 'translateX(100%)'}}>
                    <img className="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" alt=" "/>

                    <img className="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x" alt=" "/>
                    <img className="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" alt=" "/>
                </div>
            </div>
        </div>
  )
}
