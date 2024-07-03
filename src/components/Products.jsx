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

  /* useEffect 없이 데이터를 불러오는 로직을 외부에 작성 시 생기는 이슈
  상태가 변경(setProducts)되면 리액트는 Product 함수를 재호출 ->
  그럼 결국 fetch <-> setProducts가 무한 반복되며 메모리 성능 저하될 것!
  처음 컴포넌트가 생성되었을 때 네트워크 통신 한번만 요청되도록 useEffect
  */

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
