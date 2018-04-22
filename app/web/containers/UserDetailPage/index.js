import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, lifecycle } from 'recompose';

import UserDetail from '../../components/UserDetail';

import { ActionCreators } from '../../../core/actions';

const getUserDetailOnMount = lifecycle({
  componentDidMount() {
    this.props.getUserDetails();
  },
});

const UserDetailPage = (props) => {
  return <UserDetail {...props} />;
};

const mapStateToProps = (state) => {
  return {
    name: state.name,
    handle: state.handle,
    bio: state.bio,
    userLocation: state.userLocation,
    email: state.email,
    repoCount: state.repoCount,
    gistsCount: state.gistsCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
};

const enhance = compose(connect(mapStateToProps, mapDispatchToProps), getUserDetailOnMount);

export default enhance(UserDetailPage);
