import React from 'react'
import { createContext } from 'react'
import auth from '../firebase/firebase.config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
export const AuthContext = createContext(null);

export default function AuthProvider({children}) {

    // Create User
    const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login User
    const LoginUser = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
    }


    const authInfo = {
      createUser,
      LoginUser
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
