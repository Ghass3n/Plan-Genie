import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const [userId, setUserId] = useState(null);

    const login = (token, id) => {
        setUserToken(token);
        setUserId(id);
        setIsLoading(false);
        console.log('User ID:', id);
        console.log('User Token:', token);
    };

    const logout = () => {
        setUserToken(null);
        setUserId(null);
        setIsLoading(false);
        console.log("Logged out");
    };

    return (
        <AuthContext.Provider value={{ login, logout, isLoading, userToken, userId }}>
            {children}
        </AuthContext.Provider>
    );
};
