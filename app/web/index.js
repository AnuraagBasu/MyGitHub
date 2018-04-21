import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import store from '../core/store';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={() => <div>React Redux App</div>} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default Root;
