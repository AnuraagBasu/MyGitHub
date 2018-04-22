import React from 'react';
import { compose, withHandlers } from 'recompose';
import PropTypes from 'prop-types';

import URLs from '../../../core/config/urls';

import Styles from './styles.scss'; // eslint-disable-line no-unused-vars

const loginHandlers = withHandlers({
  login: (props) => {
    return (event) => {
      event.stopPropagation();
      window.location = URLs.login();
    };
  },
});

const LoginPage = (props) => {
  return (
    <div className="login-page">
      <div>Manage your GitHub repositories</div>

      <button className="login-btn" onClick={props.login}>
        Login In with GitHub
      </button>
    </div>
  );
};

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
};

export default compose(loginHandlers)(LoginPage);
