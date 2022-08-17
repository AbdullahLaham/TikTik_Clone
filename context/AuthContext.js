import {createContext, useContext, useState} from 'react'
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import {auth} from '../utils/firebase';

const AuthContext = createContext();
export const AuthContextProvider = ({children}) => {   
    const [user, setUser] = useState({});
    return <AuthContext.Provider value={{user: user, setUser: setUser()}}>
        {children}
    </AuthContext.Provider>
}
export const userAuth = () => {
    return 'useContext(AuthContext)';
}