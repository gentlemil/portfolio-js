import React from 'react';
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
                <li><a href='#'>ABOUT</a></li>
                <li><a href='#'>RESUME</a></li>
                <li><a href='#'>PROJECTS</a></li>
                <li><a href='#'>CONTACT</a></li>
            </ul>
        </nav>
    );

};

export default SideDrawer;