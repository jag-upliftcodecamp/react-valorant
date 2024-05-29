import { useState } from 'react';
import AuthContext from './AuthContext';

function AuthProvider({ children }) {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');

  const value = {
    displayName,
    email,
    setDisplayName,
    setEmail,
  };

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}

export default AuthProvider;
