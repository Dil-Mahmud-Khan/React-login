import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import {getAuth,createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile} from 'firebase/auth';



export const AuthContext=createContext();
const auth =getAuth(app);

const AuthProvider = ({ children }) => {

    const [user,setUser]=useState(null);
    const[loading,setLoading]=useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const updateUser=(userInfo)=>{
        return updateProfile(auth.currentUser,userInfo);
    }

    const logOut=()=>{
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            console.log("User Observing");
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>unsubscribe();
    },[])

    const authInfo = {
        createUser,
        signIn,
        updateUser,
        logOut,
        user,
        loading
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;