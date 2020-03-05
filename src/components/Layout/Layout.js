import React from 'react';

import Auxiliary from '../../HOC/auxiliary/Auxiliary'
import classes from './Layout.css';

const Layout = ( props ) => (
    <Auxiliary>
        <div> Toolbar, SideDrawer, Backdrop </div>
        <main className={classes.content}>
            {props.children}
        </main>
    </Auxiliary>
)

export default Layout;