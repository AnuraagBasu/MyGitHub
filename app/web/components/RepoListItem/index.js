import React from 'react';
import PropTypes from 'prop-types';

import SmallActionButton from '../SmallActionButton';

import Styles from './styles.scss'; // eslint-disable-line no-unused-vars

const RepoListItem = (props) => {
  return (
    <div className="repo-item-container">
      <div className="info">
        <div className="name">
          <a href={props.url} target="_blank">
            {props.name}
          </a>
        </div>

        {props.desc ? <div className="desc">{props.desc}</div> : null}

        {props.language ? <div className="language">{props.language}</div> : null}
      </div>

      <div className="actions">
        <SmallActionButton iconName="eye" btnText={`${props.watchCount}`} />
        <SmallActionButton iconName="code-fork" btnText={`${props.forksCount}`} />
        <SmallActionButton iconName="star-o" btnText={`${props.starsCount}`} />
        <SmallActionButton iconName="clone" />
      </div>
    </div>
  );
};

RepoListItem.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string,
  language: PropTypes.string,
  watchCount: PropTypes.number,
  forksCount: PropTypes.number,
  starsCount: PropTypes.number,
};

RepoListItem.defaultProps = {
  desc: 'Description is missing',
  language: null,
  watchCount: 0,
  forksCount: 0,
  starsCount: 0,
};

export default RepoListItem;
