import { createContext } from "react";

const AuthContext = createContext({
  displayName: "",
  email: "",
});

export default AuthContext;
