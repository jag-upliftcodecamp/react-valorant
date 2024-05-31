import ProfileProvider from './contexts/ProfileProvider';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import SignUpPage from './pages/SignUpPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainTemplate from './templates/MainTemplate';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainTemplate />, // Main template of all
      children: [
        {
          path: '/',
          element: <HomePage />
        },
        {
          path: '/signup',
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
      ]
    },
    
  ]);

  return (
    <>
      <ProfileProvider>
        <RouterProvider router={router} />
      </ProfileProvider>
    </>
  );
}

export default App;
