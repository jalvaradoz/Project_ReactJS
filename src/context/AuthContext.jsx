import { createContext, useEffect, useState } from "react"

import { auth } from "../db/db"
import { deleteUser, onAuthStateChanged, createUserWithEmailAndPassword, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, updateProfile, reauthenticateWithCredential } from "firebase/auth"

const userAuth = createContext()

const AuthProvider = ({children})=>{

    const [currentUser, setCurrentUser] = useState(null)
    const [userLoggedIn, setUserLoggedIn] = useState(false)
    const [userImage, setUserImage] = useState(null)
    const [userMod, setUserMod] = useState(null)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, userInit)
        return unsubscribe
    },[])

    useEffect(() => {
        setUserMod(auth.currentUser)
    }, [currentUser])

    const userInit = async(user)=>{
        if(user){
            setCurrentUser({...user})
            setUserLoggedIn(true)
            const imageURL = user.providerData.map((profile) => profile.photoURL)[0]
            setUserImage(imageURL)
        }else{
            setCurrentUser(null)
            setUserLoggedIn(false)
        }
    }

    const doSignInWithEmailAndPassword = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            return userCredential.user
        } catch (error) {
            throw error
        }
    }
    
    const doSignInWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider()
            const result = await signInWithPopup(auth, provider)
            return result.user
        } catch (error) {
            throw error
        }
    }
    
    const doSignOut = async () => {
        try {
            await auth.signOut()
        } catch (error) {
            throw error
        }
    }

    const doCreateUserWithEmailAndPassword = async (email, password, userName) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user

            await updateProfile(user, { displayName: userName })
        } catch (error) {
            throw error
        }
    }
    

    const updateUserInfo = async(name)=>{
        try {
            await updateProfile(userMod, {displayName: name})
        } catch (error) {
            throw error
        }
    }

    const doPasswordReset = async (email) => {
        try {
            await sendPasswordResetEmail(auth, email)
        } catch (error) {
            throw error
        }
    }

    const doDeleteUser = async()=>{
        try {
            await deleteUser(userMod)
        } catch (error) {
            throw error
        }
    }

    const reAuthenticate = async(credential)=>{
        try {
            reauthenticateWithCredential(userMod, credential)
        } catch (error) {
            throw error
        }
    }

    return (
        <userAuth.Provider value={{currentUser,userLoggedIn, userImage, doDeleteUser, updateUserInfo, doPasswordReset, doCreateUserWithEmailAndPassword, doSignInWithEmailAndPassword, doSignInWithGoogle, doSignOut, reAuthenticate, userMod}}>
            {children}
        </userAuth.Provider>
    )
}

export {userAuth, AuthProvider}