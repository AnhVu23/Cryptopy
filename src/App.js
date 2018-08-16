import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import Feeds from './containers/feeds';
import Layout from './hocs/layout';
import SignUpForm from './components/auth/signUpForm';
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path='/signUp' component={SignUpForm}/>
            <Route path='/' component={Feeds}/>

          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
