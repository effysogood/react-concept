import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
// import RequestCounter from './components/RequestCounter';

export default function AppCounter() {
  const [totalCount, setTotalCount] = useState(0);
  return (
    <div className='container'>
      <span className='banner'>
        Total : {`${totalCount} ${totalCount > 10 ? '🔥' : '🪴'}`}
      </span>
      <div className='counters'>
        <Counter totalCount={totalCount} setTotalCount={setTotalCount} />
        <Counter totalCount={totalCount} setTotalCount={setTotalCount} />
      </div>
    </div>
  );
}
