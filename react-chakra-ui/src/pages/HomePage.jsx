import { useEffect, useState } from 'react';
import ProductItem from '../components/ProductItem';
import { SimpleGrid } from '@chakra-ui/react';

function HomePage() {
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

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} spacing={4}>
        {products.map((product) => (
          <ProductItem
            key={product.id}
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
