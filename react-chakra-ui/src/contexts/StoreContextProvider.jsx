import StoreContext from './StoreContext';
import useStoreContextReducer from './StoreContextReducer';

function StoreContextProvider({ children }) {
  const [state, dispatch] = useStoreContextReducer();

  return (
    <>
      <StoreContext.Provider value={{ state, dispatch }}>
        {children}
      </StoreContext.Provider>
    </>
  );
}

export default StoreContextProvider;
