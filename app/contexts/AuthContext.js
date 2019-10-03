import React from 'react'

// Initialize properties for intellisense
export const AuthContext = React.createContext({
  isAuthenticated: false,
  signIn: () => null,
  signOut: () => null
})




