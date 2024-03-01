import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Login from './Auth/Login';
import { auth } from './Features/Firebase';
import { login, logout, selectUser } from './Features/UserSlice';
import Feed from './Feed/Feed';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Widgets from './Widgets/Widgets';

function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, (userAuth) => {
            if (userAuth) {
                dispatch(
                    login({
                        email: userAuth.email,
                        uid: userAuth.uid,
                        displayName: userAuth.displayName,
                        photoUrl: userAuth.photoURL,
                    })
                );
            } else {
                dispatch(logout());
            }
        });
    }, []);

    return (
        <div className='app'>
            <Header />

            {!user ? (
                <Login />
            ) : (
                <div className='app_body'>
                    <Sidebar />
                    <Feed />
                    <Widgets />
                </div>
            )}
        </div>
    );
}

export default App;
