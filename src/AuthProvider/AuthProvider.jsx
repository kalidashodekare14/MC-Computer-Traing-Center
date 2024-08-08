import React, { useEffect, useState } from 'react';
import { createContext } from 'react'
import auth from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';


export const authContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)


    const signUpSystem = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginSystem = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
       const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log(currentUser)

        })
        return () =>{
            unSubscribe()
        }
    }, [])

    const usersLogged = { user, loading, signUpSystem, loginSystem }

    return (
        <authContext.Provider value={usersLogged}>
            {children}
        </authContext.Provider>
    )
};

export default AuthProvider;