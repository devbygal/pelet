import './styles/Navigation.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Role } from '../_helpers';
import { accountService } from '../_services';
import * as RiIcons from 'react-icons/ri';

const { ipcRenderer } = window.require('electron');

export const Navigation = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const subscription = accountService.user.subscribe(x => setUser(x));
        return subscription.unsubscribe;
    }, []);

    const handleActive = () => {
        const nav = document.querySelector(".navigation");
        let navLink = nav.getElementsByClassName("navLink");

        for (let i = 0; i < navLink.length; i++) {
            navLink[i].addEventListener("click", function () {
                let current = document.getElementsByClassName("active");
                if (current.length > 0) {
                    current[0].className = current[0].className.replace(" active", "");
                }
                this.className += " active";
            });
        }
    }

    // only show nav when logged in
    if (!user) return null;

    return (
        <nav className={'navigation' + (!user ? ' notLogged' : '')}>
            <div className="navTop">
                <Link to="profile/details" className="navLink account" title='פרופיל'>
                    <img src='https://devshift.biz/wp-content/uploads/2017/04/profile-icon-png-898.png' width="60" height="60" alt="" />
                    <div>
                        <p>
                            <b>{user.firstName} {user.lastName}</b>
                        </p>
                        <p>
                            <small>{user.email}</small>
                        </p>
                    </div>
                </Link>
                <input type="text" className="search" placeholder="מצא..." name="search" />
            </div>
            <div className="navBottom">
                {user.roleUser === Role.Admin &&
                    <Link to="/admin/overview" className="navLink adminNav" onClick={() => handleActive()}>
                        <RiIcons.RiAdminLine /> מנהל
                    </Link>
                }
                <Link className="navLink active" to="/" onClick={() => handleActive()}>
                <RiIcons.RiHome4Line /> ראשי
                </Link>
                <Link className="navLink" to="simulation" onClick={() => handleActive()}>
                <RiIcons.RiTerminalLine /> סימולציה
                </Link>
                <Link className="navLink" to="/exercises/display" onClick={() => handleActive()}>
                <RiIcons.RiCodeSLine /> תרגולים
                </Link>
                <Link className="navLink" to="vocabulary" onClick={() => handleActive()}>
                <RiIcons.RiBookOpenLine /> אוצר מילים
                </Link>
                <Link className="navLink" to="#" onClick={() => ipcRenderer.send('calc-window:toggle')}>
                <RiIcons.RiCalculatorLine /> מחשבון
                </Link>
            </div>
        </nav>
    );
}