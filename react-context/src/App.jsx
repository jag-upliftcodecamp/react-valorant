import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import AuthProvider from './contexts/AuthProvider';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <ProfilePage />,
    },
    {
      path: '/settings',
      element: <SettingsPage />,
    },
  ]);

  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
