import React, { useState } from 'react';

export default function Counter({ total, onClick }) {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);
    onClick();
  };
  return (
    <div className='counter'>
      <p>
        <span className='number'>{count}</span>
        <small>/ {total}</small>
      </p>
      <button className='button' onClick={handleClick}>
        ADD +
      </button>
    </div>
  );
}
