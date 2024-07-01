import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
// import RequestCounter from './components/RequestCounter';

export default function AppCounter() {
  const [count, setCount] = useState(0);
  const handleTotal = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div className='container'>
      <span className='banner'>
        Total : {`${count} ${count > 10 ? '🔥' : '🪴'}`}
      </span>
      <div className='counters'>
        <Counter total={count} onClick={handleTotal} />
        <Counter total={count} onClick={handleTotal} />
      </div>
    </div>
  );
}
