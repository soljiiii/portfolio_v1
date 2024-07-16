import { useState, useEffect } from "react";
import { useSpring, animated, useTrail } from '@react-spring/web';
import "../page.css";

function Arrow(){
    const { y } = useSpring({
        from: { y: 0 },
        to: async (next) => {
            while (true) {
            await next({ y: 1 });
            await next({ y: 0 });
            }
        },
        config: { tension: 180, friction: 12 },
        });

        return (
        <div className="container">
            <animated.div
            className="v"
            style={{
                transform: y
                .to([0, 0.5, 1], [0, -10, 0])
                .to(y => `translateY(${y}px)`),
            }}
            >
            V
            </animated.div>
            <animated.div
            className="v"
            style={{
                transform: y
                .to([0, 0.5, 1], [0, 10, 0])
                .to(y => `translateY(${y}px)`),
            }}
            >
            V
            </animated.div>
        </div>
        );
}
export default Arrow;