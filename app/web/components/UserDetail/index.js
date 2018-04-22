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

const Stat = (props) => {
  return (
    <div className="stat">
      <div className="count">{props.count}</div>
      <div className="label">{props.label}</div>
    </div>
  );
};

Stat.propTypes = {
  count: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

const UserDetail = (props) => {
  return (
    <div className="user-container">
      <div className="basic-info-section section card animated fadeInUp anim-300-duration">
        <div className="name">{props.name}</div>
        {props.bio ? <div className="bio">{props.bio}</div> : null}
      </div>

      <div className="stats-section section card animated fadeInUp anim-300-duration">
        <div className="section-header">Stats</div>

        <div className="follow-stats-wrapper">
          <Stat count={props.gistsCount} label="Gists" />
          <Stat count={props.repoCount} label="Repos" />
        </div>
      </div>

      <div className="more-info-section section card animated fadeInUp anim-300-duration">
        <div className="section-header">More Info</div>

        <TextWithIcon className="location" iconName="map-marker" text={props.userLocation} />

        {props.email ? <TextWithIcon className="email" iconName="envelope" text={props.email} /> : null}
      </div>
    </div>
  );
};

UserDetail.propTypes = {
  name: PropTypes.string.isRequired,
  bio: PropTypes.string,
  userLocation: PropTypes.string.isRequired,
  email: PropTypes.string,
  repoCount: PropTypes.number.isRequired,
  gistsCount: PropTypes.number.isRequired,
};

UserDetail.defaultProps = {
  bio: null,
  email: null,
};

export default UserDetail;
