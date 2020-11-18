import React, {useEffect, useState} from 'react';
import app from './fire';


export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('currentUser')))


    useEffect(()=>{
        app.auth().onAuthStateChanged((user) => {
            if(user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                setCurrentUser(JSON.parse(localStorage.getItem('currentUser')));
            } else {
                localStorage.removeItem('currentUser');
                setCurrentUser(null);
            }
        })
    }, []);

    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    );
}

export const AuthContext = React.createContext();