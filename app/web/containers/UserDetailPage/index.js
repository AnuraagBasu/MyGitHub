import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, withProps, lifecycle } from 'recompose';

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
    location: state.location,
    email: state.email,
    repoCount: state.repoCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
};

export default compose(connect(mapStateToProps, mapDispatchToProps), getUserDetailOnMount)(UserDetailPage);
