/*jshint esversion: 6 */
import { connect } from 'react-redux';

import { logout } from '../../../actions/session_actions';
import { requestTeams } from '../../../actions/team_actions';
import TopBar from './top_bar';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.userId]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchTeams: (currentUser) => dispatch(requestTeams(currentUser))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBar);
