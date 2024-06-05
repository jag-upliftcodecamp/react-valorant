import { createContext, useContext } from "react";

// 💡 Good rule of thumb is always adjust your important states
const StoreContext = createContext({
  carts: [],
  products: [],
  __originalProducts: [],
});

// You can also create a custom hook for context
export const useStoreContext = () => {
  return useContext(StoreContext);
};

export default StoreContext;
