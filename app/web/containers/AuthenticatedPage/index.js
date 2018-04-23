import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose, lifecycle } from 'recompose';

import UserPage from '../UserPage';

const authenticateOnMount = lifecycle({
  componentWillMount() {
    if (!this.props.accessToken) {
      this.props.history.replace('/login');
    }
  },
});

const mappedStateToProps = connect((state) => {
  return {
    accessToken: state.user.accessToken,
  };
});

export default compose(withRouter, mappedStateToProps, authenticateOnMount)(UserPage);
