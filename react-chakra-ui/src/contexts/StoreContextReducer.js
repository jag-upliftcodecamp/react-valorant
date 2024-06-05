import { useReducer } from "react";

function filterProducts(products, query) {
  // Filter all product's title from query
  // Filter all product's category from query
  const filteredItems = products.filter((product) => {
    const queryLowerCase = query.toLowerCase();

    return (
      product.title.toLowerCase().includes(queryLowerCase) ||
      product.category.toLowerCase().includes(queryLowerCase)
    );
  });

  return filteredItems;
}

function StoreContextReducer(state, action) {
  // STATES:
  // - carts: []
  // - products:[]
  switch (action.type) {
    // CASE: 'ADD_TO_CART', push payload to the carts
    case "ADD_TO_CART":
      // PUSH the product object to the cart
      // state.carts.push(action.payload);

      // CHECK if action.payload.id already exists in the state.carts
      // IF payload exists in the state.carts
      //   THEN do nothing
      // OTHERWISE push to state.carts
      const currentId = action.payload.id;
      const searchFromCarts = state.carts.find((cart) => {
        return cart.id === currentId;
      });
      if (searchFromCarts === undefined) {
        state.carts.push(action.payload);
      }

      return {
        ...state, // Spread all previous state
        carts: state.carts,
      };

    // CASE: 'SET_PRODUCTS', set all the payload to the products
    case "SET_PRODUCTS":
      return {
        ...state, // Spread all previous state,
        products: action.payload, // Products that shown in the Frontend
        __originalProducts: action.payload, // The actual list of products
      };

    // CASE: 'SEARCH', filter products from action.payload (search query)
    case "SEARCH":
      return {
        ...state,
        // Filter the actual list of products
        products: filterProducts(state.__originalProducts, action.payload),
      };

    // DEFAULT: return state
    default:
      return state;
  }
}

// Create a custom hook for the reducer
const useStoreContextReducer = () => {
  return useReducer(StoreContextReducer, {
    carts: [],
    products: [],
    __originalProducts: [],
  });
};

export default useStoreContextReducer; // Export the custom hook
