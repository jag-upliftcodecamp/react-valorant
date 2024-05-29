import { useContext } from 'react';
import ProfileContext from '../contexts/ProfileContext';

function ProfilePage() {
  const { displayName } = useContext(ProfileContext);

  return (
    <>
      <h1>Hi, {displayName}</h1>
    </>
  );
}

export default ProfilePage;
