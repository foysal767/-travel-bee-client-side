import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config'
import { current } from 'daisyui/src/colors';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
}

const providerLogin = (Provider) => {
    setLoading(true)
    return signInWithPopup(auth, Provider)
}

const login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
}

const logOut = () => {
    return signOut(auth)
}

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        console.log(currentUser)
        setUser(currentUser)
        setLoading(false)
    });
    return () => {
        return unsubscribe();
    }
}, [])

const authInfo = {
    user,
    loading,
    createUser,
    login,
    logOut,
    providerLogin
}
return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
);
};

export default AuthProvider;