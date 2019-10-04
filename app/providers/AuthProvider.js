import React, { useState } from "react";
import storage from "../services/storage";
import { AuthContext } from "../contexts/AuthContext";
// This is where jwt will be handle
// For exercise purposes it will make
// dummy operations
const tokenSuffix = "token";
const sessionSuffix = "auth";
const dummyToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

const AuthProvider = props => {
  const token = storage.get(tokenSuffix);

  let session = storage.get(sessionSuffix);

  const getSession = () => {
    if (!session && token) {
      return null;
    }
    return session; 
  };

  const isExpired = () => {
    //Check if Token is expired
    return false;
  };
  const initAuthentication = () => {
    session = getSession();
    const check = session && session.username && !isExpired();
    return check;
  };
  const signIn = token => {
    // token is replaced with user for example
    setUser(token);
    storage.set(tokenSuffix, dummyToken);
    storage.set(sessionSuffix, token);
    setIsAuthenticated(true);
  };

  const signOut = () => {
    storage.remove(tokenSuffix);
    storage.remove(sessionSuffix);
    setIsAuthenticated(false);
  };
  const [isAuthenticated, setIsAuthenticated] = useState(initAuthentication());
  const [user, setUser] = useState(session);

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signOut, user }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
