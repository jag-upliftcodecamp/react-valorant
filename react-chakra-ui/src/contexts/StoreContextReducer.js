import { useReducer } from "react";

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
        products: action.payload,
      };

    // DEFAULT: return state
    default:
      return state;
  }
}

const useStoreContextReducer = () => {
  return useReducer(StoreContextReducer, {
    carts: [],
    products: [],
  });
};

export default useStoreContextReducer; // Export the custom hook
