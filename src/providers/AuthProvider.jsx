import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import auth from '../firebase/firebase.config'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updatePassword, updateProfile } from 'firebase/auth';
export const AuthContext = createContext(null);

export default function AuthProvider({children}) {

  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

    // Create User
    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login User
    const loginUser = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
    }

    // Login With Gmail

    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // Sign Out 
    const signOutUser = () => {
      setLoading();
      return signOut(auth);
    }

    // Update User
    const updateUserProfile = (updatedProfile) => {
      return updateProfile(auth.currentUser, updatedProfile)
    }


    // Observer
    useEffect(()=> {
      const unsubscriber = onAuthStateChanged(auth, currentUser =>{
        setLoading(true);
        setUser(currentUser)
        setLoading(false)
      })
      return () => {
        unsubscriber();
      }
    }, [])

    const authInfo = {
      createUser,
      loginUser,
      loginWithGoogle,
      user,
      signOutUser,
      updateUserProfile,
      loading,
      setUser
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
