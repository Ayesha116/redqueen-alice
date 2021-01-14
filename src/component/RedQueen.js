import useWebAnimations from '@wellyshen/use-web-animations'
import React from 'react'
import {Background} from './Background';
import { Foreground } from './Foreground';
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
            <h1>state:{playState}</h1>
            <div className="wrapper">
                <div className="sky"></div>
                <div class="earth">
                {/* <h1>state:{playState}</h1> */}
                <div className="red-queen_and_alice">
                    
                    <img ref = {ref} className="red-queen_and_alice_sprite" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x" alt="Alice and the Red Queen running to stay in place."/>
                </div>
                </div>

                
                <Background/>
                <Foreground/>
                
            </div>
        </div>
  )
}
