import React, { createContext, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    
    const setCurrentUser = (user) => {
        setUser(user);
        sessionStorage.setItem("u", JSON.stringify(user));
    }

    const getUser = () => {
        return sessionStorage.getItem("u");
    }


    return (
        <AuthContext.Provider value={{signed: Boolean(sessionStorage.getItem("u")), getUser, setCurrentUser, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;