import React from 'react';
import { Provider, connect } from 'react-redux';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import { compose, lifecycle } from 'recompose';

import store from '../core/store';

import LoginPage from './containers/LoginPage';
import LoginCallbackPage from './containers/LoginCallbackPage';
import AuthenticatedPage from './containers/AuthenticatedPage';

import Styles from './styles/base.scss'; // eslint-disable-line no-unused-vars

const changeRouteWhenAuthenticated = lifecycle({
  componentWillReceiveProps(nextProps) {
    if (!this.props.accessToken && nextProps.accessToken) {
      nextProps.history.replace('/user');
    }
  },
});

const Routes = () => {
  return (
    <div>
      <Route exact path="/login" component={LoginPage} />
      <Route path="/login/callback" component={LoginCallbackPage} />
      <Route path="/user" component={AuthenticatedPage} />
    </div>
  );
};

const mapStateToRouteProps = (state) => {
  return {
    accessToken: state.accessToken,
  };
};

const EnhancedRoutes = compose(withRouter, connect(mapStateToRouteProps), changeRouteWhenAuthenticated)(Routes);

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <EnhancedRoutes />
    </BrowserRouter>
  </Provider>
);

export default Root;
