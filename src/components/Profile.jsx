import React from 'react';

// export default function Profile({ image, name, position, new: isNew = 0 }) {
//   return (
//     <div className='profile'>
//       <div className={`photo ${isNew === 1 ? 'new' : ''}`}>
//         <img src={image} alt='profile' />
//       </div>
//       <h1>{name}</h1>
//       <p>{position}</p>
//     </div>
//   );
// }

export default function Profile({ image, name, position, isNew = false }) {
  return (
    <div className='profile'>
      <div className='profileImg'>
        <img src={image} alt='profile' />
        {isNew && <span className='badge'>New</span>}
      </div>
      <h1>{name}</h1>
      <p>{position}</p>
    </div>
  );
}
