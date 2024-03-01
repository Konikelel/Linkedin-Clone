import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from 'firebase/auth';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../Features/Firebase';
import { login } from '../Features/UserSlice';
import './Login.css';

function Login() {
    const [register, setRegister] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const dispatch = useDispatch();

    const registerToApp = async (e) => {
        e.preventDefault();

        if (!name) {
            return alert('Please enter a full name');
        }

        try {
            const userAuth = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            await updateProfile(userAuth.user, {
                displayName: name,
                photoURL: profilePic,
            });

            dispatch(
                login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePic,
                })
            );
        } catch (error) {
            alert(`Registration failed: ${error}`);
        }
    };

    const loginToApp = async (e) => {
        e.preventDefault();

        try {
            const userAuth = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            dispatch(
                login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileUrl: userAuth.user.photoURL,
                })
            );
        } catch (error) {
            alert(`Registration failed: ${error}`);
        }
    };

    return (
        <div className='login'>
            <img src='linkedInLogoLarge.png' alt='Linkedin Logo' />
            <form action=''>
                {register && (
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Full Name'
                        type='text'
                    />
                )}
                {register && (
                    <input
                        value={profilePic}
                        onChange={(e) => setProfilePic(e.target.value)}
                        placeholder='Profile picture URL (optional)'
                        type='text'
                    />
                )}
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email'
                    type='email'
                />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'
                    type='password'
                />
                <button
                    type='submit'
                    onClick={register ? registerToApp : loginToApp}
                >
                    {register ? 'Register' : 'Sign In'}
                </button>
            </form>

            <p>
                {register ? 'Have an account?' : 'Not a member?'}{' '}
                <span
                    className='login__register'
                    onClick={() => setRegister(!register)}
                >
                    {register ? 'Sing In' : 'Register Now'}
                </span>
            </p>
        </div>
    );
}

export default Login;
