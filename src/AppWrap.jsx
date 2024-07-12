import React from 'react';

export default function AppWrap() {
  return (
    <>
      <NavBar />
    </>
  );
}

function NavBar() {
  return (
    <header style={{ backgroundColor: 'lightgray', padding: '16px 24px' }}>
      <ul style={{ display: 'flex', gap: '12px' }}>
        <li>Hello</li>
        <li>World</li>
      </ul>
    </header>
  );
}
