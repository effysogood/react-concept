import React from 'react';
import { useImmer } from 'use-immer';

export default function AppMentorsImmer() {
  const [person, updatePerson] = useImmer(initialPerson);

  const handleUpdate = () => {
    const prev = prompt(`Which mentor's name you want to change?`);
    const current = prompt('Write the name you want to rename');

    updatePerson((person) => {
      const mentor = person.mentors.find((m) => m.name === prev);
      mentor.name = current;
    });
  };
  const handleAdd = () => {
    const name = prompt(`Write a mentor's name`);
    const title = prompt(`Write a mentor's title`);

    updatePerson((person) => person.mentors.push({ name, title }));
  };
  const handleDelete = () => {
    const name = prompt(`Which mentor would you like to delete?`);

    updatePerson((person) => {
      const index = person.mentors.findIndex((m) => m.name === name);
      person.mentors.splice(index, 1);
    });
  };

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
      <button onClick={handleUpdate}>Change the mentor's name</button>
      <button onClick={handleAdd}>Add Mentor</button>
      <button onClick={handleDelete}>Delete Mentor</button>
    </>
  );
}

const initialPerson = {
  name: 'Effy',
  title: 'junior developer',
  mentors: [
    {
      name: 'ellie',
      title: 'senior developer',
    },
    {
      name: 'bob',
      title: 'senior developer',
    },
  ],
};
