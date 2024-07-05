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
  const handleEdit = () => {
    const prev = prompt(`Which mentor's name you want to change?`);
    const current = prompt('Write the name you want to rename');

    setPerson((person) => ({
      ...person,
      mentors: person.mentors.map((mentor) => {
        return mentor.name === prev ? { ...mentor, name: current } : mentor;
      }),
    }));
  };
  const handleAdd = () => {
    const name = prompt(`Write a mentor's name`);
    const title = prompt(`Write a mentor's title`);

    setPerson((prev) => ({
      ...prev,
      mentors: [...prev.mentors, { name, title }],
    }));
  };
  const handleDeletePerson = (index) => {
    const updatedMentors = [...person.mentors];
    updatedMentors.splice(index, 1);
    setPerson((prev) => ({
      ...prev,
      mentors: updatedMentors,
    }));
  };
  const handleDelete = () => {
    const name = prompt(`Which mentor would you like to delete?`);

    setPerson((prev) => ({
      ...prev,
      mentors: prev.mentors.filter((mentor) => mentor.name !== name),
    }));
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
            <button onClick={handleDeletePerson}>Delete Mentor</button>
          </li>
        ))}
      </ul>
      <button onClick={handleEdit}>Change the mentor's name</button>
      <button onClick={handleAdd}>Add Mentor</button>
      <button onClick={handleDelete}>Delete Mentor</button>
    </>
  );
}
