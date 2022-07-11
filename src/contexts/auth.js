import React, { createContext, useState } from 'react';
import { api } from '../services/api';

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [colorBackground, setColorBackground] = useState('#1EF098');
    
    const setCurrentUser = (user) => {
        setUser(user);
        sessionStorage.setItem("u", JSON.stringify(user));
        getColor(user.id);
    }

    const getColor = (id) => {
        api.get('store').then((response => {
            let stores = response.data;
            stores.map((stor) => {
                if(stor.user_id == id){
                    setColorBackground(stor.background);
                    return true;
                }
            })
        }));
    }

    const setColor = (color) => {
        setColorBackground(color);
    }

    const getUser = () => {
        return sessionStorage.getItem("u");
    }


    return (
        <AuthContext.Provider value={{signed: Boolean(sessionStorage.getItem("u")), getUser, setCurrentUser, setColor, colorBackground, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;