import React from 'react';
import PropTypes from 'prop-types';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import Notification from '../../components/Notification';

import URLs from '../../../core/config/urls';

import Styles from './styles.scss'; // eslint-disable-line no-unused-vars

const LoginNotif = (props) => {
  return (
    <div className="login-notif animated slideInRight anim-300-duration">
      <Notification notif="Login failed. Please try again" type="warning" />
    </div>
  );
};

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

      {props.authError ? <LoginNotif /> : null}
    </div>
  );
};

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  authError: PropTypes.string,
};

LoginPage.defaultProps = {
  authError: null,
};

const mapStateToProps = (state) => {
  return { authError: state.user.authError };
};

export default compose(connect(mapStateToProps), loginHandlers)(LoginPage);
