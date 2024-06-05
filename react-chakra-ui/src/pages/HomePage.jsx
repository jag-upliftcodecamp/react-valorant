import { useContext, useEffect, useState } from 'react';
import ProductItem from '../components/ProductItem';
import { SimpleGrid } from '@chakra-ui/react';
import StoreContext from '../contexts/StoreContext';

function HomePage() {
  // const [products, setProducts] = useState([]);
  const { state, dispatch } = useContext(StoreContext);
  const { products } = state; // Extract product from the state

  const fetchProducts = async () => {
    // 1. Get the response only
    const response = await fetch('https://fakestoreapi.com/products');

    // 2. Get the actual response content
    const json = await response.json();

    console.log('JSON: ', json);

    // Set the products to the StoreContext
    dispatch({
      type: 'SET_PRODUCTS',
      payload: json,
    });

    // return json;
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} spacing={4}>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            images={product.image}
            description={product.description}
          />
        ))}
      </SimpleGrid>
    </>
  );
}

export default HomePage;
