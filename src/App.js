import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Feeds from './containers/feeds';
import Aux from './hocs/layout';
import Layout from './hocs/layout';
class App extends Component {
  render() {
    return (
      <Aux>
        <Layout>
          <Switch>
            <Route path='/' component={Feeds}/>
            <Route path='/' component={Feeds}/>
          </Switch>
        </Layout>
      </Aux>
    );
  }
}

export default App;
