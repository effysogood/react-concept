import React, { useState } from 'react';
import './App.css';

export default function AppXY() {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // 📍 동일한 성격의 데이터, 객체로 관리
    setCoordinates({ x: e.clientX, y: e.clientY });
    // 📍 만약 수평으로만 이동하도록 제어한다면? 이전 값 저장
    // setCoordinates((prev) => ({ x: e.clientX, y: prev.y }));
    // 📍 만약 z좌표를 추가할 경우, 다중 데이터 관리 시
    // setCoordinates((prev) => ({...prev, x: e.clientX}))

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
