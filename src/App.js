import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Login from './containers/Login';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/home" exact component={BurgerBuilder} />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/orders" exact component={Orders} />
          <Route path="/" exact component={Login} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
