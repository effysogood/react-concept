import React, { useState, useRef } from 'react';

export default function AppInputs() {
  const [inputs, setInputs] = useState({
    name: '',
    age: '',
    mail: '',
  });
  const nameInput = useRef();

  const { name, age, mail } = inputs; // 비구조화 할당을 통해 값을 추출

  const onChange = (e) => {
    const { name, value } = e.target; // 우선 e.target에서 name, value 추출
    setInputs({
      ...inputs, // spread 연산자로 모두 펼쳐서 기존의 객체를 복사한 뒤
      [name]: value, // name의 키 값을 가진 값을 value에 담아주기 (*불변성)
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      age: '',
      mail: '',
    });
    nameInput.current.focus();
  };

  return (
    <>
      <div className='information'>
        <input
          type='text'
          name='name'
          value={name}
          onChange={onChange}
          ref={nameInput}
        />
        <input type='number' name='age' value={age} onChange={onChange} />
        <input type='mail' name='mail' value={mail} onChange={onChange} />
      </div>
      <div>
        <p>name: {name}</p>
        <p>mail: {mail}</p>
        <p>age: {age}</p>
      </div>
      <button type='button' onClick={onReset}>
        Reset
      </button>
    </>
  );
}
