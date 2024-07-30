import React from 'react';

export default function Buttons() {
  return (
    <div className='w-100 m-10 flex flex-row gap-2 justify-center'>
      <button className='bg-blue-200 rounded-xl px-8 py-6 text-lg'>
        Hello
      </button>
      <button className='bg-pink-200 rounded-xl px-8 py-6 text-lg'>
        World
      </button>
    </div>
  );
}

// 스타일이 정의된 클래스명을 불러와 조합해서 적용, 외부 라이브러리
