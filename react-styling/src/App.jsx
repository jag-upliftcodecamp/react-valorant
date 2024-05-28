import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import SignUpPage from './pages/SignUpPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      // HomePage
    },
    {
      path: '/register',
      element: <SignUpPage />,
      // Sign up
    },
    {
      path: '/login',
      element: <LoginPage />,
      // Login
    },
    {
      path: '/profile',
      element: <ProfilePage />,
      // Profile
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
