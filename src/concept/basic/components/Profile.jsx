import React from 'react';
import Avatar from './Avatar';

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

export default function Profile({ image, isNew, name, position }) {
  return (
    <div className='profile'>
      <Avatar image={image} isNew={isNew} />
      <h1>{name}</h1>
      <p>{position}</p>
    </div>
  );
}
