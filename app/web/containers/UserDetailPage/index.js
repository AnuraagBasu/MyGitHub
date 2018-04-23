import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import UserDetail from '../../components/UserDetail';

const UserDetailPage = (props) => {
  return <UserDetail {...props} />;
};

const mapStateToProps = (state) => {
  return {
    name: state.user.name,
    bio: state.user.bio,
    userLocation: state.user.userLocation,
    email: state.user.email,
    repoCount: state.user.repoCount,
    gistsCount: state.user.gistsCount,
  };
};

const enhance = compose(connect(mapStateToProps));

export default enhance(UserDetailPage);
