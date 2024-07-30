import { useState, useEffect } from 'react';

export default function useProducts({ salesOnly }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true); // fetch 되기 전까지 로딩
    setError(null); // 새로운 fetch 요청 시, 초기화
    fetch(`data/${salesOnly ? 'sale_' : ''}products.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        console.log('🔥 Fetch data succeed');
        setProducts(data);
      })
      .catch((err) => {
        console.log(`❌ Fetch failed: ${err}`);
        setError(err);
      })
      .finally(() => setLoading(false));

    return () => {
      console.log('🧼 Do things that cleaned up');
    };
  }, [salesOnly]); // 의존성의 데이터가 변경될때마다 재렌더링

  return [loading, error, products];
}

/* useEffect 없이 데이터를 불러오는 로직을 외부에 작성 시 생기는 이슈
  상태가 변경(setProducts)되면 리액트는 Product 함수를 재호출 ->
  그럼 결국 fetch <-> setProducts가 무한 반복되며 메모리 성능 저하될 것!
  처음 컴포넌트가 생성되었을 때 네트워크 통신 한번만 요청되도록 useEffect
  */

// hooks는 (함수들은) 값의 재사용이 아니라 '로직의 재사용'을 위한 것이다!
// 사용하는 곳마다 별개의 값을 지니게 됨. 데이터를 공유하는 것이 아닌 로직이 공유되는 것!
