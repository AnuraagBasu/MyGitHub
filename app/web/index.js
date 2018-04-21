import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import store from '../core/store';

import UserDetailPage from './containers/UserDetailPage';

import Styles from './styles/base.scss'; // eslint-disable-line no-unused-vars

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={UserDetailPage} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default Root;
