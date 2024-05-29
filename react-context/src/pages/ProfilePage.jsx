import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

function ProfilePage() {
  const { displayName, email } = useContext(AuthContext);

  return (
    <>
      <h2>Welcome, {displayName}</h2>
      <h2>Email: {email}</h2>
      <Link to="/settings">Go to Settings ⚙️</Link>
    </>
  );
}

export default ProfilePage;
