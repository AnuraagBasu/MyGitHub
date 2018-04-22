import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import UserDetail from '../../components/UserDetail';

const UserDetailPage = (props) => {
  return <UserDetail {...props} />;
};

const mapStateToProps = (state) => {
  return {
    name: state.name,
    bio: state.bio,
    userLocation: state.userLocation,
    email: state.email,
    repoCount: state.repoCount,
    gistsCount: state.gistsCount,
  };
};

const enhance = compose(connect(mapStateToProps));

export default enhance(UserDetailPage);
