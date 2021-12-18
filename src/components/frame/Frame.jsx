import './styles/Frame.css';
import React, { useEffect, useState } from 'react';
import * as VscIcons from 'react-icons/vsc';
import { accountService } from '../_services';

const { ipcRenderer } = window.require('electron');

export const Frame = () => {
    
    const [user, setUser] = useState({});

    useEffect(() => {
        const subscription = accountService.user.subscribe(x => setUser(x));
        return subscription.unsubscribe;
    }, []);

    // only show nav when logged in
    if (!user) return (
        <div className='mainFrame'>
            <div className='topBar'>
                <div className='titleBar'>
                    <img src='' width={24} alt='' />
                    <div className='title'>
                        פ.ל.ת
                    </div>
                </div>
                <div className='titleBarBtns'>
                    <button id='minimizeBtn' className='topBtn minimizeBtn'
                        onClick={async () => await ipcRenderer.send('minimize-app')}><VscIcons.VscChromeMinimize /></button>
                    <button id='maxResBtn' className='topBtn maximizeBtn'
                        onClick={async () => await ipcRenderer.send('maximize-app')}><VscIcons.VscChromeMaximize /></button>
                    <button id='closeBtn' className='topBtn closeBtn'
                        onClick={async () => await ipcRenderer.send('close-app')}><VscIcons.VscChromeClose /></button>
                </div>
            </div>
        </div>
    );
    
    const toggleActives = () => {
        let toggle = document.querySelector('.toggleButton');
        let topbar = document.querySelector('.topbar');
        let navigation = document.querySelector('.navigation');
        let mainApp = document.querySelector('.mainApp');

        toggle.classList.toggle('active');
        topbar.classList.toggle('active');
        navigation.classList.toggle('active');
        mainApp.classList.toggle('active');
    }

    return (
        <div className='mainFrame'>
            <div className='topBar'>
                <div className='titleBar'>
                    <button id='showHideMenus' className='toggleButton ' onClick={() => toggleActives()}></button>
                    <img src='' width={24} alt=''/>
                    <div className='title'>
                        פ.ל.ת
                    </div>
                </div>
                <div className='titleBarBtns'>
                    <button id='minimizeBtn' className='topBtn minimizeBtn'
                        onClick={async () => await ipcRenderer.send('minimize-app')}><VscIcons.VscChromeMinimize /></button>
                    <button id='maxResBtn' className='topBtn maximizeBtn'
                        onClick={async () => await ipcRenderer.send('maximize-app')}><VscIcons.VscChromeMaximize /></button>
                    <button id='closeBtn' className='topBtn closeBtn'
                        onClick={async () => await ipcRenderer.send('close-app')}><VscIcons.VscChromeClose /></button>
                </div>
            </div>
        </div>
    );
}