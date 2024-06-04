import { useEffect, useState } from 'react';
import ProductItem from './components/ProductItem';
import style from './App.module.css';

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    // 1. Get the response only
    const response = await fetch('https://fakestoreapi.com/products');

    // 2. Get the actual response content
    const json = await response.json();

    console.log('JSON: ', json);

    setProducts(json);

    // return json;
  };

  return (
    <>
      <div className={style.productList}>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            title={product.title}
            price={product.price}
            images={product.image}
            description={product.description}
          />
        ))}
      </div>
    </>
  );
}

export default App;
