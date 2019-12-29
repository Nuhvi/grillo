import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { entities } from '../../redux/actions';

const { addList } = entities;

const Board = ({ allBoards, allLists, boardId, addList }) => {
  const board = allBoards[boardId];
  const listsIds = board.boardLists;

  const doSomething = e => {
    e.preventDefault();
    const title = e.target.children.title.value;
    addList(title, boardId);
  };

  return (
    <>
      <h2>{board.title}</h2>
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

Board.propTypes = {
  boardId: PropTypes.string.isRequired,
  allBoards: PropTypes.shape({
    board: PropTypes.shape({
      title: 'first_board',
      boardLists: ['1'],
    }),
  }).isRequired,
  allLists: PropTypes.shape({}).isRequired,
  addList: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  allBoards: state.entities.data.allBoards.byId,
  allLists: state.entities.data.allLists.byId,
});

export default connect(mapStateToProps, { addList })(Board);
