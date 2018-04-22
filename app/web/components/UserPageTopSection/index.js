import React from 'react';
import PropTypes from 'prop-types';

import Styles from './styles.scss'; // eslint-disable-line no-unused-vars

const UserPageTopSection = (props) => {
  return (
    <div className="cover">
      <div className="pic" style={{ backgroundImage: `url('${props.avatar}')` }} />
      <div className="handle">{props.handle}</div>
    </div>
  );
};

UserPageTopSection.propTypes = {
  avatar: PropTypes.string,
  handle: PropTypes.string.isRequired,
};

UserPageTopSection.defaultProps = {
  avatar: 'https://avatars0.githubusercontent.com/u/577342?v=4',
};

export default UserPageTopSection;
