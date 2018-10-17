/*jshint esversion: 6 */
import React from 'react';
import { connect } from 'react-redux';
import { requestProject, updateProject, deleteProject } from '../../../actions/project_actions';
import { requestTasks } from '../../../actions/task_actions';
import Project from './project';
import { openModal, closeModal } from '../../../actions/modal_actions';
// TODO: Add tasks

const mapStateToProps = ({session, entities: { users, teams, projects, tasks }}) => {
  // debugger
  return {
    currentUser: users[session.userId],
    currentTeam: teams[session.currentTeamId],
    projects,
    tasks
  };
};

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Project);
