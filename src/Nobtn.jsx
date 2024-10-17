import React, { useState,useEffect } from "react";

function Nobtn() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [moving, setMoving] = useState(false);

    useEffect(() => {
        let interval;

        if (moving) {
            interval = setInterval(() => {
                const randomX = Math.random() * 400 ; 
                const randomY = Math.random() * 400 ; 
                setPosition({ x: randomX, y: randomY });
            }, 100); 
        }

        return () => clearInterval(interval); 
    }, [moving]);

    const mousehover = () => {
        setMoving(true); 
    };

    const handleMouseOut = () => {
        setMoving(false);
    };
  return (
    <div>
      <button
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: 'transform 0.1s'
        }}
        className="px-8 py-2 bg-blue-500 text-white rounded text-2xl border-2 border-black transition-transform duration-200"
        onMouseEnter={mousehover}
        onMouseOut={handleMouseOut}
      >
        NO
      </button>
    </div>
  );
}

export default Nobtn;
