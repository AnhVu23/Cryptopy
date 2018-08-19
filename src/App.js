import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import Feeds from './containers/feeds';
import Layout from './hocs/layout';
import SignUp from './containers/auth/signUp';
import SignIn from './containers/auth/signIn';
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path='/signUp' component={SignUp}/>
            <Route path='/signIn' component={SignIn}/>
            <Route path='/' component={Feeds}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
