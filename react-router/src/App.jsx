import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ContactUsPage from './pages/ContactUsPage';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ScandinavianPage from './pages/ScandinavianPage';

function App() {
  // CREATE a router variable
  // SET browser router for each page
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    }, // Home Page
    {
      path: '/about-page',
      element: <AboutPage />,
    }, // About Page
    {
      path: '/contact-page',
      element: <ContactUsPage />,
    }, // Contact Us Page
    {
      path: '/ProjectsPage',
      element: <ProjectsPage />,
    }, // Projects Page
    {
      path: '/ScandinavianPage',
      element: <ScandinavianPage />,
    }, // Scandinavian Page
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
