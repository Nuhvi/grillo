import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Project = props => {
  const { projects, lists, projectId } = props;

  const listsIds = projects[projectId].lists;

  return (
    <>
      {listsIds.map(listId => {
        return <p key={listId}>{lists[listId].title}</p>;
      })}
    </>
  );
};

Project.propTypes = {
  projectId: PropTypes.string.isRequired,
  projects: PropTypes.shape({
    project: PropTypes.shape({
      title: 'first_project',
      lists: ['1'],
    }),
  }).isRequired,
  lists: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  projects: state.entities.data.projects.byId,
  lists: state.entities.data.lists.byId,
});

// const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps)(Project);
