import React, { useState } from 'react';

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: 'Effy',
    title: 'junior developer',
    mentor: {
      name: 'ellie',
      title: 'senior developr',
    },
  });
  return (
    <>
      <h1>
        {person.name} is {person.title}
      </h1>
      <p>{`${person.name}'s mentor is ${person.mentor.name}(${person.mentor.title})`}</p>
      <button
        onClick={() => {
          const name = prompt(`what is your mentor's name?`);
          setPerson((person) => ({ ...person, mentor: { ...person, name } }));
          // if (name !== null) {
          //   setPerson((prev) => ({
          //     ...prev,
          //     mentor: {
          //       ...prev.mentor, // 이전 값의 mentor 객체를 복사!
          //       name: name !== '' ? name : prev.mentor.name,
          //     },
          //   }));
          // }
        }}
      >
        Mentor's Name
      </button>
      <button
        onClick={() => {
          const title = prompt(`what is your mentor's title?`);
          if (title !== null) {
            setPerson((prev) => ({
              ...prev,
              mentor: {
                ...prev,
                title: title !== '' ? title : prev.mentor.title,
              },
            }));
          }
        }}
      >
        Mentor's Title
      </button>
    </>
  );
}
