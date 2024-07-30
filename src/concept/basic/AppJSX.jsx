import './App.css';

function App() {
  const user = 'effy';
  const groceries = ['apple', 'brie cheese', 'baguette'];
  return (
    <>
      <h1>{`${user}'s Grocery List`}</h1>
      <ul>
        {groceries.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
