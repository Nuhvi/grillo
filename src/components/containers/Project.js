import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { entities } from '../../redux/actions';

const { addList } = entities;

const Project = ({ allProjects, allLists, projectId, addList }) => {
  const project = allProjects[projectId];
  const listsIds = project.projectLists;

  const doSomething = e => {
    e.preventDefault();
    const title = e.target.children.title.value;
    addList(title, projectId);
  };

  return (
    <>
      <h2>{project.title}</h2>
      <form onSubmit={e => doSomething(e)}>
        <input placeholder="Title" name="title" />
        <button type="submit">Add list</button>
      </form>
      {listsIds.map(listId => {
        return <p key={listId}>{allLists[listId].title}</p>;
      })}
    </>
  );
};

Project.propTypes = {
  projectId: PropTypes.string.isRequired,
  allProjects: PropTypes.shape({
    project: PropTypes.shape({
      title: 'first_project',
      projectLists: ['1'],
    }),
  }).isRequired,
  allLists: PropTypes.shape({}).isRequired,
  addList: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  allProjects: state.entities.data.allProjects.byId,
  allLists: state.entities.data.allLists.byId,
});

export default connect(mapStateToProps, { addList })(Project);
