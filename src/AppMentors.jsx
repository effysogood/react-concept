import React, { useState } from 'react';

export default function AppMentors() {
  const [person, setPerson] = useState({
    name: 'Effy',
    title: 'junior developer',
    mentors: [
      {
        name: 'ellie',
        title: 'senior developr',
      },
      {
        name: 'bob',
        title: 'senior developr',
      },
    ],
  });
  return (
    <>
      <h1>
        {person.name} is {person.title}
      </h1>
      <p>{`${person.name}'s mentors are :`}</p>
      <ul>
        {person.mentors.map((mentor) => (
          <li>
            {mentor.name}({mentor.title})
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          const prev = prompt(`Which mentor's name you want to change?`);
          const current = prompt('Write the name you want to rename');

          setPerson((person) => ({
            ...person,
            // mentors: person.mentors.map((mentor) => {
            //   if (mentor.name === prev) {
            //     return { ...mentor, name: current };
            //   }
            //   return mentor;
            // }),
            mentors: person.mentors.map((mentor) => {
              return mentor.name === prev
                ? { ...mentor, name: current }
                : mentor;
            }),
          }));
        }}
      >
        Change the mentor's name
      </button>
    </>
  );
}
