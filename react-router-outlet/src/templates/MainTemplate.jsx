import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

function MainTemplate() {
  return (
    <>
      <Header />

      <Outlet />

      <footer>
        <h2>Footer 👣👣👣</h2>
      </footer>
    </>
  );
}

export default MainTemplate;
