import { createContext } from "react";

const StoreContext = createContext({
  carts: [],
  products: [],
});

export default StoreContext;
