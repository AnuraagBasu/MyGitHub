import React from 'react';
import PropTypes from 'prop-types';

const SmallActionButton = (props) => {
  return (
    <button className="action-btn" onClick={props.onClick}>
      <i className={`fa fa-${props.iconName}`} />
      <span className="text">{props.btnText}</span>
    </button>
  );
};

SmallActionButton.propTypes = {
  iconName: PropTypes.string,
  btnText: PropTypes.string,
  onClick: PropTypes.func,
};

SmallActionButton.defaultProps = {
  iconName: 'check',
  btnText: '',
  onClick: (event) => {
    event.stopPropagation();
  },
};

export default SmallActionButton;
