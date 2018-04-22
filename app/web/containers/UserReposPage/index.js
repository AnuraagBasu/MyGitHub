import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, lifecycle } from 'recompose';

import { ActionCreators } from '../../../core/actions';

import RepoList from '../../components/RepoList';

const getReposOnMount = lifecycle({
  componentDidMount() {
    this.props.getUserRepos();
  },
});

const mapStateToProps = (state) => {
  return {
    repos: state.repos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
};

const enhance = compose(connect(mapStateToProps, mapDispatchToProps), getReposOnMount);

export default enhance(RepoList);
