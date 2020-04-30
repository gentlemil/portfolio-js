import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
// import MainContent from '../MainContent/MainContent';
// import MyAbout from '../MyAbout/MyAbout';
// import MyResume from '../MyResume/MyResume';
// import MyProjects from '../MyProjects/MyProjects';
// import MyContact from '../MyContact/MyContact';

import './Toolbar.scss'

const Toolbar = (props) => {
    return (
        <header className='toolbar'>
            <nav className='toolbar__navigation'>
                <div className='toolbar__toggle-button'>
                    <DrawerToggleButton click={props.drawerClickHandler} />
                </div>
                <div className='toolbar__logo'><a href='/'>MILOSZ BUKALA</a></div>
                <div className='spacer'></div>
                <div className='toolbar_navigation-items'>
                    <ul>
                        <li><a href='/about'>ABOUT</a></li>
                        <li><a href='/resume'>RESUME</a></li>
                        <li><a href='/projects'>PROJECT</a></li>
                        <li><a href='/contact'>CONTACT</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Toolbar;
