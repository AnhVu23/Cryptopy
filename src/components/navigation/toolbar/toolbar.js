import React from 'react';

import NavigationItems from '../navigationItems';
import SideDrawerToggle from '../sideDrawer/sideDrawerToggle';
import Search from '../../UI/search';
import classes from '../../../style/scss/components/toolbar.scss';
const toolbar = (props) => {
  const mobileNav = (
    <div className={classes.MobileNav}>
      <SideDrawerToggle clicked={props.drawerToggleClicked}
                        collapsed={props.collapsed}/>
      <Search/>
    </div>
  );
  return (
    <header className={classes.Toolbar}>
      {mobileNav}
      <nav className={classes.Nav}>
        <NavigationItems/>
      </nav>
    </header>
  )
};

export default toolbar;