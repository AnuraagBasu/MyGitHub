import React from 'react';
import PropTypes from 'prop-types';

import PulseLoader from '../PulseLoader';
import RepoListItem from '../RepoListItem';

import Styles from './styles.scss'; // eslint-disable-line no-unused-vars

const RepoList = (props) => {
  return (
    <div className={props.repos.length ? 'repo-list-container' : 'repo-list-container no-items'}>
      {props.repos.map((repo) => {
        return <RepoListItem key={`repo_${repo.id}`} {...repo} />;
      })}

      {props.isLoading ? (
        <div className="loader">
          <PulseLoader />
        </div>
      ) : null}
    </div>
  );
};

RepoList.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      desc: PropTypes.string,
      language: PropTypes.string,
      watchCount: PropTypes.number,
      forksCount: PropTypes.number,
      starsCount: PropTypes.number,
    }),
  ).isRequired,
  isLoading: PropTypes.bool,
};

RepoList.defaultProps = {
  isLoading: false,
};

export default RepoList;
