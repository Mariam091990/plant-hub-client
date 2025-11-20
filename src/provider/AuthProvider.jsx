
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';


export const AuthContext = createContext();


const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);






    const createUser = (email, password) => {

        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const signIn = (email, password) => {
        //  console.log(email,password);
        setLoading(true);

        return signInWithEmailAndPassword(auth, email, password);

    }



    const googleSignIn = () => {

        setLoading(true);
        return signInWithPopup(auth, googleProvider);

    }


    const updateUser = (updateData) => {

        return updateProfile(auth.currentUser, updateData);
    }


    const resetPassword = (email) => {

        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    }








    const logOut = () => {
        return signOut(auth);

    };




    useEffect(() => {

        const unsbscribe = onAuthStateChanged(auth, (currentUser) => {

           setUser(currentUser ? { ...currentUser } : null);
            setLoading(false)
        })
        return () => {
            unsbscribe();
        }

    }, []);

    const authData = {
        user,
        setUser,
        createUser,
        loading,
        setLoading,
        signIn,
        googleSignIn,
        updateUser,
        logOut,
        resetPassword,

    }


    return <AuthContext.Provider value={authData}>


        {children}


    </AuthContext.Provider>;

};

export default AuthProvider;