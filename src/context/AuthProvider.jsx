import { createContext, useState } from "react";

// initialState
const initialState = {};

export const AuthContext = createContext(initialState);

export const AuthProvider = ({ chidren }) => {
  const [auth, setAuth] = useState(initialState);
  return (
    <AuthContext.Provider value={(auth, setAuth)}>
      {children}
    </AuthContext.Provider>
  );
};
