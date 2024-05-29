import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

function SettingsPage() {
  const { displayName, email, setDisplayName, setEmail } = useContext(AuthContext);

  return (
    <>
      <div>
        <Link to="/">🔙 Back to Profile Page</Link>
      </div>
      <form action="">
        <div>
          <input
            type="text"
            placeholder="Enter Display Name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default SettingsPage;
