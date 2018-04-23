import React from 'react';
import PropTypes from 'prop-types';

import Styles from './styles.scss'; // eslint-disable-line no-unused-vars

const Notification = (props) => {
  return (
    <div className={`notif-container ${props.type}`}>
      <span>{props.notif}</span>
    </div>
  );
};

Notification.propTypes = {
  notif: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['info', 'warning']),
};

Notification.defaultProps = {
  type: 'info',
};

export default Notification;
