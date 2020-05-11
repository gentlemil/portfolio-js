import React from 'react';
import { Link } from 'react-router-dom';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.scss'

const Toolbar = (props) => {
    return (
        <header className='toolbar'>
            <nav className='toolbar__navigation'>
                <div className='toolbar__toggle-button'>
                    <DrawerToggleButton click={props.drawerClickHandler} />
                </div>
                <div className='toolbar__logo'><Link to='/'>MILOSZ BUKALA</Link></div>
                <div className='spacer'></div>

                <div className='toolbar_navigation-items'>
                    <ul>
                        <li><Link to='/about'>ABOUT</Link></li>
                        <li><Link to='/resume'>RESUME</Link></li>
                        <li><Link to='/projects'>PROJECT</Link></li>
                        <li><Link to='/contact'>CONTACT</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Toolbar;
