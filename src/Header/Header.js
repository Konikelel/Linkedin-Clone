import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../Features/Firebase';
import { logout } from '../Features/UserSlice';
import './Header.css';
import HeaderOption from './HeaderOption';

function Header() {
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout());
        signOut(auth);
    };

    return (
        <div className='header'>
            <div className='header__left'>
                <img src='linkedin.png' alt='Linkedin Logo' />
                <div className='header__search'>
                    <SearchIcon />
                    <input placeholder='Search' type='text' />
                </div>
            </div>

            <div className='header__right'>
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOption Icon={NotificationsIcon} title='Notifications' />
                <HeaderOption title='Me' onClick={logoutOfApp} avatar={true} />
            </div>
        </div>
    );
}

export default Header;
