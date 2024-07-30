import React, { useState } from 'react';
import useProducts from '../../hooks/useProducts';

export default function Products() {
  const [checked, setChecked] = useState(false);
  const [loading, error, products] = useProducts({ salesOnly: checked });
  const handleChecked = () => {
    setChecked((checked) => !checked);
  };

  if (loading) return <p>Loading</p>;
  if (error) return <p>Somthing is wrong. {error.message}</p>;

  return (
    <>
      <input
        type='checkbox'
        id='checkBox'
        onChange={handleChecked}
        checked={checked}
      />
      <label htmlFor='checkBox'>Show Only Sale Item 🏷️</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
