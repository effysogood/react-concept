import React, { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleChecked = () => {
    setChecked((checked) => !checked);
  };

  useEffect(() => {
    setIsLoading(true); // fetch 시작 전, loading 상태
    setError(null); // 새로운 fetch 요청 시 에러 상태 초기화
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        console.log('🔥 Fetch data succeed');
        setProducts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(`Fetch failed: ${err}`);
        setError(err);
        setIsLoading(false);
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

  if (isLoading) return <p>isLoading</p>;
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
