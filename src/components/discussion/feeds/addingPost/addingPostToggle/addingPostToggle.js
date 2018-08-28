import React from 'react';
import {Button} from 'antd';

import classes from '../../../../../style/scss/components/addingPostToggle.scss'
const addingPostToggle = (props) => {
  return (
    <div className={classes.MobileToggle}>
      <Button type='primary'
              icon='plus'
              onClick={props.clicked}/>
    </div>
  )
};

export default addingPostToggle;