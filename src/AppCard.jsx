import React from 'react';

export default function AppCard() {
  return (
    <>
      <Card>
        <p>Basic Card</p>
      </Card>
      <Card>
        <h1>Title</h1>
        <p>description</p>
      </Card>
      <Card>
        <article>Sub Description</article>
      </Card>
    </>
  );
}

function Card({ children }) {
  return (
    <div
      style={{
        backgroundColor: 'black',
        borderRadius: '20px',
        color: 'white',
        minHeight: '200px',
        maxHeight: '200px',
        margin: '20px',
        padding: '20px',
        textAlign: 'center',
      }}
    ></div>
  );
}
