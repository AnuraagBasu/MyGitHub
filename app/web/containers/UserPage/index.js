import React from 'react';
import { compose, lifecycle, withHandlers } from 'recompose';
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
      this.props.getUserDetails();
    }
  },
});

const handlers = withHandlers({
  handleScroll: (props) => {
    return (event) => {
      if (props.reposLoading || props.hasAllRepos) {
        return;
      }

      const scrollTarget = event.target;

      if (scrollTarget.scrollTop + scrollTarget.offsetHeight >= scrollTarget.scrollHeight * 0.8) {
        console.log('fetch more now');
        props.getUserRepos();
      }
    };
  },
});

const UserPage = (props) => {
  return (
    <div onScroll={props.handleScroll} className="page user-page">
      <UserPageTopSection avatar={props.avatar} handle={props.handle} />
      <div className="tabs">
        <NavLink exact to={`${props.match.url}`} activeClassName="active">
          Info
        </NavLink>

        <NavLink to={`${props.match.url}/repo`} activeClassName="active">
          Repos
        </NavLink>
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
    avatar: state.user.avatar,
    handle: state.user.handle,
    repoCount: state.user.repoCount,
    gistsCount: state.user.gistsCount,
    accessToken: state.user.accessToken,
    userDetailsLoading: state.user.isLoading,
    reposLoading: state.repos.isLoading,
    hasAllRepos: state.repos.hasAll,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
};

const mapStoreToProps = connect(mapStateToProps, mapDispatchToProps);

const enhance = compose(withRouter, mapStoreToProps, getUserDetailOnMount, handlers);

export default enhance(UserPage);
