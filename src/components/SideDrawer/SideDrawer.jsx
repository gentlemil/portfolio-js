import React from 'react';
import { Link } from 'react-router-dom';
import './SideDrawer.scss';

const SideDrawer = props => {

    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open'
    }
    return (
        <nav className={drawerClasses}>

            {/* <nav className='side-drawer'> */}
            <ul>
                <li><Link to='/about'>ABOUT</Link></li>
                <li><Link to='/resume'>RESUME</Link></li>
                <li><Link to='/projects'>PROJECT</Link></li>
                <li><Link to='/contact'>CONTACT</Link></li>
            </ul>

        </nav>
    );

};

export default SideDrawer;