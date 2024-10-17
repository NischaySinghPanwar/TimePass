import React from 'react'
import { useState } from 'react';
function ScondNObtn() {
    const [position, setPosition] = useState({ x: 0, y: 0 });


    const handleMouseOver = () => {
        // Generate random positions
        const randomX = Math.random() * 500; // Random x position
        const randomY = Math.random() * 500; // Random y position
        setPosition({ x: randomX, y: randomY });
        setClickable(false); // Make the button unclickable
    };

    return (
        <div className="">
            <button
                style={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                }}
                className={"px-8 py-2 bg-blue-500 text-white rounded text-2xl border-2 border-black transition-transform duration-200"}
                onClick={handleMouseOver}
            >
                NO
            </button>
        </div>
    );
}

export default ScondNObtn