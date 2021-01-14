
import useWebAnimations from '@wellyshen/use-web-animations'
import React from 'react';
import './Queen.css';

export const Background = () => {

    const {ref, playState, getAnimation} = useWebAnimations({
        keyframes:[
            { transform: 'translateX(100%)' },
            { transform: 'translateX(-100%)' }
        ],
        timing:{
            duration: 36000,
            iterations: Infinity
        }
    })
    
    return (
        <div>
            <div ref= {ref} className="scenery" id="background1" >
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
    )
}
