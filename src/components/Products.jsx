import React, { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked((checked) => !checked);
  };

  useEffect(() => {
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('🔥 Fetch data succeed');
        setProducts(data);
      });
    return () => {
      console.log('🧼 Do things that cleaned up');
    };
  }, [checked]); // 의존성의 데이터가 변경될때마다 재렌더링

  return (
    <>
      <input type='checkbox' id='checkbox' onClick={handleChecked} />
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
