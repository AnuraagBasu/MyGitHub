import React from 'react';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import qs from 'qs';

import { ActionCreators } from '../../../core/actions';

import PulseLoader from '../../components/PulseLoader';

import Styles from './styles.scss'; // eslint-disable-line no-unused-vars

const getAccessTokenOnMount = lifecycle({
  componentDidMount() {
    const authCode = qs.parse(this.props.location.search.split('?')[1]).code;
    this.props.getUserAccessToken(authCode);
  },
  componentWillReceiveProps(nextProps) {
    if (!this.props.authError && nextProps.authError) {
      this.props.history.replace('/login');
    }
  },
});

const CallbackPage = () => (
  <div className="page callback-page">
    <PulseLoader />
    <div>Fetching your GitHub profile...</div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    authError: state.user.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
};

const mapStoreToProps = connect(mapStateToProps, mapDispatchToProps);

const enhance = compose(withRouter, mapStoreToProps, getAccessTokenOnMount);

export default enhance(CallbackPage);
