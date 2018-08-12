import React, {Component} from 'react';
import {Input} from 'antd';

import classes from '../../../style/scss/components/search.scss'
class Search extends Component {

  searchHandler(value) {
    console.log(value);
  }

  render() {
    const Search = Input.Search;
    return (
      <div className={classes.Search}>
        <Search placeholder='Finding based on name of coin or username'
                onSearch={value => this.searchHandler(value)} style={{width: 'inherit'}}/>
      </div>
    );
  }
}

export default Search;