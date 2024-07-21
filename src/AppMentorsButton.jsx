import React, { useCallback, useReducer, useMemo, memo } from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentorsButton() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = useCallback(() => {
    const prev = prompt(`Which mentor's name you want to change?`);
    const current = prompt('Write the name you want to rename');
    dispatch({ type: 'updated', prev, current });
  }, []);
  const handleAdd = useCallback(() => {
    const name = prompt(`Write a mentor's name`);
    const title = prompt(`Write a mentor's title`);
    dispatch({ type: 'added', name, title });
  }, []);
  const handleDelete = useCallback(() => {
    const name = prompt(`Which mentor would you like to delete?`);
    dispatch({ type: 'deleted', name });
  }, []);

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
      <Button onClick={handleUpdate} text={`Change the mentor's name`} />
      <Button onClick={handleAdd} text='Add Mentor' />
      <Button onClick={handleDelete} text='Delete Mentor' />
    </>
  );
}

const Button = memo(({ text, onClick }) => {
  console.log('Button', text, 're-rendering 🥸');
  const result = useMemo(() => calculateSomething(), []);
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '20px',
        margin: '0.4rem',
        padding: '6px 12px',
      }}
    >
      {`${text} ${result}`}
    </button>
  );
});

function calculateSomething() {
  for (let i = 0; i < 1000; i++) {
    console.log('🥹');
  }
  return 10;
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
