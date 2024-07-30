import React, { useContext } from 'react';
import './AppTheme.css';
import { DarkModeContext, DarkModeProvider } from './context/DarkModeContext';

export default function AppTheme() {
  return (
    <DarkModeProvider>
      <Header />
      <Main />
      <Footer />
    </DarkModeProvider>
  );
}

function Header() {
  return <header className='header'>Header</header>;
}

function Main() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <main
      className='main'
      style={{ background: darkMode ? 'darkslategrey' : 'white' }}
    >
      <Profile />
      <Products />
    </main>
  );
}

function Profile() {
  return (
    <div className='profile'>
      <p className='thumbs'></p>
      <User />
    </div>
  );
}

function User() {
  return (
    <div>
      <span className='name'>Effy</span>
      <span className='age'>(28)</span>
    </div>
  );
}

function Products() {
  return (
    <div className='products'>
      <p>Products</p>
      <ProductsDetail />
    </div>
  );
}

function ProductsDetail() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div className='products-detail'>
      <p>Product Detail</p>
      <p>
        Dark Mode :{' '}
        {darkMode ? (
          <span style={{ background: 'darkslategrey', color: 'white' }}>
            Dark Mode
          </span>
        ) : (
          <span>Light Mode</span>
        )}
      </p>
      <button onClick={() => toggleDarkMode()}>Toggle</button>
    </div>
  );
}

function Footer() {
  return <div className='footer'>Footer</div>;
}
