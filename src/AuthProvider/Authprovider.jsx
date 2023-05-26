import React, { createContext, useEffect, useState } from 'react'
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.init';
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
  const auth = getAuth(app)
  const googleProvider = new GoogleAuthProvider()
  const githubProvider=new GithubAuthProvider()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  {/* ====create user===== */}
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }

  {/* ====googleLogin with firebase===== */}
  const handleGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
  }

  {/* ====githubLogin with firebase===== */}
  const handleGithub = () => {
    setLoading(true)
    return signInWithPopup(auth,githubProvider)
  }
  {/* ====login user===== */}
  const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
  {/* ====logout===== */}
  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }
  const handleNamePhotoUrl = (user, name,photoURL) => {
    // console.log(user, name, 'handleUserName',photoURL);
    setLoading(true)
    updateProfile(user, {
      displayName: name,
      photoURL:photoURL
    })
  }
  {/* ====onAuthStateChanged firebase===== */}
  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, user => {
      // console.log('logged User:', user);
      setUser(user)
      setLoading(false)
    })
    return () => {
      unsubscribe()
    }
    },[])
  const authInfo={user,createUser,loginUser,logOut,loading,handleGoogle,handleGithub,handleNamePhotoUrl}
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider