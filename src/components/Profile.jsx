import React from 'react';

export default function Profile({ image, name, position }) {
  return (
    <div className='profile'>
      <img className='photo' src={image} alt='profile' />
      <h1>{name}</h1>
      <p>{position}</p>
    </div>
  );
}
