import React from 'react';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import UserPageTopSection from '../../components/UserPageTopSection';
import UserDetailPage from '../UserDetailPage';
import UserReposPage from '../UserReposPage';

import { ActionCreators } from '../../../core/actions';

import Styles from './styles.scss'; // eslint-disable-line no-unused-vars

const getUserDetailOnMount = lifecycle({
  componentDidMount() {
    if (this.props.accessToken) {
      // user is logged in
      this.props.getUserDetails();
    }
  },
});

const UserPage = (props) => {
  return (
    <div className="page user-page">
      <div className="cover-section">
        <UserPageTopSection pic={props.avatar} handle={props.handle} />
        <div className="tabs">
          <NavLink exact to={`${props.match.url}`} activeClassName="active">
            Info
          </NavLink>

          <NavLink to={`${props.match.url}/repo`} activeClassName="active">
            Repos
          </NavLink>
        </div>
      </div>

      <div className="content-section">
        <div>
          <Route exact path={`${props.match.url}/`} component={UserDetailPage} />
          <Route path={`${props.match.url}/repo/`} component={UserReposPage} />
        </div>
      </div>
    </div>
  );
};

UserPage.propTypes = {
  avatar: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    avatar: state.avatar,
    handle: state.handle,
    repoCount: state.repoCount,
    gistsCount: state.gistsCount,
    accessToken: state.accessToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
};

const mapStoreToProps = connect(mapStateToProps, mapDispatchToProps);

const enhance = compose(withRouter, mapStoreToProps, getUserDetailOnMount);

export default enhance(UserPage);
