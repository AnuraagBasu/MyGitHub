import React from 'react';
import PropTypes from 'prop-types';

import Styles from './styles.scss'; // eslint-disable-line no-unused-vars

const TextWithIcon = (props) => {
  return (
    <div className={props.className}>
      <i className={`icon fa fa-${props.iconName}`} />
      <span>{props.text}</span>
    </div>
  );
};

TextWithIcon.propTypes = {
  className: PropTypes.string,
  iconName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

TextWithIcon.defaultProps = {
  className: 'wrapper',
};

const UserDetail = (props) => {
  return (
    <div className="user-container">
      <div className="cover">
        <div className="pic" />
        <div className="name">{props.name}</div>
        <div className="handle">{props.handle}</div>
        <span className="repo-count">{`${props.repoCount} Repos`}</span>
      </div>

      {props.bio ? (
        <div className="bio section">
          <div>About Me</div>
          <div>{props.bio}</div>
        </div>
      ) : null}

      <div className="more-info section">
        <div>More Info</div>

        <TextWithIcon className="location" iconName="map-marker" text={props.location} />

        {props.email ? <TextWithIcon className="email" iconName="envelope" text={props.email} /> : null}
      </div>
    </div>
  );
};

UserDetail.propTypes = {
  name: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
  bio: PropTypes.string,
  location: PropTypes.string.isRequired,
  email: PropTypes.string,
  repoCount: PropTypes.number.isRequired,
};

UserDetail.defaultProps = {
  bio: null,
  email: null,
};

export default UserDetail;
