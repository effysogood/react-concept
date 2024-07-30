import React, { useReducer } from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentorsReduce() {
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

  const [person, dispatch] = useReducer(personReducer, initialPerson);
  const handleUpdate = () => {
    const prev = prompt(`Which mentor's name you want to change?`);
    const current = prompt('Write the name you want to rename');
    dispatch({ type: 'updated', prev, current });
  };
  const handleAdd = () => {
    const name = prompt(`Write a mentor's name`);
    const title = prompt(`Write a mentor's title`);
    dispatch({ type: 'added', name, title });
  };
  const handleDelete = () => {
    const name = prompt(`Which mentor would you like to delete?`);
    dispatch({ type: 'deleted', name });
  };

  // const handleDeletePerson = (index) => {
  //   const updatedMentors = [...person.mentors];
  //   updatedMentors.splice(index, 1);
  //   setPerson((prev) => ({
  //     ...prev,
  //     mentors: updatedMentors,
  //   }));
  // };
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
