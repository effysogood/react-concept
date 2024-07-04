import React, { useState } from 'react';
import './App.css';

export default function AppXY() {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCoordinates({ x: e.clientX, y: e.clientY });
    console.log(`x: ${coordinates.x}, y: ${coordinates.y}`);
  };

  return (
    <>
      <div className='container' onMouseMove={handleMouseMove}>
        <div
          className='pointer'
          style={{
            transform: `translate(${coordinates.x}px, ${coordinates.y}px`,
          }}
        ></div>
      </div>
    </>
  );
}
