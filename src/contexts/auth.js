import React, { createContext, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    
    const setCurrentUser = (user) => {
        setUser(user);
        sessionStorage.setItem("u", user);
    }


    return (
        <AuthContext.Provider value={{signed: Boolean(sessionStorage.getItem("u")), setCurrentUser, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;