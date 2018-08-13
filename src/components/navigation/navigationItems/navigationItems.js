import React from 'react';
import classes from '../../../style/scss/components/navigationItems.scss';
import Search from '../../UI/search';
import NavigationItem from './navigationItem';

const navigationItems = (props) => {

  return (
    <div className={classes.NavigationItems}>
      <div>Logo</div>
      <ul className={classes.NavLeft}>
        <NavigationItem link='/forum' exact className={classes.left}>Discussion</NavigationItem>
        <NavigationItem link='/charts' className={classes.left}>Charts</NavigationItem>
      </ul>
      <div className={classes.Search}>
          <Search/>
      </div>
      <ul className={classes.NavRight}>
        <NavigationItem link='/login' exact>Login</NavigationItem>
        <NavigationItem link='/signUp'>Register</NavigationItem>
      </ul>
    </div>

  )
};

export default navigationItems;