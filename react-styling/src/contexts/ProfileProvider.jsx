import { useState } from 'react';
import ProfileContext from './ProfileContext';

function ProfileProvider({ children }) {
  const [displayName, setDisplayName] = useState('');
  const value = {
    displayName,
    setDisplayName,
  }

  return (
    <>
      <ProfileContext.Provider value={value}>
        {children}
      </ProfileContext.Provider>
    </>
  );
}

export default ProfileProvider;