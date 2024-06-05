import { useContext, useEffect } from 'react';
import ProductItem from '../components/ProductItem';
import { SimpleGrid } from '@chakra-ui/react';
//                        👇 You can also use the custom hook on the context
import StoreContext, { useStoreContext } from '../contexts/StoreContext';
import SearchBar from '../components/SearchBar';

function HomePage() {
  // const [products, setProducts] = useState([]);
  // Replace using of useState into context and reducer
  const { state, dispatch } = useContext(StoreContext);
  // 💡 You can also use the custom hook on the context
  // const { state, dispatch } = useStoreContext()

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
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {/* You are free to style here */}
      <SearchBar />
      <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} spacing={4}>
        {/* 💡 You can also pass the whole product object */}
        {/* And let the ProductItem component decide what to do with it */}
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
