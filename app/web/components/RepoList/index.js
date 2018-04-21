import React from 'react';
import PropTypes from 'prop-types';

import RepoListItem from '../RepoListItem';

import Styles from './styles.scss'; // eslint-disable-line no-unused-vars

const RepoList = (props) => {
  return (
    <div className="repo-list-container">
      {props.repos.map((repo) => {
        return <RepoListItem key={`repo_${repo.id}`} {...repo} />;
      })}
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
};

export default RepoList;
