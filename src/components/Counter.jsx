import React, { useState } from 'react';

export default function Counter({ totalCount, setTotalCount }) {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);
    setTotalCount((prev) => prev + 1);
  };
  return (
    <div className='counter'>
      <p>
        <span className='number'>{count}</span>
        <small>/ {totalCount}</small>
      </p>
      <button className='button' onClick={handleClick}>
        ADD +
      </button>
    </div>
  );
}
