import HomePage from './pages/HomePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import StoreContextProvider from './contexts/StoreContextProvider';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    // You can add nested routes or other pages
  ]);

  return (
    <>
      <StoreContextProvider>
        <ChakraProvider>
          <RouterProvider router={router} />
        </ChakraProvider>
      </StoreContextProvider>
    </>
  );
}

export default App;
