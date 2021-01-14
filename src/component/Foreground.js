import React from 'react'
import './Queen.css';
import useWebAnimations from '@wellyshen/use-web-animations'


export const Foreground = () => {
    const {ref,playState , getAnimation} = useWebAnimations({
        keyframes:[
            { transform: 'translateX(100%)' },
            { transform: 'translateX(-100%)' }
        ],
        timing:{
            duration: 12000,
            iterations: Infinity
        }
    })
    return (
        <div ref = {ref}>
            <h1>stateeee{playState}</h1>
            <div className="scenery" id="foreground1">
                <img className="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" alt=" "/>
            </div>
            <div className="scenery" id="foreground2" style = {{transform: 'translateX(100%)' }}>    
                    
                <img className="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" alt=" "/>
                <img className="w_rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" alt=" "/>
            </div>
        </div>
    )
}
