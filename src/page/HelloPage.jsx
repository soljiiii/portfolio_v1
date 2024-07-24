import { useState, useEffect } from "react";
import { useSpring, animated, useTrail } from '@react-spring/web';
import "../page.css";

function HelloPage(){
    const letters = " HELLO!❤️".split("");
    const trail = useTrail(letters.length, {
        from: { transform: 'scale(1)' },
        to: { transform: 'scale(1.5)' },
        config: { mass: 1, tension: 300, friction: 20 },
        loop: { reverse: true },
        delay: 100,
    });

    return (
        <div className="hellobox">
        {trail.map((style, index) => (
            <animated.span 
                key={index} 
                style={{
                    ...style, 
                    willChange: 'transform', 
                    margin:'0 10px', 
                    fontWeight:'500'
                }}
                className="helloTextGradient"
            >
            {letters[index]}
            </animated.span>
        ))}
        </div>
    );
}
export default HelloPage;