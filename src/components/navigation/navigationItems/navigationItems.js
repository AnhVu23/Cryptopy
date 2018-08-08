import React from 'react';
import NavigationItem from './navigationItem';
const navigationItems = (props) => {
  return (
    <ul>
      <NavigationItem link='/' exact>Home</NavigationItem>
      <NavigationItem link='/auth'>Auth</NavigationItem>
      <NavigationItem link='/charts'>Charts</NavigationItem>
    </ul>
  )
};

export default navigationItems;