import React from 'react';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import qs from 'qs';

import { ActionCreators } from '../../../core/actions';

import PulseLoader from '../../components/PulseLoader';

import Styles from './styles.scss'; // eslint-disable-line no-unused-vars

const getAccessTokenOnMount = lifecycle({
  componentDidMount() {
    const authCode = qs.parse(this.props.location.search.split('?')[1]).code;
    this.props.getUserAccessToken(authCode);
  },
});

const CallbackPage = () => (
  <div className="page callback-page">
    <PulseLoader />
    <div>Fetching your GitHub profile...</div>
  </div>
);

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
};

const enhance = compose(connect(mapStateToProps, mapDispatchToProps), getAccessTokenOnMount);

export default enhance(CallbackPage);
