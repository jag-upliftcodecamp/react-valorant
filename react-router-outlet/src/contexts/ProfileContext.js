import { createContext, useContext } from "react";

const ProfileContext = createContext({
  displayName: "",
});

// Custom Hook for ProfileContext
export function useProfileContext() {
  return useContext(ProfileContext);
}

export default ProfileContext;
