import React from 'react';

export default function Avatar({ image, isNew }) {
  return (
    <div className='avatar'>
      <div className='imgBox'>
        <img src={image} alt='profile' />
        {isNew && <span className='badge'>New</span>}
      </div>
    </div>
  );
}
