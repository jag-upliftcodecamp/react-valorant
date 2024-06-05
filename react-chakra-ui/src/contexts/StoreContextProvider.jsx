import { useState } from 'react';
import StoreContext from './StoreContext';

function StoreContextProvider({ children }) {
  return (
    <>
      <StoreContext.Provider value={}>{children}</StoreContext.Provider>
    </>
  );
}

export default StoreContextProvider;
