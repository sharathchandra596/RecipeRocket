import { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider, signInWithPopup,onAuthStateChanged } from "firebase/auth";
import{} from "firebase/firestore"
import { auth, db } from "../firebase/firebase";


const provider = new GoogleAuthProvider()
export const AppContext= createContext()


export function AuthContextProvider({children}){
    const[user,setUser]=useState({})

    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return()=>{
            unsubscribe()
        }
    },[])

    function signUp()
    {
        return(
            signInWithPopup(auth,provider)

           
        ) 
            

        
    }

    function logOut()
    {
        return auth.signOut()
    }


    return(
        <AppContext.Provider value={{user,signUp,logOut,setUser}}>
            {children}
        </AppContext.Provider>
    )
}