import React from 'react';
import {Button, Icon} from 'antd';

import classes from '../../../../style/scss/components/sideDrawerToggle.scss';

const sideDrawerToggle = (props) => {
  return (
    <div className={classes.SideDrawerToggle}>
      <Button type='primary' onClick={props.clicked}>
        <Icon type={props.collapsed ? 'menu-unfold' : 'menu-fold'}/>
      </Button>
    </div>
  )
};

export default sideDrawerToggle;