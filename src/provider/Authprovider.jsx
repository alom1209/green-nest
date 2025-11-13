import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { GoogleAuthProvider } from 'firebase/auth';
export const AuthContext=createContext();
const auth = getAuth(app);
const provider= new GoogleAuthProvider();
const Authprovider = ({children}) => {
    const[user,setUser]=useState(null)
    const[loading,setLoading]=useState(true)
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        return signOut(auth);
    }
    const updateUser=(updatedData)=>{
        return updateProfile(auth.currentUser,updatedData)
    }
    const googleSignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth, provider);
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    const handleForget=(email)=>{
        return sendPasswordResetEmail(auth, email)
    }
    const authData={
        user,
        setUser,
        createUser,
        logOut,
        logIn,
        loading,
        setLoading,
        updateUser,
        googleSignIn,
        handleForget,
    }
    return <AuthContext value={authData}>{children}</AuthContext>;
};

export default Authprovider;